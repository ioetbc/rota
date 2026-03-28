
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
 * Enums
 */
export namespace $Enums {
  export const ShiftType: {
  MORNING: 'MORNING',
  AFTERNOON: 'AFTERNOON',
  EVENING: 'EVENING'
};

export type ShiftType = (typeof ShiftType)[keyof typeof ShiftType]

}

export type ShiftType = $Enums.ShiftType

export const ShiftType: typeof $Enums.ShiftType

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
    AvailabilitySlot: 'AvailabilitySlot'
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
      modelProps: "staff" | "availabilitySubmission" | "availabilitySlot"
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