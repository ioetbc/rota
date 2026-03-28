import { PrismaNeon } from "@prisma/adapter-neon"
import { PrismaClient } from "../src/generated/prisma"

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
