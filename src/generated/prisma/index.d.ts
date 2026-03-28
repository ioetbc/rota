
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model AvailabilitySubmission
 * 
 */
export type AvailabilitySubmission = $Result.DefaultSelection<Prisma.$AvailabilitySubmissionPayload>
/**
 * Model AvailabilitySlot
 * 
 */
export type AvailabilitySlot = $Result.DefaultSelection<Prisma.$AvailabilitySlotPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model ShiftTemplate
 * 
 */
export type ShiftTemplate = $Result.DefaultSelection<Prisma.$ShiftTemplatePayload>
/**
 * Model ShiftTemplateDay
 * 
 */
export type ShiftTemplateDay = $Result.DefaultSelection<Prisma.$ShiftTemplateDayPayload>
/**
 * Model ShiftTemplateRole
 * 
 */
export type ShiftTemplateRole = $Result.DefaultSelection<Prisma.$ShiftTemplateRolePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ShiftType: {
  MORNING: 'MORNING',
  AFTERNOON: 'AFTERNOON',
  EVENING: 'EVENING'
};

export type ShiftType = (typeof ShiftType)[keyof typeof ShiftType]


export const DayOfWeek: {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY'
};

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek]

}

export type ShiftType = $Enums.ShiftType

export const ShiftType: typeof $Enums.ShiftType

export type DayOfWeek = $Enums.DayOfWeek

