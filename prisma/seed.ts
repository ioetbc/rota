import { PrismaNeon } from "@prisma/adapter-neon"
import { PrismaClient, DayOfWeek } from "../src/generated/prisma"

const connectionString = process.env.DATABASE_URL
if (!connectionString) {
	throw new Error("DATABASE_URL environment variable is not set")
}

const adapter = new PrismaNeon({ connectionString })
const prisma = new PrismaClient({ adapter })

const staffMembers = [
	{ name: "Sarah Johnson", phone: "+44 7700 900001" },
	{ name: "Tom Williams", phone: "+44 7700 900002" },
	{ name: "Emma Davis", phone: "+44 7700 900003" },
	{ name: "James Brown", phone: "+44 7700 900004" },
	{ name: "Lucy Taylor", phone: "+44 7700 900005" },
	{ name: "Mike Wilson", phone: "+44 7700 900006" },
	{ name: "Amy Clark", phone: "+44 7700 900007" },
	{ name: "Chris Martin", phone: "+44 7700 900008" },
]

const defaultRoles = ["Server", "Manager", "Host", "Chef", "Bartender"]

type ShiftTemplateData = {
	name: string
	startTime: string
	endTime: string
	minStaff: number
	days: DayOfWeek[]
	roles: { roleName: string; minCount: number }[]
}

const defaultShiftTemplates: ShiftTemplateData[] = [
	{
		name: "Busy Morning",
		startTime: "08:00",
		endTime: "11:00",
		minStaff: 5,
		days: [DayOfWeek.SATURDAY, DayOfWeek.SUNDAY],
		roles: [
			{ roleName: "Server", minCount: 4 },
			{ roleName: "Manager", minCount: 1 },
			{ roleName: "Host", minCount: 1 },
			{ roleName: "Chef", minCount: 1 },
			{ roleName: "Bartender", minCount: 1 },
		],
	},
	{
		name: "Quiet Morning",
		startTime: "08:00",
		endTime: "13:00",
		minStaff: 4,
		days: [DayOfWeek.MONDAY, DayOfWeek.TUESDAY, DayOfWeek.WEDNESDAY, DayOfWeek.THURSDAY, DayOfWeek.FRIDAY],
		roles: [
			{ roleName: "Server", minCount: 2 },
			{ roleName: "Manager", minCount: 1 },
			{ roleName: "Chef", minCount: 1 },
		],
	},
	{
		name: "Quiet Afternoon",
		startTime: "12:00",
		endTime: "17:00",
		minStaff: 7,
		days: [DayOfWeek.MONDAY, DayOfWeek.TUESDAY, DayOfWeek.WEDNESDAY, DayOfWeek.THURSDAY, DayOfWeek.FRIDAY],
		roles: [
			{ roleName: "Server", minCount: 2 },
			{ roleName: "Manager", minCount: 1 },
			{ roleName: "Chef", minCount: 2 },
			{ roleName: "Bartender", minCount: 1 },
		],
	},
	{
		name: "Busy Afternoon",
		startTime: "12:00",
		endTime: "17:00",
		minStaff: 12,
		days: [DayOfWeek.SATURDAY, DayOfWeek.SUNDAY],
		roles: [
			{ roleName: "Server", minCount: 5 },
			{ roleName: "Manager", minCount: 1 },
			{ roleName: "Host", minCount: 1 },
			{ roleName: "Chef", minCount: 3 },
			{ roleName: "Bartender", minCount: 2 },
		],
	},
	{
		name: "Busy Evening",
		startTime: "18:00",
		endTime: "00:00",
		minStaff: 13,
		days: [DayOfWeek.FRIDAY, DayOfWeek.SATURDAY, DayOfWeek.SUNDAY],
		roles: [
			{ roleName: "Server", minCount: 8 },
			{ roleName: "Manager", minCount: 2 },
			{ roleName: "Host", minCount: 2 },
			{ roleName: "Chef", minCount: 4 },
			{ roleName: "Bartender", minCount: 3 },
		],
	},
	{
		name: "Quiet Evening",
		startTime: "17:00",
		endTime: "00:00",
		minStaff: 1,
		days: [DayOfWeek.MONDAY, DayOfWeek.TUESDAY, DayOfWeek.WEDNESDAY, DayOfWeek.THURSDAY],
		roles: [
			{ roleName: "Server", minCount: 4 },
			{ roleName: "Manager", minCount: 1 },
			{ roleName: "Host", minCount: 1 },
			{ roleName: "Chef", minCount: 3 },
			{ roleName: "Bartender", minCount: 2 },
		],
	},
]

async function main() {
	console.log("Seeding database...")

	for (const staff of staffMembers) {
		const id = staff.name.toLowerCase().replace(/\s/g, "-")
		await prisma.staff.upsert({
			where: { id },
			update: {},
			create: {
				id,
				name: staff.name,
				phone: staff.phone,
			},
		})
		console.log(`Created staff: ${staff.name}`)
	}

	console.log("Seeding default roles...")
	const roleMap = new Map<string, string>()
	for (const roleName of defaultRoles) {
		const role = await prisma.role.upsert({
			where: { name: roleName },
			update: {},
			create: { name: roleName },
		})
		roleMap.set(roleName, role.id)
		console.log(`Created role: ${roleName}`)
	}

	console.log("Seeding default shift templates...")
	for (const template of defaultShiftTemplates) {
		// Check if shift template already exists by name
		const existing = await prisma.shiftTemplate.findFirst({
			where: { name: template.name },
		})

		if (existing) {
			console.log(`Shift template already exists: ${template.name}`)
			continue
		}

		await prisma.shiftTemplate.create({
			data: {
				name: template.name,
				startTime: template.startTime,
				endTime: template.endTime,
				minStaff: template.minStaff,
				days: {
					create: template.days.map((day) => ({ day })),
				},
				roles: {
					create: template.roles.map((role) => ({
						roleId: roleMap.get(role.roleName)!,
						minCount: role.minCount,
					})),
				},
			},
		})
		console.log(`Created shift template: ${template.name}`)
	}

	console.log("Seeding complete!")
}

main()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