export const DayOfWeek: typeof $Enums.DayOfWeek

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Staff
 * const staff = await prisma.staff.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Staff
   * const staff = await prisma.staff.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availabilitySubmission`: Exposes CRUD operations for the **AvailabilitySubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailabilitySubmissions
    * const availabilitySubmissions = await prisma.availabilitySubmission.findMany()
    * ```
    */
  get availabilitySubmission(): Prisma.AvailabilitySubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availabilitySlot`: Exposes CRUD operations for the **AvailabilitySlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailabilitySlots
    * const availabilitySlots = await prisma.availabilitySlot.findMany()
    * ```
    */
  get availabilitySlot(): Prisma.AvailabilitySlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shiftTemplate`: Exposes CRUD operations for the **ShiftTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShiftTemplates
    * const shiftTemplates = await prisma.shiftTemplate.findMany()
    * ```
    */
  get shiftTemplate(): Prisma.ShiftTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shiftTemplateDay`: Exposes CRUD operations for the **ShiftTemplateDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShiftTemplateDays
    * const shiftTemplateDays = await prisma.shiftTemplateDay.findMany()
    * ```
    */
  get shiftTemplateDay(): Prisma.ShiftTemplateDayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shiftTemplateRole`: Exposes CRUD operations for the **ShiftTemplateRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShiftTemplateRoles
    * const shiftTemplateRoles = await prisma.shiftTemplateRole.findMany()
    * ```
    */
  get shiftTemplateRole(): Prisma.ShiftTemplateRoleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Staff: 'Staff',
    AvailabilitySubmission: 'AvailabilitySubmission',
    AvailabilitySlot: 'AvailabilitySlot',
    Role: 'Role',
    ShiftTemplate: 'ShiftTemplate',
    ShiftTemplateDay: 'ShiftTemplateDay',
    ShiftTemplateRole: 'ShiftTemplateRole'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "staff" | "availabilitySubmission" | "availabilitySlot" | "role" | "shiftTemplate" | "shiftTemplateDay" | "shiftTemplateRole"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      AvailabilitySubmission: {
        payload: Prisma.$AvailabilitySubmissionPayload<ExtArgs>
        fields: Prisma.AvailabilitySubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilitySubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilitySubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySubmissionPayload>
          }
          findFirst: {
            args: Prisma.AvailabilitySubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilitySubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySubmissionPayload>
          }
          findMany: {
            args: Prisma.AvailabilitySubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySubmissionPayload>[]
          }
          create: {
            args: Prisma.AvailabilitySubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySubmissionPayload>
          }
          createMany: {
            args: Prisma.AvailabilitySubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilitySubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySubmissionPayload>[]
          }
          delete: {
            args: Prisma.AvailabilitySubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySubmissionPayload>
          }
          update: {
            args: Prisma.AvailabilitySubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySubmissionPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilitySubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilitySubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilitySubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySubmissionPayload>[]
          }
          upsert: {
            args: Prisma.AvailabilitySubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySubmissionPayload>
          }
          aggregate: {
            args: Prisma.AvailabilitySubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailabilitySubmission>
          }
          groupBy: {
            args: Prisma.AvailabilitySubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilitySubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilitySubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilitySubmissionCountAggregateOutputType> | number
          }
        }
      }
      AvailabilitySlot: {
        payload: Prisma.$AvailabilitySlotPayload<ExtArgs>
        fields: Prisma.AvailabilitySlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilitySlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilitySlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          findFirst: {
            args: Prisma.AvailabilitySlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilitySlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          findMany: {
            args: Prisma.AvailabilitySlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>[]
          }
          create: {
            args: Prisma.AvailabilitySlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          createMany: {
            args: Prisma.AvailabilitySlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilitySlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>[]
          }
          delete: {
            args: Prisma.AvailabilitySlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          update: {
            args: Prisma.AvailabilitySlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilitySlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilitySlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilitySlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>[]
          }
          upsert: {
            args: Prisma.AvailabilitySlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          aggregate: {
            args: Prisma.AvailabilitySlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailabilitySlot>
          }
          groupBy: {
            args: Prisma.AvailabilitySlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilitySlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilitySlotCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilitySlotCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      ShiftTemplate: {
        payload: Prisma.$ShiftTemplatePayload<ExtArgs>
        fields: Prisma.ShiftTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>
          }
          findFirst: {
            args: Prisma.ShiftTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>
          }
          findMany: {
            args: Prisma.ShiftTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>[]
          }
          create: {
            args: Prisma.ShiftTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>
          }
          createMany: {
            args: Prisma.ShiftTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShiftTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>[]
          }
          delete: {
            args: Prisma.ShiftTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>
          }
          update: {
            args: Prisma.ShiftTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>
          }
          deleteMany: {
            args: Prisma.ShiftTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShiftTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>[]
          }
          upsert: {
            args: Prisma.ShiftTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>
          }
          aggregate: {
            args: Prisma.ShiftTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShiftTemplate>
          }
          groupBy: {
            args: Prisma.ShiftTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftTemplateCountAggregateOutputType> | number
          }
        }
      }
      ShiftTemplateDay: {
        payload: Prisma.$ShiftTemplateDayPayload<ExtArgs>
        fields: Prisma.ShiftTemplateDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftTemplateDayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftTemplateDayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateDayPayload>
          }
          findFirst: {
            args: Prisma.ShiftTemplateDayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftTemplateDayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateDayPayload>
          }
          findMany: {
            args: Prisma.ShiftTemplateDayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateDayPayload>[]
          }
          create: {
            args: Prisma.ShiftTemplateDayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateDayPayload>
          }
          createMany: {
            args: Prisma.ShiftTemplateDayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShiftTemplateDayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateDayPayload>[]
          }
          delete: {
            args: Prisma.ShiftTemplateDayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateDayPayload>
          }
          update: {
            args: Prisma.ShiftTemplateDayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateDayPayload>
          }
          deleteMany: {
            args: Prisma.ShiftTemplateDayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftTemplateDayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShiftTemplateDayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateDayPayload>[]
          }
          upsert: {
            args: Prisma.ShiftTemplateDayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateDayPayload>
          }
          aggregate: {
            args: Prisma.ShiftTemplateDayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShiftTemplateDay>
          }
          groupBy: {
            args: Prisma.ShiftTemplateDayGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftTemplateDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftTemplateDayCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftTemplateDayCountAggregateOutputType> | number
          }
        }
      }
      ShiftTemplateRole: {
        payload: Prisma.$ShiftTemplateRolePayload<ExtArgs>
        fields: Prisma.ShiftTemplateRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftTemplateRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftTemplateRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRolePayload>
          }
          findFirst: {
            args: Prisma.ShiftTemplateRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftTemplateRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRolePayload>
          }
          findMany: {
            args: Prisma.ShiftTemplateRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRolePayload>[]
          }
          create: {
            args: Prisma.ShiftTemplateRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRolePayload>
          }
          createMany: {
            args: Prisma.ShiftTemplateRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShiftTemplateRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRolePayload>[]
          }
          delete: {
            args: Prisma.ShiftTemplateRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRolePayload>
          }
          update: {
            args: Prisma.ShiftTemplateRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRolePayload>
          }
          deleteMany: {
            args: Prisma.ShiftTemplateRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftTemplateRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShiftTemplateRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRolePayload>[]
          }
          upsert: {
            args: Prisma.ShiftTemplateRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftTemplateRolePayload>
          }
          aggregate: {
            args: Prisma.ShiftTemplateRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShiftTemplateRole>
          }
          groupBy: {
            args: Prisma.ShiftTemplateRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftTemplateRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftTemplateRoleCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftTemplateRoleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    staff?: StaffOmit
    availabilitySubmission?: AvailabilitySubmissionOmit
    availabilitySlot?: AvailabilitySlotOmit
    role?: RoleOmit
    shiftTemplate?: ShiftTemplateOmit
    shiftTemplateDay?: ShiftTemplateDayOmit
    shiftTemplateRole?: ShiftTemplateRoleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    submissions: number
    slots: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | StaffCountOutputTypeCountSubmissionsArgs
    slots?: boolean | StaffCountOutputTypeCountSlotsArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilitySubmissionWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilitySlotWhereInput
  }


  /**
   * Count Type AvailabilitySubmissionCountOutputType
   */

  export type AvailabilitySubmissionCountOutputType = {
    slots: number
  }

  export type AvailabilitySubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slots?: boolean | AvailabilitySubmissionCountOutputTypeCountSlotsArgs
  }

  // Custom InputTypes
  /**
   * AvailabilitySubmissionCountOutputType without action
   */
  export type AvailabilitySubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySubmissionCountOutputType
     */
    select?: AvailabilitySubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailabilitySubmissionCountOutputType without action
   */
  export type AvailabilitySubmissionCountOutputTypeCountSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilitySlotWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    shiftTemplateRoles: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shiftTemplateRoles?: boolean | RoleCountOutputTypeCountShiftTemplateRolesArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountShiftTemplateRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftTemplateRoleWhereInput
  }


  /**
   * Count Type ShiftTemplateCountOutputType
   */

  export type ShiftTemplateCountOutputType = {
    days: number
    roles: number
  }

  export type ShiftTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    days?: boolean | ShiftTemplateCountOutputTypeCountDaysArgs
    roles?: boolean | ShiftTemplateCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * ShiftTemplateCountOutputType without action
   */
  export type ShiftTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateCountOutputType
     */
    select?: ShiftTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShiftTemplateCountOutputType without action
   */
  export type ShiftTemplateCountOutputTypeCountDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftTemplateDayWhereInput
  }

  /**
   * ShiftTemplateCountOutputType without action
   */
  export type ShiftTemplateCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftTemplateRoleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type StaffMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    createdAt: number
    _all: number
  }


  export type StaffMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    createdAt?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    createdAt?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    createdAt?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: string
    name: string
    phone: string
    createdAt: Date
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
    submissions?: boolean | Staff$submissionsArgs<ExtArgs>
    slots?: boolean | Staff$slotsArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "createdAt", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | Staff$submissionsArgs<ExtArgs>
    slots?: boolean | Staff$slotsArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      submissions: Prisma.$AvailabilitySubmissionPayload<ExtArgs>[]
      slots: Prisma.$AvailabilitySlotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      createdAt: Date
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {StaffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {StaffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends Staff$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Staff$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    slots<T extends Staff$slotsArgs<ExtArgs> = {}>(args?: Subset<T, Staff$slotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Staff model
   */
  interface StaffFieldRefs {
    readonly id: FieldRef<"Staff", 'String'>
    readonly name: FieldRef<"Staff", 'String'>
    readonly phone: FieldRef<"Staff", 'String'>
    readonly createdAt: FieldRef<"Staff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff createManyAndReturn
   */
  export type StaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff updateManyAndReturn
   */
  export type StaffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to delete.
     */
    limit?: number
  }

  /**
   * Staff.submissions
   */
  export type Staff$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySubmission
     */
    select?: AvailabilitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySubmission
     */
    omit?: AvailabilitySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySubmissionInclude<ExtArgs> | null
    where?: AvailabilitySubmissionWhereInput
    orderBy?: AvailabilitySubmissionOrderByWithRelationInput | AvailabilitySubmissionOrderByWithRelationInput[]
    cursor?: AvailabilitySubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilitySubmissionScalarFieldEnum | AvailabilitySubmissionScalarFieldEnum[]
  }

  /**
   * Staff.slots
   */
  export type Staff$slotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    where?: AvailabilitySlotWhereInput
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    cursor?: AvailabilitySlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilitySlotScalarFieldEnum | AvailabilitySlotScalarFieldEnum[]
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Model AvailabilitySubmission
   */

  export type AggregateAvailabilitySubmission = {
    _count: AvailabilitySubmissionCountAggregateOutputType | null
    _min: AvailabilitySubmissionMinAggregateOutputType | null
    _max: AvailabilitySubmissionMaxAggregateOutputType | null
  }

  export type AvailabilitySubmissionMinAggregateOutputType = {
    id: string | null
    staffId: string | null
    weekStart: Date | null
    rawText: string | null
    createdAt: Date | null
  }

  export type AvailabilitySubmissionMaxAggregateOutputType = {
    id: string | null
    staffId: string | null
    weekStart: Date | null
    rawText: string | null
    createdAt: Date | null
  }

  export type AvailabilitySubmissionCountAggregateOutputType = {
    id: number
    staffId: number
    weekStart: number
    rawText: number
    createdAt: number
    _all: number
  }


  export type AvailabilitySubmissionMinAggregateInputType = {
    id?: true
    staffId?: true
    weekStart?: true
    rawText?: true
    createdAt?: true
  }

  export type AvailabilitySubmissionMaxAggregateInputType = {
    id?: true
    staffId?: true
    weekStart?: true
    rawText?: true
    createdAt?: true
  }

  export type AvailabilitySubmissionCountAggregateInputType = {
    id?: true
    staffId?: true
    weekStart?: true
    rawText?: true
    createdAt?: true
    _all?: true
  }

  export type AvailabilitySubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilitySubmission to aggregate.
     */
    where?: AvailabilitySubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySubmissions to fetch.
     */
    orderBy?: AvailabilitySubmissionOrderByWithRelationInput | AvailabilitySubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilitySubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailabilitySubmissions
    **/
    _count?: true | AvailabilitySubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilitySubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilitySubmissionMaxAggregateInputType
  }

  export type GetAvailabilitySubmissionAggregateType<T extends AvailabilitySubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailabilitySubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailabilitySubmission[P]>
      : GetScalarType<T[P], AggregateAvailabilitySubmission[P]>
  }




  export type AvailabilitySubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilitySubmissionWhereInput
    orderBy?: AvailabilitySubmissionOrderByWithAggregationInput | AvailabilitySubmissionOrderByWithAggregationInput[]
    by: AvailabilitySubmissionScalarFieldEnum[] | AvailabilitySubmissionScalarFieldEnum
    having?: AvailabilitySubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilitySubmissionCountAggregateInputType | true
    _min?: AvailabilitySubmissionMinAggregateInputType
    _max?: AvailabilitySubmissionMaxAggregateInputType
  }

  export type AvailabilitySubmissionGroupByOutputType = {
    id: string
    staffId: string
    weekStart: Date
    rawText: string
    createdAt: Date
    _count: AvailabilitySubmissionCountAggregateOutputType | null
    _min: AvailabilitySubmissionMinAggregateOutputType | null
    _max: AvailabilitySubmissionMaxAggregateOutputType | null
  }

  type GetAvailabilitySubmissionGroupByPayload<T extends AvailabilitySubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilitySubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilitySubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilitySubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilitySubmissionGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilitySubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    weekStart?: boolean
    rawText?: boolean
    createdAt?: boolean
    staff?: boolean | StaffDefaultArgs<ExtArgs>
    slots?: boolean | AvailabilitySubmission$slotsArgs<ExtArgs>
    _count?: boolean | AvailabilitySubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilitySubmission"]>

  export type AvailabilitySubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    weekStart?: boolean
    rawText?: boolean
    createdAt?: boolean
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilitySubmission"]>

  export type AvailabilitySubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    weekStart?: boolean
    rawText?: boolean
    createdAt?: boolean
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilitySubmission"]>

  export type AvailabilitySubmissionSelectScalar = {
    id?: boolean
    staffId?: boolean
    weekStart?: boolean
    rawText?: boolean
    createdAt?: boolean
  }

  export type AvailabilitySubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "staffId" | "weekStart" | "rawText" | "createdAt", ExtArgs["result"]["availabilitySubmission"]>
  export type AvailabilitySubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | StaffDefaultArgs<ExtArgs>
    slots?: boolean | AvailabilitySubmission$slotsArgs<ExtArgs>
    _count?: boolean | AvailabilitySubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailabilitySubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }
  export type AvailabilitySubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }

  export type $AvailabilitySubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailabilitySubmission"
    objects: {
      staff: Prisma.$StaffPayload<ExtArgs>
      slots: Prisma.$AvailabilitySlotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      staffId: string
      weekStart: Date
      rawText: string
      createdAt: Date
    }, ExtArgs["result"]["availabilitySubmission"]>
    composites: {}
  }

  type AvailabilitySubmissionGetPayload<S extends boolean | null | undefined | AvailabilitySubmissionDefaultArgs> = $Result.GetResult<Prisma.$AvailabilitySubmissionPayload, S>

  type AvailabilitySubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilitySubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilitySubmissionCountAggregateInputType | true
    }

  export interface AvailabilitySubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailabilitySubmission'], meta: { name: 'AvailabilitySubmission' } }
    /**
     * Find zero or one AvailabilitySubmission that matches the filter.
     * @param {AvailabilitySubmissionFindUniqueArgs} args - Arguments to find a AvailabilitySubmission
     * @example
     * // Get one AvailabilitySubmission
     * const availabilitySubmission = await prisma.availabilitySubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilitySubmissionFindUniqueArgs>(args: SelectSubset<T, AvailabilitySubmissionFindUniqueArgs<ExtArgs>>): Prisma__AvailabilitySubmissionClient<$Result.GetResult<Prisma.$AvailabilitySubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailabilitySubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilitySubmissionFindUniqueOrThrowArgs} args - Arguments to find a AvailabilitySubmission
     * @example
     * // Get one AvailabilitySubmission
     * const availabilitySubmission = await prisma.availabilitySubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilitySubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilitySubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilitySubmissionClient<$Result.GetResult<Prisma.$AvailabilitySubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailabilitySubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySubmissionFindFirstArgs} args - Arguments to find a AvailabilitySubmission
     * @example
     * // Get one AvailabilitySubmission
     * const availabilitySubmission = await prisma.availabilitySubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilitySubmissionFindFirstArgs>(args?: SelectSubset<T, AvailabilitySubmissionFindFirstArgs<ExtArgs>>): Prisma__AvailabilitySubmissionClient<$Result.GetResult<Prisma.$AvailabilitySubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailabilitySubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySubmissionFindFirstOrThrowArgs} args - Arguments to find a AvailabilitySubmission
     * @example
     * // Get one AvailabilitySubmission
     * const availabilitySubmission = await prisma.availabilitySubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilitySubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilitySubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilitySubmissionClient<$Result.GetResult<Prisma.$AvailabilitySubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailabilitySubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailabilitySubmissions
     * const availabilitySubmissions = await prisma.availabilitySubmission.findMany()
     * 
     * // Get first 10 AvailabilitySubmissions
     * const availabilitySubmissions = await prisma.availabilitySubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilitySubmissionWithIdOnly = await prisma.availabilitySubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilitySubmissionFindManyArgs>(args?: SelectSubset<T, AvailabilitySubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailabilitySubmission.
     * @param {AvailabilitySubmissionCreateArgs} args - Arguments to create a AvailabilitySubmission.
     * @example
     * // Create one AvailabilitySubmission
     * const AvailabilitySubmission = await prisma.availabilitySubmission.create({
     *   data: {
     *     // ... data to create a AvailabilitySubmission
     *   }
     * })
     * 
     */
    create<T extends AvailabilitySubmissionCreateArgs>(args: SelectSubset<T, AvailabilitySubmissionCreateArgs<ExtArgs>>): Prisma__AvailabilitySubmissionClient<$Result.GetResult<Prisma.$AvailabilitySubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailabilitySubmissions.
     * @param {AvailabilitySubmissionCreateManyArgs} args - Arguments to create many AvailabilitySubmissions.
     * @example
     * // Create many AvailabilitySubmissions
     * const availabilitySubmission = await prisma.availabilitySubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilitySubmissionCreateManyArgs>(args?: SelectSubset<T, AvailabilitySubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailabilitySubmissions and returns the data saved in the database.
     * @param {AvailabilitySubmissionCreateManyAndReturnArgs} args - Arguments to create many AvailabilitySubmissions.
     * @example
     * // Create many AvailabilitySubmissions
     * const availabilitySubmission = await prisma.availabilitySubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailabilitySubmissions and only return the `id`
     * const availabilitySubmissionWithIdOnly = await prisma.availabilitySubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilitySubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilitySubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailabilitySubmission.
     * @param {AvailabilitySubmissionDeleteArgs} args - Arguments to delete one AvailabilitySubmission.
     * @example
     * // Delete one AvailabilitySubmission
     * const AvailabilitySubmission = await prisma.availabilitySubmission.delete({
     *   where: {
     *     // ... filter to delete one AvailabilitySubmission
     *   }
     * })
     * 
     */
    delete<T extends AvailabilitySubmissionDeleteArgs>(args: SelectSubset<T, AvailabilitySubmissionDeleteArgs<ExtArgs>>): Prisma__AvailabilitySubmissionClient<$Result.GetResult<Prisma.$AvailabilitySubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailabilitySubmission.
     * @param {AvailabilitySubmissionUpdateArgs} args - Arguments to update one AvailabilitySubmission.
     * @example
     * // Update one AvailabilitySubmission
     * const availabilitySubmission = await prisma.availabilitySubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilitySubmissionUpdateArgs>(args: SelectSubset<T, AvailabilitySubmissionUpdateArgs<ExtArgs>>): Prisma__AvailabilitySubmissionClient<$Result.GetResult<Prisma.$AvailabilitySubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailabilitySubmissions.
     * @param {AvailabilitySubmissionDeleteManyArgs} args - Arguments to filter AvailabilitySubmissions to delete.
     * @example
     * // Delete a few AvailabilitySubmissions
     * const { count } = await prisma.availabilitySubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilitySubmissionDeleteManyArgs>(args?: SelectSubset<T, AvailabilitySubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilitySubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailabilitySubmissions
     * const availabilitySubmission = await prisma.availabilitySubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilitySubmissionUpdateManyArgs>(args: SelectSubset<T, AvailabilitySubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilitySubmissions and returns the data updated in the database.
     * @param {AvailabilitySubmissionUpdateManyAndReturnArgs} args - Arguments to update many AvailabilitySubmissions.
     * @example
     * // Update many AvailabilitySubmissions
     * const availabilitySubmission = await prisma.availabilitySubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailabilitySubmissions and only return the `id`
     * const availabilitySubmissionWithIdOnly = await prisma.availabilitySubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailabilitySubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilitySubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailabilitySubmission.
     * @param {AvailabilitySubmissionUpsertArgs} args - Arguments to update or create a AvailabilitySubmission.
     * @example
     * // Update or create a AvailabilitySubmission
     * const availabilitySubmission = await prisma.availabilitySubmission.upsert({
     *   create: {
     *     // ... data to create a AvailabilitySubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailabilitySubmission we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilitySubmissionUpsertArgs>(args: SelectSubset<T, AvailabilitySubmissionUpsertArgs<ExtArgs>>): Prisma__AvailabilitySubmissionClient<$Result.GetResult<Prisma.$AvailabilitySubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailabilitySubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySubmissionCountArgs} args - Arguments to filter AvailabilitySubmissions to count.
     * @example
     * // Count the number of AvailabilitySubmissions
     * const count = await prisma.availabilitySubmission.count({
     *   where: {
     *     // ... the filter for the AvailabilitySubmissions we want to count
     *   }
     * })
    **/
    count<T extends AvailabilitySubmissionCountArgs>(
      args?: Subset<T, AvailabilitySubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilitySubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailabilitySubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailabilitySubmissionAggregateArgs>(args: Subset<T, AvailabilitySubmissionAggregateArgs>): Prisma.PrismaPromise<GetAvailabilitySubmissionAggregateType<T>>

    /**
     * Group by AvailabilitySubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailabilitySubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilitySubmissionGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilitySubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailabilitySubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilitySubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailabilitySubmission model
   */
  readonly fields: AvailabilitySubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailabilitySubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilitySubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends StaffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaffDefaultArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    slots<T extends AvailabilitySubmission$slotsArgs<ExtArgs> = {}>(args?: Subset<T, AvailabilitySubmission$slotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AvailabilitySubmission model
   */
  interface AvailabilitySubmissionFieldRefs {
    readonly id: FieldRef<"AvailabilitySubmission", 'String'>
    readonly staffId: FieldRef<"AvailabilitySubmission", 'String'>
    readonly weekStart: FieldRef<"AvailabilitySubmission", 'DateTime'>
    readonly rawText: FieldRef<"AvailabilitySubmission", 'String'>
    readonly createdAt: FieldRef<"AvailabilitySubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AvailabilitySubmission findUnique
   */
  export type AvailabilitySubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySubmission
     */
    select?: AvailabilitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySubmission
     */
    omit?: AvailabilitySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySubmissionInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySubmission to fetch.
     */
    where: AvailabilitySubmissionWhereUniqueInput
  }

  /**
   * AvailabilitySubmission findUniqueOrThrow
   */
  export type AvailabilitySubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySubmission
     */
    select?: AvailabilitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySubmission
     */
    omit?: AvailabilitySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySubmissionInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySubmission to fetch.
     */
    where: AvailabilitySubmissionWhereUniqueInput
  }

  /**
   * AvailabilitySubmission findFirst
   */
  export type AvailabilitySubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySubmission
     */
    select?: AvailabilitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySubmission
     */
    omit?: AvailabilitySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySubmissionInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySubmission to fetch.
     */
    where?: AvailabilitySubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySubmissions to fetch.
     */
    orderBy?: AvailabilitySubmissionOrderByWithRelationInput | AvailabilitySubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilitySubmissions.
     */
    cursor?: AvailabilitySubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilitySubmissions.
     */
    distinct?: AvailabilitySubmissionScalarFieldEnum | AvailabilitySubmissionScalarFieldEnum[]
  }

  /**
   * AvailabilitySubmission findFirstOrThrow
   */
  export type AvailabilitySubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySubmission
     */
    select?: AvailabilitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySubmission
     */
    omit?: AvailabilitySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySubmissionInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySubmission to fetch.
     */
    where?: AvailabilitySubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySubmissions to fetch.
     */
    orderBy?: AvailabilitySubmissionOrderByWithRelationInput | AvailabilitySubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilitySubmissions.
     */
    cursor?: AvailabilitySubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilitySubmissions.
     */
    distinct?: AvailabilitySubmissionScalarFieldEnum | AvailabilitySubmissionScalarFieldEnum[]
  }

  /**
   * AvailabilitySubmission findMany
   */
  export type AvailabilitySubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySubmission
     */
    select?: AvailabilitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySubmission
     */
    omit?: AvailabilitySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySubmissionInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySubmissions to fetch.
     */
    where?: AvailabilitySubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySubmissions to fetch.
     */
    orderBy?: AvailabilitySubmissionOrderByWithRelationInput | AvailabilitySubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailabilitySubmissions.
     */
    cursor?: AvailabilitySubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilitySubmissions.
     */
    distinct?: AvailabilitySubmissionScalarFieldEnum | AvailabilitySubmissionScalarFieldEnum[]
  }

  /**
   * AvailabilitySubmission create
   */
  export type AvailabilitySubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySubmission
     */
    select?: AvailabilitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySubmission
     */
    omit?: AvailabilitySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailabilitySubmission.
     */
    data: XOR<AvailabilitySubmissionCreateInput, AvailabilitySubmissionUncheckedCreateInput>
  }

  /**
   * AvailabilitySubmission createMany
   */
  export type AvailabilitySubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailabilitySubmissions.
     */
    data: AvailabilitySubmissionCreateManyInput | AvailabilitySubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailabilitySubmission createManyAndReturn
   */
  export type AvailabilitySubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySubmission
     */
    select?: AvailabilitySubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySubmission
     */
    omit?: AvailabilitySubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many AvailabilitySubmissions.
     */
    data: AvailabilitySubmissionCreateManyInput | AvailabilitySubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailabilitySubmission update
   */
  export type AvailabilitySubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySubmission
     */
    select?: AvailabilitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySubmission
     */
    omit?: AvailabilitySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailabilitySubmission.
     */
    data: XOR<AvailabilitySubmissionUpdateInput, AvailabilitySubmissionUncheckedUpdateInput>
    /**
     * Choose, which AvailabilitySubmission to update.
     */
    where: AvailabilitySubmissionWhereUniqueInput
  }

  /**
   * AvailabilitySubmission updateMany
   */
  export type AvailabilitySubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailabilitySubmissions.
     */
    data: XOR<AvailabilitySubmissionUpdateManyMutationInput, AvailabilitySubmissionUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilitySubmissions to update
     */
    where?: AvailabilitySubmissionWhereInput
    /**
     * Limit how many AvailabilitySubmissions to update.
     */
    limit?: number
  }

  /**
   * AvailabilitySubmission updateManyAndReturn
   */
  export type AvailabilitySubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySubmission
     */
    select?: AvailabilitySubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySubmission
     */
    omit?: AvailabilitySubmissionOmit<ExtArgs> | null
    /**
     * The data used to update AvailabilitySubmissions.
     */
    data: XOR<AvailabilitySubmissionUpdateManyMutationInput, AvailabilitySubmissionUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilitySubmissions to update
     */
    where?: AvailabilitySubmissionWhereInput
    /**
     * Limit how many AvailabilitySubmissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailabilitySubmission upsert
   */
  export type AvailabilitySubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySubmission
     */
    select?: AvailabilitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySubmission
     */
    omit?: AvailabilitySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailabilitySubmission to update in case it exists.
     */
    where: AvailabilitySubmissionWhereUniqueInput
    /**
     * In case the AvailabilitySubmission found by the `where` argument doesn't exist, create a new AvailabilitySubmission with this data.
     */
    create: XOR<AvailabilitySubmissionCreateInput, AvailabilitySubmissionUncheckedCreateInput>
    /**
     * In case the AvailabilitySubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilitySubmissionUpdateInput, AvailabilitySubmissionUncheckedUpdateInput>
  }

  /**
   * AvailabilitySubmission delete
   */
  export type AvailabilitySubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySubmission
     */
    select?: AvailabilitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySubmission
     */
    omit?: AvailabilitySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySubmissionInclude<ExtArgs> | null
    /**
     * Filter which AvailabilitySubmission to delete.
     */
    where: AvailabilitySubmissionWhereUniqueInput
  }

  /**
   * AvailabilitySubmission deleteMany
   */
  export type AvailabilitySubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilitySubmissions to delete
     */
    where?: AvailabilitySubmissionWhereInput
    /**
     * Limit how many AvailabilitySubmissions to delete.
     */
    limit?: number
  }

  /**
   * AvailabilitySubmission.slots
   */
  export type AvailabilitySubmission$slotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    where?: AvailabilitySlotWhereInput
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    cursor?: AvailabilitySlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilitySlotScalarFieldEnum | AvailabilitySlotScalarFieldEnum[]
  }

  /**
   * AvailabilitySubmission without action
   */
  export type AvailabilitySubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySubmission
     */
    select?: AvailabilitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySubmission
     */
    omit?: AvailabilitySubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySubmissionInclude<ExtArgs> | null
  }


  /**
   * Model AvailabilitySlot
   */

  export type AggregateAvailabilitySlot = {
    _count: AvailabilitySlotCountAggregateOutputType | null
    _min: AvailabilitySlotMinAggregateOutputType | null
    _max: AvailabilitySlotMaxAggregateOutputType | null
  }

  export type AvailabilitySlotMinAggregateOutputType = {
    id: string | null
    submissionId: string | null
    staffId: string | null
    date: Date | null
    shift: $Enums.ShiftType | null
    available: boolean | null
    aiReasoning: string | null
    wasEdited: boolean | null
  }

  export type AvailabilitySlotMaxAggregateOutputType = {
    id: string | null
    submissionId: string | null
    staffId: string | null
    date: Date | null
    shift: $Enums.ShiftType | null
    available: boolean | null
    aiReasoning: string | null
    wasEdited: boolean | null
  }

  export type AvailabilitySlotCountAggregateOutputType = {
    id: number
    submissionId: number
    staffId: number
    date: number
    shift: number
    available: number
    aiReasoning: number
    wasEdited: number
    _all: number
  }


  export type AvailabilitySlotMinAggregateInputType = {
    id?: true
    submissionId?: true
    staffId?: true
    date?: true
    shift?: true
    available?: true
    aiReasoning?: true
    wasEdited?: true
  }

  export type AvailabilitySlotMaxAggregateInputType = {
    id?: true
    submissionId?: true
    staffId?: true
    date?: true
    shift?: true
    available?: true
    aiReasoning?: true
    wasEdited?: true
  }

  export type AvailabilitySlotCountAggregateInputType = {
    id?: true
    submissionId?: true
    staffId?: true
    date?: true
    shift?: true
    available?: true
    aiReasoning?: true
    wasEdited?: true
    _all?: true
  }

  export type AvailabilitySlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilitySlot to aggregate.
     */
    where?: AvailabilitySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySlots to fetch.
     */
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilitySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailabilitySlots
    **/
    _count?: true | AvailabilitySlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilitySlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilitySlotMaxAggregateInputType
  }

  export type GetAvailabilitySlotAggregateType<T extends AvailabilitySlotAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailabilitySlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailabilitySlot[P]>
      : GetScalarType<T[P], AggregateAvailabilitySlot[P]>
  }




  export type AvailabilitySlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilitySlotWhereInput
    orderBy?: AvailabilitySlotOrderByWithAggregationInput | AvailabilitySlotOrderByWithAggregationInput[]
    by: AvailabilitySlotScalarFieldEnum[] | AvailabilitySlotScalarFieldEnum
    having?: AvailabilitySlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilitySlotCountAggregateInputType | true
    _min?: AvailabilitySlotMinAggregateInputType
    _max?: AvailabilitySlotMaxAggregateInputType
  }

  export type AvailabilitySlotGroupByOutputType = {
    id: string
    submissionId: string
    staffId: string
    date: Date
    shift: $Enums.ShiftType
    available: boolean
    aiReasoning: string | null
    wasEdited: boolean
    _count: AvailabilitySlotCountAggregateOutputType | null
    _min: AvailabilitySlotMinAggregateOutputType | null
    _max: AvailabilitySlotMaxAggregateOutputType | null
  }

  type GetAvailabilitySlotGroupByPayload<T extends AvailabilitySlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilitySlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilitySlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilitySlotGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilitySlotGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilitySlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    staffId?: boolean
    date?: boolean
    shift?: boolean
    available?: boolean
    aiReasoning?: boolean
    wasEdited?: boolean
    submission?: boolean | AvailabilitySubmissionDefaultArgs<ExtArgs>
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilitySlot"]>

  export type AvailabilitySlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    staffId?: boolean
    date?: boolean
    shift?: boolean
    available?: boolean
    aiReasoning?: boolean
    wasEdited?: boolean
    submission?: boolean | AvailabilitySubmissionDefaultArgs<ExtArgs>
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilitySlot"]>

  export type AvailabilitySlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    staffId?: boolean
    date?: boolean
    shift?: boolean
    available?: boolean
    aiReasoning?: boolean
    wasEdited?: boolean
    submission?: boolean | AvailabilitySubmissionDefaultArgs<ExtArgs>
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilitySlot"]>

  export type AvailabilitySlotSelectScalar = {
    id?: boolean
    submissionId?: boolean
    staffId?: boolean
    date?: boolean
    shift?: boolean
    available?: boolean
    aiReasoning?: boolean
    wasEdited?: boolean
  }

  export type AvailabilitySlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submissionId" | "staffId" | "date" | "shift" | "available" | "aiReasoning" | "wasEdited", ExtArgs["result"]["availabilitySlot"]>
  export type AvailabilitySlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | AvailabilitySubmissionDefaultArgs<ExtArgs>
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }
  export type AvailabilitySlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | AvailabilitySubmissionDefaultArgs<ExtArgs>
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }
  export type AvailabilitySlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | AvailabilitySubmissionDefaultArgs<ExtArgs>
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }

  export type $AvailabilitySlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailabilitySlot"
    objects: {
      submission: Prisma.$AvailabilitySubmissionPayload<ExtArgs>
      staff: Prisma.$StaffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      submissionId: string
      staffId: string
      date: Date
      shift: $Enums.ShiftType
      available: boolean
      aiReasoning: string | null
      wasEdited: boolean
    }, ExtArgs["result"]["availabilitySlot"]>
    composites: {}
  }

  type AvailabilitySlotGetPayload<S extends boolean | null | undefined | AvailabilitySlotDefaultArgs> = $Result.GetResult<Prisma.$AvailabilitySlotPayload, S>

  type AvailabilitySlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilitySlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilitySlotCountAggregateInputType | true
    }

  export interface AvailabilitySlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailabilitySlot'], meta: { name: 'AvailabilitySlot' } }
    /**
     * Find zero or one AvailabilitySlot that matches the filter.
     * @param {AvailabilitySlotFindUniqueArgs} args - Arguments to find a AvailabilitySlot
     * @example
     * // Get one AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilitySlotFindUniqueArgs>(args: SelectSubset<T, AvailabilitySlotFindUniqueArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailabilitySlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilitySlotFindUniqueOrThrowArgs} args - Arguments to find a AvailabilitySlot
     * @example
     * // Get one AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilitySlotFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilitySlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailabilitySlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotFindFirstArgs} args - Arguments to find a AvailabilitySlot
     * @example
     * // Get one AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilitySlotFindFirstArgs>(args?: SelectSubset<T, AvailabilitySlotFindFirstArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailabilitySlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotFindFirstOrThrowArgs} args - Arguments to find a AvailabilitySlot
     * @example
     * // Get one AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilitySlotFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilitySlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailabilitySlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailabilitySlots
     * const availabilitySlots = await prisma.availabilitySlot.findMany()
     * 
     * // Get first 10 AvailabilitySlots
     * const availabilitySlots = await prisma.availabilitySlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilitySlotWithIdOnly = await prisma.availabilitySlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilitySlotFindManyArgs>(args?: SelectSubset<T, AvailabilitySlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailabilitySlot.
     * @param {AvailabilitySlotCreateArgs} args - Arguments to create a AvailabilitySlot.
     * @example
     * // Create one AvailabilitySlot
     * const AvailabilitySlot = await prisma.availabilitySlot.create({
     *   data: {
     *     // ... data to create a AvailabilitySlot
     *   }
     * })
     * 
     */
    create<T extends AvailabilitySlotCreateArgs>(args: SelectSubset<T, AvailabilitySlotCreateArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailabilitySlots.
     * @param {AvailabilitySlotCreateManyArgs} args - Arguments to create many AvailabilitySlots.
     * @example
     * // Create many AvailabilitySlots
     * const availabilitySlot = await prisma.availabilitySlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilitySlotCreateManyArgs>(args?: SelectSubset<T, AvailabilitySlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailabilitySlots and returns the data saved in the database.
     * @param {AvailabilitySlotCreateManyAndReturnArgs} args - Arguments to create many AvailabilitySlots.
     * @example
     * // Create many AvailabilitySlots
     * const availabilitySlot = await prisma.availabilitySlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailabilitySlots and only return the `id`
     * const availabilitySlotWithIdOnly = await prisma.availabilitySlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilitySlotCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilitySlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailabilitySlot.
     * @param {AvailabilitySlotDeleteArgs} args - Arguments to delete one AvailabilitySlot.
     * @example
     * // Delete one AvailabilitySlot
     * const AvailabilitySlot = await prisma.availabilitySlot.delete({
     *   where: {
     *     // ... filter to delete one AvailabilitySlot
     *   }
     * })
     * 
     */
    delete<T extends AvailabilitySlotDeleteArgs>(args: SelectSubset<T, AvailabilitySlotDeleteArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailabilitySlot.
     * @param {AvailabilitySlotUpdateArgs} args - Arguments to update one AvailabilitySlot.
     * @example
     * // Update one AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilitySlotUpdateArgs>(args: SelectSubset<T, AvailabilitySlotUpdateArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailabilitySlots.
     * @param {AvailabilitySlotDeleteManyArgs} args - Arguments to filter AvailabilitySlots to delete.
     * @example
     * // Delete a few AvailabilitySlots
     * const { count } = await prisma.availabilitySlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilitySlotDeleteManyArgs>(args?: SelectSubset<T, AvailabilitySlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilitySlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailabilitySlots
     * const availabilitySlot = await prisma.availabilitySlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilitySlotUpdateManyArgs>(args: SelectSubset<T, AvailabilitySlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilitySlots and returns the data updated in the database.
     * @param {AvailabilitySlotUpdateManyAndReturnArgs} args - Arguments to update many AvailabilitySlots.
     * @example
     * // Update many AvailabilitySlots
     * const availabilitySlot = await prisma.availabilitySlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailabilitySlots and only return the `id`
     * const availabilitySlotWithIdOnly = await prisma.availabilitySlot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailabilitySlotUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilitySlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailabilitySlot.
     * @param {AvailabilitySlotUpsertArgs} args - Arguments to update or create a AvailabilitySlot.
     * @example
     * // Update or create a AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.upsert({
     *   create: {
     *     // ... data to create a AvailabilitySlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailabilitySlot we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilitySlotUpsertArgs>(args: SelectSubset<T, AvailabilitySlotUpsertArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailabilitySlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotCountArgs} args - Arguments to filter AvailabilitySlots to count.
     * @example
     * // Count the number of AvailabilitySlots
     * const count = await prisma.availabilitySlot.count({
     *   where: {
     *     // ... the filter for the AvailabilitySlots we want to count
     *   }
     * })
    **/
    count<T extends AvailabilitySlotCountArgs>(
      args?: Subset<T, AvailabilitySlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilitySlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailabilitySlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailabilitySlotAggregateArgs>(args: Subset<T, AvailabilitySlotAggregateArgs>): Prisma.PrismaPromise<GetAvailabilitySlotAggregateType<T>>

    /**
     * Group by AvailabilitySlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailabilitySlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilitySlotGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilitySlotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailabilitySlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilitySlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailabilitySlot model
   */
  readonly fields: AvailabilitySlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailabilitySlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilitySlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends AvailabilitySubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailabilitySubmissionDefaultArgs<ExtArgs>>): Prisma__AvailabilitySubmissionClient<$Result.GetResult<Prisma.$AvailabilitySubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends StaffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaffDefaultArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AvailabilitySlot model
   */
  interface AvailabilitySlotFieldRefs {
    readonly id: FieldRef<"AvailabilitySlot", 'String'>
    readonly submissionId: FieldRef<"AvailabilitySlot", 'String'>
    readonly staffId: FieldRef<"AvailabilitySlot", 'String'>
    readonly date: FieldRef<"AvailabilitySlot", 'DateTime'>
    readonly shift: FieldRef<"AvailabilitySlot", 'ShiftType'>
    readonly available: FieldRef<"AvailabilitySlot", 'Boolean'>
    readonly aiReasoning: FieldRef<"AvailabilitySlot", 'String'>
    readonly wasEdited: FieldRef<"AvailabilitySlot", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AvailabilitySlot findUnique
   */
  export type AvailabilitySlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySlot to fetch.
     */
    where: AvailabilitySlotWhereUniqueInput
  }

  /**
   * AvailabilitySlot findUniqueOrThrow
   */
  export type AvailabilitySlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySlot to fetch.
     */
    where: AvailabilitySlotWhereUniqueInput
  }

  /**
   * AvailabilitySlot findFirst
   */
  export type AvailabilitySlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySlot to fetch.
     */
    where?: AvailabilitySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySlots to fetch.
     */
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilitySlots.
     */
    cursor?: AvailabilitySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilitySlots.
     */
    distinct?: AvailabilitySlotScalarFieldEnum | AvailabilitySlotScalarFieldEnum[]
  }

  /**
   * AvailabilitySlot findFirstOrThrow
   */
  export type AvailabilitySlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySlot to fetch.
     */
    where?: AvailabilitySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySlots to fetch.
     */
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilitySlots.
     */
    cursor?: AvailabilitySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilitySlots.
     */
    distinct?: AvailabilitySlotScalarFieldEnum | AvailabilitySlotScalarFieldEnum[]
  }

  /**
   * AvailabilitySlot findMany
   */
  export type AvailabilitySlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySlots to fetch.
     */
    where?: AvailabilitySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySlots to fetch.
     */
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailabilitySlots.
     */
    cursor?: AvailabilitySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilitySlots.
     */
    distinct?: AvailabilitySlotScalarFieldEnum | AvailabilitySlotScalarFieldEnum[]
  }

  /**
   * AvailabilitySlot create
   */
  export type AvailabilitySlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailabilitySlot.
     */
    data: XOR<AvailabilitySlotCreateInput, AvailabilitySlotUncheckedCreateInput>
  }

  /**
   * AvailabilitySlot createMany
   */
  export type AvailabilitySlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailabilitySlots.
     */
    data: AvailabilitySlotCreateManyInput | AvailabilitySlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailabilitySlot createManyAndReturn
   */
  export type AvailabilitySlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * The data used to create many AvailabilitySlots.
     */
    data: AvailabilitySlotCreateManyInput | AvailabilitySlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailabilitySlot update
   */
  export type AvailabilitySlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailabilitySlot.
     */
    data: XOR<AvailabilitySlotUpdateInput, AvailabilitySlotUncheckedUpdateInput>
    /**
     * Choose, which AvailabilitySlot to update.
     */
    where: AvailabilitySlotWhereUniqueInput
  }

  /**
   * AvailabilitySlot updateMany
   */
  export type AvailabilitySlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailabilitySlots.
     */
    data: XOR<AvailabilitySlotUpdateManyMutationInput, AvailabilitySlotUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilitySlots to update
     */
    where?: AvailabilitySlotWhereInput
    /**
     * Limit how many AvailabilitySlots to update.
     */
    limit?: number
  }

  /**
   * AvailabilitySlot updateManyAndReturn
   */
  export type AvailabilitySlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * The data used to update AvailabilitySlots.
     */
    data: XOR<AvailabilitySlotUpdateManyMutationInput, AvailabilitySlotUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilitySlots to update
     */
    where?: AvailabilitySlotWhereInput
    /**
     * Limit how many AvailabilitySlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailabilitySlot upsert
   */
  export type AvailabilitySlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailabilitySlot to update in case it exists.
     */
    where: AvailabilitySlotWhereUniqueInput
    /**
     * In case the AvailabilitySlot found by the `where` argument doesn't exist, create a new AvailabilitySlot with this data.
     */
    create: XOR<AvailabilitySlotCreateInput, AvailabilitySlotUncheckedCreateInput>
    /**
     * In case the AvailabilitySlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilitySlotUpdateInput, AvailabilitySlotUncheckedUpdateInput>
  }

  /**
   * AvailabilitySlot delete
   */
  export type AvailabilitySlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter which AvailabilitySlot to delete.
     */
    where: AvailabilitySlotWhereUniqueInput
  }

  /**
   * AvailabilitySlot deleteMany
   */
  export type AvailabilitySlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilitySlots to delete
     */
    where?: AvailabilitySlotWhereInput
    /**
     * Limit how many AvailabilitySlots to delete.
     */
    limit?: number
  }

  /**
   * AvailabilitySlot without action
   */
  export type AvailabilitySlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    shiftTemplateRoles?: boolean | Role$shiftTemplateRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shiftTemplateRoles?: boolean | Role$shiftTemplateRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      shiftTemplateRoles: Prisma.$ShiftTemplateRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shiftTemplateRoles<T extends Role$shiftTemplateRolesArgs<ExtArgs> = {}>(args?: Subset<T, Role$shiftTemplateRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftTemplateRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.shiftTemplateRoles
   */
  export type Role$shiftTemplateRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRole
     */
    select?: ShiftTemplateRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateRole
     */
    omit?: ShiftTemplateRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRoleInclude<ExtArgs> | null
    where?: ShiftTemplateRoleWhereInput
    orderBy?: ShiftTemplateRoleOrderByWithRelationInput | ShiftTemplateRoleOrderByWithRelationInput[]
    cursor?: ShiftTemplateRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftTemplateRoleScalarFieldEnum | ShiftTemplateRoleScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model ShiftTemplate
   */

  export type AggregateShiftTemplate = {
    _count: ShiftTemplateCountAggregateOutputType | null
    _avg: ShiftTemplateAvgAggregateOutputType | null
    _sum: ShiftTemplateSumAggregateOutputType | null
    _min: ShiftTemplateMinAggregateOutputType | null
    _max: ShiftTemplateMaxAggregateOutputType | null
  }

  export type ShiftTemplateAvgAggregateOutputType = {
    minStaff: number | null
  }

  export type ShiftTemplateSumAggregateOutputType = {
    minStaff: number | null
  }

  export type ShiftTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    startTime: string | null
    endTime: string | null
    minStaff: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startTime: string | null
    endTime: string | null
    minStaff: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftTemplateCountAggregateOutputType = {
    id: number
    name: number
    startTime: number
    endTime: number
    minStaff: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShiftTemplateAvgAggregateInputType = {
    minStaff?: true
  }

  export type ShiftTemplateSumAggregateInputType = {
    minStaff?: true
  }

  export type ShiftTemplateMinAggregateInputType = {
    id?: true
    name?: true
    startTime?: true
    endTime?: true
    minStaff?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    startTime?: true
    endTime?: true
    minStaff?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftTemplateCountAggregateInputType = {
    id?: true
    name?: true
    startTime?: true
    endTime?: true
    minStaff?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShiftTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftTemplate to aggregate.
     */
    where?: ShiftTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftTemplates to fetch.
     */
    orderBy?: ShiftTemplateOrderByWithRelationInput | ShiftTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShiftTemplates
    **/
    _count?: true | ShiftTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShiftTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShiftTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftTemplateMaxAggregateInputType
  }

  export type GetShiftTemplateAggregateType<T extends ShiftTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateShiftTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShiftTemplate[P]>
      : GetScalarType<T[P], AggregateShiftTemplate[P]>
  }




  export type ShiftTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftTemplateWhereInput
    orderBy?: ShiftTemplateOrderByWithAggregationInput | ShiftTemplateOrderByWithAggregationInput[]
    by: ShiftTemplateScalarFieldEnum[] | ShiftTemplateScalarFieldEnum
    having?: ShiftTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftTemplateCountAggregateInputType | true
    _avg?: ShiftTemplateAvgAggregateInputType
    _sum?: ShiftTemplateSumAggregateInputType
    _min?: ShiftTemplateMinAggregateInputType
    _max?: ShiftTemplateMaxAggregateInputType
  }

  export type ShiftTemplateGroupByOutputType = {
    id: string
    name: string
    startTime: string
    endTime: string
    minStaff: number
    createdAt: Date
    updatedAt: Date
    _count: ShiftTemplateCountAggregateOutputType | null
    _avg: ShiftTemplateAvgAggregateOutputType | null
    _sum: ShiftTemplateSumAggregateOutputType | null
    _min: ShiftTemplateMinAggregateOutputType | null
    _max: ShiftTemplateMaxAggregateOutputType | null
  }

  type GetShiftTemplateGroupByPayload<T extends ShiftTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftTemplateGroupByOutputType[P]>
        }
      >
    >


  export type ShiftTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startTime?: boolean
    endTime?: boolean
    minStaff?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    days?: boolean | ShiftTemplate$daysArgs<ExtArgs>
    roles?: boolean | ShiftTemplate$rolesArgs<ExtArgs>
    _count?: boolean | ShiftTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftTemplate"]>

  export type ShiftTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startTime?: boolean
    endTime?: boolean
    minStaff?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shiftTemplate"]>

  export type ShiftTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startTime?: boolean
    endTime?: boolean
    minStaff?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shiftTemplate"]>

  export type ShiftTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    startTime?: boolean
    endTime?: boolean
    minStaff?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShiftTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startTime" | "endTime" | "minStaff" | "createdAt" | "updatedAt", ExtArgs["result"]["shiftTemplate"]>
  export type ShiftTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    days?: boolean | ShiftTemplate$daysArgs<ExtArgs>
    roles?: boolean | ShiftTemplate$rolesArgs<ExtArgs>
    _count?: boolean | ShiftTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShiftTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShiftTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShiftTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShiftTemplate"
    objects: {
      days: Prisma.$ShiftTemplateDayPayload<ExtArgs>[]
      roles: Prisma.$ShiftTemplateRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startTime: string
      endTime: string
      minStaff: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shiftTemplate"]>
    composites: {}
  }

  type ShiftTemplateGetPayload<S extends boolean | null | undefined | ShiftTemplateDefaultArgs> = $Result.GetResult<Prisma.$ShiftTemplatePayload, S>

  type ShiftTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShiftTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShiftTemplateCountAggregateInputType | true
    }

  export interface ShiftTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShiftTemplate'], meta: { name: 'ShiftTemplate' } }
    /**
     * Find zero or one ShiftTemplate that matches the filter.
     * @param {ShiftTemplateFindUniqueArgs} args - Arguments to find a ShiftTemplate
     * @example
     * // Get one ShiftTemplate
     * const shiftTemplate = await prisma.shiftTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShiftTemplateFindUniqueArgs>(args: SelectSubset<T, ShiftTemplateFindUniqueArgs<ExtArgs>>): Prisma__ShiftTemplateClient<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShiftTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShiftTemplateFindUniqueOrThrowArgs} args - Arguments to find a ShiftTemplate
     * @example
     * // Get one ShiftTemplate
     * const shiftTemplate = await prisma.shiftTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShiftTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftTemplateClient<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateFindFirstArgs} args - Arguments to find a ShiftTemplate
     * @example
     * // Get one ShiftTemplate
     * const shiftTemplate = await prisma.shiftTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShiftTemplateFindFirstArgs>(args?: SelectSubset<T, ShiftTemplateFindFirstArgs<ExtArgs>>): Prisma__ShiftTemplateClient<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateFindFirstOrThrowArgs} args - Arguments to find a ShiftTemplate
     * @example
     * // Get one ShiftTemplate
     * const shiftTemplate = await prisma.shiftTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShiftTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftTemplateClient<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShiftTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShiftTemplates
     * const shiftTemplates = await prisma.shiftTemplate.findMany()
     * 
     * // Get first 10 ShiftTemplates
     * const shiftTemplates = await prisma.shiftTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftTemplateWithIdOnly = await prisma.shiftTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShiftTemplateFindManyArgs>(args?: SelectSubset<T, ShiftTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShiftTemplate.
     * @param {ShiftTemplateCreateArgs} args - Arguments to create a ShiftTemplate.
     * @example
     * // Create one ShiftTemplate
     * const ShiftTemplate = await prisma.shiftTemplate.create({
     *   data: {
     *     // ... data to create a ShiftTemplate
     *   }
     * })
     * 
     */
    create<T extends ShiftTemplateCreateArgs>(args: SelectSubset<T, ShiftTemplateCreateArgs<ExtArgs>>): Prisma__ShiftTemplateClient<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShiftTemplates.
     * @param {ShiftTemplateCreateManyArgs} args - Arguments to create many ShiftTemplates.
     * @example
     * // Create many ShiftTemplates
     * const shiftTemplate = await prisma.shiftTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShiftTemplateCreateManyArgs>(args?: SelectSubset<T, ShiftTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShiftTemplates and returns the data saved in the database.
     * @param {ShiftTemplateCreateManyAndReturnArgs} args - Arguments to create many ShiftTemplates.
     * @example
     * // Create many ShiftTemplates
     * const shiftTemplate = await prisma.shiftTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShiftTemplates and only return the `id`
     * const shiftTemplateWithIdOnly = await prisma.shiftTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShiftTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, ShiftTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShiftTemplate.
     * @param {ShiftTemplateDeleteArgs} args - Arguments to delete one ShiftTemplate.
     * @example
     * // Delete one ShiftTemplate
     * const ShiftTemplate = await prisma.shiftTemplate.delete({
     *   where: {
     *     // ... filter to delete one ShiftTemplate
     *   }
     * })
     * 
     */
    delete<T extends ShiftTemplateDeleteArgs>(args: SelectSubset<T, ShiftTemplateDeleteArgs<ExtArgs>>): Prisma__ShiftTemplateClient<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShiftTemplate.
     * @param {ShiftTemplateUpdateArgs} args - Arguments to update one ShiftTemplate.
     * @example
     * // Update one ShiftTemplate
     * const shiftTemplate = await prisma.shiftTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShiftTemplateUpdateArgs>(args: SelectSubset<T, ShiftTemplateUpdateArgs<ExtArgs>>): Prisma__ShiftTemplateClient<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShiftTemplates.
     * @param {ShiftTemplateDeleteManyArgs} args - Arguments to filter ShiftTemplates to delete.
     * @example
     * // Delete a few ShiftTemplates
     * const { count } = await prisma.shiftTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShiftTemplateDeleteManyArgs>(args?: SelectSubset<T, ShiftTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShiftTemplates
     * const shiftTemplate = await prisma.shiftTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShiftTemplateUpdateManyArgs>(args: SelectSubset<T, ShiftTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftTemplates and returns the data updated in the database.
     * @param {ShiftTemplateUpdateManyAndReturnArgs} args - Arguments to update many ShiftTemplates.
     * @example
     * // Update many ShiftTemplates
     * const shiftTemplate = await prisma.shiftTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShiftTemplates and only return the `id`
     * const shiftTemplateWithIdOnly = await prisma.shiftTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShiftTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, ShiftTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShiftTemplate.
     * @param {ShiftTemplateUpsertArgs} args - Arguments to update or create a ShiftTemplate.
     * @example
     * // Update or create a ShiftTemplate
     * const shiftTemplate = await prisma.shiftTemplate.upsert({
     *   create: {
     *     // ... data to create a ShiftTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShiftTemplate we want to update
     *   }
     * })
     */
    upsert<T extends ShiftTemplateUpsertArgs>(args: SelectSubset<T, ShiftTemplateUpsertArgs<ExtArgs>>): Prisma__ShiftTemplateClient<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShiftTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateCountArgs} args - Arguments to filter ShiftTemplates to count.
     * @example
     * // Count the number of ShiftTemplates
     * const count = await prisma.shiftTemplate.count({
     *   where: {
     *     // ... the filter for the ShiftTemplates we want to count
     *   }
     * })
    **/
    count<T extends ShiftTemplateCountArgs>(
      args?: Subset<T, ShiftTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShiftTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShiftTemplateAggregateArgs>(args: Subset<T, ShiftTemplateAggregateArgs>): Prisma.PrismaPromise<GetShiftTemplateAggregateType<T>>

    /**
     * Group by ShiftTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShiftTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftTemplateGroupByArgs['orderBy'] }
        : { orderBy?: ShiftTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShiftTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShiftTemplate model
   */
  readonly fields: ShiftTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShiftTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    days<T extends ShiftTemplate$daysArgs<ExtArgs> = {}>(args?: Subset<T, ShiftTemplate$daysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftTemplateDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends ShiftTemplate$rolesArgs<ExtArgs> = {}>(args?: Subset<T, ShiftTemplate$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftTemplateRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShiftTemplate model
   */
  interface ShiftTemplateFieldRefs {
    readonly id: FieldRef<"ShiftTemplate", 'String'>
    readonly name: FieldRef<"ShiftTemplate", 'String'>
    readonly startTime: FieldRef<"ShiftTemplate", 'String'>
    readonly endTime: FieldRef<"ShiftTemplate", 'String'>
    readonly minStaff: FieldRef<"ShiftTemplate", 'Int'>
    readonly createdAt: FieldRef<"ShiftTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"ShiftTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShiftTemplate findUnique
   */
  export type ShiftTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplate
     */
    omit?: ShiftTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplate to fetch.
     */
    where: ShiftTemplateWhereUniqueInput
  }

  /**
   * ShiftTemplate findUniqueOrThrow
   */
  export type ShiftTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplate
     */
    omit?: ShiftTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplate to fetch.
     */
    where: ShiftTemplateWhereUniqueInput
  }

  /**
   * ShiftTemplate findFirst
   */
  export type ShiftTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplate
     */
    omit?: ShiftTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplate to fetch.
     */
    where?: ShiftTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftTemplates to fetch.
     */
    orderBy?: ShiftTemplateOrderByWithRelationInput | ShiftTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftTemplates.
     */
    cursor?: ShiftTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftTemplates.
     */
    distinct?: ShiftTemplateScalarFieldEnum | ShiftTemplateScalarFieldEnum[]
  }

  /**
   * ShiftTemplate findFirstOrThrow
   */
  export type ShiftTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplate
     */
    omit?: ShiftTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplate to fetch.
     */
    where?: ShiftTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftTemplates to fetch.
     */
    orderBy?: ShiftTemplateOrderByWithRelationInput | ShiftTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftTemplates.
     */
    cursor?: ShiftTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftTemplates.
     */
    distinct?: ShiftTemplateScalarFieldEnum | ShiftTemplateScalarFieldEnum[]
  }

  /**
   * ShiftTemplate findMany
   */
  export type ShiftTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplate
     */
    omit?: ShiftTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplates to fetch.
     */
    where?: ShiftTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftTemplates to fetch.
     */
    orderBy?: ShiftTemplateOrderByWithRelationInput | ShiftTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShiftTemplates.
     */
    cursor?: ShiftTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftTemplates.
     */
    distinct?: ShiftTemplateScalarFieldEnum | ShiftTemplateScalarFieldEnum[]
  }

  /**
   * ShiftTemplate create
   */
  export type ShiftTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplate
     */
    omit?: ShiftTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a ShiftTemplate.
     */
    data: XOR<ShiftTemplateCreateInput, ShiftTemplateUncheckedCreateInput>
  }

  /**
   * ShiftTemplate createMany
   */
  export type ShiftTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShiftTemplates.
     */
    data: ShiftTemplateCreateManyInput | ShiftTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShiftTemplate createManyAndReturn
   */
  export type ShiftTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplate
     */
    omit?: ShiftTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many ShiftTemplates.
     */
    data: ShiftTemplateCreateManyInput | ShiftTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShiftTemplate update
   */
  export type ShiftTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplate
     */
    omit?: ShiftTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a ShiftTemplate.
     */
    data: XOR<ShiftTemplateUpdateInput, ShiftTemplateUncheckedUpdateInput>
    /**
     * Choose, which ShiftTemplate to update.
     */
    where: ShiftTemplateWhereUniqueInput
  }

  /**
   * ShiftTemplate updateMany
   */
  export type ShiftTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShiftTemplates.
     */
    data: XOR<ShiftTemplateUpdateManyMutationInput, ShiftTemplateUncheckedUpdateManyInput>
    /**
     * Filter which ShiftTemplates to update
     */
    where?: ShiftTemplateWhereInput
    /**
     * Limit how many ShiftTemplates to update.
     */
    limit?: number
  }

  /**
   * ShiftTemplate updateManyAndReturn
   */
  export type ShiftTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplate
     */
    omit?: ShiftTemplateOmit<ExtArgs> | null
    /**
     * The data used to update ShiftTemplates.
     */
    data: XOR<ShiftTemplateUpdateManyMutationInput, ShiftTemplateUncheckedUpdateManyInput>
    /**
     * Filter which ShiftTemplates to update
     */
    where?: ShiftTemplateWhereInput
    /**
     * Limit how many ShiftTemplates to update.
     */
    limit?: number
  }

  /**
   * ShiftTemplate upsert
   */
  export type ShiftTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplate
     */
    omit?: ShiftTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the ShiftTemplate to update in case it exists.
     */
    where: ShiftTemplateWhereUniqueInput
    /**
     * In case the ShiftTemplate found by the `where` argument doesn't exist, create a new ShiftTemplate with this data.
     */
    create: XOR<ShiftTemplateCreateInput, ShiftTemplateUncheckedCreateInput>
    /**
     * In case the ShiftTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftTemplateUpdateInput, ShiftTemplateUncheckedUpdateInput>
  }

  /**
   * ShiftTemplate delete
   */
  export type ShiftTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplate
     */
    omit?: ShiftTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateInclude<ExtArgs> | null
    /**
     * Filter which ShiftTemplate to delete.
     */
    where: ShiftTemplateWhereUniqueInput
  }

  /**
   * ShiftTemplate deleteMany
   */
  export type ShiftTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftTemplates to delete
     */
    where?: ShiftTemplateWhereInput
    /**
     * Limit how many ShiftTemplates to delete.
     */
    limit?: number
  }

  /**
   * ShiftTemplate.days
   */
  export type ShiftTemplate$daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateDay
     */
    select?: ShiftTemplateDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateDay
     */
    omit?: ShiftTemplateDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateDayInclude<ExtArgs> | null
    where?: ShiftTemplateDayWhereInput
    orderBy?: ShiftTemplateDayOrderByWithRelationInput | ShiftTemplateDayOrderByWithRelationInput[]
    cursor?: ShiftTemplateDayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftTemplateDayScalarFieldEnum | ShiftTemplateDayScalarFieldEnum[]
  }

  /**
   * ShiftTemplate.roles
   */
  export type ShiftTemplate$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRole
     */
    select?: ShiftTemplateRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateRole
     */
    omit?: ShiftTemplateRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRoleInclude<ExtArgs> | null
    where?: ShiftTemplateRoleWhereInput
    orderBy?: ShiftTemplateRoleOrderByWithRelationInput | ShiftTemplateRoleOrderByWithRelationInput[]
    cursor?: ShiftTemplateRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftTemplateRoleScalarFieldEnum | ShiftTemplateRoleScalarFieldEnum[]
  }

  /**
   * ShiftTemplate without action
   */
  export type ShiftTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplate
     */
    select?: ShiftTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplate
     */
    omit?: ShiftTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateInclude<ExtArgs> | null
  }


  /**
   * Model ShiftTemplateDay
   */

  export type AggregateShiftTemplateDay = {
    _count: ShiftTemplateDayCountAggregateOutputType | null
    _min: ShiftTemplateDayMinAggregateOutputType | null
    _max: ShiftTemplateDayMaxAggregateOutputType | null
  }

  export type ShiftTemplateDayMinAggregateOutputType = {
    id: string | null
    shiftTemplateId: string | null
    day: $Enums.DayOfWeek | null
  }

  export type ShiftTemplateDayMaxAggregateOutputType = {
    id: string | null
    shiftTemplateId: string | null
    day: $Enums.DayOfWeek | null
  }

  export type ShiftTemplateDayCountAggregateOutputType = {
    id: number
    shiftTemplateId: number
    day: number
    _all: number
  }


  export type ShiftTemplateDayMinAggregateInputType = {
    id?: true
    shiftTemplateId?: true
    day?: true
  }

  export type ShiftTemplateDayMaxAggregateInputType = {
    id?: true
    shiftTemplateId?: true
    day?: true
  }

  export type ShiftTemplateDayCountAggregateInputType = {
    id?: true
    shiftTemplateId?: true
    day?: true
    _all?: true
  }

  export type ShiftTemplateDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftTemplateDay to aggregate.
     */
    where?: ShiftTemplateDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftTemplateDays to fetch.
     */
    orderBy?: ShiftTemplateDayOrderByWithRelationInput | ShiftTemplateDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftTemplateDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftTemplateDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftTemplateDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShiftTemplateDays
    **/
    _count?: true | ShiftTemplateDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftTemplateDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftTemplateDayMaxAggregateInputType
  }

  export type GetShiftTemplateDayAggregateType<T extends ShiftTemplateDayAggregateArgs> = {
        [P in keyof T & keyof AggregateShiftTemplateDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShiftTemplateDay[P]>
      : GetScalarType<T[P], AggregateShiftTemplateDay[P]>
  }




  export type ShiftTemplateDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftTemplateDayWhereInput
    orderBy?: ShiftTemplateDayOrderByWithAggregationInput | ShiftTemplateDayOrderByWithAggregationInput[]
    by: ShiftTemplateDayScalarFieldEnum[] | ShiftTemplateDayScalarFieldEnum
    having?: ShiftTemplateDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftTemplateDayCountAggregateInputType | true
    _min?: ShiftTemplateDayMinAggregateInputType
    _max?: ShiftTemplateDayMaxAggregateInputType
  }

  export type ShiftTemplateDayGroupByOutputType = {
    id: string
    shiftTemplateId: string
    day: $Enums.DayOfWeek
    _count: ShiftTemplateDayCountAggregateOutputType | null
    _min: ShiftTemplateDayMinAggregateOutputType | null
    _max: ShiftTemplateDayMaxAggregateOutputType | null
  }

  type GetShiftTemplateDayGroupByPayload<T extends ShiftTemplateDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftTemplateDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftTemplateDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftTemplateDayGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftTemplateDayGroupByOutputType[P]>
        }
      >
    >


  export type ShiftTemplateDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftTemplateId?: boolean
    day?: boolean
    shiftTemplate?: boolean | ShiftTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftTemplateDay"]>

  export type ShiftTemplateDaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftTemplateId?: boolean
    day?: boolean
    shiftTemplate?: boolean | ShiftTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftTemplateDay"]>

  export type ShiftTemplateDaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftTemplateId?: boolean
    day?: boolean
    shiftTemplate?: boolean | ShiftTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftTemplateDay"]>

  export type ShiftTemplateDaySelectScalar = {
    id?: boolean
    shiftTemplateId?: boolean
    day?: boolean
  }

  export type ShiftTemplateDayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shiftTemplateId" | "day", ExtArgs["result"]["shiftTemplateDay"]>
  export type ShiftTemplateDayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shiftTemplate?: boolean | ShiftTemplateDefaultArgs<ExtArgs>
  }
  export type ShiftTemplateDayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shiftTemplate?: boolean | ShiftTemplateDefaultArgs<ExtArgs>
  }
  export type ShiftTemplateDayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shiftTemplate?: boolean | ShiftTemplateDefaultArgs<ExtArgs>
  }

  export type $ShiftTemplateDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShiftTemplateDay"
    objects: {
      shiftTemplate: Prisma.$ShiftTemplatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shiftTemplateId: string
      day: $Enums.DayOfWeek
    }, ExtArgs["result"]["shiftTemplateDay"]>
    composites: {}
  }

  type ShiftTemplateDayGetPayload<S extends boolean | null | undefined | ShiftTemplateDayDefaultArgs> = $Result.GetResult<Prisma.$ShiftTemplateDayPayload, S>

  type ShiftTemplateDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShiftTemplateDayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShiftTemplateDayCountAggregateInputType | true
    }

  export interface ShiftTemplateDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShiftTemplateDay'], meta: { name: 'ShiftTemplateDay' } }
    /**
     * Find zero or one ShiftTemplateDay that matches the filter.
     * @param {ShiftTemplateDayFindUniqueArgs} args - Arguments to find a ShiftTemplateDay
     * @example
     * // Get one ShiftTemplateDay
     * const shiftTemplateDay = await prisma.shiftTemplateDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShiftTemplateDayFindUniqueArgs>(args: SelectSubset<T, ShiftTemplateDayFindUniqueArgs<ExtArgs>>): Prisma__ShiftTemplateDayClient<$Result.GetResult<Prisma.$ShiftTemplateDayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShiftTemplateDay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShiftTemplateDayFindUniqueOrThrowArgs} args - Arguments to find a ShiftTemplateDay
     * @example
     * // Get one ShiftTemplateDay
     * const shiftTemplateDay = await prisma.shiftTemplateDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShiftTemplateDayFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftTemplateDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftTemplateDayClient<$Result.GetResult<Prisma.$ShiftTemplateDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftTemplateDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateDayFindFirstArgs} args - Arguments to find a ShiftTemplateDay
     * @example
     * // Get one ShiftTemplateDay
     * const shiftTemplateDay = await prisma.shiftTemplateDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShiftTemplateDayFindFirstArgs>(args?: SelectSubset<T, ShiftTemplateDayFindFirstArgs<ExtArgs>>): Prisma__ShiftTemplateDayClient<$Result.GetResult<Prisma.$ShiftTemplateDayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftTemplateDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateDayFindFirstOrThrowArgs} args - Arguments to find a ShiftTemplateDay
     * @example
     * // Get one ShiftTemplateDay
     * const shiftTemplateDay = await prisma.shiftTemplateDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShiftTemplateDayFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftTemplateDayFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftTemplateDayClient<$Result.GetResult<Prisma.$ShiftTemplateDayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShiftTemplateDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateDayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShiftTemplateDays
     * const shiftTemplateDays = await prisma.shiftTemplateDay.findMany()
     * 
     * // Get first 10 ShiftTemplateDays
     * const shiftTemplateDays = await prisma.shiftTemplateDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftTemplateDayWithIdOnly = await prisma.shiftTemplateDay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShiftTemplateDayFindManyArgs>(args?: SelectSubset<T, ShiftTemplateDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftTemplateDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShiftTemplateDay.
     * @param {ShiftTemplateDayCreateArgs} args - Arguments to create a ShiftTemplateDay.
     * @example
     * // Create one ShiftTemplateDay
     * const ShiftTemplateDay = await prisma.shiftTemplateDay.create({
     *   data: {
     *     // ... data to create a ShiftTemplateDay
     *   }
     * })
     * 
     */
    create<T extends ShiftTemplateDayCreateArgs>(args: SelectSubset<T, ShiftTemplateDayCreateArgs<ExtArgs>>): Prisma__ShiftTemplateDayClient<$Result.GetResult<Prisma.$ShiftTemplateDayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShiftTemplateDays.
     * @param {ShiftTemplateDayCreateManyArgs} args - Arguments to create many ShiftTemplateDays.
     * @example
     * // Create many ShiftTemplateDays
     * const shiftTemplateDay = await prisma.shiftTemplateDay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShiftTemplateDayCreateManyArgs>(args?: SelectSubset<T, ShiftTemplateDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShiftTemplateDays and returns the data saved in the database.
     * @param {ShiftTemplateDayCreateManyAndReturnArgs} args - Arguments to create many ShiftTemplateDays.
     * @example
     * // Create many ShiftTemplateDays
     * const shiftTemplateDay = await prisma.shiftTemplateDay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShiftTemplateDays and only return the `id`
     * const shiftTemplateDayWithIdOnly = await prisma.shiftTemplateDay.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShiftTemplateDayCreateManyAndReturnArgs>(args?: SelectSubset<T, ShiftTemplateDayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftTemplateDayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShiftTemplateDay.
     * @param {ShiftTemplateDayDeleteArgs} args - Arguments to delete one ShiftTemplateDay.
     * @example
     * // Delete one ShiftTemplateDay
     * const ShiftTemplateDay = await prisma.shiftTemplateDay.delete({
     *   where: {
     *     // ... filter to delete one ShiftTemplateDay
     *   }
     * })
     * 
     */
    delete<T extends ShiftTemplateDayDeleteArgs>(args: SelectSubset<T, ShiftTemplateDayDeleteArgs<ExtArgs>>): Prisma__ShiftTemplateDayClient<$Result.GetResult<Prisma.$ShiftTemplateDayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShiftTemplateDay.
     * @param {ShiftTemplateDayUpdateArgs} args - Arguments to update one ShiftTemplateDay.
     * @example
     * // Update one ShiftTemplateDay
     * const shiftTemplateDay = await prisma.shiftTemplateDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShiftTemplateDayUpdateArgs>(args: SelectSubset<T, ShiftTemplateDayUpdateArgs<ExtArgs>>): Prisma__ShiftTemplateDayClient<$Result.GetResult<Prisma.$ShiftTemplateDayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShiftTemplateDays.
     * @param {ShiftTemplateDayDeleteManyArgs} args - Arguments to filter ShiftTemplateDays to delete.
     * @example
     * // Delete a few ShiftTemplateDays
     * const { count } = await prisma.shiftTemplateDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShiftTemplateDayDeleteManyArgs>(args?: SelectSubset<T, ShiftTemplateDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftTemplateDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShiftTemplateDays
     * const shiftTemplateDay = await prisma.shiftTemplateDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShiftTemplateDayUpdateManyArgs>(args: SelectSubset<T, ShiftTemplateDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftTemplateDays and returns the data updated in the database.
     * @param {ShiftTemplateDayUpdateManyAndReturnArgs} args - Arguments to update many ShiftTemplateDays.
     * @example
     * // Update many ShiftTemplateDays
     * const shiftTemplateDay = await prisma.shiftTemplateDay.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShiftTemplateDays and only return the `id`
     * const shiftTemplateDayWithIdOnly = await prisma.shiftTemplateDay.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShiftTemplateDayUpdateManyAndReturnArgs>(args: SelectSubset<T, ShiftTemplateDayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftTemplateDayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShiftTemplateDay.
     * @param {ShiftTemplateDayUpsertArgs} args - Arguments to update or create a ShiftTemplateDay.
     * @example
     * // Update or create a ShiftTemplateDay
     * const shiftTemplateDay = await prisma.shiftTemplateDay.upsert({
     *   create: {
     *     // ... data to create a ShiftTemplateDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShiftTemplateDay we want to update
     *   }
     * })
     */
    upsert<T extends ShiftTemplateDayUpsertArgs>(args: SelectSubset<T, ShiftTemplateDayUpsertArgs<ExtArgs>>): Prisma__ShiftTemplateDayClient<$Result.GetResult<Prisma.$ShiftTemplateDayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShiftTemplateDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateDayCountArgs} args - Arguments to filter ShiftTemplateDays to count.
     * @example
     * // Count the number of ShiftTemplateDays
     * const count = await prisma.shiftTemplateDay.count({
     *   where: {
     *     // ... the filter for the ShiftTemplateDays we want to count
     *   }
     * })
    **/
    count<T extends ShiftTemplateDayCountArgs>(
      args?: Subset<T, ShiftTemplateDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftTemplateDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShiftTemplateDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShiftTemplateDayAggregateArgs>(args: Subset<T, ShiftTemplateDayAggregateArgs>): Prisma.PrismaPromise<GetShiftTemplateDayAggregateType<T>>

    /**
     * Group by ShiftTemplateDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateDayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShiftTemplateDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftTemplateDayGroupByArgs['orderBy'] }
        : { orderBy?: ShiftTemplateDayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShiftTemplateDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftTemplateDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShiftTemplateDay model
   */
  readonly fields: ShiftTemplateDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShiftTemplateDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftTemplateDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shiftTemplate<T extends ShiftTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShiftTemplateDefaultArgs<ExtArgs>>): Prisma__ShiftTemplateClient<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShiftTemplateDay model
   */
  interface ShiftTemplateDayFieldRefs {
    readonly id: FieldRef<"ShiftTemplateDay", 'String'>
    readonly shiftTemplateId: FieldRef<"ShiftTemplateDay", 'String'>
    readonly day: FieldRef<"ShiftTemplateDay", 'DayOfWeek'>
  }
    

  // Custom InputTypes
  /**
   * ShiftTemplateDay findUnique
   */
  export type ShiftTemplateDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateDay
     */
    select?: ShiftTemplateDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateDay
     */
    omit?: ShiftTemplateDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateDayInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplateDay to fetch.
     */
    where: ShiftTemplateDayWhereUniqueInput
  }

  /**
   * ShiftTemplateDay findUniqueOrThrow
   */
  export type ShiftTemplateDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateDay
     */
    select?: ShiftTemplateDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateDay
     */
    omit?: ShiftTemplateDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateDayInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplateDay to fetch.
     */
    where: ShiftTemplateDayWhereUniqueInput
  }

  /**
   * ShiftTemplateDay findFirst
   */
  export type ShiftTemplateDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateDay
     */
    select?: ShiftTemplateDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateDay
     */
    omit?: ShiftTemplateDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateDayInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplateDay to fetch.
     */
    where?: ShiftTemplateDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftTemplateDays to fetch.
     */
    orderBy?: ShiftTemplateDayOrderByWithRelationInput | ShiftTemplateDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftTemplateDays.
     */
    cursor?: ShiftTemplateDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftTemplateDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftTemplateDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftTemplateDays.
     */
    distinct?: ShiftTemplateDayScalarFieldEnum | ShiftTemplateDayScalarFieldEnum[]
  }

  /**
   * ShiftTemplateDay findFirstOrThrow
   */
  export type ShiftTemplateDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateDay
     */
    select?: ShiftTemplateDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateDay
     */
    omit?: ShiftTemplateDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateDayInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplateDay to fetch.
     */
    where?: ShiftTemplateDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftTemplateDays to fetch.
     */
    orderBy?: ShiftTemplateDayOrderByWithRelationInput | ShiftTemplateDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftTemplateDays.
     */
    cursor?: ShiftTemplateDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftTemplateDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftTemplateDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftTemplateDays.
     */
    distinct?: ShiftTemplateDayScalarFieldEnum | ShiftTemplateDayScalarFieldEnum[]
  }

  /**
   * ShiftTemplateDay findMany
   */
  export type ShiftTemplateDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateDay
     */
    select?: ShiftTemplateDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateDay
     */
    omit?: ShiftTemplateDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateDayInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplateDays to fetch.
     */
    where?: ShiftTemplateDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftTemplateDays to fetch.
     */
    orderBy?: ShiftTemplateDayOrderByWithRelationInput | ShiftTemplateDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShiftTemplateDays.
     */
    cursor?: ShiftTemplateDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftTemplateDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftTemplateDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftTemplateDays.
     */
    distinct?: ShiftTemplateDayScalarFieldEnum | ShiftTemplateDayScalarFieldEnum[]
  }

  /**
   * ShiftTemplateDay create
   */
  export type ShiftTemplateDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateDay
     */
    select?: ShiftTemplateDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateDay
     */
    omit?: ShiftTemplateDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateDayInclude<ExtArgs> | null
    /**
     * The data needed to create a ShiftTemplateDay.
     */
    data: XOR<ShiftTemplateDayCreateInput, ShiftTemplateDayUncheckedCreateInput>
  }

  /**
   * ShiftTemplateDay createMany
   */
  export type ShiftTemplateDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShiftTemplateDays.
     */
    data: ShiftTemplateDayCreateManyInput | ShiftTemplateDayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShiftTemplateDay createManyAndReturn
   */
  export type ShiftTemplateDayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateDay
     */
    select?: ShiftTemplateDaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateDay
     */
    omit?: ShiftTemplateDayOmit<ExtArgs> | null
    /**
     * The data used to create many ShiftTemplateDays.
     */
    data: ShiftTemplateDayCreateManyInput | ShiftTemplateDayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateDayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShiftTemplateDay update
   */
  export type ShiftTemplateDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateDay
     */
    select?: ShiftTemplateDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateDay
     */
    omit?: ShiftTemplateDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateDayInclude<ExtArgs> | null
    /**
     * The data needed to update a ShiftTemplateDay.
     */
    data: XOR<ShiftTemplateDayUpdateInput, ShiftTemplateDayUncheckedUpdateInput>
    /**
     * Choose, which ShiftTemplateDay to update.
     */
    where: ShiftTemplateDayWhereUniqueInput
  }

  /**
   * ShiftTemplateDay updateMany
   */
  export type ShiftTemplateDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShiftTemplateDays.
     */
    data: XOR<ShiftTemplateDayUpdateManyMutationInput, ShiftTemplateDayUncheckedUpdateManyInput>
    /**
     * Filter which ShiftTemplateDays to update
     */
    where?: ShiftTemplateDayWhereInput
    /**
     * Limit how many ShiftTemplateDays to update.
     */
    limit?: number
  }

  /**
   * ShiftTemplateDay updateManyAndReturn
   */
  export type ShiftTemplateDayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateDay
     */
    select?: ShiftTemplateDaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateDay
     */
    omit?: ShiftTemplateDayOmit<ExtArgs> | null
    /**
     * The data used to update ShiftTemplateDays.
     */
    data: XOR<ShiftTemplateDayUpdateManyMutationInput, ShiftTemplateDayUncheckedUpdateManyInput>
    /**
     * Filter which ShiftTemplateDays to update
     */
    where?: ShiftTemplateDayWhereInput
    /**
     * Limit how many ShiftTemplateDays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateDayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShiftTemplateDay upsert
   */
  export type ShiftTemplateDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateDay
     */
    select?: ShiftTemplateDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateDay
     */
    omit?: ShiftTemplateDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateDayInclude<ExtArgs> | null
    /**
     * The filter to search for the ShiftTemplateDay to update in case it exists.
     */
    where: ShiftTemplateDayWhereUniqueInput
    /**
     * In case the ShiftTemplateDay found by the `where` argument doesn't exist, create a new ShiftTemplateDay with this data.
     */
    create: XOR<ShiftTemplateDayCreateInput, ShiftTemplateDayUncheckedCreateInput>
    /**
     * In case the ShiftTemplateDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftTemplateDayUpdateInput, ShiftTemplateDayUncheckedUpdateInput>
  }

  /**
   * ShiftTemplateDay delete
   */
  export type ShiftTemplateDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateDay
     */
    select?: ShiftTemplateDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateDay
     */
    omit?: ShiftTemplateDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateDayInclude<ExtArgs> | null
    /**
     * Filter which ShiftTemplateDay to delete.
     */
    where: ShiftTemplateDayWhereUniqueInput
  }

  /**
   * ShiftTemplateDay deleteMany
   */
  export type ShiftTemplateDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftTemplateDays to delete
     */
    where?: ShiftTemplateDayWhereInput
    /**
     * Limit how many ShiftTemplateDays to delete.
     */
    limit?: number
  }

  /**
   * ShiftTemplateDay without action
   */
  export type ShiftTemplateDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateDay
     */
    select?: ShiftTemplateDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateDay
     */
    omit?: ShiftTemplateDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateDayInclude<ExtArgs> | null
  }


  /**
   * Model ShiftTemplateRole
   */

  export type AggregateShiftTemplateRole = {
    _count: ShiftTemplateRoleCountAggregateOutputType | null
    _avg: ShiftTemplateRoleAvgAggregateOutputType | null
    _sum: ShiftTemplateRoleSumAggregateOutputType | null
    _min: ShiftTemplateRoleMinAggregateOutputType | null
    _max: ShiftTemplateRoleMaxAggregateOutputType | null
  }

  export type ShiftTemplateRoleAvgAggregateOutputType = {
    minCount: number | null
  }

  export type ShiftTemplateRoleSumAggregateOutputType = {
    minCount: number | null
  }

  export type ShiftTemplateRoleMinAggregateOutputType = {
    id: string | null
    shiftTemplateId: string | null
    roleId: string | null
    minCount: number | null
  }

  export type ShiftTemplateRoleMaxAggregateOutputType = {
    id: string | null
    shiftTemplateId: string | null
    roleId: string | null
    minCount: number | null
  }

  export type ShiftTemplateRoleCountAggregateOutputType = {
    id: number
    shiftTemplateId: number
    roleId: number
    minCount: number
    _all: number
  }


  export type ShiftTemplateRoleAvgAggregateInputType = {
    minCount?: true
  }

  export type ShiftTemplateRoleSumAggregateInputType = {
    minCount?: true
  }

  export type ShiftTemplateRoleMinAggregateInputType = {
    id?: true
    shiftTemplateId?: true
    roleId?: true
    minCount?: true
  }

  export type ShiftTemplateRoleMaxAggregateInputType = {
    id?: true
    shiftTemplateId?: true
    roleId?: true
    minCount?: true
  }

  export type ShiftTemplateRoleCountAggregateInputType = {
    id?: true
    shiftTemplateId?: true
    roleId?: true
    minCount?: true
    _all?: true
  }

  export type ShiftTemplateRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftTemplateRole to aggregate.
     */
    where?: ShiftTemplateRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftTemplateRoles to fetch.
     */
    orderBy?: ShiftTemplateRoleOrderByWithRelationInput | ShiftTemplateRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftTemplateRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftTemplateRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftTemplateRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShiftTemplateRoles
    **/
    _count?: true | ShiftTemplateRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShiftTemplateRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShiftTemplateRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftTemplateRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftTemplateRoleMaxAggregateInputType
  }

  export type GetShiftTemplateRoleAggregateType<T extends ShiftTemplateRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateShiftTemplateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShiftTemplateRole[P]>
      : GetScalarType<T[P], AggregateShiftTemplateRole[P]>
  }




  export type ShiftTemplateRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftTemplateRoleWhereInput
    orderBy?: ShiftTemplateRoleOrderByWithAggregationInput | ShiftTemplateRoleOrderByWithAggregationInput[]
    by: ShiftTemplateRoleScalarFieldEnum[] | ShiftTemplateRoleScalarFieldEnum
    having?: ShiftTemplateRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftTemplateRoleCountAggregateInputType | true
    _avg?: ShiftTemplateRoleAvgAggregateInputType
    _sum?: ShiftTemplateRoleSumAggregateInputType
    _min?: ShiftTemplateRoleMinAggregateInputType
    _max?: ShiftTemplateRoleMaxAggregateInputType
  }

  export type ShiftTemplateRoleGroupByOutputType = {
    id: string
    shiftTemplateId: string
    roleId: string
    minCount: number
    _count: ShiftTemplateRoleCountAggregateOutputType | null
    _avg: ShiftTemplateRoleAvgAggregateOutputType | null
    _sum: ShiftTemplateRoleSumAggregateOutputType | null
    _min: ShiftTemplateRoleMinAggregateOutputType | null
    _max: ShiftTemplateRoleMaxAggregateOutputType | null
  }

  type GetShiftTemplateRoleGroupByPayload<T extends ShiftTemplateRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftTemplateRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftTemplateRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftTemplateRoleGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftTemplateRoleGroupByOutputType[P]>
        }
      >
    >


  export type ShiftTemplateRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftTemplateId?: boolean
    roleId?: boolean
    minCount?: boolean
    shiftTemplate?: boolean | ShiftTemplateDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftTemplateRole"]>

  export type ShiftTemplateRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftTemplateId?: boolean
    roleId?: boolean
    minCount?: boolean
    shiftTemplate?: boolean | ShiftTemplateDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftTemplateRole"]>

  export type ShiftTemplateRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftTemplateId?: boolean
    roleId?: boolean
    minCount?: boolean
    shiftTemplate?: boolean | ShiftTemplateDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftTemplateRole"]>

  export type ShiftTemplateRoleSelectScalar = {
    id?: boolean
    shiftTemplateId?: boolean
    roleId?: boolean
    minCount?: boolean
  }

  export type ShiftTemplateRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shiftTemplateId" | "roleId" | "minCount", ExtArgs["result"]["shiftTemplateRole"]>
  export type ShiftTemplateRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shiftTemplate?: boolean | ShiftTemplateDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type ShiftTemplateRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shiftTemplate?: boolean | ShiftTemplateDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type ShiftTemplateRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shiftTemplate?: boolean | ShiftTemplateDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $ShiftTemplateRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShiftTemplateRole"
    objects: {
      shiftTemplate: Prisma.$ShiftTemplatePayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shiftTemplateId: string
      roleId: string
      minCount: number
    }, ExtArgs["result"]["shiftTemplateRole"]>
    composites: {}
  }

  type ShiftTemplateRoleGetPayload<S extends boolean | null | undefined | ShiftTemplateRoleDefaultArgs> = $Result.GetResult<Prisma.$ShiftTemplateRolePayload, S>

  type ShiftTemplateRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShiftTemplateRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShiftTemplateRoleCountAggregateInputType | true
    }

  export interface ShiftTemplateRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShiftTemplateRole'], meta: { name: 'ShiftTemplateRole' } }
    /**
     * Find zero or one ShiftTemplateRole that matches the filter.
     * @param {ShiftTemplateRoleFindUniqueArgs} args - Arguments to find a ShiftTemplateRole
     * @example
     * // Get one ShiftTemplateRole
     * const shiftTemplateRole = await prisma.shiftTemplateRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShiftTemplateRoleFindUniqueArgs>(args: SelectSubset<T, ShiftTemplateRoleFindUniqueArgs<ExtArgs>>): Prisma__ShiftTemplateRoleClient<$Result.GetResult<Prisma.$ShiftTemplateRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShiftTemplateRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShiftTemplateRoleFindUniqueOrThrowArgs} args - Arguments to find a ShiftTemplateRole
     * @example
     * // Get one ShiftTemplateRole
     * const shiftTemplateRole = await prisma.shiftTemplateRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShiftTemplateRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftTemplateRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftTemplateRoleClient<$Result.GetResult<Prisma.$ShiftTemplateRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftTemplateRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateRoleFindFirstArgs} args - Arguments to find a ShiftTemplateRole
     * @example
     * // Get one ShiftTemplateRole
     * const shiftTemplateRole = await prisma.shiftTemplateRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShiftTemplateRoleFindFirstArgs>(args?: SelectSubset<T, ShiftTemplateRoleFindFirstArgs<ExtArgs>>): Prisma__ShiftTemplateRoleClient<$Result.GetResult<Prisma.$ShiftTemplateRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftTemplateRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateRoleFindFirstOrThrowArgs} args - Arguments to find a ShiftTemplateRole
     * @example
     * // Get one ShiftTemplateRole
     * const shiftTemplateRole = await prisma.shiftTemplateRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShiftTemplateRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftTemplateRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftTemplateRoleClient<$Result.GetResult<Prisma.$ShiftTemplateRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShiftTemplateRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShiftTemplateRoles
     * const shiftTemplateRoles = await prisma.shiftTemplateRole.findMany()
     * 
     * // Get first 10 ShiftTemplateRoles
     * const shiftTemplateRoles = await prisma.shiftTemplateRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftTemplateRoleWithIdOnly = await prisma.shiftTemplateRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShiftTemplateRoleFindManyArgs>(args?: SelectSubset<T, ShiftTemplateRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftTemplateRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShiftTemplateRole.
     * @param {ShiftTemplateRoleCreateArgs} args - Arguments to create a ShiftTemplateRole.
     * @example
     * // Create one ShiftTemplateRole
     * const ShiftTemplateRole = await prisma.shiftTemplateRole.create({
     *   data: {
     *     // ... data to create a ShiftTemplateRole
     *   }
     * })
     * 
     */
    create<T extends ShiftTemplateRoleCreateArgs>(args: SelectSubset<T, ShiftTemplateRoleCreateArgs<ExtArgs>>): Prisma__ShiftTemplateRoleClient<$Result.GetResult<Prisma.$ShiftTemplateRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShiftTemplateRoles.
     * @param {ShiftTemplateRoleCreateManyArgs} args - Arguments to create many ShiftTemplateRoles.
     * @example
     * // Create many ShiftTemplateRoles
     * const shiftTemplateRole = await prisma.shiftTemplateRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShiftTemplateRoleCreateManyArgs>(args?: SelectSubset<T, ShiftTemplateRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShiftTemplateRoles and returns the data saved in the database.
     * @param {ShiftTemplateRoleCreateManyAndReturnArgs} args - Arguments to create many ShiftTemplateRoles.
     * @example
     * // Create many ShiftTemplateRoles
     * const shiftTemplateRole = await prisma.shiftTemplateRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShiftTemplateRoles and only return the `id`
     * const shiftTemplateRoleWithIdOnly = await prisma.shiftTemplateRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShiftTemplateRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, ShiftTemplateRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftTemplateRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShiftTemplateRole.
     * @param {ShiftTemplateRoleDeleteArgs} args - Arguments to delete one ShiftTemplateRole.
     * @example
     * // Delete one ShiftTemplateRole
     * const ShiftTemplateRole = await prisma.shiftTemplateRole.delete({
     *   where: {
     *     // ... filter to delete one ShiftTemplateRole
     *   }
     * })
     * 
     */
    delete<T extends ShiftTemplateRoleDeleteArgs>(args: SelectSubset<T, ShiftTemplateRoleDeleteArgs<ExtArgs>>): Prisma__ShiftTemplateRoleClient<$Result.GetResult<Prisma.$ShiftTemplateRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShiftTemplateRole.
     * @param {ShiftTemplateRoleUpdateArgs} args - Arguments to update one ShiftTemplateRole.
     * @example
     * // Update one ShiftTemplateRole
     * const shiftTemplateRole = await prisma.shiftTemplateRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShiftTemplateRoleUpdateArgs>(args: SelectSubset<T, ShiftTemplateRoleUpdateArgs<ExtArgs>>): Prisma__ShiftTemplateRoleClient<$Result.GetResult<Prisma.$ShiftTemplateRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShiftTemplateRoles.
     * @param {ShiftTemplateRoleDeleteManyArgs} args - Arguments to filter ShiftTemplateRoles to delete.
     * @example
     * // Delete a few ShiftTemplateRoles
     * const { count } = await prisma.shiftTemplateRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShiftTemplateRoleDeleteManyArgs>(args?: SelectSubset<T, ShiftTemplateRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftTemplateRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShiftTemplateRoles
     * const shiftTemplateRole = await prisma.shiftTemplateRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShiftTemplateRoleUpdateManyArgs>(args: SelectSubset<T, ShiftTemplateRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftTemplateRoles and returns the data updated in the database.
     * @param {ShiftTemplateRoleUpdateManyAndReturnArgs} args - Arguments to update many ShiftTemplateRoles.
     * @example
     * // Update many ShiftTemplateRoles
     * const shiftTemplateRole = await prisma.shiftTemplateRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShiftTemplateRoles and only return the `id`
     * const shiftTemplateRoleWithIdOnly = await prisma.shiftTemplateRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShiftTemplateRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, ShiftTemplateRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftTemplateRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShiftTemplateRole.
     * @param {ShiftTemplateRoleUpsertArgs} args - Arguments to update or create a ShiftTemplateRole.
     * @example
     * // Update or create a ShiftTemplateRole
     * const shiftTemplateRole = await prisma.shiftTemplateRole.upsert({
     *   create: {
     *     // ... data to create a ShiftTemplateRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShiftTemplateRole we want to update
     *   }
     * })
     */
    upsert<T extends ShiftTemplateRoleUpsertArgs>(args: SelectSubset<T, ShiftTemplateRoleUpsertArgs<ExtArgs>>): Prisma__ShiftTemplateRoleClient<$Result.GetResult<Prisma.$ShiftTemplateRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShiftTemplateRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateRoleCountArgs} args - Arguments to filter ShiftTemplateRoles to count.
     * @example
     * // Count the number of ShiftTemplateRoles
     * const count = await prisma.shiftTemplateRole.count({
     *   where: {
     *     // ... the filter for the ShiftTemplateRoles we want to count
     *   }
     * })
    **/
    count<T extends ShiftTemplateRoleCountArgs>(
      args?: Subset<T, ShiftTemplateRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftTemplateRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShiftTemplateRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShiftTemplateRoleAggregateArgs>(args: Subset<T, ShiftTemplateRoleAggregateArgs>): Prisma.PrismaPromise<GetShiftTemplateRoleAggregateType<T>>

    /**
     * Group by ShiftTemplateRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftTemplateRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShiftTemplateRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftTemplateRoleGroupByArgs['orderBy'] }
        : { orderBy?: ShiftTemplateRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShiftTemplateRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftTemplateRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShiftTemplateRole model
   */
  readonly fields: ShiftTemplateRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShiftTemplateRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftTemplateRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shiftTemplate<T extends ShiftTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShiftTemplateDefaultArgs<ExtArgs>>): Prisma__ShiftTemplateClient<$Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShiftTemplateRole model
   */
  interface ShiftTemplateRoleFieldRefs {
    readonly id: FieldRef<"ShiftTemplateRole", 'String'>
    readonly shiftTemplateId: FieldRef<"ShiftTemplateRole", 'String'>
    readonly roleId: FieldRef<"ShiftTemplateRole", 'String'>
    readonly minCount: FieldRef<"ShiftTemplateRole", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ShiftTemplateRole findUnique
   */
  export type ShiftTemplateRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRole
     */
    select?: ShiftTemplateRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateRole
     */
    omit?: ShiftTemplateRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRoleInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplateRole to fetch.
     */
    where: ShiftTemplateRoleWhereUniqueInput
  }

  /**
   * ShiftTemplateRole findUniqueOrThrow
   */
  export type ShiftTemplateRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRole
     */
    select?: ShiftTemplateRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateRole
     */
    omit?: ShiftTemplateRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRoleInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplateRole to fetch.
     */
    where: ShiftTemplateRoleWhereUniqueInput
  }

  /**
   * ShiftTemplateRole findFirst
   */
  export type ShiftTemplateRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRole
     */
    select?: ShiftTemplateRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateRole
     */
    omit?: ShiftTemplateRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRoleInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplateRole to fetch.
     */
    where?: ShiftTemplateRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftTemplateRoles to fetch.
     */
    orderBy?: ShiftTemplateRoleOrderByWithRelationInput | ShiftTemplateRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftTemplateRoles.
     */
    cursor?: ShiftTemplateRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftTemplateRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftTemplateRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftTemplateRoles.
     */
    distinct?: ShiftTemplateRoleScalarFieldEnum | ShiftTemplateRoleScalarFieldEnum[]
  }

  /**
   * ShiftTemplateRole findFirstOrThrow
   */
  export type ShiftTemplateRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRole
     */
    select?: ShiftTemplateRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateRole
     */
    omit?: ShiftTemplateRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRoleInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplateRole to fetch.
     */
    where?: ShiftTemplateRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftTemplateRoles to fetch.
     */
    orderBy?: ShiftTemplateRoleOrderByWithRelationInput | ShiftTemplateRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftTemplateRoles.
     */
    cursor?: ShiftTemplateRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftTemplateRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftTemplateRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftTemplateRoles.
     */
    distinct?: ShiftTemplateRoleScalarFieldEnum | ShiftTemplateRoleScalarFieldEnum[]
  }

  /**
   * ShiftTemplateRole findMany
   */
  export type ShiftTemplateRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRole
     */
    select?: ShiftTemplateRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateRole
     */
    omit?: ShiftTemplateRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRoleInclude<ExtArgs> | null
    /**
     * Filter, which ShiftTemplateRoles to fetch.
     */
    where?: ShiftTemplateRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftTemplateRoles to fetch.
     */
    orderBy?: ShiftTemplateRoleOrderByWithRelationInput | ShiftTemplateRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShiftTemplateRoles.
     */
    cursor?: ShiftTemplateRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftTemplateRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftTemplateRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftTemplateRoles.
     */
    distinct?: ShiftTemplateRoleScalarFieldEnum | ShiftTemplateRoleScalarFieldEnum[]
  }

  /**
   * ShiftTemplateRole create
   */
  export type ShiftTemplateRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRole
     */
    select?: ShiftTemplateRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateRole
     */
    omit?: ShiftTemplateRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a ShiftTemplateRole.
     */
    data: XOR<ShiftTemplateRoleCreateInput, ShiftTemplateRoleUncheckedCreateInput>
  }

  /**
   * ShiftTemplateRole createMany
   */
  export type ShiftTemplateRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShiftTemplateRoles.
     */
    data: ShiftTemplateRoleCreateManyInput | ShiftTemplateRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShiftTemplateRole createManyAndReturn
   */
  export type ShiftTemplateRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRole
     */
    select?: ShiftTemplateRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateRole
     */
    omit?: ShiftTemplateRoleOmit<ExtArgs> | null
    /**
     * The data used to create many ShiftTemplateRoles.
     */
    data: ShiftTemplateRoleCreateManyInput | ShiftTemplateRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShiftTemplateRole update
   */
  export type ShiftTemplateRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRole
     */
    select?: ShiftTemplateRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateRole
     */
    omit?: ShiftTemplateRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a ShiftTemplateRole.
     */
    data: XOR<ShiftTemplateRoleUpdateInput, ShiftTemplateRoleUncheckedUpdateInput>
    /**
     * Choose, which ShiftTemplateRole to update.
     */
    where: ShiftTemplateRoleWhereUniqueInput
  }

  /**
   * ShiftTemplateRole updateMany
   */
  export type ShiftTemplateRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShiftTemplateRoles.
     */
    data: XOR<ShiftTemplateRoleUpdateManyMutationInput, ShiftTemplateRoleUncheckedUpdateManyInput>
    /**
     * Filter which ShiftTemplateRoles to update
     */
    where?: ShiftTemplateRoleWhereInput
    /**
     * Limit how many ShiftTemplateRoles to update.
     */
    limit?: number
  }

  /**
   * ShiftTemplateRole updateManyAndReturn
   */
  export type ShiftTemplateRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRole
     */
    select?: ShiftTemplateRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateRole
     */
    omit?: ShiftTemplateRoleOmit<ExtArgs> | null
    /**
     * The data used to update ShiftTemplateRoles.
     */
    data: XOR<ShiftTemplateRoleUpdateManyMutationInput, ShiftTemplateRoleUncheckedUpdateManyInput>
    /**
     * Filter which ShiftTemplateRoles to update
     */
    where?: ShiftTemplateRoleWhereInput
    /**
     * Limit how many ShiftTemplateRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShiftTemplateRole upsert
   */
  export type ShiftTemplateRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRole
     */
    select?: ShiftTemplateRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateRole
     */
    omit?: ShiftTemplateRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the ShiftTemplateRole to update in case it exists.
     */
    where: ShiftTemplateRoleWhereUniqueInput
    /**
     * In case the ShiftTemplateRole found by the `where` argument doesn't exist, create a new ShiftTemplateRole with this data.
     */
    create: XOR<ShiftTemplateRoleCreateInput, ShiftTemplateRoleUncheckedCreateInput>
    /**
     * In case the ShiftTemplateRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftTemplateRoleUpdateInput, ShiftTemplateRoleUncheckedUpdateInput>
  }

  /**
   * ShiftTemplateRole delete
   */
  export type ShiftTemplateRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRole
     */
    select?: ShiftTemplateRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateRole
     */
    omit?: ShiftTemplateRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRoleInclude<ExtArgs> | null
    /**
     * Filter which ShiftTemplateRole to delete.
     */
    where: ShiftTemplateRoleWhereUniqueInput
  }

  /**
   * ShiftTemplateRole deleteMany
   */
  export type ShiftTemplateRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftTemplateRoles to delete
     */
    where?: ShiftTemplateRoleWhereInput
    /**
     * Limit how many ShiftTemplateRoles to delete.
     */
    limit?: number
  }

  /**
   * ShiftTemplateRole without action
   */
  export type ShiftTemplateRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftTemplateRole
     */
    select?: ShiftTemplateRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftTemplateRole
     */
    omit?: ShiftTemplateRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftTemplateRoleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StaffScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    createdAt: 'createdAt'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const AvailabilitySubmissionScalarFieldEnum: {
    id: 'id',
    staffId: 'staffId',
    weekStart: 'weekStart',
    rawText: 'rawText',
    createdAt: 'createdAt'
  };

  export type AvailabilitySubmissionScalarFieldEnum = (typeof AvailabilitySubmissionScalarFieldEnum)[keyof typeof AvailabilitySubmissionScalarFieldEnum]


  export const AvailabilitySlotScalarFieldEnum: {
    id: 'id',
    submissionId: 'submissionId',
    staffId: 'staffId',
    date: 'date',
    shift: 'shift',
    available: 'available',
    aiReasoning: 'aiReasoning',
    wasEdited: 'wasEdited'
  };

  export type AvailabilitySlotScalarFieldEnum = (typeof AvailabilitySlotScalarFieldEnum)[keyof typeof AvailabilitySlotScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const ShiftTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startTime: 'startTime',
    endTime: 'endTime',
    minStaff: 'minStaff',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShiftTemplateScalarFieldEnum = (typeof ShiftTemplateScalarFieldEnum)[keyof typeof ShiftTemplateScalarFieldEnum]


  export const ShiftTemplateDayScalarFieldEnum: {
    id: 'id',
    shiftTemplateId: 'shiftTemplateId',
    day: 'day'
  };

  export type ShiftTemplateDayScalarFieldEnum = (typeof ShiftTemplateDayScalarFieldEnum)[keyof typeof ShiftTemplateDayScalarFieldEnum]


  export const ShiftTemplateRoleScalarFieldEnum: {
    id: 'id',
    shiftTemplateId: 'shiftTemplateId',
    roleId: 'roleId',
    minCount: 'minCount'
  };

  export type ShiftTemplateRoleScalarFieldEnum = (typeof ShiftTemplateRoleScalarFieldEnum)[keyof typeof ShiftTemplateRoleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ShiftType'
   */
  export type EnumShiftTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShiftType'>
    


  /**
   * Reference to a field of type 'ShiftType[]'
   */
  export type ListEnumShiftTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShiftType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DayOfWeek'
   */
  export type EnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek'>
    


  /**
   * Reference to a field of type 'DayOfWeek[]'
   */
  export type ListEnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    id?: StringFilter<"Staff"> | string
    name?: StringFilter<"Staff"> | string
    phone?: StringFilter<"Staff"> | string
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    submissions?: AvailabilitySubmissionListRelationFilter
    slots?: AvailabilitySlotListRelationFilter
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    submissions?: AvailabilitySubmissionOrderByRelationAggregateInput
    slots?: AvailabilitySlotOrderByRelationAggregateInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    name?: StringFilter<"Staff"> | string
    phone?: StringFilter<"Staff"> | string
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    submissions?: AvailabilitySubmissionListRelationFilter
    slots?: AvailabilitySlotListRelationFilter
  }, "id">

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    _count?: StaffCountOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Staff"> | string
    name?: StringWithAggregatesFilter<"Staff"> | string
    phone?: StringWithAggregatesFilter<"Staff"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
  }

  export type AvailabilitySubmissionWhereInput = {
    AND?: AvailabilitySubmissionWhereInput | AvailabilitySubmissionWhereInput[]
    OR?: AvailabilitySubmissionWhereInput[]
    NOT?: AvailabilitySubmissionWhereInput | AvailabilitySubmissionWhereInput[]
    id?: StringFilter<"AvailabilitySubmission"> | string
    staffId?: StringFilter<"AvailabilitySubmission"> | string
    weekStart?: DateTimeFilter<"AvailabilitySubmission"> | Date | string
    rawText?: StringFilter<"AvailabilitySubmission"> | string
    createdAt?: DateTimeFilter<"AvailabilitySubmission"> | Date | string
    staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
    slots?: AvailabilitySlotListRelationFilter
  }

  export type AvailabilitySubmissionOrderByWithRelationInput = {
    id?: SortOrder
    staffId?: SortOrder
    weekStart?: SortOrder
    rawText?: SortOrder
    createdAt?: SortOrder
    staff?: StaffOrderByWithRelationInput
    slots?: AvailabilitySlotOrderByRelationAggregateInput
  }

  export type AvailabilitySubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailabilitySubmissionWhereInput | AvailabilitySubmissionWhereInput[]
    OR?: AvailabilitySubmissionWhereInput[]
    NOT?: AvailabilitySubmissionWhereInput | AvailabilitySubmissionWhereInput[]
    staffId?: StringFilter<"AvailabilitySubmission"> | string
    weekStart?: DateTimeFilter<"AvailabilitySubmission"> | Date | string
    rawText?: StringFilter<"AvailabilitySubmission"> | string
    createdAt?: DateTimeFilter<"AvailabilitySubmission"> | Date | string
    staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
    slots?: AvailabilitySlotListRelationFilter
  }, "id">

  export type AvailabilitySubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    staffId?: SortOrder
    weekStart?: SortOrder
    rawText?: SortOrder
    createdAt?: SortOrder
    _count?: AvailabilitySubmissionCountOrderByAggregateInput
    _max?: AvailabilitySubmissionMaxOrderByAggregateInput
    _min?: AvailabilitySubmissionMinOrderByAggregateInput
  }

  export type AvailabilitySubmissionScalarWhereWithAggregatesInput = {
    AND?: AvailabilitySubmissionScalarWhereWithAggregatesInput | AvailabilitySubmissionScalarWhereWithAggregatesInput[]
    OR?: AvailabilitySubmissionScalarWhereWithAggregatesInput[]
    NOT?: AvailabilitySubmissionScalarWhereWithAggregatesInput | AvailabilitySubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailabilitySubmission"> | string
    staffId?: StringWithAggregatesFilter<"AvailabilitySubmission"> | string
    weekStart?: DateTimeWithAggregatesFilter<"AvailabilitySubmission"> | Date | string
    rawText?: StringWithAggregatesFilter<"AvailabilitySubmission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AvailabilitySubmission"> | Date | string
  }

  export type AvailabilitySlotWhereInput = {
    AND?: AvailabilitySlotWhereInput | AvailabilitySlotWhereInput[]
    OR?: AvailabilitySlotWhereInput[]
    NOT?: AvailabilitySlotWhereInput | AvailabilitySlotWhereInput[]
    id?: StringFilter<"AvailabilitySlot"> | string
    submissionId?: StringFilter<"AvailabilitySlot"> | string
    staffId?: StringFilter<"AvailabilitySlot"> | string
    date?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    shift?: EnumShiftTypeFilter<"AvailabilitySlot"> | $Enums.ShiftType
    available?: BoolFilter<"AvailabilitySlot"> | boolean
    aiReasoning?: StringNullableFilter<"AvailabilitySlot"> | string | null
    wasEdited?: BoolFilter<"AvailabilitySlot"> | boolean
    submission?: XOR<AvailabilitySubmissionScalarRelationFilter, AvailabilitySubmissionWhereInput>
    staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
  }

  export type AvailabilitySlotOrderByWithRelationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    staffId?: SortOrder
    date?: SortOrder
    shift?: SortOrder
    available?: SortOrder
    aiReasoning?: SortOrderInput | SortOrder
    wasEdited?: SortOrder
    submission?: AvailabilitySubmissionOrderByWithRelationInput
    staff?: StaffOrderByWithRelationInput
  }

  export type AvailabilitySlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailabilitySlotWhereInput | AvailabilitySlotWhereInput[]
    OR?: AvailabilitySlotWhereInput[]
    NOT?: AvailabilitySlotWhereInput | AvailabilitySlotWhereInput[]
    submissionId?: StringFilter<"AvailabilitySlot"> | string
    staffId?: StringFilter<"AvailabilitySlot"> | string
    date?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    shift?: EnumShiftTypeFilter<"AvailabilitySlot"> | $Enums.ShiftType
    available?: BoolFilter<"AvailabilitySlot"> | boolean
    aiReasoning?: StringNullableFilter<"AvailabilitySlot"> | string | null
    wasEdited?: BoolFilter<"AvailabilitySlot"> | boolean
    submission?: XOR<AvailabilitySubmissionScalarRelationFilter, AvailabilitySubmissionWhereInput>
    staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
  }, "id">

  export type AvailabilitySlotOrderByWithAggregationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    staffId?: SortOrder
    date?: SortOrder
    shift?: SortOrder
    available?: SortOrder
    aiReasoning?: SortOrderInput | SortOrder
    wasEdited?: SortOrder
    _count?: AvailabilitySlotCountOrderByAggregateInput
    _max?: AvailabilitySlotMaxOrderByAggregateInput
    _min?: AvailabilitySlotMinOrderByAggregateInput
  }

  export type AvailabilitySlotScalarWhereWithAggregatesInput = {
    AND?: AvailabilitySlotScalarWhereWithAggregatesInput | AvailabilitySlotScalarWhereWithAggregatesInput[]
    OR?: AvailabilitySlotScalarWhereWithAggregatesInput[]
    NOT?: AvailabilitySlotScalarWhereWithAggregatesInput | AvailabilitySlotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailabilitySlot"> | string
    submissionId?: StringWithAggregatesFilter<"AvailabilitySlot"> | string
    staffId?: StringWithAggregatesFilter<"AvailabilitySlot"> | string
    date?: DateTimeWithAggregatesFilter<"AvailabilitySlot"> | Date | string
    shift?: EnumShiftTypeWithAggregatesFilter<"AvailabilitySlot"> | $Enums.ShiftType
    available?: BoolWithAggregatesFilter<"AvailabilitySlot"> | boolean
    aiReasoning?: StringNullableWithAggregatesFilter<"AvailabilitySlot"> | string | null
    wasEdited?: BoolWithAggregatesFilter<"AvailabilitySlot"> | boolean
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    shiftTemplateRoles?: ShiftTemplateRoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    shiftTemplateRoles?: ShiftTemplateRoleOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    createdAt?: DateTimeFilter<"Role"> | Date | string
    shiftTemplateRoles?: ShiftTemplateRoleListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type ShiftTemplateWhereInput = {
    AND?: ShiftTemplateWhereInput | ShiftTemplateWhereInput[]
    OR?: ShiftTemplateWhereInput[]
    NOT?: ShiftTemplateWhereInput | ShiftTemplateWhereInput[]
    id?: StringFilter<"ShiftTemplate"> | string
    name?: StringFilter<"ShiftTemplate"> | string
    startTime?: StringFilter<"ShiftTemplate"> | string
    endTime?: StringFilter<"ShiftTemplate"> | string
    minStaff?: IntFilter<"ShiftTemplate"> | number
    createdAt?: DateTimeFilter<"ShiftTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ShiftTemplate"> | Date | string
    days?: ShiftTemplateDayListRelationFilter
    roles?: ShiftTemplateRoleListRelationFilter
  }

  export type ShiftTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    minStaff?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    days?: ShiftTemplateDayOrderByRelationAggregateInput
    roles?: ShiftTemplateRoleOrderByRelationAggregateInput
  }

  export type ShiftTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShiftTemplateWhereInput | ShiftTemplateWhereInput[]
    OR?: ShiftTemplateWhereInput[]
    NOT?: ShiftTemplateWhereInput | ShiftTemplateWhereInput[]
    name?: StringFilter<"ShiftTemplate"> | string
    startTime?: StringFilter<"ShiftTemplate"> | string
    endTime?: StringFilter<"ShiftTemplate"> | string
    minStaff?: IntFilter<"ShiftTemplate"> | number
    createdAt?: DateTimeFilter<"ShiftTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ShiftTemplate"> | Date | string
    days?: ShiftTemplateDayListRelationFilter
    roles?: ShiftTemplateRoleListRelationFilter
  }, "id">

  export type ShiftTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    minStaff?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShiftTemplateCountOrderByAggregateInput
    _avg?: ShiftTemplateAvgOrderByAggregateInput
    _max?: ShiftTemplateMaxOrderByAggregateInput
    _min?: ShiftTemplateMinOrderByAggregateInput
    _sum?: ShiftTemplateSumOrderByAggregateInput
  }

  export type ShiftTemplateScalarWhereWithAggregatesInput = {
    AND?: ShiftTemplateScalarWhereWithAggregatesInput | ShiftTemplateScalarWhereWithAggregatesInput[]
    OR?: ShiftTemplateScalarWhereWithAggregatesInput[]
    NOT?: ShiftTemplateScalarWhereWithAggregatesInput | ShiftTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShiftTemplate"> | string
    name?: StringWithAggregatesFilter<"ShiftTemplate"> | string
    startTime?: StringWithAggregatesFilter<"ShiftTemplate"> | string
    endTime?: StringWithAggregatesFilter<"ShiftTemplate"> | string
    minStaff?: IntWithAggregatesFilter<"ShiftTemplate"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ShiftTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShiftTemplate"> | Date | string
  }

  export type ShiftTemplateDayWhereInput = {
    AND?: ShiftTemplateDayWhereInput | ShiftTemplateDayWhereInput[]
    OR?: ShiftTemplateDayWhereInput[]
    NOT?: ShiftTemplateDayWhereInput | ShiftTemplateDayWhereInput[]
    id?: StringFilter<"ShiftTemplateDay"> | string
    shiftTemplateId?: StringFilter<"ShiftTemplateDay"> | string
    day?: EnumDayOfWeekFilter<"ShiftTemplateDay"> | $Enums.DayOfWeek
    shiftTemplate?: XOR<ShiftTemplateScalarRelationFilter, ShiftTemplateWhereInput>
  }

  export type ShiftTemplateDayOrderByWithRelationInput = {
    id?: SortOrder
    shiftTemplateId?: SortOrder
    day?: SortOrder
    shiftTemplate?: ShiftTemplateOrderByWithRelationInput
  }

  export type ShiftTemplateDayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shiftTemplateId_day?: ShiftTemplateDayShiftTemplateIdDayCompoundUniqueInput
    AND?: ShiftTemplateDayWhereInput | ShiftTemplateDayWhereInput[]
    OR?: ShiftTemplateDayWhereInput[]
    NOT?: ShiftTemplateDayWhereInput | ShiftTemplateDayWhereInput[]
    shiftTemplateId?: StringFilter<"ShiftTemplateDay"> | string
    day?: EnumDayOfWeekFilter<"ShiftTemplateDay"> | $Enums.DayOfWeek
    shiftTemplate?: XOR<ShiftTemplateScalarRelationFilter, ShiftTemplateWhereInput>
  }, "id" | "shiftTemplateId_day">

  export type ShiftTemplateDayOrderByWithAggregationInput = {
    id?: SortOrder
    shiftTemplateId?: SortOrder
    day?: SortOrder
    _count?: ShiftTemplateDayCountOrderByAggregateInput
    _max?: ShiftTemplateDayMaxOrderByAggregateInput
    _min?: ShiftTemplateDayMinOrderByAggregateInput
  }

  export type ShiftTemplateDayScalarWhereWithAggregatesInput = {
    AND?: ShiftTemplateDayScalarWhereWithAggregatesInput | ShiftTemplateDayScalarWhereWithAggregatesInput[]
    OR?: ShiftTemplateDayScalarWhereWithAggregatesInput[]
    NOT?: ShiftTemplateDayScalarWhereWithAggregatesInput | ShiftTemplateDayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShiftTemplateDay"> | string
    shiftTemplateId?: StringWithAggregatesFilter<"ShiftTemplateDay"> | string
    day?: EnumDayOfWeekWithAggregatesFilter<"ShiftTemplateDay"> | $Enums.DayOfWeek
  }

  export type ShiftTemplateRoleWhereInput = {
    AND?: ShiftTemplateRoleWhereInput | ShiftTemplateRoleWhereInput[]
    OR?: ShiftTemplateRoleWhereInput[]
    NOT?: ShiftTemplateRoleWhereInput | ShiftTemplateRoleWhereInput[]
    id?: StringFilter<"ShiftTemplateRole"> | string
    shiftTemplateId?: StringFilter<"ShiftTemplateRole"> | string
    roleId?: StringFilter<"ShiftTemplateRole"> | string
    minCount?: IntFilter<"ShiftTemplateRole"> | number
    shiftTemplate?: XOR<ShiftTemplateScalarRelationFilter, ShiftTemplateWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type ShiftTemplateRoleOrderByWithRelationInput = {
    id?: SortOrder
    shiftTemplateId?: SortOrder
    roleId?: SortOrder
    minCount?: SortOrder
    shiftTemplate?: ShiftTemplateOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type ShiftTemplateRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shiftTemplateId_roleId?: ShiftTemplateRoleShiftTemplateIdRoleIdCompoundUniqueInput
    AND?: ShiftTemplateRoleWhereInput | ShiftTemplateRoleWhereInput[]
    OR?: ShiftTemplateRoleWhereInput[]
    NOT?: ShiftTemplateRoleWhereInput | ShiftTemplateRoleWhereInput[]
    shiftTemplateId?: StringFilter<"ShiftTemplateRole"> | string
    roleId?: StringFilter<"ShiftTemplateRole"> | string
    minCount?: IntFilter<"ShiftTemplateRole"> | number
    shiftTemplate?: XOR<ShiftTemplateScalarRelationFilter, ShiftTemplateWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "shiftTemplateId_roleId">

  export type ShiftTemplateRoleOrderByWithAggregationInput = {
    id?: SortOrder
    shiftTemplateId?: SortOrder
    roleId?: SortOrder
    minCount?: SortOrder
    _count?: ShiftTemplateRoleCountOrderByAggregateInput
    _avg?: ShiftTemplateRoleAvgOrderByAggregateInput
    _max?: ShiftTemplateRoleMaxOrderByAggregateInput
    _min?: ShiftTemplateRoleMinOrderByAggregateInput
    _sum?: ShiftTemplateRoleSumOrderByAggregateInput
  }

  export type ShiftTemplateRoleScalarWhereWithAggregatesInput = {
    AND?: ShiftTemplateRoleScalarWhereWithAggregatesInput | ShiftTemplateRoleScalarWhereWithAggregatesInput[]
    OR?: ShiftTemplateRoleScalarWhereWithAggregatesInput[]
    NOT?: ShiftTemplateRoleScalarWhereWithAggregatesInput | ShiftTemplateRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShiftTemplateRole"> | string
    shiftTemplateId?: StringWithAggregatesFilter<"ShiftTemplateRole"> | string
    roleId?: StringWithAggregatesFilter<"ShiftTemplateRole"> | string
    minCount?: IntWithAggregatesFilter<"ShiftTemplateRole"> | number
  }

  export type StaffCreateInput = {
    id?: string
    name: string
    phone: string
    createdAt?: Date | string
    submissions?: AvailabilitySubmissionCreateNestedManyWithoutStaffInput
    slots?: AvailabilitySlotCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    createdAt?: Date | string
    submissions?: AvailabilitySubmissionUncheckedCreateNestedManyWithoutStaffInput
    slots?: AvailabilitySlotUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: AvailabilitySubmissionUpdateManyWithoutStaffNestedInput
    slots?: AvailabilitySlotUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: AvailabilitySubmissionUncheckedUpdateManyWithoutStaffNestedInput
    slots?: AvailabilitySlotUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type StaffCreateManyInput = {
    id?: string
    name: string
    phone: string
    createdAt?: Date | string
  }

  export type StaffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilitySubmissionCreateInput = {
    id?: string
    weekStart: Date | string
    rawText: string
    createdAt?: Date | string
    staff: StaffCreateNestedOneWithoutSubmissionsInput
    slots?: AvailabilitySlotCreateNestedManyWithoutSubmissionInput
  }

  export type AvailabilitySubmissionUncheckedCreateInput = {
    id?: string
    staffId: string
    weekStart: Date | string
    rawText: string
    createdAt?: Date | string
    slots?: AvailabilitySlotUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type AvailabilitySubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    rawText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUpdateOneRequiredWithoutSubmissionsNestedInput
    slots?: AvailabilitySlotUpdateManyWithoutSubmissionNestedInput
  }

  export type AvailabilitySubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    rawText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: AvailabilitySlotUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type AvailabilitySubmissionCreateManyInput = {
    id?: string
    staffId: string
    weekStart: Date | string
    rawText: string
    createdAt?: Date | string
  }

  export type AvailabilitySubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    rawText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilitySubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    rawText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilitySlotCreateInput = {
    id?: string
    date: Date | string
    shift: $Enums.ShiftType
    available: boolean
    aiReasoning?: string | null
    wasEdited?: boolean
    submission: AvailabilitySubmissionCreateNestedOneWithoutSlotsInput
    staff: StaffCreateNestedOneWithoutSlotsInput
  }

  export type AvailabilitySlotUncheckedCreateInput = {
    id?: string
    submissionId: string
    staffId: string
    date: Date | string
    shift: $Enums.ShiftType
    available: boolean
    aiReasoning?: string | null
    wasEdited?: boolean
  }

  export type AvailabilitySlotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    available?: BoolFieldUpdateOperationsInput | boolean
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    wasEdited?: BoolFieldUpdateOperationsInput | boolean
    submission?: AvailabilitySubmissionUpdateOneRequiredWithoutSlotsNestedInput
    staff?: StaffUpdateOneRequiredWithoutSlotsNestedInput
  }

  export type AvailabilitySlotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    available?: BoolFieldUpdateOperationsInput | boolean
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    wasEdited?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvailabilitySlotCreateManyInput = {
    id?: string
    submissionId: string
    staffId: string
    date: Date | string
    shift: $Enums.ShiftType
    available: boolean
    aiReasoning?: string | null
    wasEdited?: boolean
  }

  export type AvailabilitySlotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    available?: BoolFieldUpdateOperationsInput | boolean
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    wasEdited?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvailabilitySlotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    available?: BoolFieldUpdateOperationsInput | boolean
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    wasEdited?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    shiftTemplateRoles?: ShiftTemplateRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    shiftTemplateRoles?: ShiftTemplateRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftTemplateRoles?: ShiftTemplateRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftTemplateRoles?: ShiftTemplateRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftTemplateCreateInput = {
    id?: string
    name: string
    startTime: string
    endTime: string
    minStaff?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: ShiftTemplateDayCreateNestedManyWithoutShiftTemplateInput
    roles?: ShiftTemplateRoleCreateNestedManyWithoutShiftTemplateInput
  }

  export type ShiftTemplateUncheckedCreateInput = {
    id?: string
    name: string
    startTime: string
    endTime: string
    minStaff?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: ShiftTemplateDayUncheckedCreateNestedManyWithoutShiftTemplateInput
    roles?: ShiftTemplateRoleUncheckedCreateNestedManyWithoutShiftTemplateInput
  }

  export type ShiftTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    minStaff?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: ShiftTemplateDayUpdateManyWithoutShiftTemplateNestedInput
    roles?: ShiftTemplateRoleUpdateManyWithoutShiftTemplateNestedInput
  }

  export type ShiftTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    minStaff?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: ShiftTemplateDayUncheckedUpdateManyWithoutShiftTemplateNestedInput
    roles?: ShiftTemplateRoleUncheckedUpdateManyWithoutShiftTemplateNestedInput
  }

  export type ShiftTemplateCreateManyInput = {
    id?: string
    name: string
    startTime: string
    endTime: string
    minStaff?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    minStaff?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    minStaff?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftTemplateDayCreateInput = {
    id?: string
    day: $Enums.DayOfWeek
    shiftTemplate: ShiftTemplateCreateNestedOneWithoutDaysInput
  }

  export type ShiftTemplateDayUncheckedCreateInput = {
    id?: string
    shiftTemplateId: string
    day: $Enums.DayOfWeek
  }

  export type ShiftTemplateDayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    shiftTemplate?: ShiftTemplateUpdateOneRequiredWithoutDaysNestedInput
  }

  export type ShiftTemplateDayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftTemplateId?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
  }

  export type ShiftTemplateDayCreateManyInput = {
    id?: string
    shiftTemplateId: string
    day: $Enums.DayOfWeek
  }

  export type ShiftTemplateDayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
  }

  export type ShiftTemplateDayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftTemplateId?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
  }

  export type ShiftTemplateRoleCreateInput = {
    id?: string
    minCount?: number
    shiftTemplate: ShiftTemplateCreateNestedOneWithoutRolesInput
    role: RoleCreateNestedOneWithoutShiftTemplateRolesInput
  }

  export type ShiftTemplateRoleUncheckedCreateInput = {
    id?: string
    shiftTemplateId: string
    roleId: string
    minCount?: number
  }

  export type ShiftTemplateRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    minCount?: IntFieldUpdateOperationsInput | number
    shiftTemplate?: ShiftTemplateUpdateOneRequiredWithoutRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutShiftTemplateRolesNestedInput
  }

  export type ShiftTemplateRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftTemplateId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    minCount?: IntFieldUpdateOperationsInput | number
  }

  export type ShiftTemplateRoleCreateManyInput = {
    id?: string
    shiftTemplateId: string
    roleId: string
    minCount?: number
  }

  export type ShiftTemplateRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    minCount?: IntFieldUpdateOperationsInput | number
  }

  export type ShiftTemplateRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftTemplateId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    minCount?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AvailabilitySubmissionListRelationFilter = {
    every?: AvailabilitySubmissionWhereInput
    some?: AvailabilitySubmissionWhereInput
    none?: AvailabilitySubmissionWhereInput
  }

  export type AvailabilitySlotListRelationFilter = {
    every?: AvailabilitySlotWhereInput
    some?: AvailabilitySlotWhereInput
    none?: AvailabilitySlotWhereInput
  }

  export type AvailabilitySubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailabilitySlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StaffScalarRelationFilter = {
    is?: StaffWhereInput
    isNot?: StaffWhereInput
  }

  export type AvailabilitySubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    weekStart?: SortOrder
    rawText?: SortOrder
    createdAt?: SortOrder
  }

  export type AvailabilitySubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    weekStart?: SortOrder
    rawText?: SortOrder
    createdAt?: SortOrder
  }

  export type AvailabilitySubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    weekStart?: SortOrder
    rawText?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumShiftTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftType | EnumShiftTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftTypeFilter<$PrismaModel> | $Enums.ShiftType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AvailabilitySubmissionScalarRelationFilter = {
    is?: AvailabilitySubmissionWhereInput
    isNot?: AvailabilitySubmissionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AvailabilitySlotCountOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    staffId?: SortOrder
    date?: SortOrder
    shift?: SortOrder
    available?: SortOrder
    aiReasoning?: SortOrder
    wasEdited?: SortOrder
  }

  export type AvailabilitySlotMaxOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    staffId?: SortOrder
    date?: SortOrder
    shift?: SortOrder
    available?: SortOrder
    aiReasoning?: SortOrder
    wasEdited?: SortOrder
  }

  export type AvailabilitySlotMinOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    staffId?: SortOrder
    date?: SortOrder
    shift?: SortOrder
    available?: SortOrder
    aiReasoning?: SortOrder
    wasEdited?: SortOrder
  }

  export type EnumShiftTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftType | EnumShiftTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftTypeWithAggregatesFilter<$PrismaModel> | $Enums.ShiftType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShiftTypeFilter<$PrismaModel>
    _max?: NestedEnumShiftTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ShiftTemplateRoleListRelationFilter = {
    every?: ShiftTemplateRoleWhereInput
    some?: ShiftTemplateRoleWhereInput
    none?: ShiftTemplateRoleWhereInput
  }

  export type ShiftTemplateRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ShiftTemplateDayListRelationFilter = {
    every?: ShiftTemplateDayWhereInput
    some?: ShiftTemplateDayWhereInput
    none?: ShiftTemplateDayWhereInput
  }

  export type ShiftTemplateDayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShiftTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    minStaff?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftTemplateAvgOrderByAggregateInput = {
    minStaff?: SortOrder
  }

  export type ShiftTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    minStaff?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    minStaff?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftTemplateSumOrderByAggregateInput = {
    minStaff?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type ShiftTemplateScalarRelationFilter = {
    is?: ShiftTemplateWhereInput
    isNot?: ShiftTemplateWhereInput
  }

  export type ShiftTemplateDayShiftTemplateIdDayCompoundUniqueInput = {
    shiftTemplateId: string
    day: $Enums.DayOfWeek
  }

  export type ShiftTemplateDayCountOrderByAggregateInput = {
    id?: SortOrder
    shiftTemplateId?: SortOrder
    day?: SortOrder
  }

  export type ShiftTemplateDayMaxOrderByAggregateInput = {
    id?: SortOrder
    shiftTemplateId?: SortOrder
    day?: SortOrder
  }

  export type ShiftTemplateDayMinOrderByAggregateInput = {
    id?: SortOrder
    shiftTemplateId?: SortOrder
    day?: SortOrder
  }

  export type EnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type ShiftTemplateRoleShiftTemplateIdRoleIdCompoundUniqueInput = {
    shiftTemplateId: string
    roleId: string
  }

  export type ShiftTemplateRoleCountOrderByAggregateInput = {
    id?: SortOrder
    shiftTemplateId?: SortOrder
    roleId?: SortOrder
    minCount?: SortOrder
  }

  export type ShiftTemplateRoleAvgOrderByAggregateInput = {
    minCount?: SortOrder
  }

  export type ShiftTemplateRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    shiftTemplateId?: SortOrder
    roleId?: SortOrder
    minCount?: SortOrder
  }

  export type ShiftTemplateRoleMinOrderByAggregateInput = {
    id?: SortOrder
    shiftTemplateId?: SortOrder
    roleId?: SortOrder
    minCount?: SortOrder
  }

  export type ShiftTemplateRoleSumOrderByAggregateInput = {
    minCount?: SortOrder
  }

  export type AvailabilitySubmissionCreateNestedManyWithoutStaffInput = {
    create?: XOR<AvailabilitySubmissionCreateWithoutStaffInput, AvailabilitySubmissionUncheckedCreateWithoutStaffInput> | AvailabilitySubmissionCreateWithoutStaffInput[] | AvailabilitySubmissionUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AvailabilitySubmissionCreateOrConnectWithoutStaffInput | AvailabilitySubmissionCreateOrConnectWithoutStaffInput[]
    createMany?: AvailabilitySubmissionCreateManyStaffInputEnvelope
    connect?: AvailabilitySubmissionWhereUniqueInput | AvailabilitySubmissionWhereUniqueInput[]
  }

  export type AvailabilitySlotCreateNestedManyWithoutStaffInput = {
    create?: XOR<AvailabilitySlotCreateWithoutStaffInput, AvailabilitySlotUncheckedCreateWithoutStaffInput> | AvailabilitySlotCreateWithoutStaffInput[] | AvailabilitySlotUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutStaffInput | AvailabilitySlotCreateOrConnectWithoutStaffInput[]
    createMany?: AvailabilitySlotCreateManyStaffInputEnvelope
    connect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
  }

  export type AvailabilitySubmissionUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<AvailabilitySubmissionCreateWithoutStaffInput, AvailabilitySubmissionUncheckedCreateWithoutStaffInput> | AvailabilitySubmissionCreateWithoutStaffInput[] | AvailabilitySubmissionUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AvailabilitySubmissionCreateOrConnectWithoutStaffInput | AvailabilitySubmissionCreateOrConnectWithoutStaffInput[]
    createMany?: AvailabilitySubmissionCreateManyStaffInputEnvelope
    connect?: AvailabilitySubmissionWhereUniqueInput | AvailabilitySubmissionWhereUniqueInput[]
  }

  export type AvailabilitySlotUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<AvailabilitySlotCreateWithoutStaffInput, AvailabilitySlotUncheckedCreateWithoutStaffInput> | AvailabilitySlotCreateWithoutStaffInput[] | AvailabilitySlotUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutStaffInput | AvailabilitySlotCreateOrConnectWithoutStaffInput[]
    createMany?: AvailabilitySlotCreateManyStaffInputEnvelope
    connect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AvailabilitySubmissionUpdateManyWithoutStaffNestedInput = {
    create?: XOR<AvailabilitySubmissionCreateWithoutStaffInput, AvailabilitySubmissionUncheckedCreateWithoutStaffInput> | AvailabilitySubmissionCreateWithoutStaffInput[] | AvailabilitySubmissionUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AvailabilitySubmissionCreateOrConnectWithoutStaffInput | AvailabilitySubmissionCreateOrConnectWithoutStaffInput[]
    upsert?: AvailabilitySubmissionUpsertWithWhereUniqueWithoutStaffInput | AvailabilitySubmissionUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: AvailabilitySubmissionCreateManyStaffInputEnvelope
    set?: AvailabilitySubmissionWhereUniqueInput | AvailabilitySubmissionWhereUniqueInput[]
    disconnect?: AvailabilitySubmissionWhereUniqueInput | AvailabilitySubmissionWhereUniqueInput[]
    delete?: AvailabilitySubmissionWhereUniqueInput | AvailabilitySubmissionWhereUniqueInput[]
    connect?: AvailabilitySubmissionWhereUniqueInput | AvailabilitySubmissionWhereUniqueInput[]
    update?: AvailabilitySubmissionUpdateWithWhereUniqueWithoutStaffInput | AvailabilitySubmissionUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: AvailabilitySubmissionUpdateManyWithWhereWithoutStaffInput | AvailabilitySubmissionUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: AvailabilitySubmissionScalarWhereInput | AvailabilitySubmissionScalarWhereInput[]
  }

  export type AvailabilitySlotUpdateManyWithoutStaffNestedInput = {
    create?: XOR<AvailabilitySlotCreateWithoutStaffInput, AvailabilitySlotUncheckedCreateWithoutStaffInput> | AvailabilitySlotCreateWithoutStaffInput[] | AvailabilitySlotUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutStaffInput | AvailabilitySlotCreateOrConnectWithoutStaffInput[]
    upsert?: AvailabilitySlotUpsertWithWhereUniqueWithoutStaffInput | AvailabilitySlotUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: AvailabilitySlotCreateManyStaffInputEnvelope
    set?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    disconnect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    delete?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    connect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    update?: AvailabilitySlotUpdateWithWhereUniqueWithoutStaffInput | AvailabilitySlotUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: AvailabilitySlotUpdateManyWithWhereWithoutStaffInput | AvailabilitySlotUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: AvailabilitySlotScalarWhereInput | AvailabilitySlotScalarWhereInput[]
  }

  export type AvailabilitySubmissionUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<AvailabilitySubmissionCreateWithoutStaffInput, AvailabilitySubmissionUncheckedCreateWithoutStaffInput> | AvailabilitySubmissionCreateWithoutStaffInput[] | AvailabilitySubmissionUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AvailabilitySubmissionCreateOrConnectWithoutStaffInput | AvailabilitySubmissionCreateOrConnectWithoutStaffInput[]
    upsert?: AvailabilitySubmissionUpsertWithWhereUniqueWithoutStaffInput | AvailabilitySubmissionUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: AvailabilitySubmissionCreateManyStaffInputEnvelope
    set?: AvailabilitySubmissionWhereUniqueInput | AvailabilitySubmissionWhereUniqueInput[]
    disconnect?: AvailabilitySubmissionWhereUniqueInput | AvailabilitySubmissionWhereUniqueInput[]
    delete?: AvailabilitySubmissionWhereUniqueInput | AvailabilitySubmissionWhereUniqueInput[]
    connect?: AvailabilitySubmissionWhereUniqueInput | AvailabilitySubmissionWhereUniqueInput[]
    update?: AvailabilitySubmissionUpdateWithWhereUniqueWithoutStaffInput | AvailabilitySubmissionUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: AvailabilitySubmissionUpdateManyWithWhereWithoutStaffInput | AvailabilitySubmissionUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: AvailabilitySubmissionScalarWhereInput | AvailabilitySubmissionScalarWhereInput[]
  }

  export type AvailabilitySlotUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<AvailabilitySlotCreateWithoutStaffInput, AvailabilitySlotUncheckedCreateWithoutStaffInput> | AvailabilitySlotCreateWithoutStaffInput[] | AvailabilitySlotUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutStaffInput | AvailabilitySlotCreateOrConnectWithoutStaffInput[]
    upsert?: AvailabilitySlotUpsertWithWhereUniqueWithoutStaffInput | AvailabilitySlotUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: AvailabilitySlotCreateManyStaffInputEnvelope
    set?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    disconnect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    delete?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    connect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    update?: AvailabilitySlotUpdateWithWhereUniqueWithoutStaffInput | AvailabilitySlotUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: AvailabilitySlotUpdateManyWithWhereWithoutStaffInput | AvailabilitySlotUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: AvailabilitySlotScalarWhereInput | AvailabilitySlotScalarWhereInput[]
  }

  export type StaffCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<StaffCreateWithoutSubmissionsInput, StaffUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutSubmissionsInput
    connect?: StaffWhereUniqueInput
  }

  export type AvailabilitySlotCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<AvailabilitySlotCreateWithoutSubmissionInput, AvailabilitySlotUncheckedCreateWithoutSubmissionInput> | AvailabilitySlotCreateWithoutSubmissionInput[] | AvailabilitySlotUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutSubmissionInput | AvailabilitySlotCreateOrConnectWithoutSubmissionInput[]
    createMany?: AvailabilitySlotCreateManySubmissionInputEnvelope
    connect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
  }

  export type AvailabilitySlotUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<AvailabilitySlotCreateWithoutSubmissionInput, AvailabilitySlotUncheckedCreateWithoutSubmissionInput> | AvailabilitySlotCreateWithoutSubmissionInput[] | AvailabilitySlotUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutSubmissionInput | AvailabilitySlotCreateOrConnectWithoutSubmissionInput[]
    createMany?: AvailabilitySlotCreateManySubmissionInputEnvelope
    connect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
  }

  export type StaffUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<StaffCreateWithoutSubmissionsInput, StaffUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutSubmissionsInput
    upsert?: StaffUpsertWithoutSubmissionsInput
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutSubmissionsInput, StaffUpdateWithoutSubmissionsInput>, StaffUncheckedUpdateWithoutSubmissionsInput>
  }

  export type AvailabilitySlotUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<AvailabilitySlotCreateWithoutSubmissionInput, AvailabilitySlotUncheckedCreateWithoutSubmissionInput> | AvailabilitySlotCreateWithoutSubmissionInput[] | AvailabilitySlotUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutSubmissionInput | AvailabilitySlotCreateOrConnectWithoutSubmissionInput[]
    upsert?: AvailabilitySlotUpsertWithWhereUniqueWithoutSubmissionInput | AvailabilitySlotUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: AvailabilitySlotCreateManySubmissionInputEnvelope
    set?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    disconnect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    delete?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    connect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    update?: AvailabilitySlotUpdateWithWhereUniqueWithoutSubmissionInput | AvailabilitySlotUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: AvailabilitySlotUpdateManyWithWhereWithoutSubmissionInput | AvailabilitySlotUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: AvailabilitySlotScalarWhereInput | AvailabilitySlotScalarWhereInput[]
  }

  export type AvailabilitySlotUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<AvailabilitySlotCreateWithoutSubmissionInput, AvailabilitySlotUncheckedCreateWithoutSubmissionInput> | AvailabilitySlotCreateWithoutSubmissionInput[] | AvailabilitySlotUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutSubmissionInput | AvailabilitySlotCreateOrConnectWithoutSubmissionInput[]
    upsert?: AvailabilitySlotUpsertWithWhereUniqueWithoutSubmissionInput | AvailabilitySlotUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: AvailabilitySlotCreateManySubmissionInputEnvelope
    set?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    disconnect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    delete?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    connect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    update?: AvailabilitySlotUpdateWithWhereUniqueWithoutSubmissionInput | AvailabilitySlotUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: AvailabilitySlotUpdateManyWithWhereWithoutSubmissionInput | AvailabilitySlotUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: AvailabilitySlotScalarWhereInput | AvailabilitySlotScalarWhereInput[]
  }

  export type AvailabilitySubmissionCreateNestedOneWithoutSlotsInput = {
    create?: XOR<AvailabilitySubmissionCreateWithoutSlotsInput, AvailabilitySubmissionUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: AvailabilitySubmissionCreateOrConnectWithoutSlotsInput
    connect?: AvailabilitySubmissionWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutSlotsInput = {
    create?: XOR<StaffCreateWithoutSlotsInput, StaffUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutSlotsInput
    connect?: StaffWhereUniqueInput
  }

  export type EnumShiftTypeFieldUpdateOperationsInput = {
    set?: $Enums.ShiftType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AvailabilitySubmissionUpdateOneRequiredWithoutSlotsNestedInput = {
    create?: XOR<AvailabilitySubmissionCreateWithoutSlotsInput, AvailabilitySubmissionUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: AvailabilitySubmissionCreateOrConnectWithoutSlotsInput
    upsert?: AvailabilitySubmissionUpsertWithoutSlotsInput
    connect?: AvailabilitySubmissionWhereUniqueInput
    update?: XOR<XOR<AvailabilitySubmissionUpdateToOneWithWhereWithoutSlotsInput, AvailabilitySubmissionUpdateWithoutSlotsInput>, AvailabilitySubmissionUncheckedUpdateWithoutSlotsInput>
  }

  export type StaffUpdateOneRequiredWithoutSlotsNestedInput = {
    create?: XOR<StaffCreateWithoutSlotsInput, StaffUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutSlotsInput
    upsert?: StaffUpsertWithoutSlotsInput
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutSlotsInput, StaffUpdateWithoutSlotsInput>, StaffUncheckedUpdateWithoutSlotsInput>
  }

  export type ShiftTemplateRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<ShiftTemplateRoleCreateWithoutRoleInput, ShiftTemplateRoleUncheckedCreateWithoutRoleInput> | ShiftTemplateRoleCreateWithoutRoleInput[] | ShiftTemplateRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ShiftTemplateRoleCreateOrConnectWithoutRoleInput | ShiftTemplateRoleCreateOrConnectWithoutRoleInput[]
    createMany?: ShiftTemplateRoleCreateManyRoleInputEnvelope
    connect?: ShiftTemplateRoleWhereUniqueInput | ShiftTemplateRoleWhereUniqueInput[]
  }

  export type ShiftTemplateRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<ShiftTemplateRoleCreateWithoutRoleInput, ShiftTemplateRoleUncheckedCreateWithoutRoleInput> | ShiftTemplateRoleCreateWithoutRoleInput[] | ShiftTemplateRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ShiftTemplateRoleCreateOrConnectWithoutRoleInput | ShiftTemplateRoleCreateOrConnectWithoutRoleInput[]
    createMany?: ShiftTemplateRoleCreateManyRoleInputEnvelope
    connect?: ShiftTemplateRoleWhereUniqueInput | ShiftTemplateRoleWhereUniqueInput[]
  }

  export type ShiftTemplateRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ShiftTemplateRoleCreateWithoutRoleInput, ShiftTemplateRoleUncheckedCreateWithoutRoleInput> | ShiftTemplateRoleCreateWithoutRoleInput[] | ShiftTemplateRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ShiftTemplateRoleCreateOrConnectWithoutRoleInput | ShiftTemplateRoleCreateOrConnectWithoutRoleInput[]
    upsert?: ShiftTemplateRoleUpsertWithWhereUniqueWithoutRoleInput | ShiftTemplateRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ShiftTemplateRoleCreateManyRoleInputEnvelope
    set?: ShiftTemplateRoleWhereUniqueInput | ShiftTemplateRoleWhereUniqueInput[]
    disconnect?: ShiftTemplateRoleWhereUniqueInput | ShiftTemplateRoleWhereUniqueInput[]
    delete?: ShiftTemplateRoleWhereUniqueInput | ShiftTemplateRoleWhereUniqueInput[]
    connect?: ShiftTemplateRoleWhereUniqueInput | ShiftTemplateRoleWhereUniqueInput[]
    update?: ShiftTemplateRoleUpdateWithWhereUniqueWithoutRoleInput | ShiftTemplateRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ShiftTemplateRoleUpdateManyWithWhereWithoutRoleInput | ShiftTemplateRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ShiftTemplateRoleScalarWhereInput | ShiftTemplateRoleScalarWhereInput[]
  }

  export type ShiftTemplateRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ShiftTemplateRoleCreateWithoutRoleInput, ShiftTemplateRoleUncheckedCreateWithoutRoleInput> | ShiftTemplateRoleCreateWithoutRoleInput[] | ShiftTemplateRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ShiftTemplateRoleCreateOrConnectWithoutRoleInput | ShiftTemplateRoleCreateOrConnectWithoutRoleInput[]
    upsert?: ShiftTemplateRoleUpsertWithWhereUniqueWithoutRoleInput | ShiftTemplateRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ShiftTemplateRoleCreateManyRoleInputEnvelope
    set?: ShiftTemplateRoleWhereUniqueInput | ShiftTemplateRoleWhereUniqueInput[]
    disconnect?: ShiftTemplateRoleWhereUniqueInput | ShiftTemplateRoleWhereUniqueInput[]
    delete?: ShiftTemplateRoleWhereUniqueInput | ShiftTemplateRoleWhereUniqueInput[]
    connect?: ShiftTemplateRoleWhereUniqueInput | ShiftTemplateRoleWhereUniqueInput[]
    update?: ShiftTemplateRoleUpdateWithWhereUniqueWithoutRoleInput | ShiftTemplateRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ShiftTemplateRoleUpdateManyWithWhereWithoutRoleInput | ShiftTemplateRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ShiftTemplateRoleScalarWhereInput | ShiftTemplateRoleScalarWhereInput[]
  }

  export type ShiftTemplateDayCreateNestedManyWithoutShiftTemplateInput = {
    create?: XOR<ShiftTemplateDayCreateWithoutShiftTemplateInput, ShiftTemplateDayUncheckedCreateWithoutShiftTemplateInput> | ShiftTemplateDayCreateWithoutShiftTemplateInput[] | ShiftTemplateDayUncheckedCreateWithoutShiftTemplateInput[]
    connectOrCreate?: ShiftTemplateDayCreateOrConnectWithoutShiftTemplateInput | ShiftTemplateDayCreateOrConnectWithoutShiftTemplateInput[]
    createMany?: ShiftTemplateDayCreateManyShiftTemplateInputEnvelope
    connect?: ShiftTemplateDayWhereUniqueInput | ShiftTemplateDayWhereUniqueInput[]
  }

  export type ShiftTemplateRoleCreateNestedManyWithoutShiftTemplateInput = {
    create?: XOR<ShiftTemplateRoleCreateWithoutShiftTemplateInput, ShiftTemplateRoleUncheckedCreateWithoutShiftTemplateInput> | ShiftTemplateRoleCreateWithoutShiftTemplateInput[] | ShiftTemplateRoleUncheckedCreateWithoutShiftTemplateInput[]
    connectOrCreate?: ShiftTemplateRoleCreateOrConnectWithoutShiftTemplateInput | ShiftTemplateRoleCreateOrConnectWithoutShiftTemplateInput[]
    createMany?: ShiftTemplateRoleCreateManyShiftTemplateInputEnvelope
    connect?: ShiftTemplateRoleWhereUniqueInput | ShiftTemplateRoleWhereUniqueInput[]
  }

  export type ShiftTemplateDayUncheckedCreateNestedManyWithoutShiftTemplateInput = {
    create?: XOR<ShiftTemplateDayCreateWithoutShiftTemplateInput, ShiftTemplateDayUncheckedCreateWithoutShiftTemplateInput> | ShiftTemplateDayCreateWithoutShiftTemplateInput[] | ShiftTemplateDayUncheckedCreateWithoutShiftTemplateInput[]
    connectOrCreate?: ShiftTemplateDayCreateOrConnectWithoutShiftTemplateInput | ShiftTemplateDayCreateOrConnectWithoutShiftTemplateInput[]
    createMany?: ShiftTemplateDayCreateManyShiftTemplateInputEnvelope
    connect?: ShiftTemplateDayWhereUniqueInput | ShiftTemplateDayWhereUniqueInput[]
  }

  export type ShiftTemplateRoleUncheckedCreateNestedManyWithoutShiftTemplateInput = {
    create?: XOR<ShiftTemplateRoleCreateWithoutShiftTemplateInput, ShiftTemplateRoleUncheckedCreateWithoutShiftTemplateInput> | ShiftTemplateRoleCreateWithoutShiftTemplateInput[] | ShiftTemplateRoleUncheckedCreateWithoutShiftTemplateInput[]
    connectOrCreate?: ShiftTemplateRoleCreateOrConnectWithoutShiftTemplateInput | ShiftTemplateRoleCreateOrConnectWithoutShiftTemplateInput[]
    createMany?: ShiftTemplateRoleCreateManyShiftTemplateInputEnvelope
    connect?: ShiftTemplateRoleWhereUniqueInput | ShiftTemplateRoleWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShiftTemplateDayUpdateManyWithoutShiftTemplateNestedInput = {
    create?: XOR<ShiftTemplateDayCreateWithoutShiftTemplateInput, ShiftTemplateDayUncheckedCreateWithoutShiftTemplateInput> | ShiftTemplateDayCreateWithoutShiftTemplateInput[] | ShiftTemplateDayUncheckedCreateWithoutShiftTemplateInput[]
    connectOrCreate?: ShiftTemplateDayCreateOrConnectWithoutShiftTemplateInput | ShiftTemplateDayCreateOrConnectWithoutShiftTemplateInput[]
    upsert?: ShiftTemplateDayUpsertWithWhereUniqueWithoutShiftTemplateInput | ShiftTemplateDayUpsertWithWhereUniqueWithoutShiftTemplateInput[]
    createMany?: ShiftTemplateDayCreateManyShiftTemplateInputEnvelope
    set?: ShiftTemplateDayWhereUniqueInput | ShiftTemplateDayWhereUniqueInput[]
    disconnect?: ShiftTemplateDayWhereUniqueInput | ShiftTemplateDayWhereUniqueInput[]
    delete?: ShiftTemplateDayWhereUniqueInput | ShiftTemplateDayWhereUniqueInput[]
    connect?: ShiftTemplateDayWhereUniqueInput | ShiftTemplateDayWhereUniqueInput[]
    update?: ShiftTemplateDayUpdateWithWhereUniqueWithoutShiftTemplateInput | ShiftTemplateDayUpdateWithWhereUniqueWithoutShiftTemplateInput[]
    updateMany?: ShiftTemplateDayUpdateManyWithWhereWithoutShiftTemplateInput | ShiftTemplateDayUpdateManyWithWhereWithoutShiftTemplateInput[]
    deleteMany?: ShiftTemplateDayScalarWhereInput | ShiftTemplateDayScalarWhereInput[]
  }

  export type ShiftTemplateRoleUpdateManyWithoutShiftTemplateNestedInput = {
    create?: XOR<ShiftTemplateRoleCreateWithoutShiftTemplateInput, ShiftTemplateRoleUncheckedCreateWithoutShiftTemplateInput> | ShiftTemplateRoleCreateWithoutShiftTemplateInput[] | ShiftTemplateRoleUncheckedCreateWithoutShiftTemplateInput[]
    connectOrCreate?: ShiftTemplateRoleCreateOrConnectWithoutShiftTemplateInput | ShiftTemplateRoleCreateOrConnectWithoutShiftTemplateInput[]
    upsert?: ShiftTemplateRoleUpsertWithWhereUniqueWithoutShiftTemplateInput | ShiftTemplateRoleUpsertWithWhereUniqueWithoutShiftTemplateInput[]
    createMany?: ShiftTemplateRoleCreateManyShiftTemplateInputEnvelope
    set?: ShiftTemplateRoleWhereUniqueInput | ShiftTemplateRoleWhereUniqueInput[]
    disconnect?: ShiftTemplateRoleWhereUniqueInput | ShiftTemplateRoleWhereUniqueInput[]
    delete?: ShiftTemplateRoleWhereUniqueInput | ShiftTemplateRoleWhereUniqueInput[]
    connect?: ShiftTemplateRoleWhereUniqueInput | ShiftTemplateRoleWhereUniqueInput[]
    update?: ShiftTemplateRoleUpdateWithWhereUniqueWithoutShiftTemplateInput | ShiftTemplateRoleUpdateWithWhereUniqueWithoutShiftTemplateInput[]
    updateMany?: ShiftTemplateRoleUpdateManyWithWhereWithoutShiftTemplateInput | ShiftTemplateRoleUpdateManyWithWhereWithoutShiftTemplateInput[]
    deleteMany?: ShiftTemplateRoleScalarWhereInput | ShiftTemplateRoleScalarWhereInput[]
  }

  export type ShiftTemplateDayUncheckedUpdateManyWithoutShiftTemplateNestedInput = {
    create?: XOR<ShiftTemplateDayCreateWithoutShiftTemplateInput, ShiftTemplateDayUncheckedCreateWithoutShiftTemplateInput> | ShiftTemplateDayCreateWithoutShiftTemplateInput[] | ShiftTemplateDayUncheckedCreateWithoutShiftTemplateInput[]
    connectOrCreate?: ShiftTemplateDayCreateOrConnectWithoutShiftTemplateInput | ShiftTemplateDayCreateOrConnectWithoutShiftTemplateInput[]
    upsert?: ShiftTemplateDayUpsertWithWhereUniqueWithoutShiftTemplateInput | ShiftTemplateDayUpsertWithWhereUniqueWithoutShiftTemplateInput[]
    createMany?: ShiftTemplateDayCreateManyShiftTemplateInputEnvelope
    set?: ShiftTemplateDayWhereUniqueInput | ShiftTemplateDayWhereUniqueInput[]
    disconnect?: ShiftTemplateDayWhereUniqueInput | ShiftTemplateDayWhereUniqueInput[]
    delete?: ShiftTemplateDayWhereUniqueInput | ShiftTemplateDayWhereUniqueInput[]
    connect?: ShiftTemplateDayWhereUniqueInput | ShiftTemplateDayWhereUniqueInput[]
    update?: ShiftTemplateDayUpdateWithWhereUniqueWithoutShiftTemplateInput | ShiftTemplateDayUpdateWithWhereUniqueWithoutShiftTemplateInput[]
    updateMany?: ShiftTemplateDayUpdateManyWithWhereWithoutShiftTemplateInput | ShiftTemplateDayUpdateManyWithWhereWithoutShiftTemplateInput[]
    deleteMany?: ShiftTemplateDayScalarWhereInput | ShiftTemplateDayScalarWhereInput[]
  }

  export type ShiftTemplateRoleUncheckedUpdateManyWithoutShiftTemplateNestedInput = {
    create?: XOR<ShiftTemplateRoleCreateWithoutShiftTemplateInput, ShiftTemplateRoleUncheckedCreateWithoutShiftTemplateInput> | ShiftTemplateRoleCreateWithoutShiftTemplateInput[] | ShiftTemplateRoleUncheckedCreateWithoutShiftTemplateInput[]
    connectOrCreate?: ShiftTemplateRoleCreateOrConnectWithoutShiftTemplateInput | ShiftTemplateRoleCreateOrConnectWithoutShiftTemplateInput[]
    upsert?: ShiftTemplateRoleUpsertWithWhereUniqueWithoutShiftTemplateInput | ShiftTemplateRoleUpsertWithWhereUniqueWithoutShiftTemplateInput[]
    createMany?: ShiftTemplateRoleCreateManyShiftTemplateInputEnvelope
    set?: ShiftTemplateRoleWhereUniqueInput | ShiftTemplateRoleWhereUniqueInput[]
    disconnect?: ShiftTemplateRoleWhereUniqueInput | ShiftTemplateRoleWhereUniqueInput[]
    delete?: ShiftTemplateRoleWhereUniqueInput | ShiftTemplateRoleWhereUniqueInput[]
    connect?: ShiftTemplateRoleWhereUniqueInput | ShiftTemplateRoleWhereUniqueInput[]
    update?: ShiftTemplateRoleUpdateWithWhereUniqueWithoutShiftTemplateInput | ShiftTemplateRoleUpdateWithWhereUniqueWithoutShiftTemplateInput[]
    updateMany?: ShiftTemplateRoleUpdateManyWithWhereWithoutShiftTemplateInput | ShiftTemplateRoleUpdateManyWithWhereWithoutShiftTemplateInput[]
    deleteMany?: ShiftTemplateRoleScalarWhereInput | ShiftTemplateRoleScalarWhereInput[]
  }

  export type ShiftTemplateCreateNestedOneWithoutDaysInput = {
    create?: XOR<ShiftTemplateCreateWithoutDaysInput, ShiftTemplateUncheckedCreateWithoutDaysInput>
    connectOrCreate?: ShiftTemplateCreateOrConnectWithoutDaysInput
    connect?: ShiftTemplateWhereUniqueInput
  }

  export type EnumDayOfWeekFieldUpdateOperationsInput = {
    set?: $Enums.DayOfWeek
  }

  export type ShiftTemplateUpdateOneRequiredWithoutDaysNestedInput = {
    create?: XOR<ShiftTemplateCreateWithoutDaysInput, ShiftTemplateUncheckedCreateWithoutDaysInput>
    connectOrCreate?: ShiftTemplateCreateOrConnectWithoutDaysInput
    upsert?: ShiftTemplateUpsertWithoutDaysInput
    connect?: ShiftTemplateWhereUniqueInput
    update?: XOR<XOR<ShiftTemplateUpdateToOneWithWhereWithoutDaysInput, ShiftTemplateUpdateWithoutDaysInput>, ShiftTemplateUncheckedUpdateWithoutDaysInput>
  }

  export type ShiftTemplateCreateNestedOneWithoutRolesInput = {
    create?: XOR<ShiftTemplateCreateWithoutRolesInput, ShiftTemplateUncheckedCreateWithoutRolesInput>
    connectOrCreate?: ShiftTemplateCreateOrConnectWithoutRolesInput
    connect?: ShiftTemplateWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutShiftTemplateRolesInput = {
    create?: XOR<RoleCreateWithoutShiftTemplateRolesInput, RoleUncheckedCreateWithoutShiftTemplateRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutShiftTemplateRolesInput
    connect?: RoleWhereUniqueInput
  }

  export type ShiftTemplateUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<ShiftTemplateCreateWithoutRolesInput, ShiftTemplateUncheckedCreateWithoutRolesInput>
    connectOrCreate?: ShiftTemplateCreateOrConnectWithoutRolesInput
    upsert?: ShiftTemplateUpsertWithoutRolesInput
    connect?: ShiftTemplateWhereUniqueInput
    update?: XOR<XOR<ShiftTemplateUpdateToOneWithWhereWithoutRolesInput, ShiftTemplateUpdateWithoutRolesInput>, ShiftTemplateUncheckedUpdateWithoutRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutShiftTemplateRolesNestedInput = {
    create?: XOR<RoleCreateWithoutShiftTemplateRolesInput, RoleUncheckedCreateWithoutShiftTemplateRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutShiftTemplateRolesInput
    upsert?: RoleUpsertWithoutShiftTemplateRolesInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutShiftTemplateRolesInput, RoleUpdateWithoutShiftTemplateRolesInput>, RoleUncheckedUpdateWithoutShiftTemplateRolesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumShiftTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftType | EnumShiftTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftTypeFilter<$PrismaModel> | $Enums.ShiftType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumShiftTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftType | EnumShiftTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftTypeWithAggregatesFilter<$PrismaModel> | $Enums.ShiftType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShiftTypeFilter<$PrismaModel>
    _max?: NestedEnumShiftTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type AvailabilitySubmissionCreateWithoutStaffInput = {
    id?: string
    weekStart: Date | string
    rawText: string
    createdAt?: Date | string
    slots?: AvailabilitySlotCreateNestedManyWithoutSubmissionInput
  }

  export type AvailabilitySubmissionUncheckedCreateWithoutStaffInput = {
    id?: string
    weekStart: Date | string
    rawText: string
    createdAt?: Date | string
    slots?: AvailabilitySlotUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type AvailabilitySubmissionCreateOrConnectWithoutStaffInput = {
    where: AvailabilitySubmissionWhereUniqueInput
    create: XOR<AvailabilitySubmissionCreateWithoutStaffInput, AvailabilitySubmissionUncheckedCreateWithoutStaffInput>
  }

  export type AvailabilitySubmissionCreateManyStaffInputEnvelope = {
    data: AvailabilitySubmissionCreateManyStaffInput | AvailabilitySubmissionCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type AvailabilitySlotCreateWithoutStaffInput = {
    id?: string
    date: Date | string
    shift: $Enums.ShiftType
    available: boolean
    aiReasoning?: string | null
    wasEdited?: boolean
    submission: AvailabilitySubmissionCreateNestedOneWithoutSlotsInput
  }

  export type AvailabilitySlotUncheckedCreateWithoutStaffInput = {
    id?: string
    submissionId: string
    date: Date | string
    shift: $Enums.ShiftType
    available: boolean
    aiReasoning?: string | null
    wasEdited?: boolean
  }

  export type AvailabilitySlotCreateOrConnectWithoutStaffInput = {
    where: AvailabilitySlotWhereUniqueInput
    create: XOR<AvailabilitySlotCreateWithoutStaffInput, AvailabilitySlotUncheckedCreateWithoutStaffInput>
  }

  export type AvailabilitySlotCreateManyStaffInputEnvelope = {
    data: AvailabilitySlotCreateManyStaffInput | AvailabilitySlotCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type AvailabilitySubmissionUpsertWithWhereUniqueWithoutStaffInput = {
    where: AvailabilitySubmissionWhereUniqueInput
    update: XOR<AvailabilitySubmissionUpdateWithoutStaffInput, AvailabilitySubmissionUncheckedUpdateWithoutStaffInput>
    create: XOR<AvailabilitySubmissionCreateWithoutStaffInput, AvailabilitySubmissionUncheckedCreateWithoutStaffInput>
  }

  export type AvailabilitySubmissionUpdateWithWhereUniqueWithoutStaffInput = {
    where: AvailabilitySubmissionWhereUniqueInput
    data: XOR<AvailabilitySubmissionUpdateWithoutStaffInput, AvailabilitySubmissionUncheckedUpdateWithoutStaffInput>
  }

  export type AvailabilitySubmissionUpdateManyWithWhereWithoutStaffInput = {
    where: AvailabilitySubmissionScalarWhereInput
    data: XOR<AvailabilitySubmissionUpdateManyMutationInput, AvailabilitySubmissionUncheckedUpdateManyWithoutStaffInput>
  }

  export type AvailabilitySubmissionScalarWhereInput = {
    AND?: AvailabilitySubmissionScalarWhereInput | AvailabilitySubmissionScalarWhereInput[]
    OR?: AvailabilitySubmissionScalarWhereInput[]
    NOT?: AvailabilitySubmissionScalarWhereInput | AvailabilitySubmissionScalarWhereInput[]
    id?: StringFilter<"AvailabilitySubmission"> | string
    staffId?: StringFilter<"AvailabilitySubmission"> | string
    weekStart?: DateTimeFilter<"AvailabilitySubmission"> | Date | string
    rawText?: StringFilter<"AvailabilitySubmission"> | string
    createdAt?: DateTimeFilter<"AvailabilitySubmission"> | Date | string
  }

  export type AvailabilitySlotUpsertWithWhereUniqueWithoutStaffInput = {
    where: AvailabilitySlotWhereUniqueInput
    update: XOR<AvailabilitySlotUpdateWithoutStaffInput, AvailabilitySlotUncheckedUpdateWithoutStaffInput>
    create: XOR<AvailabilitySlotCreateWithoutStaffInput, AvailabilitySlotUncheckedCreateWithoutStaffInput>
  }

  export type AvailabilitySlotUpdateWithWhereUniqueWithoutStaffInput = {
    where: AvailabilitySlotWhereUniqueInput
    data: XOR<AvailabilitySlotUpdateWithoutStaffInput, AvailabilitySlotUncheckedUpdateWithoutStaffInput>
  }

  export type AvailabilitySlotUpdateManyWithWhereWithoutStaffInput = {
    where: AvailabilitySlotScalarWhereInput
    data: XOR<AvailabilitySlotUpdateManyMutationInput, AvailabilitySlotUncheckedUpdateManyWithoutStaffInput>
  }

  export type AvailabilitySlotScalarWhereInput = {
    AND?: AvailabilitySlotScalarWhereInput | AvailabilitySlotScalarWhereInput[]
    OR?: AvailabilitySlotScalarWhereInput[]
    NOT?: AvailabilitySlotScalarWhereInput | AvailabilitySlotScalarWhereInput[]
    id?: StringFilter<"AvailabilitySlot"> | string
    submissionId?: StringFilter<"AvailabilitySlot"> | string
    staffId?: StringFilter<"AvailabilitySlot"> | string
    date?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    shift?: EnumShiftTypeFilter<"AvailabilitySlot"> | $Enums.ShiftType
    available?: BoolFilter<"AvailabilitySlot"> | boolean
    aiReasoning?: StringNullableFilter<"AvailabilitySlot"> | string | null
    wasEdited?: BoolFilter<"AvailabilitySlot"> | boolean
  }

  export type StaffCreateWithoutSubmissionsInput = {
    id?: string
    name: string
    phone: string
    createdAt?: Date | string
    slots?: AvailabilitySlotCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    name: string
    phone: string
    createdAt?: Date | string
    slots?: AvailabilitySlotUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffCreateOrConnectWithoutSubmissionsInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutSubmissionsInput, StaffUncheckedCreateWithoutSubmissionsInput>
  }

  export type AvailabilitySlotCreateWithoutSubmissionInput = {
    id?: string
    date: Date | string
    shift: $Enums.ShiftType
    available: boolean
    aiReasoning?: string | null
    wasEdited?: boolean
    staff: StaffCreateNestedOneWithoutSlotsInput
  }

  export type AvailabilitySlotUncheckedCreateWithoutSubmissionInput = {
    id?: string
    staffId: string
    date: Date | string
    shift: $Enums.ShiftType
    available: boolean
    aiReasoning?: string | null
    wasEdited?: boolean
  }

  export type AvailabilitySlotCreateOrConnectWithoutSubmissionInput = {
    where: AvailabilitySlotWhereUniqueInput
    create: XOR<AvailabilitySlotCreateWithoutSubmissionInput, AvailabilitySlotUncheckedCreateWithoutSubmissionInput>
  }

  export type AvailabilitySlotCreateManySubmissionInputEnvelope = {
    data: AvailabilitySlotCreateManySubmissionInput | AvailabilitySlotCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type StaffUpsertWithoutSubmissionsInput = {
    update: XOR<StaffUpdateWithoutSubmissionsInput, StaffUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<StaffCreateWithoutSubmissionsInput, StaffUncheckedCreateWithoutSubmissionsInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutSubmissionsInput, StaffUncheckedUpdateWithoutSubmissionsInput>
  }

  export type StaffUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: AvailabilitySlotUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: AvailabilitySlotUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type AvailabilitySlotUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: AvailabilitySlotWhereUniqueInput
    update: XOR<AvailabilitySlotUpdateWithoutSubmissionInput, AvailabilitySlotUncheckedUpdateWithoutSubmissionInput>
    create: XOR<AvailabilitySlotCreateWithoutSubmissionInput, AvailabilitySlotUncheckedCreateWithoutSubmissionInput>
  }

  export type AvailabilitySlotUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: AvailabilitySlotWhereUniqueInput
    data: XOR<AvailabilitySlotUpdateWithoutSubmissionInput, AvailabilitySlotUncheckedUpdateWithoutSubmissionInput>
  }

  export type AvailabilitySlotUpdateManyWithWhereWithoutSubmissionInput = {
    where: AvailabilitySlotScalarWhereInput
    data: XOR<AvailabilitySlotUpdateManyMutationInput, AvailabilitySlotUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type AvailabilitySubmissionCreateWithoutSlotsInput = {
    id?: string
    weekStart: Date | string
    rawText: string
    createdAt?: Date | string
    staff: StaffCreateNestedOneWithoutSubmissionsInput
  }

  export type AvailabilitySubmissionUncheckedCreateWithoutSlotsInput = {
    id?: string
    staffId: string
    weekStart: Date | string
    rawText: string
    createdAt?: Date | string
  }

  export type AvailabilitySubmissionCreateOrConnectWithoutSlotsInput = {
    where: AvailabilitySubmissionWhereUniqueInput
    create: XOR<AvailabilitySubmissionCreateWithoutSlotsInput, AvailabilitySubmissionUncheckedCreateWithoutSlotsInput>
  }

  export type StaffCreateWithoutSlotsInput = {
    id?: string
    name: string
    phone: string
    createdAt?: Date | string
    submissions?: AvailabilitySubmissionCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutSlotsInput = {
    id?: string
    name: string
    phone: string
    createdAt?: Date | string
    submissions?: AvailabilitySubmissionUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffCreateOrConnectWithoutSlotsInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutSlotsInput, StaffUncheckedCreateWithoutSlotsInput>
  }

  export type AvailabilitySubmissionUpsertWithoutSlotsInput = {
    update: XOR<AvailabilitySubmissionUpdateWithoutSlotsInput, AvailabilitySubmissionUncheckedUpdateWithoutSlotsInput>
    create: XOR<AvailabilitySubmissionCreateWithoutSlotsInput, AvailabilitySubmissionUncheckedCreateWithoutSlotsInput>
    where?: AvailabilitySubmissionWhereInput
  }

  export type AvailabilitySubmissionUpdateToOneWithWhereWithoutSlotsInput = {
    where?: AvailabilitySubmissionWhereInput
    data: XOR<AvailabilitySubmissionUpdateWithoutSlotsInput, AvailabilitySubmissionUncheckedUpdateWithoutSlotsInput>
  }

  export type AvailabilitySubmissionUpdateWithoutSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    rawText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type AvailabilitySubmissionUncheckedUpdateWithoutSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    rawText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUpsertWithoutSlotsInput = {
    update: XOR<StaffUpdateWithoutSlotsInput, StaffUncheckedUpdateWithoutSlotsInput>
    create: XOR<StaffCreateWithoutSlotsInput, StaffUncheckedCreateWithoutSlotsInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutSlotsInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutSlotsInput, StaffUncheckedUpdateWithoutSlotsInput>
  }

  export type StaffUpdateWithoutSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: AvailabilitySubmissionUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: AvailabilitySubmissionUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type ShiftTemplateRoleCreateWithoutRoleInput = {
    id?: string
    minCount?: number
    shiftTemplate: ShiftTemplateCreateNestedOneWithoutRolesInput
  }

  export type ShiftTemplateRoleUncheckedCreateWithoutRoleInput = {
    id?: string
    shiftTemplateId: string
    minCount?: number
  }

  export type ShiftTemplateRoleCreateOrConnectWithoutRoleInput = {
    where: ShiftTemplateRoleWhereUniqueInput
    create: XOR<ShiftTemplateRoleCreateWithoutRoleInput, ShiftTemplateRoleUncheckedCreateWithoutRoleInput>
  }

  export type ShiftTemplateRoleCreateManyRoleInputEnvelope = {
    data: ShiftTemplateRoleCreateManyRoleInput | ShiftTemplateRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type ShiftTemplateRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: ShiftTemplateRoleWhereUniqueInput
    update: XOR<ShiftTemplateRoleUpdateWithoutRoleInput, ShiftTemplateRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<ShiftTemplateRoleCreateWithoutRoleInput, ShiftTemplateRoleUncheckedCreateWithoutRoleInput>
  }

  export type ShiftTemplateRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: ShiftTemplateRoleWhereUniqueInput
    data: XOR<ShiftTemplateRoleUpdateWithoutRoleInput, ShiftTemplateRoleUncheckedUpdateWithoutRoleInput>
  }

  export type ShiftTemplateRoleUpdateManyWithWhereWithoutRoleInput = {
    where: ShiftTemplateRoleScalarWhereInput
    data: XOR<ShiftTemplateRoleUpdateManyMutationInput, ShiftTemplateRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type ShiftTemplateRoleScalarWhereInput = {
    AND?: ShiftTemplateRoleScalarWhereInput | ShiftTemplateRoleScalarWhereInput[]
    OR?: ShiftTemplateRoleScalarWhereInput[]
    NOT?: ShiftTemplateRoleScalarWhereInput | ShiftTemplateRoleScalarWhereInput[]
    id?: StringFilter<"ShiftTemplateRole"> | string
    shiftTemplateId?: StringFilter<"ShiftTemplateRole"> | string
    roleId?: StringFilter<"ShiftTemplateRole"> | string
    minCount?: IntFilter<"ShiftTemplateRole"> | number
  }

  export type ShiftTemplateDayCreateWithoutShiftTemplateInput = {
    id?: string
    day: $Enums.DayOfWeek
  }

  export type ShiftTemplateDayUncheckedCreateWithoutShiftTemplateInput = {
    id?: string
    day: $Enums.DayOfWeek
  }

  export type ShiftTemplateDayCreateOrConnectWithoutShiftTemplateInput = {
    where: ShiftTemplateDayWhereUniqueInput
    create: XOR<ShiftTemplateDayCreateWithoutShiftTemplateInput, ShiftTemplateDayUncheckedCreateWithoutShiftTemplateInput>
  }

  export type ShiftTemplateDayCreateManyShiftTemplateInputEnvelope = {
    data: ShiftTemplateDayCreateManyShiftTemplateInput | ShiftTemplateDayCreateManyShiftTemplateInput[]
    skipDuplicates?: boolean
  }

  export type ShiftTemplateRoleCreateWithoutShiftTemplateInput = {
    id?: string
    minCount?: number
    role: RoleCreateNestedOneWithoutShiftTemplateRolesInput
  }

  export type ShiftTemplateRoleUncheckedCreateWithoutShiftTemplateInput = {
    id?: string
    roleId: string
    minCount?: number
  }

  export type ShiftTemplateRoleCreateOrConnectWithoutShiftTemplateInput = {
    where: ShiftTemplateRoleWhereUniqueInput
    create: XOR<ShiftTemplateRoleCreateWithoutShiftTemplateInput, ShiftTemplateRoleUncheckedCreateWithoutShiftTemplateInput>
  }

  export type ShiftTemplateRoleCreateManyShiftTemplateInputEnvelope = {
    data: ShiftTemplateRoleCreateManyShiftTemplateInput | ShiftTemplateRoleCreateManyShiftTemplateInput[]
    skipDuplicates?: boolean
  }

  export type ShiftTemplateDayUpsertWithWhereUniqueWithoutShiftTemplateInput = {
    where: ShiftTemplateDayWhereUniqueInput
    update: XOR<ShiftTemplateDayUpdateWithoutShiftTemplateInput, ShiftTemplateDayUncheckedUpdateWithoutShiftTemplateInput>
    create: XOR<ShiftTemplateDayCreateWithoutShiftTemplateInput, ShiftTemplateDayUncheckedCreateWithoutShiftTemplateInput>
  }

  export type ShiftTemplateDayUpdateWithWhereUniqueWithoutShiftTemplateInput = {
    where: ShiftTemplateDayWhereUniqueInput
    data: XOR<ShiftTemplateDayUpdateWithoutShiftTemplateInput, ShiftTemplateDayUncheckedUpdateWithoutShiftTemplateInput>
  }

  export type ShiftTemplateDayUpdateManyWithWhereWithoutShiftTemplateInput = {
    where: ShiftTemplateDayScalarWhereInput
    data: XOR<ShiftTemplateDayUpdateManyMutationInput, ShiftTemplateDayUncheckedUpdateManyWithoutShiftTemplateInput>
  }

  export type ShiftTemplateDayScalarWhereInput = {
    AND?: ShiftTemplateDayScalarWhereInput | ShiftTemplateDayScalarWhereInput[]
    OR?: ShiftTemplateDayScalarWhereInput[]
    NOT?: ShiftTemplateDayScalarWhereInput | ShiftTemplateDayScalarWhereInput[]
    id?: StringFilter<"ShiftTemplateDay"> | string
    shiftTemplateId?: StringFilter<"ShiftTemplateDay"> | string
    day?: EnumDayOfWeekFilter<"ShiftTemplateDay"> | $Enums.DayOfWeek
  }

  export type ShiftTemplateRoleUpsertWithWhereUniqueWithoutShiftTemplateInput = {
    where: ShiftTemplateRoleWhereUniqueInput
    update: XOR<ShiftTemplateRoleUpdateWithoutShiftTemplateInput, ShiftTemplateRoleUncheckedUpdateWithoutShiftTemplateInput>
    create: XOR<ShiftTemplateRoleCreateWithoutShiftTemplateInput, ShiftTemplateRoleUncheckedCreateWithoutShiftTemplateInput>
  }

  export type ShiftTemplateRoleUpdateWithWhereUniqueWithoutShiftTemplateInput = {
    where: ShiftTemplateRoleWhereUniqueInput
    data: XOR<ShiftTemplateRoleUpdateWithoutShiftTemplateInput, ShiftTemplateRoleUncheckedUpdateWithoutShiftTemplateInput>
  }

  export type ShiftTemplateRoleUpdateManyWithWhereWithoutShiftTemplateInput = {
    where: ShiftTemplateRoleScalarWhereInput
    data: XOR<ShiftTemplateRoleUpdateManyMutationInput, ShiftTemplateRoleUncheckedUpdateManyWithoutShiftTemplateInput>
  }

  export type ShiftTemplateCreateWithoutDaysInput = {
    id?: string
    name: string
    startTime: string
    endTime: string
    minStaff?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: ShiftTemplateRoleCreateNestedManyWithoutShiftTemplateInput
  }

  export type ShiftTemplateUncheckedCreateWithoutDaysInput = {
    id?: string
    name: string
    startTime: string
    endTime: string
    minStaff?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: ShiftTemplateRoleUncheckedCreateNestedManyWithoutShiftTemplateInput
  }

  export type ShiftTemplateCreateOrConnectWithoutDaysInput = {
    where: ShiftTemplateWhereUniqueInput
    create: XOR<ShiftTemplateCreateWithoutDaysInput, ShiftTemplateUncheckedCreateWithoutDaysInput>
  }

  export type ShiftTemplateUpsertWithoutDaysInput = {
    update: XOR<ShiftTemplateUpdateWithoutDaysInput, ShiftTemplateUncheckedUpdateWithoutDaysInput>
    create: XOR<ShiftTemplateCreateWithoutDaysInput, ShiftTemplateUncheckedCreateWithoutDaysInput>
    where?: ShiftTemplateWhereInput
  }

  export type ShiftTemplateUpdateToOneWithWhereWithoutDaysInput = {
    where?: ShiftTemplateWhereInput
    data: XOR<ShiftTemplateUpdateWithoutDaysInput, ShiftTemplateUncheckedUpdateWithoutDaysInput>
  }

  export type ShiftTemplateUpdateWithoutDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    minStaff?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: ShiftTemplateRoleUpdateManyWithoutShiftTemplateNestedInput
  }

  export type ShiftTemplateUncheckedUpdateWithoutDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    minStaff?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: ShiftTemplateRoleUncheckedUpdateManyWithoutShiftTemplateNestedInput
  }

  export type ShiftTemplateCreateWithoutRolesInput = {
    id?: string
    name: string
    startTime: string
    endTime: string
    minStaff?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: ShiftTemplateDayCreateNestedManyWithoutShiftTemplateInput
  }

  export type ShiftTemplateUncheckedCreateWithoutRolesInput = {
    id?: string
    name: string
    startTime: string
    endTime: string
    minStaff?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: ShiftTemplateDayUncheckedCreateNestedManyWithoutShiftTemplateInput
  }

  export type ShiftTemplateCreateOrConnectWithoutRolesInput = {
    where: ShiftTemplateWhereUniqueInput
    create: XOR<ShiftTemplateCreateWithoutRolesInput, ShiftTemplateUncheckedCreateWithoutRolesInput>
  }

  export type RoleCreateWithoutShiftTemplateRolesInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type RoleUncheckedCreateWithoutShiftTemplateRolesInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutShiftTemplateRolesInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutShiftTemplateRolesInput, RoleUncheckedCreateWithoutShiftTemplateRolesInput>
  }

  export type ShiftTemplateUpsertWithoutRolesInput = {
    update: XOR<ShiftTemplateUpdateWithoutRolesInput, ShiftTemplateUncheckedUpdateWithoutRolesInput>
    create: XOR<ShiftTemplateCreateWithoutRolesInput, ShiftTemplateUncheckedCreateWithoutRolesInput>
    where?: ShiftTemplateWhereInput
  }

  export type ShiftTemplateUpdateToOneWithWhereWithoutRolesInput = {
    where?: ShiftTemplateWhereInput
    data: XOR<ShiftTemplateUpdateWithoutRolesInput, ShiftTemplateUncheckedUpdateWithoutRolesInput>
  }

  export type ShiftTemplateUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    minStaff?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: ShiftTemplateDayUpdateManyWithoutShiftTemplateNestedInput
  }

  export type ShiftTemplateUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    minStaff?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: ShiftTemplateDayUncheckedUpdateManyWithoutShiftTemplateNestedInput
  }

  export type RoleUpsertWithoutShiftTemplateRolesInput = {
    update: XOR<RoleUpdateWithoutShiftTemplateRolesInput, RoleUncheckedUpdateWithoutShiftTemplateRolesInput>
    create: XOR<RoleCreateWithoutShiftTemplateRolesInput, RoleUncheckedCreateWithoutShiftTemplateRolesInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutShiftTemplateRolesInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutShiftTemplateRolesInput, RoleUncheckedUpdateWithoutShiftTemplateRolesInput>
  }

  export type RoleUpdateWithoutShiftTemplateRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutShiftTemplateRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilitySubmissionCreateManyStaffInput = {
    id?: string
    weekStart: Date | string
    rawText: string
    createdAt?: Date | string
  }

  export type AvailabilitySlotCreateManyStaffInput = {
    id?: string
    submissionId: string
    date: Date | string
    shift: $Enums.ShiftType
    available: boolean
    aiReasoning?: string | null
    wasEdited?: boolean
  }

  export type AvailabilitySubmissionUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    rawText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: AvailabilitySlotUpdateManyWithoutSubmissionNestedInput
  }

  export type AvailabilitySubmissionUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    rawText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: AvailabilitySlotUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type AvailabilitySubmissionUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    rawText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilitySlotUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    available?: BoolFieldUpdateOperationsInput | boolean
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    wasEdited?: BoolFieldUpdateOperationsInput | boolean
    submission?: AvailabilitySubmissionUpdateOneRequiredWithoutSlotsNestedInput
  }

  export type AvailabilitySlotUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    available?: BoolFieldUpdateOperationsInput | boolean
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    wasEdited?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvailabilitySlotUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    available?: BoolFieldUpdateOperationsInput | boolean
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    wasEdited?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvailabilitySlotCreateManySubmissionInput = {
    id?: string
    staffId: string
    date: Date | string
    shift: $Enums.ShiftType
    available: boolean
    aiReasoning?: string | null
    wasEdited?: boolean
  }

  export type AvailabilitySlotUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    available?: BoolFieldUpdateOperationsInput | boolean
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    wasEdited?: BoolFieldUpdateOperationsInput | boolean
    staff?: StaffUpdateOneRequiredWithoutSlotsNestedInput
  }

  export type AvailabilitySlotUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    available?: BoolFieldUpdateOperationsInput | boolean
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    wasEdited?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvailabilitySlotUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    available?: BoolFieldUpdateOperationsInput | boolean
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    wasEdited?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShiftTemplateRoleCreateManyRoleInput = {
    id?: string
    shiftTemplateId: string
    minCount?: number
  }

  export type ShiftTemplateRoleUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    minCount?: IntFieldUpdateOperationsInput | number
    shiftTemplate?: ShiftTemplateUpdateOneRequiredWithoutRolesNestedInput
  }

  export type ShiftTemplateRoleUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftTemplateId?: StringFieldUpdateOperationsInput | string
    minCount?: IntFieldUpdateOperationsInput | number
  }

  export type ShiftTemplateRoleUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftTemplateId?: StringFieldUpdateOperationsInput | string
    minCount?: IntFieldUpdateOperationsInput | number
  }

  export type ShiftTemplateDayCreateManyShiftTemplateInput = {
    id?: string
    day: $Enums.DayOfWeek
  }

  export type ShiftTemplateRoleCreateManyShiftTemplateInput = {
    id?: string
    roleId: string
    minCount?: number
  }

  export type ShiftTemplateDayUpdateWithoutShiftTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
  }

  export type ShiftTemplateDayUncheckedUpdateWithoutShiftTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
  }

  export type ShiftTemplateDayUncheckedUpdateManyWithoutShiftTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
  }

  export type ShiftTemplateRoleUpdateWithoutShiftTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    minCount?: IntFieldUpdateOperationsInput | number
    role?: RoleUpdateOneRequiredWithoutShiftTemplateRolesNestedInput
  }

  export type ShiftTemplateRoleUncheckedUpdateWithoutShiftTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    minCount?: IntFieldUpdateOperationsInput | number
  }

  export type ShiftTemplateRoleUncheckedUpdateManyWithoutShiftTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    minCount?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}