
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model Facultad
 * 
 */
export type Facultad = $Result.DefaultSelection<Prisma.$FacultadPayload>
/**
 * Model Carrera
 * 
 */
export type Carrera = $Result.DefaultSelection<Prisma.$CarreraPayload>
/**
 * Model UA
 * 
 */
export type UA = $Result.DefaultSelection<Prisma.$UAPayload>
/**
 * Model PalabraClave
 * 
 */
export type PalabraClave = $Result.DefaultSelection<Prisma.$PalabraClavePayload>
/**
 * Model VideoPalabraClave
 * 
 */
export type VideoPalabraClave = $Result.DefaultSelection<Prisma.$VideoPalabraClavePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facultad`: Exposes CRUD operations for the **Facultad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facultads
    * const facultads = await prisma.facultad.findMany()
    * ```
    */
  get facultad(): Prisma.FacultadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carrera`: Exposes CRUD operations for the **Carrera** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carreras
    * const carreras = await prisma.carrera.findMany()
    * ```
    */
  get carrera(): Prisma.CarreraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uA`: Exposes CRUD operations for the **UA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UAS
    * const uAS = await prisma.uA.findMany()
    * ```
    */
  get uA(): Prisma.UADelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.palabraClave`: Exposes CRUD operations for the **PalabraClave** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PalabraClaves
    * const palabraClaves = await prisma.palabraClave.findMany()
    * ```
    */
  get palabraClave(): Prisma.PalabraClaveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoPalabraClave`: Exposes CRUD operations for the **VideoPalabraClave** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoPalabraClaves
    * const videoPalabraClaves = await prisma.videoPalabraClave.findMany()
    * ```
    */
  get videoPalabraClave(): Prisma.VideoPalabraClaveDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Usuario: 'Usuario',
    Session: 'Session',
    Video: 'Video',
    Facultad: 'Facultad',
    Carrera: 'Carrera',
    UA: 'UA',
    PalabraClave: 'PalabraClave',
    VideoPalabraClave: 'VideoPalabraClave'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "session" | "video" | "facultad" | "carrera" | "uA" | "palabraClave" | "videoPalabraClave"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      Facultad: {
        payload: Prisma.$FacultadPayload<ExtArgs>
        fields: Prisma.FacultadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacultadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacultadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultadPayload>
          }
          findFirst: {
            args: Prisma.FacultadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacultadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultadPayload>
          }
          findMany: {
            args: Prisma.FacultadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultadPayload>[]
          }
          create: {
            args: Prisma.FacultadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultadPayload>
          }
          createMany: {
            args: Prisma.FacultadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacultadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultadPayload>[]
          }
          delete: {
            args: Prisma.FacultadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultadPayload>
          }
          update: {
            args: Prisma.FacultadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultadPayload>
          }
          deleteMany: {
            args: Prisma.FacultadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacultadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacultadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultadPayload>[]
          }
          upsert: {
            args: Prisma.FacultadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultadPayload>
          }
          aggregate: {
            args: Prisma.FacultadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacultad>
          }
          groupBy: {
            args: Prisma.FacultadGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacultadGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacultadCountArgs<ExtArgs>
            result: $Utils.Optional<FacultadCountAggregateOutputType> | number
          }
        }
      }
      Carrera: {
        payload: Prisma.$CarreraPayload<ExtArgs>
        fields: Prisma.CarreraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarreraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarreraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          findFirst: {
            args: Prisma.CarreraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarreraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          findMany: {
            args: Prisma.CarreraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          create: {
            args: Prisma.CarreraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          createMany: {
            args: Prisma.CarreraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarreraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          delete: {
            args: Prisma.CarreraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          update: {
            args: Prisma.CarreraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          deleteMany: {
            args: Prisma.CarreraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarreraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarreraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          upsert: {
            args: Prisma.CarreraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          aggregate: {
            args: Prisma.CarreraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrera>
          }
          groupBy: {
            args: Prisma.CarreraGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarreraGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarreraCountArgs<ExtArgs>
            result: $Utils.Optional<CarreraCountAggregateOutputType> | number
          }
        }
      }
      UA: {
        payload: Prisma.$UAPayload<ExtArgs>
        fields: Prisma.UAFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UAFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UAFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAPayload>
          }
          findFirst: {
            args: Prisma.UAFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UAFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAPayload>
          }
          findMany: {
            args: Prisma.UAFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAPayload>[]
          }
          create: {
            args: Prisma.UACreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAPayload>
          }
          createMany: {
            args: Prisma.UACreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UACreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAPayload>[]
          }
          delete: {
            args: Prisma.UADeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAPayload>
          }
          update: {
            args: Prisma.UAUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAPayload>
          }
          deleteMany: {
            args: Prisma.UADeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UAUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UAUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAPayload>[]
          }
          upsert: {
            args: Prisma.UAUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UAPayload>
          }
          aggregate: {
            args: Prisma.UAAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUA>
          }
          groupBy: {
            args: Prisma.UAGroupByArgs<ExtArgs>
            result: $Utils.Optional<UAGroupByOutputType>[]
          }
          count: {
            args: Prisma.UACountArgs<ExtArgs>
            result: $Utils.Optional<UACountAggregateOutputType> | number
          }
        }
      }
      PalabraClave: {
        payload: Prisma.$PalabraClavePayload<ExtArgs>
        fields: Prisma.PalabraClaveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PalabraClaveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PalabraClavePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PalabraClaveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PalabraClavePayload>
          }
          findFirst: {
            args: Prisma.PalabraClaveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PalabraClavePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PalabraClaveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PalabraClavePayload>
          }
          findMany: {
            args: Prisma.PalabraClaveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PalabraClavePayload>[]
          }
          create: {
            args: Prisma.PalabraClaveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PalabraClavePayload>
          }
          createMany: {
            args: Prisma.PalabraClaveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PalabraClaveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PalabraClavePayload>[]
          }
          delete: {
            args: Prisma.PalabraClaveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PalabraClavePayload>
          }
          update: {
            args: Prisma.PalabraClaveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PalabraClavePayload>
          }
          deleteMany: {
            args: Prisma.PalabraClaveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PalabraClaveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PalabraClaveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PalabraClavePayload>[]
          }
          upsert: {
            args: Prisma.PalabraClaveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PalabraClavePayload>
          }
          aggregate: {
            args: Prisma.PalabraClaveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePalabraClave>
          }
          groupBy: {
            args: Prisma.PalabraClaveGroupByArgs<ExtArgs>
            result: $Utils.Optional<PalabraClaveGroupByOutputType>[]
          }
          count: {
            args: Prisma.PalabraClaveCountArgs<ExtArgs>
            result: $Utils.Optional<PalabraClaveCountAggregateOutputType> | number
          }
        }
      }
      VideoPalabraClave: {
        payload: Prisma.$VideoPalabraClavePayload<ExtArgs>
        fields: Prisma.VideoPalabraClaveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoPalabraClaveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPalabraClavePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoPalabraClaveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPalabraClavePayload>
          }
          findFirst: {
            args: Prisma.VideoPalabraClaveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPalabraClavePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoPalabraClaveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPalabraClavePayload>
          }
          findMany: {
            args: Prisma.VideoPalabraClaveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPalabraClavePayload>[]
          }
          create: {
            args: Prisma.VideoPalabraClaveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPalabraClavePayload>
          }
          createMany: {
            args: Prisma.VideoPalabraClaveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoPalabraClaveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPalabraClavePayload>[]
          }
          delete: {
            args: Prisma.VideoPalabraClaveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPalabraClavePayload>
          }
          update: {
            args: Prisma.VideoPalabraClaveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPalabraClavePayload>
          }
          deleteMany: {
            args: Prisma.VideoPalabraClaveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoPalabraClaveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoPalabraClaveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPalabraClavePayload>[]
          }
          upsert: {
            args: Prisma.VideoPalabraClaveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPalabraClavePayload>
          }
          aggregate: {
            args: Prisma.VideoPalabraClaveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoPalabraClave>
          }
          groupBy: {
            args: Prisma.VideoPalabraClaveGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoPalabraClaveGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoPalabraClaveCountArgs<ExtArgs>
            result: $Utils.Optional<VideoPalabraClaveCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    session?: SessionOmit
    video?: VideoOmit
    facultad?: FacultadOmit
    carrera?: CarreraOmit
    uA?: UAOmit
    palabraClave?: PalabraClaveOmit
    videoPalabraClave?: VideoPalabraClaveOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    videos: number
    sesiones: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | UsuarioCountOutputTypeCountVideosArgs
    sesiones?: boolean | UsuarioCountOutputTypeCountSesionesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSesionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type VideoCountOutputType
   */

  export type VideoCountOutputType = {
    palabras: number
  }

  export type VideoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    palabras?: boolean | VideoCountOutputTypeCountPalabrasArgs
  }

  // Custom InputTypes
  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCountOutputType
     */
    select?: VideoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountPalabrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoPalabraClaveWhereInput
  }


  /**
   * Count Type FacultadCountOutputType
   */

  export type FacultadCountOutputType = {
    usuarios: number
    carreras: number
  }

  export type FacultadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | FacultadCountOutputTypeCountUsuariosArgs
    carreras?: boolean | FacultadCountOutputTypeCountCarrerasArgs
  }

  // Custom InputTypes
  /**
   * FacultadCountOutputType without action
   */
  export type FacultadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultadCountOutputType
     */
    select?: FacultadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacultadCountOutputType without action
   */
  export type FacultadCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }

  /**
   * FacultadCountOutputType without action
   */
  export type FacultadCountOutputTypeCountCarrerasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarreraWhereInput
  }


  /**
   * Count Type CarreraCountOutputType
   */

  export type CarreraCountOutputType = {
    ua: number
  }

  export type CarreraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ua?: boolean | CarreraCountOutputTypeCountUaArgs
  }

  // Custom InputTypes
  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarreraCountOutputType
     */
    select?: CarreraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeCountUaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UAWhereInput
  }


  /**
   * Count Type UACountOutputType
   */

  export type UACountOutputType = {
    videos: number
  }

  export type UACountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | UACountOutputTypeCountVideosArgs
  }

  // Custom InputTypes
  /**
   * UACountOutputType without action
   */
  export type UACountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UACountOutputType
     */
    select?: UACountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UACountOutputType without action
   */
  export type UACountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }


  /**
   * Count Type PalabraClaveCountOutputType
   */

  export type PalabraClaveCountOutputType = {
    videos: number
  }

  export type PalabraClaveCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | PalabraClaveCountOutputTypeCountVideosArgs
  }

  // Custom InputTypes
  /**
   * PalabraClaveCountOutputType without action
   */
  export type PalabraClaveCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PalabraClaveCountOutputType
     */
    select?: PalabraClaveCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PalabraClaveCountOutputType without action
   */
  export type PalabraClaveCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoPalabraClaveWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    facultad_id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    facultad_id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre_de_usuario: string | null
    password: string | null
    fecha_de_registro: Date | null
    admin: boolean | null
    facultad_id: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre_de_usuario: string | null
    password: string | null
    fecha_de_registro: Date | null
    admin: boolean | null
    facultad_id: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre_de_usuario: number
    password: number
    fecha_de_registro: number
    admin: number
    facultad_id: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    facultad_id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    facultad_id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre_de_usuario?: true
    password?: true
    fecha_de_registro?: true
    admin?: true
    facultad_id?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre_de_usuario?: true
    password?: true
    fecha_de_registro?: true
    admin?: true
    facultad_id?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre_de_usuario?: true
    password?: true
    fecha_de_registro?: true
    admin?: true
    facultad_id?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre_de_usuario: string
    password: string
    fecha_de_registro: Date
    admin: boolean
    facultad_id: number | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre_de_usuario?: boolean
    password?: boolean
    fecha_de_registro?: boolean
    admin?: boolean
    facultad_id?: boolean
    videos?: boolean | Usuario$videosArgs<ExtArgs>
    facultad?: boolean | Usuario$facultadArgs<ExtArgs>
    sesiones?: boolean | Usuario$sesionesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre_de_usuario?: boolean
    password?: boolean
    fecha_de_registro?: boolean
    admin?: boolean
    facultad_id?: boolean
    facultad?: boolean | Usuario$facultadArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre_de_usuario?: boolean
    password?: boolean
    fecha_de_registro?: boolean
    admin?: boolean
    facultad_id?: boolean
    facultad?: boolean | Usuario$facultadArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre_de_usuario?: boolean
    password?: boolean
    fecha_de_registro?: boolean
    admin?: boolean
    facultad_id?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre_de_usuario" | "password" | "fecha_de_registro" | "admin" | "facultad_id", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | Usuario$videosArgs<ExtArgs>
    facultad?: boolean | Usuario$facultadArgs<ExtArgs>
    sesiones?: boolean | Usuario$sesionesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facultad?: boolean | Usuario$facultadArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facultad?: boolean | Usuario$facultadArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      videos: Prisma.$VideoPayload<ExtArgs>[]
      facultad: Prisma.$FacultadPayload<ExtArgs> | null
      sesiones: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre_de_usuario: string
      password: string
      fecha_de_registro: Date
      admin: boolean
      facultad_id: number | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    videos<T extends Usuario$videosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    facultad<T extends Usuario$facultadArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$facultadArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sesiones<T extends Usuario$sesionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$sesionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre_de_usuario: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly fecha_de_registro: FieldRef<"Usuario", 'DateTime'>
    readonly admin: FieldRef<"Usuario", 'Boolean'>
    readonly facultad_id: FieldRef<"Usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.videos
   */
  export type Usuario$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Usuario.facultad
   */
  export type Usuario$facultadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
    where?: FacultadWhereInput
  }

  /**
   * Usuario.sesiones
   */
  export type Usuario$sesionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    usuarioId: number | null
  }

  export type SessionSumAggregateOutputType = {
    usuarioId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    usuarioId: number | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    usuarioId: number | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    usuarioId: number
    createdAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    usuarioId?: true
  }

  export type SessionSumAggregateInputType = {
    usuarioId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    usuarioId?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    usuarioId?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    usuarioId: number
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    createdAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "createdAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: number
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly usuarioId: FieldRef<"Session", 'Int'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    id: number | null
    aprobado: number | null
    usuario_id: number | null
    ua_id: number | null
  }

  export type VideoSumAggregateOutputType = {
    id: number | null
    aprobado: number | null
    usuario_id: number | null
    ua_id: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    identificador: string | null
    fecha_de_registro: Date | null
    fase: string | null
    aprobado: number | null
    comentario: string | null
    usuario_id: number | null
    ua_id: number | null
  }

  export type VideoMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    identificador: string | null
    fecha_de_registro: Date | null
    fase: string | null
    aprobado: number | null
    comentario: string | null
    usuario_id: number | null
    ua_id: number | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    titulo: number
    descripcion: number
    identificador: number
    fecha_de_registro: number
    fase: number
    aprobado: number
    comentario: number
    usuario_id: number
    ua_id: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    id?: true
    aprobado?: true
    usuario_id?: true
    ua_id?: true
  }

  export type VideoSumAggregateInputType = {
    id?: true
    aprobado?: true
    usuario_id?: true
    ua_id?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    identificador?: true
    fecha_de_registro?: true
    fase?: true
    aprobado?: true
    comentario?: true
    usuario_id?: true
    ua_id?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    identificador?: true
    fecha_de_registro?: true
    fase?: true
    aprobado?: true
    comentario?: true
    usuario_id?: true
    ua_id?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    identificador?: true
    fecha_de_registro?: true
    fase?: true
    aprobado?: true
    comentario?: true
    usuario_id?: true
    ua_id?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: number
    titulo: string
    descripcion: string
    identificador: string
    fecha_de_registro: Date
    fase: string
    aprobado: number
    comentario: string | null
    usuario_id: number
    ua_id: number
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    identificador?: boolean
    fecha_de_registro?: boolean
    fase?: boolean
    aprobado?: boolean
    comentario?: boolean
    usuario_id?: boolean
    ua_id?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ua?: boolean | UADefaultArgs<ExtArgs>
    palabras?: boolean | Video$palabrasArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    identificador?: boolean
    fecha_de_registro?: boolean
    fase?: boolean
    aprobado?: boolean
    comentario?: boolean
    usuario_id?: boolean
    ua_id?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ua?: boolean | UADefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    identificador?: boolean
    fecha_de_registro?: boolean
    fase?: boolean
    aprobado?: boolean
    comentario?: boolean
    usuario_id?: boolean
    ua_id?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ua?: boolean | UADefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    identificador?: boolean
    fecha_de_registro?: boolean
    fase?: boolean
    aprobado?: boolean
    comentario?: boolean
    usuario_id?: boolean
    ua_id?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descripcion" | "identificador" | "fecha_de_registro" | "fase" | "aprobado" | "comentario" | "usuario_id" | "ua_id", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ua?: boolean | UADefaultArgs<ExtArgs>
    palabras?: boolean | Video$palabrasArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ua?: boolean | UADefaultArgs<ExtArgs>
  }
  export type VideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ua?: boolean | UADefaultArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      ua: Prisma.$UAPayload<ExtArgs>
      palabras: Prisma.$VideoPalabraClavePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descripcion: string
      identificador: string
      fecha_de_registro: Date
      fase: string
      aprobado: number
      comentario: string | null
      usuario_id: number
      ua_id: number
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {VideoUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ua<T extends UADefaultArgs<ExtArgs> = {}>(args?: Subset<T, UADefaultArgs<ExtArgs>>): Prisma__UAClient<$Result.GetResult<Prisma.$UAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    palabras<T extends Video$palabrasArgs<ExtArgs> = {}>(args?: Subset<T, Video$palabrasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPalabraClavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'Int'>
    readonly titulo: FieldRef<"Video", 'String'>
    readonly descripcion: FieldRef<"Video", 'String'>
    readonly identificador: FieldRef<"Video", 'String'>
    readonly fecha_de_registro: FieldRef<"Video", 'DateTime'>
    readonly fase: FieldRef<"Video", 'String'>
    readonly aprobado: FieldRef<"Video", 'Int'>
    readonly comentario: FieldRef<"Video", 'String'>
    readonly usuario_id: FieldRef<"Video", 'Int'>
    readonly ua_id: FieldRef<"Video", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
  }

  /**
   * Video createManyAndReturn
   */
  export type VideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video updateManyAndReturn
   */
  export type VideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video.palabras
   */
  export type Video$palabrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPalabraClave
     */
    select?: VideoPalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPalabraClave
     */
    omit?: VideoPalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoPalabraClaveInclude<ExtArgs> | null
    where?: VideoPalabraClaveWhereInput
    orderBy?: VideoPalabraClaveOrderByWithRelationInput | VideoPalabraClaveOrderByWithRelationInput[]
    cursor?: VideoPalabraClaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoPalabraClaveScalarFieldEnum | VideoPalabraClaveScalarFieldEnum[]
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model Facultad
   */

  export type AggregateFacultad = {
    _count: FacultadCountAggregateOutputType | null
    _avg: FacultadAvgAggregateOutputType | null
    _sum: FacultadSumAggregateOutputType | null
    _min: FacultadMinAggregateOutputType | null
    _max: FacultadMaxAggregateOutputType | null
  }

  export type FacultadAvgAggregateOutputType = {
    id: number | null
  }

  export type FacultadSumAggregateOutputType = {
    id: number | null
  }

  export type FacultadMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type FacultadMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type FacultadCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type FacultadAvgAggregateInputType = {
    id?: true
  }

  export type FacultadSumAggregateInputType = {
    id?: true
  }

  export type FacultadMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type FacultadMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type FacultadCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type FacultadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facultad to aggregate.
     */
    where?: FacultadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facultads to fetch.
     */
    orderBy?: FacultadOrderByWithRelationInput | FacultadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacultadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facultads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facultads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facultads
    **/
    _count?: true | FacultadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacultadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacultadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultadMaxAggregateInputType
  }

  export type GetFacultadAggregateType<T extends FacultadAggregateArgs> = {
        [P in keyof T & keyof AggregateFacultad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacultad[P]>
      : GetScalarType<T[P], AggregateFacultad[P]>
  }




  export type FacultadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultadWhereInput
    orderBy?: FacultadOrderByWithAggregationInput | FacultadOrderByWithAggregationInput[]
    by: FacultadScalarFieldEnum[] | FacultadScalarFieldEnum
    having?: FacultadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultadCountAggregateInputType | true
    _avg?: FacultadAvgAggregateInputType
    _sum?: FacultadSumAggregateInputType
    _min?: FacultadMinAggregateInputType
    _max?: FacultadMaxAggregateInputType
  }

  export type FacultadGroupByOutputType = {
    id: number
    nombre: string
    _count: FacultadCountAggregateOutputType | null
    _avg: FacultadAvgAggregateOutputType | null
    _sum: FacultadSumAggregateOutputType | null
    _min: FacultadMinAggregateOutputType | null
    _max: FacultadMaxAggregateOutputType | null
  }

  type GetFacultadGroupByPayload<T extends FacultadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacultadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultadGroupByOutputType[P]>
            : GetScalarType<T[P], FacultadGroupByOutputType[P]>
        }
      >
    >


  export type FacultadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    usuarios?: boolean | Facultad$usuariosArgs<ExtArgs>
    carreras?: boolean | Facultad$carrerasArgs<ExtArgs>
    _count?: boolean | FacultadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facultad"]>

  export type FacultadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["facultad"]>

  export type FacultadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["facultad"]>

  export type FacultadSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type FacultadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["facultad"]>
  export type FacultadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Facultad$usuariosArgs<ExtArgs>
    carreras?: boolean | Facultad$carrerasArgs<ExtArgs>
    _count?: boolean | FacultadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FacultadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FacultadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FacultadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Facultad"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
      carreras: Prisma.$CarreraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["facultad"]>
    composites: {}
  }

  type FacultadGetPayload<S extends boolean | null | undefined | FacultadDefaultArgs> = $Result.GetResult<Prisma.$FacultadPayload, S>

  type FacultadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacultadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacultadCountAggregateInputType | true
    }

  export interface FacultadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Facultad'], meta: { name: 'Facultad' } }
    /**
     * Find zero or one Facultad that matches the filter.
     * @param {FacultadFindUniqueArgs} args - Arguments to find a Facultad
     * @example
     * // Get one Facultad
     * const facultad = await prisma.facultad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacultadFindUniqueArgs>(args: SelectSubset<T, FacultadFindUniqueArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Facultad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacultadFindUniqueOrThrowArgs} args - Arguments to find a Facultad
     * @example
     * // Get one Facultad
     * const facultad = await prisma.facultad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacultadFindUniqueOrThrowArgs>(args: SelectSubset<T, FacultadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facultad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultadFindFirstArgs} args - Arguments to find a Facultad
     * @example
     * // Get one Facultad
     * const facultad = await prisma.facultad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacultadFindFirstArgs>(args?: SelectSubset<T, FacultadFindFirstArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facultad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultadFindFirstOrThrowArgs} args - Arguments to find a Facultad
     * @example
     * // Get one Facultad
     * const facultad = await prisma.facultad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacultadFindFirstOrThrowArgs>(args?: SelectSubset<T, FacultadFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facultads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facultads
     * const facultads = await prisma.facultad.findMany()
     * 
     * // Get first 10 Facultads
     * const facultads = await prisma.facultad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facultadWithIdOnly = await prisma.facultad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacultadFindManyArgs>(args?: SelectSubset<T, FacultadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Facultad.
     * @param {FacultadCreateArgs} args - Arguments to create a Facultad.
     * @example
     * // Create one Facultad
     * const Facultad = await prisma.facultad.create({
     *   data: {
     *     // ... data to create a Facultad
     *   }
     * })
     * 
     */
    create<T extends FacultadCreateArgs>(args: SelectSubset<T, FacultadCreateArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facultads.
     * @param {FacultadCreateManyArgs} args - Arguments to create many Facultads.
     * @example
     * // Create many Facultads
     * const facultad = await prisma.facultad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacultadCreateManyArgs>(args?: SelectSubset<T, FacultadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facultads and returns the data saved in the database.
     * @param {FacultadCreateManyAndReturnArgs} args - Arguments to create many Facultads.
     * @example
     * // Create many Facultads
     * const facultad = await prisma.facultad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facultads and only return the `id`
     * const facultadWithIdOnly = await prisma.facultad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacultadCreateManyAndReturnArgs>(args?: SelectSubset<T, FacultadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Facultad.
     * @param {FacultadDeleteArgs} args - Arguments to delete one Facultad.
     * @example
     * // Delete one Facultad
     * const Facultad = await prisma.facultad.delete({
     *   where: {
     *     // ... filter to delete one Facultad
     *   }
     * })
     * 
     */
    delete<T extends FacultadDeleteArgs>(args: SelectSubset<T, FacultadDeleteArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Facultad.
     * @param {FacultadUpdateArgs} args - Arguments to update one Facultad.
     * @example
     * // Update one Facultad
     * const facultad = await prisma.facultad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacultadUpdateArgs>(args: SelectSubset<T, FacultadUpdateArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facultads.
     * @param {FacultadDeleteManyArgs} args - Arguments to filter Facultads to delete.
     * @example
     * // Delete a few Facultads
     * const { count } = await prisma.facultad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacultadDeleteManyArgs>(args?: SelectSubset<T, FacultadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facultads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facultads
     * const facultad = await prisma.facultad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacultadUpdateManyArgs>(args: SelectSubset<T, FacultadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facultads and returns the data updated in the database.
     * @param {FacultadUpdateManyAndReturnArgs} args - Arguments to update many Facultads.
     * @example
     * // Update many Facultads
     * const facultad = await prisma.facultad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Facultads and only return the `id`
     * const facultadWithIdOnly = await prisma.facultad.updateManyAndReturn({
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
    updateManyAndReturn<T extends FacultadUpdateManyAndReturnArgs>(args: SelectSubset<T, FacultadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Facultad.
     * @param {FacultadUpsertArgs} args - Arguments to update or create a Facultad.
     * @example
     * // Update or create a Facultad
     * const facultad = await prisma.facultad.upsert({
     *   create: {
     *     // ... data to create a Facultad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facultad we want to update
     *   }
     * })
     */
    upsert<T extends FacultadUpsertArgs>(args: SelectSubset<T, FacultadUpsertArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facultads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultadCountArgs} args - Arguments to filter Facultads to count.
     * @example
     * // Count the number of Facultads
     * const count = await prisma.facultad.count({
     *   where: {
     *     // ... the filter for the Facultads we want to count
     *   }
     * })
    **/
    count<T extends FacultadCountArgs>(
      args?: Subset<T, FacultadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facultad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacultadAggregateArgs>(args: Subset<T, FacultadAggregateArgs>): Prisma.PrismaPromise<GetFacultadAggregateType<T>>

    /**
     * Group by Facultad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultadGroupByArgs} args - Group by arguments.
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
      T extends FacultadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacultadGroupByArgs['orderBy'] }
        : { orderBy?: FacultadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacultadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Facultad model
   */
  readonly fields: FacultadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Facultad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacultadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Facultad$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Facultad$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carreras<T extends Facultad$carrerasArgs<ExtArgs> = {}>(args?: Subset<T, Facultad$carrerasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Facultad model
   */
  interface FacultadFieldRefs {
    readonly id: FieldRef<"Facultad", 'Int'>
    readonly nombre: FieldRef<"Facultad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Facultad findUnique
   */
  export type FacultadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
    /**
     * Filter, which Facultad to fetch.
     */
    where: FacultadWhereUniqueInput
  }

  /**
   * Facultad findUniqueOrThrow
   */
  export type FacultadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
    /**
     * Filter, which Facultad to fetch.
     */
    where: FacultadWhereUniqueInput
  }

  /**
   * Facultad findFirst
   */
  export type FacultadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
    /**
     * Filter, which Facultad to fetch.
     */
    where?: FacultadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facultads to fetch.
     */
    orderBy?: FacultadOrderByWithRelationInput | FacultadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facultads.
     */
    cursor?: FacultadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facultads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facultads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facultads.
     */
    distinct?: FacultadScalarFieldEnum | FacultadScalarFieldEnum[]
  }

  /**
   * Facultad findFirstOrThrow
   */
  export type FacultadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
    /**
     * Filter, which Facultad to fetch.
     */
    where?: FacultadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facultads to fetch.
     */
    orderBy?: FacultadOrderByWithRelationInput | FacultadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facultads.
     */
    cursor?: FacultadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facultads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facultads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facultads.
     */
    distinct?: FacultadScalarFieldEnum | FacultadScalarFieldEnum[]
  }

  /**
   * Facultad findMany
   */
  export type FacultadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
    /**
     * Filter, which Facultads to fetch.
     */
    where?: FacultadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facultads to fetch.
     */
    orderBy?: FacultadOrderByWithRelationInput | FacultadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facultads.
     */
    cursor?: FacultadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facultads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facultads.
     */
    skip?: number
    distinct?: FacultadScalarFieldEnum | FacultadScalarFieldEnum[]
  }

  /**
   * Facultad create
   */
  export type FacultadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
    /**
     * The data needed to create a Facultad.
     */
    data: XOR<FacultadCreateInput, FacultadUncheckedCreateInput>
  }

  /**
   * Facultad createMany
   */
  export type FacultadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facultads.
     */
    data: FacultadCreateManyInput | FacultadCreateManyInput[]
  }

  /**
   * Facultad createManyAndReturn
   */
  export type FacultadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * The data used to create many Facultads.
     */
    data: FacultadCreateManyInput | FacultadCreateManyInput[]
  }

  /**
   * Facultad update
   */
  export type FacultadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
    /**
     * The data needed to update a Facultad.
     */
    data: XOR<FacultadUpdateInput, FacultadUncheckedUpdateInput>
    /**
     * Choose, which Facultad to update.
     */
    where: FacultadWhereUniqueInput
  }

  /**
   * Facultad updateMany
   */
  export type FacultadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facultads.
     */
    data: XOR<FacultadUpdateManyMutationInput, FacultadUncheckedUpdateManyInput>
    /**
     * Filter which Facultads to update
     */
    where?: FacultadWhereInput
    /**
     * Limit how many Facultads to update.
     */
    limit?: number
  }

  /**
   * Facultad updateManyAndReturn
   */
  export type FacultadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * The data used to update Facultads.
     */
    data: XOR<FacultadUpdateManyMutationInput, FacultadUncheckedUpdateManyInput>
    /**
     * Filter which Facultads to update
     */
    where?: FacultadWhereInput
    /**
     * Limit how many Facultads to update.
     */
    limit?: number
  }

  /**
   * Facultad upsert
   */
  export type FacultadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
    /**
     * The filter to search for the Facultad to update in case it exists.
     */
    where: FacultadWhereUniqueInput
    /**
     * In case the Facultad found by the `where` argument doesn't exist, create a new Facultad with this data.
     */
    create: XOR<FacultadCreateInput, FacultadUncheckedCreateInput>
    /**
     * In case the Facultad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacultadUpdateInput, FacultadUncheckedUpdateInput>
  }

  /**
   * Facultad delete
   */
  export type FacultadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
    /**
     * Filter which Facultad to delete.
     */
    where: FacultadWhereUniqueInput
  }

  /**
   * Facultad deleteMany
   */
  export type FacultadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facultads to delete
     */
    where?: FacultadWhereInput
    /**
     * Limit how many Facultads to delete.
     */
    limit?: number
  }

  /**
   * Facultad.usuarios
   */
  export type Facultad$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Facultad.carreras
   */
  export type Facultad$carrerasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    where?: CarreraWhereInput
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    cursor?: CarreraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Facultad without action
   */
  export type FacultadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facultad
     */
    select?: FacultadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facultad
     */
    omit?: FacultadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultadInclude<ExtArgs> | null
  }


  /**
   * Model Carrera
   */

  export type AggregateCarrera = {
    _count: CarreraCountAggregateOutputType | null
    _avg: CarreraAvgAggregateOutputType | null
    _sum: CarreraSumAggregateOutputType | null
    _min: CarreraMinAggregateOutputType | null
    _max: CarreraMaxAggregateOutputType | null
  }

  export type CarreraAvgAggregateOutputType = {
    id: number | null
    facultad_id: number | null
  }

  export type CarreraSumAggregateOutputType = {
    id: number | null
    facultad_id: number | null
  }

  export type CarreraMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    facultad_id: number | null
  }

  export type CarreraMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    facultad_id: number | null
  }

  export type CarreraCountAggregateOutputType = {
    id: number
    nombre: number
    facultad_id: number
    _all: number
  }


  export type CarreraAvgAggregateInputType = {
    id?: true
    facultad_id?: true
  }

  export type CarreraSumAggregateInputType = {
    id?: true
    facultad_id?: true
  }

  export type CarreraMinAggregateInputType = {
    id?: true
    nombre?: true
    facultad_id?: true
  }

  export type CarreraMaxAggregateInputType = {
    id?: true
    nombre?: true
    facultad_id?: true
  }

  export type CarreraCountAggregateInputType = {
    id?: true
    nombre?: true
    facultad_id?: true
    _all?: true
  }

  export type CarreraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carrera to aggregate.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carreras
    **/
    _count?: true | CarreraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarreraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarreraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarreraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarreraMaxAggregateInputType
  }

  export type GetCarreraAggregateType<T extends CarreraAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrera]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrera[P]>
      : GetScalarType<T[P], AggregateCarrera[P]>
  }




  export type CarreraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarreraWhereInput
    orderBy?: CarreraOrderByWithAggregationInput | CarreraOrderByWithAggregationInput[]
    by: CarreraScalarFieldEnum[] | CarreraScalarFieldEnum
    having?: CarreraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarreraCountAggregateInputType | true
    _avg?: CarreraAvgAggregateInputType
    _sum?: CarreraSumAggregateInputType
    _min?: CarreraMinAggregateInputType
    _max?: CarreraMaxAggregateInputType
  }

  export type CarreraGroupByOutputType = {
    id: number
    nombre: string
    facultad_id: number
    _count: CarreraCountAggregateOutputType | null
    _avg: CarreraAvgAggregateOutputType | null
    _sum: CarreraSumAggregateOutputType | null
    _min: CarreraMinAggregateOutputType | null
    _max: CarreraMaxAggregateOutputType | null
  }

  type GetCarreraGroupByPayload<T extends CarreraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarreraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarreraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarreraGroupByOutputType[P]>
            : GetScalarType<T[P], CarreraGroupByOutputType[P]>
        }
      >
    >


  export type CarreraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    facultad_id?: boolean
    ua?: boolean | Carrera$uaArgs<ExtArgs>
    facultad?: boolean | FacultadDefaultArgs<ExtArgs>
    _count?: boolean | CarreraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrera"]>

  export type CarreraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    facultad_id?: boolean
    facultad?: boolean | FacultadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrera"]>

  export type CarreraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    facultad_id?: boolean
    facultad?: boolean | FacultadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrera"]>

  export type CarreraSelectScalar = {
    id?: boolean
    nombre?: boolean
    facultad_id?: boolean
  }

  export type CarreraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "facultad_id", ExtArgs["result"]["carrera"]>
  export type CarreraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ua?: boolean | Carrera$uaArgs<ExtArgs>
    facultad?: boolean | FacultadDefaultArgs<ExtArgs>
    _count?: boolean | CarreraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarreraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facultad?: boolean | FacultadDefaultArgs<ExtArgs>
  }
  export type CarreraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facultad?: boolean | FacultadDefaultArgs<ExtArgs>
  }

  export type $CarreraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carrera"
    objects: {
      ua: Prisma.$UAPayload<ExtArgs>[]
      facultad: Prisma.$FacultadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      facultad_id: number
    }, ExtArgs["result"]["carrera"]>
    composites: {}
  }

  type CarreraGetPayload<S extends boolean | null | undefined | CarreraDefaultArgs> = $Result.GetResult<Prisma.$CarreraPayload, S>

  type CarreraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarreraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarreraCountAggregateInputType | true
    }

  export interface CarreraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carrera'], meta: { name: 'Carrera' } }
    /**
     * Find zero or one Carrera that matches the filter.
     * @param {CarreraFindUniqueArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarreraFindUniqueArgs>(args: SelectSubset<T, CarreraFindUniqueArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carrera that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarreraFindUniqueOrThrowArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarreraFindUniqueOrThrowArgs>(args: SelectSubset<T, CarreraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrera that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindFirstArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarreraFindFirstArgs>(args?: SelectSubset<T, CarreraFindFirstArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrera that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindFirstOrThrowArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarreraFindFirstOrThrowArgs>(args?: SelectSubset<T, CarreraFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carreras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carreras
     * const carreras = await prisma.carrera.findMany()
     * 
     * // Get first 10 Carreras
     * const carreras = await prisma.carrera.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carreraWithIdOnly = await prisma.carrera.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarreraFindManyArgs>(args?: SelectSubset<T, CarreraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carrera.
     * @param {CarreraCreateArgs} args - Arguments to create a Carrera.
     * @example
     * // Create one Carrera
     * const Carrera = await prisma.carrera.create({
     *   data: {
     *     // ... data to create a Carrera
     *   }
     * })
     * 
     */
    create<T extends CarreraCreateArgs>(args: SelectSubset<T, CarreraCreateArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carreras.
     * @param {CarreraCreateManyArgs} args - Arguments to create many Carreras.
     * @example
     * // Create many Carreras
     * const carrera = await prisma.carrera.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarreraCreateManyArgs>(args?: SelectSubset<T, CarreraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carreras and returns the data saved in the database.
     * @param {CarreraCreateManyAndReturnArgs} args - Arguments to create many Carreras.
     * @example
     * // Create many Carreras
     * const carrera = await prisma.carrera.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carreras and only return the `id`
     * const carreraWithIdOnly = await prisma.carrera.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarreraCreateManyAndReturnArgs>(args?: SelectSubset<T, CarreraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carrera.
     * @param {CarreraDeleteArgs} args - Arguments to delete one Carrera.
     * @example
     * // Delete one Carrera
     * const Carrera = await prisma.carrera.delete({
     *   where: {
     *     // ... filter to delete one Carrera
     *   }
     * })
     * 
     */
    delete<T extends CarreraDeleteArgs>(args: SelectSubset<T, CarreraDeleteArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carrera.
     * @param {CarreraUpdateArgs} args - Arguments to update one Carrera.
     * @example
     * // Update one Carrera
     * const carrera = await prisma.carrera.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarreraUpdateArgs>(args: SelectSubset<T, CarreraUpdateArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carreras.
     * @param {CarreraDeleteManyArgs} args - Arguments to filter Carreras to delete.
     * @example
     * // Delete a few Carreras
     * const { count } = await prisma.carrera.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarreraDeleteManyArgs>(args?: SelectSubset<T, CarreraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carreras
     * const carrera = await prisma.carrera.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarreraUpdateManyArgs>(args: SelectSubset<T, CarreraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carreras and returns the data updated in the database.
     * @param {CarreraUpdateManyAndReturnArgs} args - Arguments to update many Carreras.
     * @example
     * // Update many Carreras
     * const carrera = await prisma.carrera.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carreras and only return the `id`
     * const carreraWithIdOnly = await prisma.carrera.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarreraUpdateManyAndReturnArgs>(args: SelectSubset<T, CarreraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carrera.
     * @param {CarreraUpsertArgs} args - Arguments to update or create a Carrera.
     * @example
     * // Update or create a Carrera
     * const carrera = await prisma.carrera.upsert({
     *   create: {
     *     // ... data to create a Carrera
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrera we want to update
     *   }
     * })
     */
    upsert<T extends CarreraUpsertArgs>(args: SelectSubset<T, CarreraUpsertArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraCountArgs} args - Arguments to filter Carreras to count.
     * @example
     * // Count the number of Carreras
     * const count = await prisma.carrera.count({
     *   where: {
     *     // ... the filter for the Carreras we want to count
     *   }
     * })
    **/
    count<T extends CarreraCountArgs>(
      args?: Subset<T, CarreraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarreraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarreraAggregateArgs>(args: Subset<T, CarreraAggregateArgs>): Prisma.PrismaPromise<GetCarreraAggregateType<T>>

    /**
     * Group by Carrera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraGroupByArgs} args - Group by arguments.
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
      T extends CarreraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarreraGroupByArgs['orderBy'] }
        : { orderBy?: CarreraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarreraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarreraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carrera model
   */
  readonly fields: CarreraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carrera.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarreraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ua<T extends Carrera$uaArgs<ExtArgs> = {}>(args?: Subset<T, Carrera$uaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    facultad<T extends FacultadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacultadDefaultArgs<ExtArgs>>): Prisma__FacultadClient<$Result.GetResult<Prisma.$FacultadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Carrera model
   */
  interface CarreraFieldRefs {
    readonly id: FieldRef<"Carrera", 'Int'>
    readonly nombre: FieldRef<"Carrera", 'String'>
    readonly facultad_id: FieldRef<"Carrera", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Carrera findUnique
   */
  export type CarreraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera findUniqueOrThrow
   */
  export type CarreraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera findFirst
   */
  export type CarreraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carreras.
     */
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera findFirstOrThrow
   */
  export type CarreraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carreras.
     */
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera findMany
   */
  export type CarreraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carreras to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera create
   */
  export type CarreraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The data needed to create a Carrera.
     */
    data: XOR<CarreraCreateInput, CarreraUncheckedCreateInput>
  }

  /**
   * Carrera createMany
   */
  export type CarreraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carreras.
     */
    data: CarreraCreateManyInput | CarreraCreateManyInput[]
  }

  /**
   * Carrera createManyAndReturn
   */
  export type CarreraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * The data used to create many Carreras.
     */
    data: CarreraCreateManyInput | CarreraCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carrera update
   */
  export type CarreraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The data needed to update a Carrera.
     */
    data: XOR<CarreraUpdateInput, CarreraUncheckedUpdateInput>
    /**
     * Choose, which Carrera to update.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera updateMany
   */
  export type CarreraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carreras.
     */
    data: XOR<CarreraUpdateManyMutationInput, CarreraUncheckedUpdateManyInput>
    /**
     * Filter which Carreras to update
     */
    where?: CarreraWhereInput
    /**
     * Limit how many Carreras to update.
     */
    limit?: number
  }

  /**
   * Carrera updateManyAndReturn
   */
  export type CarreraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * The data used to update Carreras.
     */
    data: XOR<CarreraUpdateManyMutationInput, CarreraUncheckedUpdateManyInput>
    /**
     * Filter which Carreras to update
     */
    where?: CarreraWhereInput
    /**
     * Limit how many Carreras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carrera upsert
   */
  export type CarreraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The filter to search for the Carrera to update in case it exists.
     */
    where: CarreraWhereUniqueInput
    /**
     * In case the Carrera found by the `where` argument doesn't exist, create a new Carrera with this data.
     */
    create: XOR<CarreraCreateInput, CarreraUncheckedCreateInput>
    /**
     * In case the Carrera was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarreraUpdateInput, CarreraUncheckedUpdateInput>
  }

  /**
   * Carrera delete
   */
  export type CarreraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter which Carrera to delete.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera deleteMany
   */
  export type CarreraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carreras to delete
     */
    where?: CarreraWhereInput
    /**
     * Limit how many Carreras to delete.
     */
    limit?: number
  }

  /**
   * Carrera.ua
   */
  export type Carrera$uaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UA
     */
    select?: UASelect<ExtArgs> | null
    /**
     * Omit specific fields from the UA
     */
    omit?: UAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAInclude<ExtArgs> | null
    where?: UAWhereInput
    orderBy?: UAOrderByWithRelationInput | UAOrderByWithRelationInput[]
    cursor?: UAWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UAScalarFieldEnum | UAScalarFieldEnum[]
  }

  /**
   * Carrera without action
   */
  export type CarreraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
  }


  /**
   * Model UA
   */

  export type AggregateUA = {
    _count: UACountAggregateOutputType | null
    _avg: UAAvgAggregateOutputType | null
    _sum: UASumAggregateOutputType | null
    _min: UAMinAggregateOutputType | null
    _max: UAMaxAggregateOutputType | null
  }

  export type UAAvgAggregateOutputType = {
    id: number | null
    carrera_id: number | null
  }

  export type UASumAggregateOutputType = {
    id: number | null
    carrera_id: number | null
  }

  export type UAMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    modalidad: string | null
    carrera_id: number | null
  }

  export type UAMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    modalidad: string | null
    carrera_id: number | null
  }

  export type UACountAggregateOutputType = {
    id: number
    nombre: number
    modalidad: number
    carrera_id: number
    _all: number
  }


  export type UAAvgAggregateInputType = {
    id?: true
    carrera_id?: true
  }

  export type UASumAggregateInputType = {
    id?: true
    carrera_id?: true
  }

  export type UAMinAggregateInputType = {
    id?: true
    nombre?: true
    modalidad?: true
    carrera_id?: true
  }

  export type UAMaxAggregateInputType = {
    id?: true
    nombre?: true
    modalidad?: true
    carrera_id?: true
  }

  export type UACountAggregateInputType = {
    id?: true
    nombre?: true
    modalidad?: true
    carrera_id?: true
    _all?: true
  }

  export type UAAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UA to aggregate.
     */
    where?: UAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UAS to fetch.
     */
    orderBy?: UAOrderByWithRelationInput | UAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UAS
    **/
    _count?: true | UACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UAAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UASumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UAMaxAggregateInputType
  }

  export type GetUAAggregateType<T extends UAAggregateArgs> = {
        [P in keyof T & keyof AggregateUA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUA[P]>
      : GetScalarType<T[P], AggregateUA[P]>
  }




  export type UAGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UAWhereInput
    orderBy?: UAOrderByWithAggregationInput | UAOrderByWithAggregationInput[]
    by: UAScalarFieldEnum[] | UAScalarFieldEnum
    having?: UAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UACountAggregateInputType | true
    _avg?: UAAvgAggregateInputType
    _sum?: UASumAggregateInputType
    _min?: UAMinAggregateInputType
    _max?: UAMaxAggregateInputType
  }

  export type UAGroupByOutputType = {
    id: number
    nombre: string
    modalidad: string
    carrera_id: number
    _count: UACountAggregateOutputType | null
    _avg: UAAvgAggregateOutputType | null
    _sum: UASumAggregateOutputType | null
    _min: UAMinAggregateOutputType | null
    _max: UAMaxAggregateOutputType | null
  }

  type GetUAGroupByPayload<T extends UAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UAGroupByOutputType[P]>
            : GetScalarType<T[P], UAGroupByOutputType[P]>
        }
      >
    >


  export type UASelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    modalidad?: boolean
    carrera_id?: boolean
    videos?: boolean | UA$videosArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    _count?: boolean | UACountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uA"]>

  export type UASelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    modalidad?: boolean
    carrera_id?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uA"]>

  export type UASelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    modalidad?: boolean
    carrera_id?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uA"]>

  export type UASelectScalar = {
    id?: boolean
    nombre?: boolean
    modalidad?: boolean
    carrera_id?: boolean
  }

  export type UAOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "modalidad" | "carrera_id", ExtArgs["result"]["uA"]>
  export type UAInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | UA$videosArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    _count?: boolean | UACountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UAIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }
  export type UAIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }

  export type $UAPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UA"
    objects: {
      videos: Prisma.$VideoPayload<ExtArgs>[]
      carrera: Prisma.$CarreraPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      modalidad: string
      carrera_id: number
    }, ExtArgs["result"]["uA"]>
    composites: {}
  }

  type UAGetPayload<S extends boolean | null | undefined | UADefaultArgs> = $Result.GetResult<Prisma.$UAPayload, S>

  type UACountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UACountAggregateInputType | true
    }

  export interface UADelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UA'], meta: { name: 'UA' } }
    /**
     * Find zero or one UA that matches the filter.
     * @param {UAFindUniqueArgs} args - Arguments to find a UA
     * @example
     * // Get one UA
     * const uA = await prisma.uA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UAFindUniqueArgs>(args: SelectSubset<T, UAFindUniqueArgs<ExtArgs>>): Prisma__UAClient<$Result.GetResult<Prisma.$UAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UA that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UAFindUniqueOrThrowArgs} args - Arguments to find a UA
     * @example
     * // Get one UA
     * const uA = await prisma.uA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UAFindUniqueOrThrowArgs>(args: SelectSubset<T, UAFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UAClient<$Result.GetResult<Prisma.$UAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UAFindFirstArgs} args - Arguments to find a UA
     * @example
     * // Get one UA
     * const uA = await prisma.uA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UAFindFirstArgs>(args?: SelectSubset<T, UAFindFirstArgs<ExtArgs>>): Prisma__UAClient<$Result.GetResult<Prisma.$UAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UAFindFirstOrThrowArgs} args - Arguments to find a UA
     * @example
     * // Get one UA
     * const uA = await prisma.uA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UAFindFirstOrThrowArgs>(args?: SelectSubset<T, UAFindFirstOrThrowArgs<ExtArgs>>): Prisma__UAClient<$Result.GetResult<Prisma.$UAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UAFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UAS
     * const uAS = await prisma.uA.findMany()
     * 
     * // Get first 10 UAS
     * const uAS = await prisma.uA.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uAWithIdOnly = await prisma.uA.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UAFindManyArgs>(args?: SelectSubset<T, UAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UA.
     * @param {UACreateArgs} args - Arguments to create a UA.
     * @example
     * // Create one UA
     * const UA = await prisma.uA.create({
     *   data: {
     *     // ... data to create a UA
     *   }
     * })
     * 
     */
    create<T extends UACreateArgs>(args: SelectSubset<T, UACreateArgs<ExtArgs>>): Prisma__UAClient<$Result.GetResult<Prisma.$UAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UAS.
     * @param {UACreateManyArgs} args - Arguments to create many UAS.
     * @example
     * // Create many UAS
     * const uA = await prisma.uA.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UACreateManyArgs>(args?: SelectSubset<T, UACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UAS and returns the data saved in the database.
     * @param {UACreateManyAndReturnArgs} args - Arguments to create many UAS.
     * @example
     * // Create many UAS
     * const uA = await prisma.uA.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UAS and only return the `id`
     * const uAWithIdOnly = await prisma.uA.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UACreateManyAndReturnArgs>(args?: SelectSubset<T, UACreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UAPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UA.
     * @param {UADeleteArgs} args - Arguments to delete one UA.
     * @example
     * // Delete one UA
     * const UA = await prisma.uA.delete({
     *   where: {
     *     // ... filter to delete one UA
     *   }
     * })
     * 
     */
    delete<T extends UADeleteArgs>(args: SelectSubset<T, UADeleteArgs<ExtArgs>>): Prisma__UAClient<$Result.GetResult<Prisma.$UAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UA.
     * @param {UAUpdateArgs} args - Arguments to update one UA.
     * @example
     * // Update one UA
     * const uA = await prisma.uA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UAUpdateArgs>(args: SelectSubset<T, UAUpdateArgs<ExtArgs>>): Prisma__UAClient<$Result.GetResult<Prisma.$UAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UAS.
     * @param {UADeleteManyArgs} args - Arguments to filter UAS to delete.
     * @example
     * // Delete a few UAS
     * const { count } = await prisma.uA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UADeleteManyArgs>(args?: SelectSubset<T, UADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UAS
     * const uA = await prisma.uA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UAUpdateManyArgs>(args: SelectSubset<T, UAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UAS and returns the data updated in the database.
     * @param {UAUpdateManyAndReturnArgs} args - Arguments to update many UAS.
     * @example
     * // Update many UAS
     * const uA = await prisma.uA.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UAS and only return the `id`
     * const uAWithIdOnly = await prisma.uA.updateManyAndReturn({
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
    updateManyAndReturn<T extends UAUpdateManyAndReturnArgs>(args: SelectSubset<T, UAUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UAPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UA.
     * @param {UAUpsertArgs} args - Arguments to update or create a UA.
     * @example
     * // Update or create a UA
     * const uA = await prisma.uA.upsert({
     *   create: {
     *     // ... data to create a UA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UA we want to update
     *   }
     * })
     */
    upsert<T extends UAUpsertArgs>(args: SelectSubset<T, UAUpsertArgs<ExtArgs>>): Prisma__UAClient<$Result.GetResult<Prisma.$UAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UACountArgs} args - Arguments to filter UAS to count.
     * @example
     * // Count the number of UAS
     * const count = await prisma.uA.count({
     *   where: {
     *     // ... the filter for the UAS we want to count
     *   }
     * })
    **/
    count<T extends UACountArgs>(
      args?: Subset<T, UACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UAAggregateArgs>(args: Subset<T, UAAggregateArgs>): Prisma.PrismaPromise<GetUAAggregateType<T>>

    /**
     * Group by UA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UAGroupByArgs} args - Group by arguments.
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
      T extends UAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UAGroupByArgs['orderBy'] }
        : { orderBy?: UAGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UA model
   */
  readonly fields: UAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UAClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    videos<T extends UA$videosArgs<ExtArgs> = {}>(args?: Subset<T, UA$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carrera<T extends CarreraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarreraDefaultArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UA model
   */
  interface UAFieldRefs {
    readonly id: FieldRef<"UA", 'Int'>
    readonly nombre: FieldRef<"UA", 'String'>
    readonly modalidad: FieldRef<"UA", 'String'>
    readonly carrera_id: FieldRef<"UA", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UA findUnique
   */
  export type UAFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UA
     */
    select?: UASelect<ExtArgs> | null
    /**
     * Omit specific fields from the UA
     */
    omit?: UAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAInclude<ExtArgs> | null
    /**
     * Filter, which UA to fetch.
     */
    where: UAWhereUniqueInput
  }

  /**
   * UA findUniqueOrThrow
   */
  export type UAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UA
     */
    select?: UASelect<ExtArgs> | null
    /**
     * Omit specific fields from the UA
     */
    omit?: UAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAInclude<ExtArgs> | null
    /**
     * Filter, which UA to fetch.
     */
    where: UAWhereUniqueInput
  }

  /**
   * UA findFirst
   */
  export type UAFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UA
     */
    select?: UASelect<ExtArgs> | null
    /**
     * Omit specific fields from the UA
     */
    omit?: UAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAInclude<ExtArgs> | null
    /**
     * Filter, which UA to fetch.
     */
    where?: UAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UAS to fetch.
     */
    orderBy?: UAOrderByWithRelationInput | UAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UAS.
     */
    cursor?: UAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UAS.
     */
    distinct?: UAScalarFieldEnum | UAScalarFieldEnum[]
  }

  /**
   * UA findFirstOrThrow
   */
  export type UAFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UA
     */
    select?: UASelect<ExtArgs> | null
    /**
     * Omit specific fields from the UA
     */
    omit?: UAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAInclude<ExtArgs> | null
    /**
     * Filter, which UA to fetch.
     */
    where?: UAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UAS to fetch.
     */
    orderBy?: UAOrderByWithRelationInput | UAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UAS.
     */
    cursor?: UAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UAS.
     */
    distinct?: UAScalarFieldEnum | UAScalarFieldEnum[]
  }

  /**
   * UA findMany
   */
  export type UAFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UA
     */
    select?: UASelect<ExtArgs> | null
    /**
     * Omit specific fields from the UA
     */
    omit?: UAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAInclude<ExtArgs> | null
    /**
     * Filter, which UAS to fetch.
     */
    where?: UAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UAS to fetch.
     */
    orderBy?: UAOrderByWithRelationInput | UAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UAS.
     */
    cursor?: UAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UAS.
     */
    skip?: number
    distinct?: UAScalarFieldEnum | UAScalarFieldEnum[]
  }

  /**
   * UA create
   */
  export type UACreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UA
     */
    select?: UASelect<ExtArgs> | null
    /**
     * Omit specific fields from the UA
     */
    omit?: UAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAInclude<ExtArgs> | null
    /**
     * The data needed to create a UA.
     */
    data: XOR<UACreateInput, UAUncheckedCreateInput>
  }

  /**
   * UA createMany
   */
  export type UACreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UAS.
     */
    data: UACreateManyInput | UACreateManyInput[]
  }

  /**
   * UA createManyAndReturn
   */
  export type UACreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UA
     */
    select?: UASelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UA
     */
    omit?: UAOmit<ExtArgs> | null
    /**
     * The data used to create many UAS.
     */
    data: UACreateManyInput | UACreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UA update
   */
  export type UAUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UA
     */
    select?: UASelect<ExtArgs> | null
    /**
     * Omit specific fields from the UA
     */
    omit?: UAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAInclude<ExtArgs> | null
    /**
     * The data needed to update a UA.
     */
    data: XOR<UAUpdateInput, UAUncheckedUpdateInput>
    /**
     * Choose, which UA to update.
     */
    where: UAWhereUniqueInput
  }

  /**
   * UA updateMany
   */
  export type UAUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UAS.
     */
    data: XOR<UAUpdateManyMutationInput, UAUncheckedUpdateManyInput>
    /**
     * Filter which UAS to update
     */
    where?: UAWhereInput
    /**
     * Limit how many UAS to update.
     */
    limit?: number
  }

  /**
   * UA updateManyAndReturn
   */
  export type UAUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UA
     */
    select?: UASelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UA
     */
    omit?: UAOmit<ExtArgs> | null
    /**
     * The data used to update UAS.
     */
    data: XOR<UAUpdateManyMutationInput, UAUncheckedUpdateManyInput>
    /**
     * Filter which UAS to update
     */
    where?: UAWhereInput
    /**
     * Limit how many UAS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UA upsert
   */
  export type UAUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UA
     */
    select?: UASelect<ExtArgs> | null
    /**
     * Omit specific fields from the UA
     */
    omit?: UAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAInclude<ExtArgs> | null
    /**
     * The filter to search for the UA to update in case it exists.
     */
    where: UAWhereUniqueInput
    /**
     * In case the UA found by the `where` argument doesn't exist, create a new UA with this data.
     */
    create: XOR<UACreateInput, UAUncheckedCreateInput>
    /**
     * In case the UA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UAUpdateInput, UAUncheckedUpdateInput>
  }

  /**
   * UA delete
   */
  export type UADeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UA
     */
    select?: UASelect<ExtArgs> | null
    /**
     * Omit specific fields from the UA
     */
    omit?: UAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAInclude<ExtArgs> | null
    /**
     * Filter which UA to delete.
     */
    where: UAWhereUniqueInput
  }

  /**
   * UA deleteMany
   */
  export type UADeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UAS to delete
     */
    where?: UAWhereInput
    /**
     * Limit how many UAS to delete.
     */
    limit?: number
  }

  /**
   * UA.videos
   */
  export type UA$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * UA without action
   */
  export type UADefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UA
     */
    select?: UASelect<ExtArgs> | null
    /**
     * Omit specific fields from the UA
     */
    omit?: UAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UAInclude<ExtArgs> | null
  }


  /**
   * Model PalabraClave
   */

  export type AggregatePalabraClave = {
    _count: PalabraClaveCountAggregateOutputType | null
    _avg: PalabraClaveAvgAggregateOutputType | null
    _sum: PalabraClaveSumAggregateOutputType | null
    _min: PalabraClaveMinAggregateOutputType | null
    _max: PalabraClaveMaxAggregateOutputType | null
  }

  export type PalabraClaveAvgAggregateOutputType = {
    id: number | null
  }

  export type PalabraClaveSumAggregateOutputType = {
    id: number | null
  }

  export type PalabraClaveMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type PalabraClaveMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type PalabraClaveCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type PalabraClaveAvgAggregateInputType = {
    id?: true
  }

  export type PalabraClaveSumAggregateInputType = {
    id?: true
  }

  export type PalabraClaveMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type PalabraClaveMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type PalabraClaveCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type PalabraClaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PalabraClave to aggregate.
     */
    where?: PalabraClaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PalabraClaves to fetch.
     */
    orderBy?: PalabraClaveOrderByWithRelationInput | PalabraClaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PalabraClaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PalabraClaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PalabraClaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PalabraClaves
    **/
    _count?: true | PalabraClaveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PalabraClaveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PalabraClaveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PalabraClaveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PalabraClaveMaxAggregateInputType
  }

  export type GetPalabraClaveAggregateType<T extends PalabraClaveAggregateArgs> = {
        [P in keyof T & keyof AggregatePalabraClave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePalabraClave[P]>
      : GetScalarType<T[P], AggregatePalabraClave[P]>
  }




  export type PalabraClaveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PalabraClaveWhereInput
    orderBy?: PalabraClaveOrderByWithAggregationInput | PalabraClaveOrderByWithAggregationInput[]
    by: PalabraClaveScalarFieldEnum[] | PalabraClaveScalarFieldEnum
    having?: PalabraClaveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PalabraClaveCountAggregateInputType | true
    _avg?: PalabraClaveAvgAggregateInputType
    _sum?: PalabraClaveSumAggregateInputType
    _min?: PalabraClaveMinAggregateInputType
    _max?: PalabraClaveMaxAggregateInputType
  }

  export type PalabraClaveGroupByOutputType = {
    id: number
    nombre: string
    _count: PalabraClaveCountAggregateOutputType | null
    _avg: PalabraClaveAvgAggregateOutputType | null
    _sum: PalabraClaveSumAggregateOutputType | null
    _min: PalabraClaveMinAggregateOutputType | null
    _max: PalabraClaveMaxAggregateOutputType | null
  }

  type GetPalabraClaveGroupByPayload<T extends PalabraClaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PalabraClaveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PalabraClaveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PalabraClaveGroupByOutputType[P]>
            : GetScalarType<T[P], PalabraClaveGroupByOutputType[P]>
        }
      >
    >


  export type PalabraClaveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    videos?: boolean | PalabraClave$videosArgs<ExtArgs>
    _count?: boolean | PalabraClaveCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["palabraClave"]>

  export type PalabraClaveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["palabraClave"]>

  export type PalabraClaveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["palabraClave"]>

  export type PalabraClaveSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type PalabraClaveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["palabraClave"]>
  export type PalabraClaveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | PalabraClave$videosArgs<ExtArgs>
    _count?: boolean | PalabraClaveCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PalabraClaveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PalabraClaveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PalabraClavePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PalabraClave"
    objects: {
      videos: Prisma.$VideoPalabraClavePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["palabraClave"]>
    composites: {}
  }

  type PalabraClaveGetPayload<S extends boolean | null | undefined | PalabraClaveDefaultArgs> = $Result.GetResult<Prisma.$PalabraClavePayload, S>

  type PalabraClaveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PalabraClaveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PalabraClaveCountAggregateInputType | true
    }

  export interface PalabraClaveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PalabraClave'], meta: { name: 'PalabraClave' } }
    /**
     * Find zero or one PalabraClave that matches the filter.
     * @param {PalabraClaveFindUniqueArgs} args - Arguments to find a PalabraClave
     * @example
     * // Get one PalabraClave
     * const palabraClave = await prisma.palabraClave.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PalabraClaveFindUniqueArgs>(args: SelectSubset<T, PalabraClaveFindUniqueArgs<ExtArgs>>): Prisma__PalabraClaveClient<$Result.GetResult<Prisma.$PalabraClavePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PalabraClave that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PalabraClaveFindUniqueOrThrowArgs} args - Arguments to find a PalabraClave
     * @example
     * // Get one PalabraClave
     * const palabraClave = await prisma.palabraClave.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PalabraClaveFindUniqueOrThrowArgs>(args: SelectSubset<T, PalabraClaveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PalabraClaveClient<$Result.GetResult<Prisma.$PalabraClavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PalabraClave that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PalabraClaveFindFirstArgs} args - Arguments to find a PalabraClave
     * @example
     * // Get one PalabraClave
     * const palabraClave = await prisma.palabraClave.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PalabraClaveFindFirstArgs>(args?: SelectSubset<T, PalabraClaveFindFirstArgs<ExtArgs>>): Prisma__PalabraClaveClient<$Result.GetResult<Prisma.$PalabraClavePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PalabraClave that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PalabraClaveFindFirstOrThrowArgs} args - Arguments to find a PalabraClave
     * @example
     * // Get one PalabraClave
     * const palabraClave = await prisma.palabraClave.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PalabraClaveFindFirstOrThrowArgs>(args?: SelectSubset<T, PalabraClaveFindFirstOrThrowArgs<ExtArgs>>): Prisma__PalabraClaveClient<$Result.GetResult<Prisma.$PalabraClavePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PalabraClaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PalabraClaveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PalabraClaves
     * const palabraClaves = await prisma.palabraClave.findMany()
     * 
     * // Get first 10 PalabraClaves
     * const palabraClaves = await prisma.palabraClave.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const palabraClaveWithIdOnly = await prisma.palabraClave.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PalabraClaveFindManyArgs>(args?: SelectSubset<T, PalabraClaveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PalabraClavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PalabraClave.
     * @param {PalabraClaveCreateArgs} args - Arguments to create a PalabraClave.
     * @example
     * // Create one PalabraClave
     * const PalabraClave = await prisma.palabraClave.create({
     *   data: {
     *     // ... data to create a PalabraClave
     *   }
     * })
     * 
     */
    create<T extends PalabraClaveCreateArgs>(args: SelectSubset<T, PalabraClaveCreateArgs<ExtArgs>>): Prisma__PalabraClaveClient<$Result.GetResult<Prisma.$PalabraClavePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PalabraClaves.
     * @param {PalabraClaveCreateManyArgs} args - Arguments to create many PalabraClaves.
     * @example
     * // Create many PalabraClaves
     * const palabraClave = await prisma.palabraClave.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PalabraClaveCreateManyArgs>(args?: SelectSubset<T, PalabraClaveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PalabraClaves and returns the data saved in the database.
     * @param {PalabraClaveCreateManyAndReturnArgs} args - Arguments to create many PalabraClaves.
     * @example
     * // Create many PalabraClaves
     * const palabraClave = await prisma.palabraClave.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PalabraClaves and only return the `id`
     * const palabraClaveWithIdOnly = await prisma.palabraClave.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PalabraClaveCreateManyAndReturnArgs>(args?: SelectSubset<T, PalabraClaveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PalabraClavePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PalabraClave.
     * @param {PalabraClaveDeleteArgs} args - Arguments to delete one PalabraClave.
     * @example
     * // Delete one PalabraClave
     * const PalabraClave = await prisma.palabraClave.delete({
     *   where: {
     *     // ... filter to delete one PalabraClave
     *   }
     * })
     * 
     */
    delete<T extends PalabraClaveDeleteArgs>(args: SelectSubset<T, PalabraClaveDeleteArgs<ExtArgs>>): Prisma__PalabraClaveClient<$Result.GetResult<Prisma.$PalabraClavePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PalabraClave.
     * @param {PalabraClaveUpdateArgs} args - Arguments to update one PalabraClave.
     * @example
     * // Update one PalabraClave
     * const palabraClave = await prisma.palabraClave.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PalabraClaveUpdateArgs>(args: SelectSubset<T, PalabraClaveUpdateArgs<ExtArgs>>): Prisma__PalabraClaveClient<$Result.GetResult<Prisma.$PalabraClavePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PalabraClaves.
     * @param {PalabraClaveDeleteManyArgs} args - Arguments to filter PalabraClaves to delete.
     * @example
     * // Delete a few PalabraClaves
     * const { count } = await prisma.palabraClave.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PalabraClaveDeleteManyArgs>(args?: SelectSubset<T, PalabraClaveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PalabraClaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PalabraClaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PalabraClaves
     * const palabraClave = await prisma.palabraClave.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PalabraClaveUpdateManyArgs>(args: SelectSubset<T, PalabraClaveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PalabraClaves and returns the data updated in the database.
     * @param {PalabraClaveUpdateManyAndReturnArgs} args - Arguments to update many PalabraClaves.
     * @example
     * // Update many PalabraClaves
     * const palabraClave = await prisma.palabraClave.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PalabraClaves and only return the `id`
     * const palabraClaveWithIdOnly = await prisma.palabraClave.updateManyAndReturn({
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
    updateManyAndReturn<T extends PalabraClaveUpdateManyAndReturnArgs>(args: SelectSubset<T, PalabraClaveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PalabraClavePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PalabraClave.
     * @param {PalabraClaveUpsertArgs} args - Arguments to update or create a PalabraClave.
     * @example
     * // Update or create a PalabraClave
     * const palabraClave = await prisma.palabraClave.upsert({
     *   create: {
     *     // ... data to create a PalabraClave
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PalabraClave we want to update
     *   }
     * })
     */
    upsert<T extends PalabraClaveUpsertArgs>(args: SelectSubset<T, PalabraClaveUpsertArgs<ExtArgs>>): Prisma__PalabraClaveClient<$Result.GetResult<Prisma.$PalabraClavePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PalabraClaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PalabraClaveCountArgs} args - Arguments to filter PalabraClaves to count.
     * @example
     * // Count the number of PalabraClaves
     * const count = await prisma.palabraClave.count({
     *   where: {
     *     // ... the filter for the PalabraClaves we want to count
     *   }
     * })
    **/
    count<T extends PalabraClaveCountArgs>(
      args?: Subset<T, PalabraClaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PalabraClaveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PalabraClave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PalabraClaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PalabraClaveAggregateArgs>(args: Subset<T, PalabraClaveAggregateArgs>): Prisma.PrismaPromise<GetPalabraClaveAggregateType<T>>

    /**
     * Group by PalabraClave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PalabraClaveGroupByArgs} args - Group by arguments.
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
      T extends PalabraClaveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PalabraClaveGroupByArgs['orderBy'] }
        : { orderBy?: PalabraClaveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PalabraClaveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPalabraClaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PalabraClave model
   */
  readonly fields: PalabraClaveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PalabraClave.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PalabraClaveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    videos<T extends PalabraClave$videosArgs<ExtArgs> = {}>(args?: Subset<T, PalabraClave$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPalabraClavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PalabraClave model
   */
  interface PalabraClaveFieldRefs {
    readonly id: FieldRef<"PalabraClave", 'Int'>
    readonly nombre: FieldRef<"PalabraClave", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PalabraClave findUnique
   */
  export type PalabraClaveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PalabraClave
     */
    select?: PalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PalabraClave
     */
    omit?: PalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PalabraClaveInclude<ExtArgs> | null
    /**
     * Filter, which PalabraClave to fetch.
     */
    where: PalabraClaveWhereUniqueInput
  }

  /**
   * PalabraClave findUniqueOrThrow
   */
  export type PalabraClaveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PalabraClave
     */
    select?: PalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PalabraClave
     */
    omit?: PalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PalabraClaveInclude<ExtArgs> | null
    /**
     * Filter, which PalabraClave to fetch.
     */
    where: PalabraClaveWhereUniqueInput
  }

  /**
   * PalabraClave findFirst
   */
  export type PalabraClaveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PalabraClave
     */
    select?: PalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PalabraClave
     */
    omit?: PalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PalabraClaveInclude<ExtArgs> | null
    /**
     * Filter, which PalabraClave to fetch.
     */
    where?: PalabraClaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PalabraClaves to fetch.
     */
    orderBy?: PalabraClaveOrderByWithRelationInput | PalabraClaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PalabraClaves.
     */
    cursor?: PalabraClaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PalabraClaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PalabraClaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PalabraClaves.
     */
    distinct?: PalabraClaveScalarFieldEnum | PalabraClaveScalarFieldEnum[]
  }

  /**
   * PalabraClave findFirstOrThrow
   */
  export type PalabraClaveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PalabraClave
     */
    select?: PalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PalabraClave
     */
    omit?: PalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PalabraClaveInclude<ExtArgs> | null
    /**
     * Filter, which PalabraClave to fetch.
     */
    where?: PalabraClaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PalabraClaves to fetch.
     */
    orderBy?: PalabraClaveOrderByWithRelationInput | PalabraClaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PalabraClaves.
     */
    cursor?: PalabraClaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PalabraClaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PalabraClaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PalabraClaves.
     */
    distinct?: PalabraClaveScalarFieldEnum | PalabraClaveScalarFieldEnum[]
  }

  /**
   * PalabraClave findMany
   */
  export type PalabraClaveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PalabraClave
     */
    select?: PalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PalabraClave
     */
    omit?: PalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PalabraClaveInclude<ExtArgs> | null
    /**
     * Filter, which PalabraClaves to fetch.
     */
    where?: PalabraClaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PalabraClaves to fetch.
     */
    orderBy?: PalabraClaveOrderByWithRelationInput | PalabraClaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PalabraClaves.
     */
    cursor?: PalabraClaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PalabraClaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PalabraClaves.
     */
    skip?: number
    distinct?: PalabraClaveScalarFieldEnum | PalabraClaveScalarFieldEnum[]
  }

  /**
   * PalabraClave create
   */
  export type PalabraClaveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PalabraClave
     */
    select?: PalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PalabraClave
     */
    omit?: PalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PalabraClaveInclude<ExtArgs> | null
    /**
     * The data needed to create a PalabraClave.
     */
    data: XOR<PalabraClaveCreateInput, PalabraClaveUncheckedCreateInput>
  }

  /**
   * PalabraClave createMany
   */
  export type PalabraClaveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PalabraClaves.
     */
    data: PalabraClaveCreateManyInput | PalabraClaveCreateManyInput[]
  }

  /**
   * PalabraClave createManyAndReturn
   */
  export type PalabraClaveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PalabraClave
     */
    select?: PalabraClaveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PalabraClave
     */
    omit?: PalabraClaveOmit<ExtArgs> | null
    /**
     * The data used to create many PalabraClaves.
     */
    data: PalabraClaveCreateManyInput | PalabraClaveCreateManyInput[]
  }

  /**
   * PalabraClave update
   */
  export type PalabraClaveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PalabraClave
     */
    select?: PalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PalabraClave
     */
    omit?: PalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PalabraClaveInclude<ExtArgs> | null
    /**
     * The data needed to update a PalabraClave.
     */
    data: XOR<PalabraClaveUpdateInput, PalabraClaveUncheckedUpdateInput>
    /**
     * Choose, which PalabraClave to update.
     */
    where: PalabraClaveWhereUniqueInput
  }

  /**
   * PalabraClave updateMany
   */
  export type PalabraClaveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PalabraClaves.
     */
    data: XOR<PalabraClaveUpdateManyMutationInput, PalabraClaveUncheckedUpdateManyInput>
    /**
     * Filter which PalabraClaves to update
     */
    where?: PalabraClaveWhereInput
    /**
     * Limit how many PalabraClaves to update.
     */
    limit?: number
  }

  /**
   * PalabraClave updateManyAndReturn
   */
  export type PalabraClaveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PalabraClave
     */
    select?: PalabraClaveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PalabraClave
     */
    omit?: PalabraClaveOmit<ExtArgs> | null
    /**
     * The data used to update PalabraClaves.
     */
    data: XOR<PalabraClaveUpdateManyMutationInput, PalabraClaveUncheckedUpdateManyInput>
    /**
     * Filter which PalabraClaves to update
     */
    where?: PalabraClaveWhereInput
    /**
     * Limit how many PalabraClaves to update.
     */
    limit?: number
  }

  /**
   * PalabraClave upsert
   */
  export type PalabraClaveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PalabraClave
     */
    select?: PalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PalabraClave
     */
    omit?: PalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PalabraClaveInclude<ExtArgs> | null
    /**
     * The filter to search for the PalabraClave to update in case it exists.
     */
    where: PalabraClaveWhereUniqueInput
    /**
     * In case the PalabraClave found by the `where` argument doesn't exist, create a new PalabraClave with this data.
     */
    create: XOR<PalabraClaveCreateInput, PalabraClaveUncheckedCreateInput>
    /**
     * In case the PalabraClave was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PalabraClaveUpdateInput, PalabraClaveUncheckedUpdateInput>
  }

  /**
   * PalabraClave delete
   */
  export type PalabraClaveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PalabraClave
     */
    select?: PalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PalabraClave
     */
    omit?: PalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PalabraClaveInclude<ExtArgs> | null
    /**
     * Filter which PalabraClave to delete.
     */
    where: PalabraClaveWhereUniqueInput
  }

  /**
   * PalabraClave deleteMany
   */
  export type PalabraClaveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PalabraClaves to delete
     */
    where?: PalabraClaveWhereInput
    /**
     * Limit how many PalabraClaves to delete.
     */
    limit?: number
  }

  /**
   * PalabraClave.videos
   */
  export type PalabraClave$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPalabraClave
     */
    select?: VideoPalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPalabraClave
     */
    omit?: VideoPalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoPalabraClaveInclude<ExtArgs> | null
    where?: VideoPalabraClaveWhereInput
    orderBy?: VideoPalabraClaveOrderByWithRelationInput | VideoPalabraClaveOrderByWithRelationInput[]
    cursor?: VideoPalabraClaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoPalabraClaveScalarFieldEnum | VideoPalabraClaveScalarFieldEnum[]
  }

  /**
   * PalabraClave without action
   */
  export type PalabraClaveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PalabraClave
     */
    select?: PalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PalabraClave
     */
    omit?: PalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PalabraClaveInclude<ExtArgs> | null
  }


  /**
   * Model VideoPalabraClave
   */

  export type AggregateVideoPalabraClave = {
    _count: VideoPalabraClaveCountAggregateOutputType | null
    _avg: VideoPalabraClaveAvgAggregateOutputType | null
    _sum: VideoPalabraClaveSumAggregateOutputType | null
    _min: VideoPalabraClaveMinAggregateOutputType | null
    _max: VideoPalabraClaveMaxAggregateOutputType | null
  }

  export type VideoPalabraClaveAvgAggregateOutputType = {
    video_id: number | null
    palabra_clave_id: number | null
  }

  export type VideoPalabraClaveSumAggregateOutputType = {
    video_id: number | null
    palabra_clave_id: number | null
  }

  export type VideoPalabraClaveMinAggregateOutputType = {
    video_id: number | null
    palabra_clave_id: number | null
  }

  export type VideoPalabraClaveMaxAggregateOutputType = {
    video_id: number | null
    palabra_clave_id: number | null
  }

  export type VideoPalabraClaveCountAggregateOutputType = {
    video_id: number
    palabra_clave_id: number
    _all: number
  }


  export type VideoPalabraClaveAvgAggregateInputType = {
    video_id?: true
    palabra_clave_id?: true
  }

  export type VideoPalabraClaveSumAggregateInputType = {
    video_id?: true
    palabra_clave_id?: true
  }

  export type VideoPalabraClaveMinAggregateInputType = {
    video_id?: true
    palabra_clave_id?: true
  }

  export type VideoPalabraClaveMaxAggregateInputType = {
    video_id?: true
    palabra_clave_id?: true
  }

  export type VideoPalabraClaveCountAggregateInputType = {
    video_id?: true
    palabra_clave_id?: true
    _all?: true
  }

  export type VideoPalabraClaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoPalabraClave to aggregate.
     */
    where?: VideoPalabraClaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoPalabraClaves to fetch.
     */
    orderBy?: VideoPalabraClaveOrderByWithRelationInput | VideoPalabraClaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoPalabraClaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoPalabraClaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoPalabraClaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoPalabraClaves
    **/
    _count?: true | VideoPalabraClaveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoPalabraClaveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoPalabraClaveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoPalabraClaveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoPalabraClaveMaxAggregateInputType
  }

  export type GetVideoPalabraClaveAggregateType<T extends VideoPalabraClaveAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoPalabraClave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoPalabraClave[P]>
      : GetScalarType<T[P], AggregateVideoPalabraClave[P]>
  }




  export type VideoPalabraClaveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoPalabraClaveWhereInput
    orderBy?: VideoPalabraClaveOrderByWithAggregationInput | VideoPalabraClaveOrderByWithAggregationInput[]
    by: VideoPalabraClaveScalarFieldEnum[] | VideoPalabraClaveScalarFieldEnum
    having?: VideoPalabraClaveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoPalabraClaveCountAggregateInputType | true
    _avg?: VideoPalabraClaveAvgAggregateInputType
    _sum?: VideoPalabraClaveSumAggregateInputType
    _min?: VideoPalabraClaveMinAggregateInputType
    _max?: VideoPalabraClaveMaxAggregateInputType
  }

  export type VideoPalabraClaveGroupByOutputType = {
    video_id: number
    palabra_clave_id: number
    _count: VideoPalabraClaveCountAggregateOutputType | null
    _avg: VideoPalabraClaveAvgAggregateOutputType | null
    _sum: VideoPalabraClaveSumAggregateOutputType | null
    _min: VideoPalabraClaveMinAggregateOutputType | null
    _max: VideoPalabraClaveMaxAggregateOutputType | null
  }

  type GetVideoPalabraClaveGroupByPayload<T extends VideoPalabraClaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoPalabraClaveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoPalabraClaveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoPalabraClaveGroupByOutputType[P]>
            : GetScalarType<T[P], VideoPalabraClaveGroupByOutputType[P]>
        }
      >
    >


  export type VideoPalabraClaveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    video_id?: boolean
    palabra_clave_id?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
    palabra_clave?: boolean | PalabraClaveDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoPalabraClave"]>

  export type VideoPalabraClaveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    video_id?: boolean
    palabra_clave_id?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
    palabra_clave?: boolean | PalabraClaveDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoPalabraClave"]>

  export type VideoPalabraClaveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    video_id?: boolean
    palabra_clave_id?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
    palabra_clave?: boolean | PalabraClaveDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoPalabraClave"]>

  export type VideoPalabraClaveSelectScalar = {
    video_id?: boolean
    palabra_clave_id?: boolean
  }

  export type VideoPalabraClaveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"video_id" | "palabra_clave_id", ExtArgs["result"]["videoPalabraClave"]>
  export type VideoPalabraClaveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
    palabra_clave?: boolean | PalabraClaveDefaultArgs<ExtArgs>
  }
  export type VideoPalabraClaveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
    palabra_clave?: boolean | PalabraClaveDefaultArgs<ExtArgs>
  }
  export type VideoPalabraClaveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
    palabra_clave?: boolean | PalabraClaveDefaultArgs<ExtArgs>
  }

  export type $VideoPalabraClavePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoPalabraClave"
    objects: {
      video: Prisma.$VideoPayload<ExtArgs>
      palabra_clave: Prisma.$PalabraClavePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      video_id: number
      palabra_clave_id: number
    }, ExtArgs["result"]["videoPalabraClave"]>
    composites: {}
  }

  type VideoPalabraClaveGetPayload<S extends boolean | null | undefined | VideoPalabraClaveDefaultArgs> = $Result.GetResult<Prisma.$VideoPalabraClavePayload, S>

  type VideoPalabraClaveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoPalabraClaveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoPalabraClaveCountAggregateInputType | true
    }

  export interface VideoPalabraClaveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoPalabraClave'], meta: { name: 'VideoPalabraClave' } }
    /**
     * Find zero or one VideoPalabraClave that matches the filter.
     * @param {VideoPalabraClaveFindUniqueArgs} args - Arguments to find a VideoPalabraClave
     * @example
     * // Get one VideoPalabraClave
     * const videoPalabraClave = await prisma.videoPalabraClave.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoPalabraClaveFindUniqueArgs>(args: SelectSubset<T, VideoPalabraClaveFindUniqueArgs<ExtArgs>>): Prisma__VideoPalabraClaveClient<$Result.GetResult<Prisma.$VideoPalabraClavePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoPalabraClave that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoPalabraClaveFindUniqueOrThrowArgs} args - Arguments to find a VideoPalabraClave
     * @example
     * // Get one VideoPalabraClave
     * const videoPalabraClave = await prisma.videoPalabraClave.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoPalabraClaveFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoPalabraClaveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoPalabraClaveClient<$Result.GetResult<Prisma.$VideoPalabraClavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoPalabraClave that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoPalabraClaveFindFirstArgs} args - Arguments to find a VideoPalabraClave
     * @example
     * // Get one VideoPalabraClave
     * const videoPalabraClave = await prisma.videoPalabraClave.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoPalabraClaveFindFirstArgs>(args?: SelectSubset<T, VideoPalabraClaveFindFirstArgs<ExtArgs>>): Prisma__VideoPalabraClaveClient<$Result.GetResult<Prisma.$VideoPalabraClavePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoPalabraClave that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoPalabraClaveFindFirstOrThrowArgs} args - Arguments to find a VideoPalabraClave
     * @example
     * // Get one VideoPalabraClave
     * const videoPalabraClave = await prisma.videoPalabraClave.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoPalabraClaveFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoPalabraClaveFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoPalabraClaveClient<$Result.GetResult<Prisma.$VideoPalabraClavePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoPalabraClaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoPalabraClaveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoPalabraClaves
     * const videoPalabraClaves = await prisma.videoPalabraClave.findMany()
     * 
     * // Get first 10 VideoPalabraClaves
     * const videoPalabraClaves = await prisma.videoPalabraClave.findMany({ take: 10 })
     * 
     * // Only select the `video_id`
     * const videoPalabraClaveWithVideo_idOnly = await prisma.videoPalabraClave.findMany({ select: { video_id: true } })
     * 
     */
    findMany<T extends VideoPalabraClaveFindManyArgs>(args?: SelectSubset<T, VideoPalabraClaveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPalabraClavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoPalabraClave.
     * @param {VideoPalabraClaveCreateArgs} args - Arguments to create a VideoPalabraClave.
     * @example
     * // Create one VideoPalabraClave
     * const VideoPalabraClave = await prisma.videoPalabraClave.create({
     *   data: {
     *     // ... data to create a VideoPalabraClave
     *   }
     * })
     * 
     */
    create<T extends VideoPalabraClaveCreateArgs>(args: SelectSubset<T, VideoPalabraClaveCreateArgs<ExtArgs>>): Prisma__VideoPalabraClaveClient<$Result.GetResult<Prisma.$VideoPalabraClavePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoPalabraClaves.
     * @param {VideoPalabraClaveCreateManyArgs} args - Arguments to create many VideoPalabraClaves.
     * @example
     * // Create many VideoPalabraClaves
     * const videoPalabraClave = await prisma.videoPalabraClave.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoPalabraClaveCreateManyArgs>(args?: SelectSubset<T, VideoPalabraClaveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoPalabraClaves and returns the data saved in the database.
     * @param {VideoPalabraClaveCreateManyAndReturnArgs} args - Arguments to create many VideoPalabraClaves.
     * @example
     * // Create many VideoPalabraClaves
     * const videoPalabraClave = await prisma.videoPalabraClave.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoPalabraClaves and only return the `video_id`
     * const videoPalabraClaveWithVideo_idOnly = await prisma.videoPalabraClave.createManyAndReturn({
     *   select: { video_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoPalabraClaveCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoPalabraClaveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPalabraClavePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoPalabraClave.
     * @param {VideoPalabraClaveDeleteArgs} args - Arguments to delete one VideoPalabraClave.
     * @example
     * // Delete one VideoPalabraClave
     * const VideoPalabraClave = await prisma.videoPalabraClave.delete({
     *   where: {
     *     // ... filter to delete one VideoPalabraClave
     *   }
     * })
     * 
     */
    delete<T extends VideoPalabraClaveDeleteArgs>(args: SelectSubset<T, VideoPalabraClaveDeleteArgs<ExtArgs>>): Prisma__VideoPalabraClaveClient<$Result.GetResult<Prisma.$VideoPalabraClavePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoPalabraClave.
     * @param {VideoPalabraClaveUpdateArgs} args - Arguments to update one VideoPalabraClave.
     * @example
     * // Update one VideoPalabraClave
     * const videoPalabraClave = await prisma.videoPalabraClave.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoPalabraClaveUpdateArgs>(args: SelectSubset<T, VideoPalabraClaveUpdateArgs<ExtArgs>>): Prisma__VideoPalabraClaveClient<$Result.GetResult<Prisma.$VideoPalabraClavePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoPalabraClaves.
     * @param {VideoPalabraClaveDeleteManyArgs} args - Arguments to filter VideoPalabraClaves to delete.
     * @example
     * // Delete a few VideoPalabraClaves
     * const { count } = await prisma.videoPalabraClave.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoPalabraClaveDeleteManyArgs>(args?: SelectSubset<T, VideoPalabraClaveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoPalabraClaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoPalabraClaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoPalabraClaves
     * const videoPalabraClave = await prisma.videoPalabraClave.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoPalabraClaveUpdateManyArgs>(args: SelectSubset<T, VideoPalabraClaveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoPalabraClaves and returns the data updated in the database.
     * @param {VideoPalabraClaveUpdateManyAndReturnArgs} args - Arguments to update many VideoPalabraClaves.
     * @example
     * // Update many VideoPalabraClaves
     * const videoPalabraClave = await prisma.videoPalabraClave.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoPalabraClaves and only return the `video_id`
     * const videoPalabraClaveWithVideo_idOnly = await prisma.videoPalabraClave.updateManyAndReturn({
     *   select: { video_id: true },
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
    updateManyAndReturn<T extends VideoPalabraClaveUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoPalabraClaveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPalabraClavePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoPalabraClave.
     * @param {VideoPalabraClaveUpsertArgs} args - Arguments to update or create a VideoPalabraClave.
     * @example
     * // Update or create a VideoPalabraClave
     * const videoPalabraClave = await prisma.videoPalabraClave.upsert({
     *   create: {
     *     // ... data to create a VideoPalabraClave
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoPalabraClave we want to update
     *   }
     * })
     */
    upsert<T extends VideoPalabraClaveUpsertArgs>(args: SelectSubset<T, VideoPalabraClaveUpsertArgs<ExtArgs>>): Prisma__VideoPalabraClaveClient<$Result.GetResult<Prisma.$VideoPalabraClavePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoPalabraClaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoPalabraClaveCountArgs} args - Arguments to filter VideoPalabraClaves to count.
     * @example
     * // Count the number of VideoPalabraClaves
     * const count = await prisma.videoPalabraClave.count({
     *   where: {
     *     // ... the filter for the VideoPalabraClaves we want to count
     *   }
     * })
    **/
    count<T extends VideoPalabraClaveCountArgs>(
      args?: Subset<T, VideoPalabraClaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoPalabraClaveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoPalabraClave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoPalabraClaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoPalabraClaveAggregateArgs>(args: Subset<T, VideoPalabraClaveAggregateArgs>): Prisma.PrismaPromise<GetVideoPalabraClaveAggregateType<T>>

    /**
     * Group by VideoPalabraClave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoPalabraClaveGroupByArgs} args - Group by arguments.
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
      T extends VideoPalabraClaveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoPalabraClaveGroupByArgs['orderBy'] }
        : { orderBy?: VideoPalabraClaveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoPalabraClaveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoPalabraClaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoPalabraClave model
   */
  readonly fields: VideoPalabraClaveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoPalabraClave.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoPalabraClaveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    palabra_clave<T extends PalabraClaveDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PalabraClaveDefaultArgs<ExtArgs>>): Prisma__PalabraClaveClient<$Result.GetResult<Prisma.$PalabraClavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VideoPalabraClave model
   */
  interface VideoPalabraClaveFieldRefs {
    readonly video_id: FieldRef<"VideoPalabraClave", 'Int'>
    readonly palabra_clave_id: FieldRef<"VideoPalabraClave", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VideoPalabraClave findUnique
   */
  export type VideoPalabraClaveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPalabraClave
     */
    select?: VideoPalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPalabraClave
     */
    omit?: VideoPalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoPalabraClaveInclude<ExtArgs> | null
    /**
     * Filter, which VideoPalabraClave to fetch.
     */
    where: VideoPalabraClaveWhereUniqueInput
  }

  /**
   * VideoPalabraClave findUniqueOrThrow
   */
  export type VideoPalabraClaveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPalabraClave
     */
    select?: VideoPalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPalabraClave
     */
    omit?: VideoPalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoPalabraClaveInclude<ExtArgs> | null
    /**
     * Filter, which VideoPalabraClave to fetch.
     */
    where: VideoPalabraClaveWhereUniqueInput
  }

  /**
   * VideoPalabraClave findFirst
   */
  export type VideoPalabraClaveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPalabraClave
     */
    select?: VideoPalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPalabraClave
     */
    omit?: VideoPalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoPalabraClaveInclude<ExtArgs> | null
    /**
     * Filter, which VideoPalabraClave to fetch.
     */
    where?: VideoPalabraClaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoPalabraClaves to fetch.
     */
    orderBy?: VideoPalabraClaveOrderByWithRelationInput | VideoPalabraClaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoPalabraClaves.
     */
    cursor?: VideoPalabraClaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoPalabraClaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoPalabraClaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoPalabraClaves.
     */
    distinct?: VideoPalabraClaveScalarFieldEnum | VideoPalabraClaveScalarFieldEnum[]
  }

  /**
   * VideoPalabraClave findFirstOrThrow
   */
  export type VideoPalabraClaveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPalabraClave
     */
    select?: VideoPalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPalabraClave
     */
    omit?: VideoPalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoPalabraClaveInclude<ExtArgs> | null
    /**
     * Filter, which VideoPalabraClave to fetch.
     */
    where?: VideoPalabraClaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoPalabraClaves to fetch.
     */
    orderBy?: VideoPalabraClaveOrderByWithRelationInput | VideoPalabraClaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoPalabraClaves.
     */
    cursor?: VideoPalabraClaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoPalabraClaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoPalabraClaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoPalabraClaves.
     */
    distinct?: VideoPalabraClaveScalarFieldEnum | VideoPalabraClaveScalarFieldEnum[]
  }

  /**
   * VideoPalabraClave findMany
   */
  export type VideoPalabraClaveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPalabraClave
     */
    select?: VideoPalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPalabraClave
     */
    omit?: VideoPalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoPalabraClaveInclude<ExtArgs> | null
    /**
     * Filter, which VideoPalabraClaves to fetch.
     */
    where?: VideoPalabraClaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoPalabraClaves to fetch.
     */
    orderBy?: VideoPalabraClaveOrderByWithRelationInput | VideoPalabraClaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoPalabraClaves.
     */
    cursor?: VideoPalabraClaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoPalabraClaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoPalabraClaves.
     */
    skip?: number
    distinct?: VideoPalabraClaveScalarFieldEnum | VideoPalabraClaveScalarFieldEnum[]
  }

  /**
   * VideoPalabraClave create
   */
  export type VideoPalabraClaveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPalabraClave
     */
    select?: VideoPalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPalabraClave
     */
    omit?: VideoPalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoPalabraClaveInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoPalabraClave.
     */
    data: XOR<VideoPalabraClaveCreateInput, VideoPalabraClaveUncheckedCreateInput>
  }

  /**
   * VideoPalabraClave createMany
   */
  export type VideoPalabraClaveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoPalabraClaves.
     */
    data: VideoPalabraClaveCreateManyInput | VideoPalabraClaveCreateManyInput[]
  }

  /**
   * VideoPalabraClave createManyAndReturn
   */
  export type VideoPalabraClaveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPalabraClave
     */
    select?: VideoPalabraClaveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPalabraClave
     */
    omit?: VideoPalabraClaveOmit<ExtArgs> | null
    /**
     * The data used to create many VideoPalabraClaves.
     */
    data: VideoPalabraClaveCreateManyInput | VideoPalabraClaveCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoPalabraClaveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoPalabraClave update
   */
  export type VideoPalabraClaveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPalabraClave
     */
    select?: VideoPalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPalabraClave
     */
    omit?: VideoPalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoPalabraClaveInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoPalabraClave.
     */
    data: XOR<VideoPalabraClaveUpdateInput, VideoPalabraClaveUncheckedUpdateInput>
    /**
     * Choose, which VideoPalabraClave to update.
     */
    where: VideoPalabraClaveWhereUniqueInput
  }

  /**
   * VideoPalabraClave updateMany
   */
  export type VideoPalabraClaveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoPalabraClaves.
     */
    data: XOR<VideoPalabraClaveUpdateManyMutationInput, VideoPalabraClaveUncheckedUpdateManyInput>
    /**
     * Filter which VideoPalabraClaves to update
     */
    where?: VideoPalabraClaveWhereInput
    /**
     * Limit how many VideoPalabraClaves to update.
     */
    limit?: number
  }

  /**
   * VideoPalabraClave updateManyAndReturn
   */
  export type VideoPalabraClaveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPalabraClave
     */
    select?: VideoPalabraClaveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPalabraClave
     */
    omit?: VideoPalabraClaveOmit<ExtArgs> | null
    /**
     * The data used to update VideoPalabraClaves.
     */
    data: XOR<VideoPalabraClaveUpdateManyMutationInput, VideoPalabraClaveUncheckedUpdateManyInput>
    /**
     * Filter which VideoPalabraClaves to update
     */
    where?: VideoPalabraClaveWhereInput
    /**
     * Limit how many VideoPalabraClaves to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoPalabraClaveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoPalabraClave upsert
   */
  export type VideoPalabraClaveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPalabraClave
     */
    select?: VideoPalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPalabraClave
     */
    omit?: VideoPalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoPalabraClaveInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoPalabraClave to update in case it exists.
     */
    where: VideoPalabraClaveWhereUniqueInput
    /**
     * In case the VideoPalabraClave found by the `where` argument doesn't exist, create a new VideoPalabraClave with this data.
     */
    create: XOR<VideoPalabraClaveCreateInput, VideoPalabraClaveUncheckedCreateInput>
    /**
     * In case the VideoPalabraClave was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoPalabraClaveUpdateInput, VideoPalabraClaveUncheckedUpdateInput>
  }

  /**
   * VideoPalabraClave delete
   */
  export type VideoPalabraClaveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPalabraClave
     */
    select?: VideoPalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPalabraClave
     */
    omit?: VideoPalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoPalabraClaveInclude<ExtArgs> | null
    /**
     * Filter which VideoPalabraClave to delete.
     */
    where: VideoPalabraClaveWhereUniqueInput
  }

  /**
   * VideoPalabraClave deleteMany
   */
  export type VideoPalabraClaveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoPalabraClaves to delete
     */
    where?: VideoPalabraClaveWhereInput
    /**
     * Limit how many VideoPalabraClaves to delete.
     */
    limit?: number
  }

  /**
   * VideoPalabraClave without action
   */
  export type VideoPalabraClaveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoPalabraClave
     */
    select?: VideoPalabraClaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoPalabraClave
     */
    omit?: VideoPalabraClaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoPalabraClaveInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre_de_usuario: 'nombre_de_usuario',
    password: 'password',
    fecha_de_registro: 'fecha_de_registro',
    admin: 'admin',
    facultad_id: 'facultad_id'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    identificador: 'identificador',
    fecha_de_registro: 'fecha_de_registro',
    fase: 'fase',
    aprobado: 'aprobado',
    comentario: 'comentario',
    usuario_id: 'usuario_id',
    ua_id: 'ua_id'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const FacultadScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type FacultadScalarFieldEnum = (typeof FacultadScalarFieldEnum)[keyof typeof FacultadScalarFieldEnum]


  export const CarreraScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    facultad_id: 'facultad_id'
  };

  export type CarreraScalarFieldEnum = (typeof CarreraScalarFieldEnum)[keyof typeof CarreraScalarFieldEnum]


  export const UAScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    modalidad: 'modalidad',
    carrera_id: 'carrera_id'
  };

  export type UAScalarFieldEnum = (typeof UAScalarFieldEnum)[keyof typeof UAScalarFieldEnum]


  export const PalabraClaveScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type PalabraClaveScalarFieldEnum = (typeof PalabraClaveScalarFieldEnum)[keyof typeof PalabraClaveScalarFieldEnum]


  export const VideoPalabraClaveScalarFieldEnum: {
    video_id: 'video_id',
    palabra_clave_id: 'palabra_clave_id'
  };

  export type VideoPalabraClaveScalarFieldEnum = (typeof VideoPalabraClaveScalarFieldEnum)[keyof typeof VideoPalabraClaveScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre_de_usuario?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    fecha_de_registro?: DateTimeFilter<"Usuario"> | Date | string
    admin?: BoolFilter<"Usuario"> | boolean
    facultad_id?: IntNullableFilter<"Usuario"> | number | null
    videos?: VideoListRelationFilter
    facultad?: XOR<FacultadNullableScalarRelationFilter, FacultadWhereInput> | null
    sesiones?: SessionListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre_de_usuario?: SortOrder
    password?: SortOrder
    fecha_de_registro?: SortOrder
    admin?: SortOrder
    facultad_id?: SortOrderInput | SortOrder
    videos?: VideoOrderByRelationAggregateInput
    facultad?: FacultadOrderByWithRelationInput
    sesiones?: SessionOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre_de_usuario?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    password?: StringFilter<"Usuario"> | string
    fecha_de_registro?: DateTimeFilter<"Usuario"> | Date | string
    admin?: BoolFilter<"Usuario"> | boolean
    facultad_id?: IntNullableFilter<"Usuario"> | number | null
    videos?: VideoListRelationFilter
    facultad?: XOR<FacultadNullableScalarRelationFilter, FacultadWhereInput> | null
    sesiones?: SessionListRelationFilter
  }, "id" | "nombre_de_usuario">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre_de_usuario?: SortOrder
    password?: SortOrder
    fecha_de_registro?: SortOrder
    admin?: SortOrder
    facultad_id?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre_de_usuario?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    fecha_de_registro?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    admin?: BoolWithAggregatesFilter<"Usuario"> | boolean
    facultad_id?: IntNullableWithAggregatesFilter<"Usuario"> | number | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    usuarioId?: IntFilter<"Session"> | number
    createdAt?: DateTimeFilter<"Session"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    usuarioId?: IntFilter<"Session"> | number
    createdAt?: DateTimeFilter<"Session"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    usuarioId?: IntWithAggregatesFilter<"Session"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: IntFilter<"Video"> | number
    titulo?: StringFilter<"Video"> | string
    descripcion?: StringFilter<"Video"> | string
    identificador?: StringFilter<"Video"> | string
    fecha_de_registro?: DateTimeFilter<"Video"> | Date | string
    fase?: StringFilter<"Video"> | string
    aprobado?: IntFilter<"Video"> | number
    comentario?: StringNullableFilter<"Video"> | string | null
    usuario_id?: IntFilter<"Video"> | number
    ua_id?: IntFilter<"Video"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ua?: XOR<UAScalarRelationFilter, UAWhereInput>
    palabras?: VideoPalabraClaveListRelationFilter
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    identificador?: SortOrder
    fecha_de_registro?: SortOrder
    fase?: SortOrder
    aprobado?: SortOrder
    comentario?: SortOrderInput | SortOrder
    usuario_id?: SortOrder
    ua_id?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    ua?: UAOrderByWithRelationInput
    palabras?: VideoPalabraClaveOrderByRelationAggregateInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    identificador?: string
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    titulo?: StringFilter<"Video"> | string
    descripcion?: StringFilter<"Video"> | string
    fecha_de_registro?: DateTimeFilter<"Video"> | Date | string
    fase?: StringFilter<"Video"> | string
    aprobado?: IntFilter<"Video"> | number
    comentario?: StringNullableFilter<"Video"> | string | null
    usuario_id?: IntFilter<"Video"> | number
    ua_id?: IntFilter<"Video"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ua?: XOR<UAScalarRelationFilter, UAWhereInput>
    palabras?: VideoPalabraClaveListRelationFilter
  }, "id" | "identificador">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    identificador?: SortOrder
    fecha_de_registro?: SortOrder
    fase?: SortOrder
    aprobado?: SortOrder
    comentario?: SortOrderInput | SortOrder
    usuario_id?: SortOrder
    ua_id?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Video"> | number
    titulo?: StringWithAggregatesFilter<"Video"> | string
    descripcion?: StringWithAggregatesFilter<"Video"> | string
    identificador?: StringWithAggregatesFilter<"Video"> | string
    fecha_de_registro?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    fase?: StringWithAggregatesFilter<"Video"> | string
    aprobado?: IntWithAggregatesFilter<"Video"> | number
    comentario?: StringNullableWithAggregatesFilter<"Video"> | string | null
    usuario_id?: IntWithAggregatesFilter<"Video"> | number
    ua_id?: IntWithAggregatesFilter<"Video"> | number
  }

  export type FacultadWhereInput = {
    AND?: FacultadWhereInput | FacultadWhereInput[]
    OR?: FacultadWhereInput[]
    NOT?: FacultadWhereInput | FacultadWhereInput[]
    id?: IntFilter<"Facultad"> | number
    nombre?: StringFilter<"Facultad"> | string
    usuarios?: UsuarioListRelationFilter
    carreras?: CarreraListRelationFilter
  }

  export type FacultadOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
    carreras?: CarreraOrderByRelationAggregateInput
  }

  export type FacultadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: FacultadWhereInput | FacultadWhereInput[]
    OR?: FacultadWhereInput[]
    NOT?: FacultadWhereInput | FacultadWhereInput[]
    usuarios?: UsuarioListRelationFilter
    carreras?: CarreraListRelationFilter
  }, "id" | "nombre">

  export type FacultadOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: FacultadCountOrderByAggregateInput
    _avg?: FacultadAvgOrderByAggregateInput
    _max?: FacultadMaxOrderByAggregateInput
    _min?: FacultadMinOrderByAggregateInput
    _sum?: FacultadSumOrderByAggregateInput
  }

  export type FacultadScalarWhereWithAggregatesInput = {
    AND?: FacultadScalarWhereWithAggregatesInput | FacultadScalarWhereWithAggregatesInput[]
    OR?: FacultadScalarWhereWithAggregatesInput[]
    NOT?: FacultadScalarWhereWithAggregatesInput | FacultadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Facultad"> | number
    nombre?: StringWithAggregatesFilter<"Facultad"> | string
  }

  export type CarreraWhereInput = {
    AND?: CarreraWhereInput | CarreraWhereInput[]
    OR?: CarreraWhereInput[]
    NOT?: CarreraWhereInput | CarreraWhereInput[]
    id?: IntFilter<"Carrera"> | number
    nombre?: StringFilter<"Carrera"> | string
    facultad_id?: IntFilter<"Carrera"> | number
    ua?: UAListRelationFilter
    facultad?: XOR<FacultadScalarRelationFilter, FacultadWhereInput>
  }

  export type CarreraOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    facultad_id?: SortOrder
    ua?: UAOrderByRelationAggregateInput
    facultad?: FacultadOrderByWithRelationInput
  }

  export type CarreraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: CarreraWhereInput | CarreraWhereInput[]
    OR?: CarreraWhereInput[]
    NOT?: CarreraWhereInput | CarreraWhereInput[]
    facultad_id?: IntFilter<"Carrera"> | number
    ua?: UAListRelationFilter
    facultad?: XOR<FacultadScalarRelationFilter, FacultadWhereInput>
  }, "id" | "nombre">

  export type CarreraOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    facultad_id?: SortOrder
    _count?: CarreraCountOrderByAggregateInput
    _avg?: CarreraAvgOrderByAggregateInput
    _max?: CarreraMaxOrderByAggregateInput
    _min?: CarreraMinOrderByAggregateInput
    _sum?: CarreraSumOrderByAggregateInput
  }

  export type CarreraScalarWhereWithAggregatesInput = {
    AND?: CarreraScalarWhereWithAggregatesInput | CarreraScalarWhereWithAggregatesInput[]
    OR?: CarreraScalarWhereWithAggregatesInput[]
    NOT?: CarreraScalarWhereWithAggregatesInput | CarreraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Carrera"> | number
    nombre?: StringWithAggregatesFilter<"Carrera"> | string
    facultad_id?: IntWithAggregatesFilter<"Carrera"> | number
  }

  export type UAWhereInput = {
    AND?: UAWhereInput | UAWhereInput[]
    OR?: UAWhereInput[]
    NOT?: UAWhereInput | UAWhereInput[]
    id?: IntFilter<"UA"> | number
    nombre?: StringFilter<"UA"> | string
    modalidad?: StringFilter<"UA"> | string
    carrera_id?: IntFilter<"UA"> | number
    videos?: VideoListRelationFilter
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
  }

  export type UAOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    modalidad?: SortOrder
    carrera_id?: SortOrder
    videos?: VideoOrderByRelationAggregateInput
    carrera?: CarreraOrderByWithRelationInput
  }

  export type UAWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UAWhereInput | UAWhereInput[]
    OR?: UAWhereInput[]
    NOT?: UAWhereInput | UAWhereInput[]
    nombre?: StringFilter<"UA"> | string
    modalidad?: StringFilter<"UA"> | string
    carrera_id?: IntFilter<"UA"> | number
    videos?: VideoListRelationFilter
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
  }, "id">

  export type UAOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    modalidad?: SortOrder
    carrera_id?: SortOrder
    _count?: UACountOrderByAggregateInput
    _avg?: UAAvgOrderByAggregateInput
    _max?: UAMaxOrderByAggregateInput
    _min?: UAMinOrderByAggregateInput
    _sum?: UASumOrderByAggregateInput
  }

  export type UAScalarWhereWithAggregatesInput = {
    AND?: UAScalarWhereWithAggregatesInput | UAScalarWhereWithAggregatesInput[]
    OR?: UAScalarWhereWithAggregatesInput[]
    NOT?: UAScalarWhereWithAggregatesInput | UAScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UA"> | number
    nombre?: StringWithAggregatesFilter<"UA"> | string
    modalidad?: StringWithAggregatesFilter<"UA"> | string
    carrera_id?: IntWithAggregatesFilter<"UA"> | number
  }

  export type PalabraClaveWhereInput = {
    AND?: PalabraClaveWhereInput | PalabraClaveWhereInput[]
    OR?: PalabraClaveWhereInput[]
    NOT?: PalabraClaveWhereInput | PalabraClaveWhereInput[]
    id?: IntFilter<"PalabraClave"> | number
    nombre?: StringFilter<"PalabraClave"> | string
    videos?: VideoPalabraClaveListRelationFilter
  }

  export type PalabraClaveOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    videos?: VideoPalabraClaveOrderByRelationAggregateInput
  }

  export type PalabraClaveWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: PalabraClaveWhereInput | PalabraClaveWhereInput[]
    OR?: PalabraClaveWhereInput[]
    NOT?: PalabraClaveWhereInput | PalabraClaveWhereInput[]
    videos?: VideoPalabraClaveListRelationFilter
  }, "id" | "nombre">

  export type PalabraClaveOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: PalabraClaveCountOrderByAggregateInput
    _avg?: PalabraClaveAvgOrderByAggregateInput
    _max?: PalabraClaveMaxOrderByAggregateInput
    _min?: PalabraClaveMinOrderByAggregateInput
    _sum?: PalabraClaveSumOrderByAggregateInput
  }

  export type PalabraClaveScalarWhereWithAggregatesInput = {
    AND?: PalabraClaveScalarWhereWithAggregatesInput | PalabraClaveScalarWhereWithAggregatesInput[]
    OR?: PalabraClaveScalarWhereWithAggregatesInput[]
    NOT?: PalabraClaveScalarWhereWithAggregatesInput | PalabraClaveScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PalabraClave"> | number
    nombre?: StringWithAggregatesFilter<"PalabraClave"> | string
  }

  export type VideoPalabraClaveWhereInput = {
    AND?: VideoPalabraClaveWhereInput | VideoPalabraClaveWhereInput[]
    OR?: VideoPalabraClaveWhereInput[]
    NOT?: VideoPalabraClaveWhereInput | VideoPalabraClaveWhereInput[]
    video_id?: IntFilter<"VideoPalabraClave"> | number
    palabra_clave_id?: IntFilter<"VideoPalabraClave"> | number
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
    palabra_clave?: XOR<PalabraClaveScalarRelationFilter, PalabraClaveWhereInput>
  }

  export type VideoPalabraClaveOrderByWithRelationInput = {
    video_id?: SortOrder
    palabra_clave_id?: SortOrder
    video?: VideoOrderByWithRelationInput
    palabra_clave?: PalabraClaveOrderByWithRelationInput
  }

  export type VideoPalabraClaveWhereUniqueInput = Prisma.AtLeast<{
    video_id_palabra_clave_id?: VideoPalabraClaveVideo_idPalabra_clave_idCompoundUniqueInput
    AND?: VideoPalabraClaveWhereInput | VideoPalabraClaveWhereInput[]
    OR?: VideoPalabraClaveWhereInput[]
    NOT?: VideoPalabraClaveWhereInput | VideoPalabraClaveWhereInput[]
    video_id?: IntFilter<"VideoPalabraClave"> | number
    palabra_clave_id?: IntFilter<"VideoPalabraClave"> | number
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
    palabra_clave?: XOR<PalabraClaveScalarRelationFilter, PalabraClaveWhereInput>
  }, "video_id_palabra_clave_id">

  export type VideoPalabraClaveOrderByWithAggregationInput = {
    video_id?: SortOrder
    palabra_clave_id?: SortOrder
    _count?: VideoPalabraClaveCountOrderByAggregateInput
    _avg?: VideoPalabraClaveAvgOrderByAggregateInput
    _max?: VideoPalabraClaveMaxOrderByAggregateInput
    _min?: VideoPalabraClaveMinOrderByAggregateInput
    _sum?: VideoPalabraClaveSumOrderByAggregateInput
  }

  export type VideoPalabraClaveScalarWhereWithAggregatesInput = {
    AND?: VideoPalabraClaveScalarWhereWithAggregatesInput | VideoPalabraClaveScalarWhereWithAggregatesInput[]
    OR?: VideoPalabraClaveScalarWhereWithAggregatesInput[]
    NOT?: VideoPalabraClaveScalarWhereWithAggregatesInput | VideoPalabraClaveScalarWhereWithAggregatesInput[]
    video_id?: IntWithAggregatesFilter<"VideoPalabraClave"> | number
    palabra_clave_id?: IntWithAggregatesFilter<"VideoPalabraClave"> | number
  }

  export type UsuarioCreateInput = {
    nombre_de_usuario: string
    password: string
    fecha_de_registro?: Date | string
    admin: boolean
    videos?: VideoCreateNestedManyWithoutUsuarioInput
    facultad?: FacultadCreateNestedOneWithoutUsuariosInput
    sesiones?: SessionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre_de_usuario: string
    password: string
    fecha_de_registro?: Date | string
    admin: boolean
    facultad_id?: number | null
    videos?: VideoUncheckedCreateNestedManyWithoutUsuarioInput
    sesiones?: SessionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre_de_usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    videos?: VideoUpdateManyWithoutUsuarioNestedInput
    facultad?: FacultadUpdateOneWithoutUsuariosNestedInput
    sesiones?: SessionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre_de_usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    facultad_id?: NullableIntFieldUpdateOperationsInput | number | null
    videos?: VideoUncheckedUpdateManyWithoutUsuarioNestedInput
    sesiones?: SessionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre_de_usuario: string
    password: string
    fecha_de_registro?: Date | string
    admin: boolean
    facultad_id?: number | null
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre_de_usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre_de_usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    facultad_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id: string
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutSesionesInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    usuarioId: number
    createdAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutSesionesNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    usuarioId: number
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateInput = {
    titulo: string
    descripcion: string
    identificador: string
    fecha_de_registro?: Date | string
    fase: string
    aprobado: number
    comentario?: string | null
    usuario: UsuarioCreateNestedOneWithoutVideosInput
    ua: UACreateNestedOneWithoutVideosInput
    palabras?: VideoPalabraClaveCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateInput = {
    id?: number
    titulo: string
    descripcion: string
    identificador: string
    fecha_de_registro?: Date | string
    fase: string
    aprobado: number
    comentario?: string | null
    usuario_id: number
    ua_id: number
    palabras?: VideoPalabraClaveUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    identificador?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fase?: StringFieldUpdateOperationsInput | string
    aprobado?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutVideosNestedInput
    ua?: UAUpdateOneRequiredWithoutVideosNestedInput
    palabras?: VideoPalabraClaveUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    identificador?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fase?: StringFieldUpdateOperationsInput | string
    aprobado?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: IntFieldUpdateOperationsInput | number
    ua_id?: IntFieldUpdateOperationsInput | number
    palabras?: VideoPalabraClaveUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoCreateManyInput = {
    id?: number
    titulo: string
    descripcion: string
    identificador: string
    fecha_de_registro?: Date | string
    fase: string
    aprobado: number
    comentario?: string | null
    usuario_id: number
    ua_id: number
  }

  export type VideoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    identificador?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fase?: StringFieldUpdateOperationsInput | string
    aprobado?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    identificador?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fase?: StringFieldUpdateOperationsInput | string
    aprobado?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: IntFieldUpdateOperationsInput | number
    ua_id?: IntFieldUpdateOperationsInput | number
  }

  export type FacultadCreateInput = {
    nombre: string
    usuarios?: UsuarioCreateNestedManyWithoutFacultadInput
    carreras?: CarreraCreateNestedManyWithoutFacultadInput
  }

  export type FacultadUncheckedCreateInput = {
    id?: number
    nombre: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutFacultadInput
    carreras?: CarreraUncheckedCreateNestedManyWithoutFacultadInput
  }

  export type FacultadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutFacultadNestedInput
    carreras?: CarreraUpdateManyWithoutFacultadNestedInput
  }

  export type FacultadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutFacultadNestedInput
    carreras?: CarreraUncheckedUpdateManyWithoutFacultadNestedInput
  }

  export type FacultadCreateManyInput = {
    id?: number
    nombre: string
  }

  export type FacultadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type FacultadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CarreraCreateInput = {
    nombre: string
    ua?: UACreateNestedManyWithoutCarreraInput
    facultad: FacultadCreateNestedOneWithoutCarrerasInput
  }

  export type CarreraUncheckedCreateInput = {
    id?: number
    nombre: string
    facultad_id: number
    ua?: UAUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ua?: UAUpdateManyWithoutCarreraNestedInput
    facultad?: FacultadUpdateOneRequiredWithoutCarrerasNestedInput
  }

  export type CarreraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    facultad_id?: IntFieldUpdateOperationsInput | number
    ua?: UAUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraCreateManyInput = {
    id?: number
    nombre: string
    facultad_id: number
  }

  export type CarreraUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CarreraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    facultad_id?: IntFieldUpdateOperationsInput | number
  }

  export type UACreateInput = {
    nombre: string
    modalidad: string
    videos?: VideoCreateNestedManyWithoutUaInput
    carrera: CarreraCreateNestedOneWithoutUaInput
  }

  export type UAUncheckedCreateInput = {
    id?: number
    nombre: string
    modalidad: string
    carrera_id: number
    videos?: VideoUncheckedCreateNestedManyWithoutUaInput
  }

  export type UAUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    modalidad?: StringFieldUpdateOperationsInput | string
    videos?: VideoUpdateManyWithoutUaNestedInput
    carrera?: CarreraUpdateOneRequiredWithoutUaNestedInput
  }

  export type UAUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    modalidad?: StringFieldUpdateOperationsInput | string
    carrera_id?: IntFieldUpdateOperationsInput | number
    videos?: VideoUncheckedUpdateManyWithoutUaNestedInput
  }

  export type UACreateManyInput = {
    id?: number
    nombre: string
    modalidad: string
    carrera_id: number
  }

  export type UAUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    modalidad?: StringFieldUpdateOperationsInput | string
  }

  export type UAUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    modalidad?: StringFieldUpdateOperationsInput | string
    carrera_id?: IntFieldUpdateOperationsInput | number
  }

  export type PalabraClaveCreateInput = {
    nombre: string
    videos?: VideoPalabraClaveCreateNestedManyWithoutPalabra_claveInput
  }

  export type PalabraClaveUncheckedCreateInput = {
    id?: number
    nombre: string
    videos?: VideoPalabraClaveUncheckedCreateNestedManyWithoutPalabra_claveInput
  }

  export type PalabraClaveUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    videos?: VideoPalabraClaveUpdateManyWithoutPalabra_claveNestedInput
  }

  export type PalabraClaveUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    videos?: VideoPalabraClaveUncheckedUpdateManyWithoutPalabra_claveNestedInput
  }

  export type PalabraClaveCreateManyInput = {
    id?: number
    nombre: string
  }

  export type PalabraClaveUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PalabraClaveUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type VideoPalabraClaveCreateInput = {
    video: VideoCreateNestedOneWithoutPalabrasInput
    palabra_clave: PalabraClaveCreateNestedOneWithoutVideosInput
  }

  export type VideoPalabraClaveUncheckedCreateInput = {
    video_id: number
    palabra_clave_id: number
  }

  export type VideoPalabraClaveUpdateInput = {
    video?: VideoUpdateOneRequiredWithoutPalabrasNestedInput
    palabra_clave?: PalabraClaveUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoPalabraClaveUncheckedUpdateInput = {
    video_id?: IntFieldUpdateOperationsInput | number
    palabra_clave_id?: IntFieldUpdateOperationsInput | number
  }

  export type VideoPalabraClaveCreateManyInput = {
    video_id: number
    palabra_clave_id: number
  }

  export type VideoPalabraClaveUpdateManyMutationInput = {

  }

  export type VideoPalabraClaveUncheckedUpdateManyInput = {
    video_id?: IntFieldUpdateOperationsInput | number
    palabra_clave_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type FacultadNullableScalarRelationFilter = {
    is?: FacultadWhereInput | null
    isNot?: FacultadWhereInput | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre_de_usuario?: SortOrder
    password?: SortOrder
    fecha_de_registro?: SortOrder
    admin?: SortOrder
    facultad_id?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    facultad_id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre_de_usuario?: SortOrder
    password?: SortOrder
    fecha_de_registro?: SortOrder
    admin?: SortOrder
    facultad_id?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre_de_usuario?: SortOrder
    password?: SortOrder
    fecha_de_registro?: SortOrder
    admin?: SortOrder
    facultad_id?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    facultad_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    usuarioId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    usuarioId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UAScalarRelationFilter = {
    is?: UAWhereInput
    isNot?: UAWhereInput
  }

  export type VideoPalabraClaveListRelationFilter = {
    every?: VideoPalabraClaveWhereInput
    some?: VideoPalabraClaveWhereInput
    none?: VideoPalabraClaveWhereInput
  }

  export type VideoPalabraClaveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    identificador?: SortOrder
    fecha_de_registro?: SortOrder
    fase?: SortOrder
    aprobado?: SortOrder
    comentario?: SortOrder
    usuario_id?: SortOrder
    ua_id?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    id?: SortOrder
    aprobado?: SortOrder
    usuario_id?: SortOrder
    ua_id?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    identificador?: SortOrder
    fecha_de_registro?: SortOrder
    fase?: SortOrder
    aprobado?: SortOrder
    comentario?: SortOrder
    usuario_id?: SortOrder
    ua_id?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    identificador?: SortOrder
    fecha_de_registro?: SortOrder
    fase?: SortOrder
    aprobado?: SortOrder
    comentario?: SortOrder
    usuario_id?: SortOrder
    ua_id?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    id?: SortOrder
    aprobado?: SortOrder
    usuario_id?: SortOrder
    ua_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type CarreraListRelationFilter = {
    every?: CarreraWhereInput
    some?: CarreraWhereInput
    none?: CarreraWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarreraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacultadCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type FacultadAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FacultadMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type FacultadMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type FacultadSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UAListRelationFilter = {
    every?: UAWhereInput
    some?: UAWhereInput
    none?: UAWhereInput
  }

  export type FacultadScalarRelationFilter = {
    is?: FacultadWhereInput
    isNot?: FacultadWhereInput
  }

  export type UAOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarreraCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    facultad_id?: SortOrder
  }

  export type CarreraAvgOrderByAggregateInput = {
    id?: SortOrder
    facultad_id?: SortOrder
  }

  export type CarreraMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    facultad_id?: SortOrder
  }

  export type CarreraMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    facultad_id?: SortOrder
  }

  export type CarreraSumOrderByAggregateInput = {
    id?: SortOrder
    facultad_id?: SortOrder
  }

  export type CarreraScalarRelationFilter = {
    is?: CarreraWhereInput
    isNot?: CarreraWhereInput
  }

  export type UACountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    modalidad?: SortOrder
    carrera_id?: SortOrder
  }

  export type UAAvgOrderByAggregateInput = {
    id?: SortOrder
    carrera_id?: SortOrder
  }

  export type UAMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    modalidad?: SortOrder
    carrera_id?: SortOrder
  }

  export type UAMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    modalidad?: SortOrder
    carrera_id?: SortOrder
  }

  export type UASumOrderByAggregateInput = {
    id?: SortOrder
    carrera_id?: SortOrder
  }

  export type PalabraClaveCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PalabraClaveAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PalabraClaveMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PalabraClaveMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PalabraClaveSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VideoScalarRelationFilter = {
    is?: VideoWhereInput
    isNot?: VideoWhereInput
  }

  export type PalabraClaveScalarRelationFilter = {
    is?: PalabraClaveWhereInput
    isNot?: PalabraClaveWhereInput
  }

  export type VideoPalabraClaveVideo_idPalabra_clave_idCompoundUniqueInput = {
    video_id: number
    palabra_clave_id: number
  }

  export type VideoPalabraClaveCountOrderByAggregateInput = {
    video_id?: SortOrder
    palabra_clave_id?: SortOrder
  }

  export type VideoPalabraClaveAvgOrderByAggregateInput = {
    video_id?: SortOrder
    palabra_clave_id?: SortOrder
  }

  export type VideoPalabraClaveMaxOrderByAggregateInput = {
    video_id?: SortOrder
    palabra_clave_id?: SortOrder
  }

  export type VideoPalabraClaveMinOrderByAggregateInput = {
    video_id?: SortOrder
    palabra_clave_id?: SortOrder
  }

  export type VideoPalabraClaveSumOrderByAggregateInput = {
    video_id?: SortOrder
    palabra_clave_id?: SortOrder
  }

  export type VideoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<VideoCreateWithoutUsuarioInput, VideoUncheckedCreateWithoutUsuarioInput> | VideoCreateWithoutUsuarioInput[] | VideoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUsuarioInput | VideoCreateOrConnectWithoutUsuarioInput[]
    createMany?: VideoCreateManyUsuarioInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type FacultadCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<FacultadCreateWithoutUsuariosInput, FacultadUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: FacultadCreateOrConnectWithoutUsuariosInput
    connect?: FacultadWhereUniqueInput
  }

  export type SessionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<SessionCreateWithoutUsuarioInput, SessionUncheckedCreateWithoutUsuarioInput> | SessionCreateWithoutUsuarioInput[] | SessionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUsuarioInput | SessionCreateOrConnectWithoutUsuarioInput[]
    createMany?: SessionCreateManyUsuarioInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<VideoCreateWithoutUsuarioInput, VideoUncheckedCreateWithoutUsuarioInput> | VideoCreateWithoutUsuarioInput[] | VideoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUsuarioInput | VideoCreateOrConnectWithoutUsuarioInput[]
    createMany?: VideoCreateManyUsuarioInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<SessionCreateWithoutUsuarioInput, SessionUncheckedCreateWithoutUsuarioInput> | SessionCreateWithoutUsuarioInput[] | SessionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUsuarioInput | SessionCreateOrConnectWithoutUsuarioInput[]
    createMany?: SessionCreateManyUsuarioInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VideoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<VideoCreateWithoutUsuarioInput, VideoUncheckedCreateWithoutUsuarioInput> | VideoCreateWithoutUsuarioInput[] | VideoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUsuarioInput | VideoCreateOrConnectWithoutUsuarioInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutUsuarioInput | VideoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: VideoCreateManyUsuarioInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutUsuarioInput | VideoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutUsuarioInput | VideoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type FacultadUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<FacultadCreateWithoutUsuariosInput, FacultadUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: FacultadCreateOrConnectWithoutUsuariosInput
    upsert?: FacultadUpsertWithoutUsuariosInput
    disconnect?: FacultadWhereInput | boolean
    delete?: FacultadWhereInput | boolean
    connect?: FacultadWhereUniqueInput
    update?: XOR<XOR<FacultadUpdateToOneWithWhereWithoutUsuariosInput, FacultadUpdateWithoutUsuariosInput>, FacultadUncheckedUpdateWithoutUsuariosInput>
  }

  export type SessionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<SessionCreateWithoutUsuarioInput, SessionUncheckedCreateWithoutUsuarioInput> | SessionCreateWithoutUsuarioInput[] | SessionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUsuarioInput | SessionCreateOrConnectWithoutUsuarioInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUsuarioInput | SessionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: SessionCreateManyUsuarioInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUsuarioInput | SessionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUsuarioInput | SessionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VideoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<VideoCreateWithoutUsuarioInput, VideoUncheckedCreateWithoutUsuarioInput> | VideoCreateWithoutUsuarioInput[] | VideoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUsuarioInput | VideoCreateOrConnectWithoutUsuarioInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutUsuarioInput | VideoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: VideoCreateManyUsuarioInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutUsuarioInput | VideoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutUsuarioInput | VideoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<SessionCreateWithoutUsuarioInput, SessionUncheckedCreateWithoutUsuarioInput> | SessionCreateWithoutUsuarioInput[] | SessionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUsuarioInput | SessionCreateOrConnectWithoutUsuarioInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUsuarioInput | SessionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: SessionCreateManyUsuarioInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUsuarioInput | SessionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUsuarioInput | SessionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutSesionesInput = {
    create?: XOR<UsuarioCreateWithoutSesionesInput, UsuarioUncheckedCreateWithoutSesionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSesionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutSesionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutSesionesInput, UsuarioUncheckedCreateWithoutSesionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSesionesInput
    upsert?: UsuarioUpsertWithoutSesionesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSesionesInput, UsuarioUpdateWithoutSesionesInput>, UsuarioUncheckedUpdateWithoutSesionesInput>
  }

  export type UsuarioCreateNestedOneWithoutVideosInput = {
    create?: XOR<UsuarioCreateWithoutVideosInput, UsuarioUncheckedCreateWithoutVideosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVideosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UACreateNestedOneWithoutVideosInput = {
    create?: XOR<UACreateWithoutVideosInput, UAUncheckedCreateWithoutVideosInput>
    connectOrCreate?: UACreateOrConnectWithoutVideosInput
    connect?: UAWhereUniqueInput
  }

  export type VideoPalabraClaveCreateNestedManyWithoutVideoInput = {
    create?: XOR<VideoPalabraClaveCreateWithoutVideoInput, VideoPalabraClaveUncheckedCreateWithoutVideoInput> | VideoPalabraClaveCreateWithoutVideoInput[] | VideoPalabraClaveUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: VideoPalabraClaveCreateOrConnectWithoutVideoInput | VideoPalabraClaveCreateOrConnectWithoutVideoInput[]
    createMany?: VideoPalabraClaveCreateManyVideoInputEnvelope
    connect?: VideoPalabraClaveWhereUniqueInput | VideoPalabraClaveWhereUniqueInput[]
  }

  export type VideoPalabraClaveUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<VideoPalabraClaveCreateWithoutVideoInput, VideoPalabraClaveUncheckedCreateWithoutVideoInput> | VideoPalabraClaveCreateWithoutVideoInput[] | VideoPalabraClaveUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: VideoPalabraClaveCreateOrConnectWithoutVideoInput | VideoPalabraClaveCreateOrConnectWithoutVideoInput[]
    createMany?: VideoPalabraClaveCreateManyVideoInputEnvelope
    connect?: VideoPalabraClaveWhereUniqueInput | VideoPalabraClaveWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuarioUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<UsuarioCreateWithoutVideosInput, UsuarioUncheckedCreateWithoutVideosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVideosInput
    upsert?: UsuarioUpsertWithoutVideosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutVideosInput, UsuarioUpdateWithoutVideosInput>, UsuarioUncheckedUpdateWithoutVideosInput>
  }

  export type UAUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<UACreateWithoutVideosInput, UAUncheckedCreateWithoutVideosInput>
    connectOrCreate?: UACreateOrConnectWithoutVideosInput
    upsert?: UAUpsertWithoutVideosInput
    connect?: UAWhereUniqueInput
    update?: XOR<XOR<UAUpdateToOneWithWhereWithoutVideosInput, UAUpdateWithoutVideosInput>, UAUncheckedUpdateWithoutVideosInput>
  }

  export type VideoPalabraClaveUpdateManyWithoutVideoNestedInput = {
    create?: XOR<VideoPalabraClaveCreateWithoutVideoInput, VideoPalabraClaveUncheckedCreateWithoutVideoInput> | VideoPalabraClaveCreateWithoutVideoInput[] | VideoPalabraClaveUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: VideoPalabraClaveCreateOrConnectWithoutVideoInput | VideoPalabraClaveCreateOrConnectWithoutVideoInput[]
    upsert?: VideoPalabraClaveUpsertWithWhereUniqueWithoutVideoInput | VideoPalabraClaveUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: VideoPalabraClaveCreateManyVideoInputEnvelope
    set?: VideoPalabraClaveWhereUniqueInput | VideoPalabraClaveWhereUniqueInput[]
    disconnect?: VideoPalabraClaveWhereUniqueInput | VideoPalabraClaveWhereUniqueInput[]
    delete?: VideoPalabraClaveWhereUniqueInput | VideoPalabraClaveWhereUniqueInput[]
    connect?: VideoPalabraClaveWhereUniqueInput | VideoPalabraClaveWhereUniqueInput[]
    update?: VideoPalabraClaveUpdateWithWhereUniqueWithoutVideoInput | VideoPalabraClaveUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: VideoPalabraClaveUpdateManyWithWhereWithoutVideoInput | VideoPalabraClaveUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: VideoPalabraClaveScalarWhereInput | VideoPalabraClaveScalarWhereInput[]
  }

  export type VideoPalabraClaveUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<VideoPalabraClaveCreateWithoutVideoInput, VideoPalabraClaveUncheckedCreateWithoutVideoInput> | VideoPalabraClaveCreateWithoutVideoInput[] | VideoPalabraClaveUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: VideoPalabraClaveCreateOrConnectWithoutVideoInput | VideoPalabraClaveCreateOrConnectWithoutVideoInput[]
    upsert?: VideoPalabraClaveUpsertWithWhereUniqueWithoutVideoInput | VideoPalabraClaveUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: VideoPalabraClaveCreateManyVideoInputEnvelope
    set?: VideoPalabraClaveWhereUniqueInput | VideoPalabraClaveWhereUniqueInput[]
    disconnect?: VideoPalabraClaveWhereUniqueInput | VideoPalabraClaveWhereUniqueInput[]
    delete?: VideoPalabraClaveWhereUniqueInput | VideoPalabraClaveWhereUniqueInput[]
    connect?: VideoPalabraClaveWhereUniqueInput | VideoPalabraClaveWhereUniqueInput[]
    update?: VideoPalabraClaveUpdateWithWhereUniqueWithoutVideoInput | VideoPalabraClaveUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: VideoPalabraClaveUpdateManyWithWhereWithoutVideoInput | VideoPalabraClaveUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: VideoPalabraClaveScalarWhereInput | VideoPalabraClaveScalarWhereInput[]
  }

  export type UsuarioCreateNestedManyWithoutFacultadInput = {
    create?: XOR<UsuarioCreateWithoutFacultadInput, UsuarioUncheckedCreateWithoutFacultadInput> | UsuarioCreateWithoutFacultadInput[] | UsuarioUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutFacultadInput | UsuarioCreateOrConnectWithoutFacultadInput[]
    createMany?: UsuarioCreateManyFacultadInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type CarreraCreateNestedManyWithoutFacultadInput = {
    create?: XOR<CarreraCreateWithoutFacultadInput, CarreraUncheckedCreateWithoutFacultadInput> | CarreraCreateWithoutFacultadInput[] | CarreraUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: CarreraCreateOrConnectWithoutFacultadInput | CarreraCreateOrConnectWithoutFacultadInput[]
    createMany?: CarreraCreateManyFacultadInputEnvelope
    connect?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutFacultadInput = {
    create?: XOR<UsuarioCreateWithoutFacultadInput, UsuarioUncheckedCreateWithoutFacultadInput> | UsuarioCreateWithoutFacultadInput[] | UsuarioUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutFacultadInput | UsuarioCreateOrConnectWithoutFacultadInput[]
    createMany?: UsuarioCreateManyFacultadInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type CarreraUncheckedCreateNestedManyWithoutFacultadInput = {
    create?: XOR<CarreraCreateWithoutFacultadInput, CarreraUncheckedCreateWithoutFacultadInput> | CarreraCreateWithoutFacultadInput[] | CarreraUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: CarreraCreateOrConnectWithoutFacultadInput | CarreraCreateOrConnectWithoutFacultadInput[]
    createMany?: CarreraCreateManyFacultadInputEnvelope
    connect?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
  }

  export type UsuarioUpdateManyWithoutFacultadNestedInput = {
    create?: XOR<UsuarioCreateWithoutFacultadInput, UsuarioUncheckedCreateWithoutFacultadInput> | UsuarioCreateWithoutFacultadInput[] | UsuarioUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutFacultadInput | UsuarioCreateOrConnectWithoutFacultadInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutFacultadInput | UsuarioUpsertWithWhereUniqueWithoutFacultadInput[]
    createMany?: UsuarioCreateManyFacultadInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutFacultadInput | UsuarioUpdateWithWhereUniqueWithoutFacultadInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutFacultadInput | UsuarioUpdateManyWithWhereWithoutFacultadInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type CarreraUpdateManyWithoutFacultadNestedInput = {
    create?: XOR<CarreraCreateWithoutFacultadInput, CarreraUncheckedCreateWithoutFacultadInput> | CarreraCreateWithoutFacultadInput[] | CarreraUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: CarreraCreateOrConnectWithoutFacultadInput | CarreraCreateOrConnectWithoutFacultadInput[]
    upsert?: CarreraUpsertWithWhereUniqueWithoutFacultadInput | CarreraUpsertWithWhereUniqueWithoutFacultadInput[]
    createMany?: CarreraCreateManyFacultadInputEnvelope
    set?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    disconnect?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    delete?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    connect?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    update?: CarreraUpdateWithWhereUniqueWithoutFacultadInput | CarreraUpdateWithWhereUniqueWithoutFacultadInput[]
    updateMany?: CarreraUpdateManyWithWhereWithoutFacultadInput | CarreraUpdateManyWithWhereWithoutFacultadInput[]
    deleteMany?: CarreraScalarWhereInput | CarreraScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutFacultadNestedInput = {
    create?: XOR<UsuarioCreateWithoutFacultadInput, UsuarioUncheckedCreateWithoutFacultadInput> | UsuarioCreateWithoutFacultadInput[] | UsuarioUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutFacultadInput | UsuarioCreateOrConnectWithoutFacultadInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutFacultadInput | UsuarioUpsertWithWhereUniqueWithoutFacultadInput[]
    createMany?: UsuarioCreateManyFacultadInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutFacultadInput | UsuarioUpdateWithWhereUniqueWithoutFacultadInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutFacultadInput | UsuarioUpdateManyWithWhereWithoutFacultadInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type CarreraUncheckedUpdateManyWithoutFacultadNestedInput = {
    create?: XOR<CarreraCreateWithoutFacultadInput, CarreraUncheckedCreateWithoutFacultadInput> | CarreraCreateWithoutFacultadInput[] | CarreraUncheckedCreateWithoutFacultadInput[]
    connectOrCreate?: CarreraCreateOrConnectWithoutFacultadInput | CarreraCreateOrConnectWithoutFacultadInput[]
    upsert?: CarreraUpsertWithWhereUniqueWithoutFacultadInput | CarreraUpsertWithWhereUniqueWithoutFacultadInput[]
    createMany?: CarreraCreateManyFacultadInputEnvelope
    set?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    disconnect?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    delete?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    connect?: CarreraWhereUniqueInput | CarreraWhereUniqueInput[]
    update?: CarreraUpdateWithWhereUniqueWithoutFacultadInput | CarreraUpdateWithWhereUniqueWithoutFacultadInput[]
    updateMany?: CarreraUpdateManyWithWhereWithoutFacultadInput | CarreraUpdateManyWithWhereWithoutFacultadInput[]
    deleteMany?: CarreraScalarWhereInput | CarreraScalarWhereInput[]
  }

  export type UACreateNestedManyWithoutCarreraInput = {
    create?: XOR<UACreateWithoutCarreraInput, UAUncheckedCreateWithoutCarreraInput> | UACreateWithoutCarreraInput[] | UAUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: UACreateOrConnectWithoutCarreraInput | UACreateOrConnectWithoutCarreraInput[]
    createMany?: UACreateManyCarreraInputEnvelope
    connect?: UAWhereUniqueInput | UAWhereUniqueInput[]
  }

  export type FacultadCreateNestedOneWithoutCarrerasInput = {
    create?: XOR<FacultadCreateWithoutCarrerasInput, FacultadUncheckedCreateWithoutCarrerasInput>
    connectOrCreate?: FacultadCreateOrConnectWithoutCarrerasInput
    connect?: FacultadWhereUniqueInput
  }

  export type UAUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<UACreateWithoutCarreraInput, UAUncheckedCreateWithoutCarreraInput> | UACreateWithoutCarreraInput[] | UAUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: UACreateOrConnectWithoutCarreraInput | UACreateOrConnectWithoutCarreraInput[]
    createMany?: UACreateManyCarreraInputEnvelope
    connect?: UAWhereUniqueInput | UAWhereUniqueInput[]
  }

  export type UAUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<UACreateWithoutCarreraInput, UAUncheckedCreateWithoutCarreraInput> | UACreateWithoutCarreraInput[] | UAUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: UACreateOrConnectWithoutCarreraInput | UACreateOrConnectWithoutCarreraInput[]
    upsert?: UAUpsertWithWhereUniqueWithoutCarreraInput | UAUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: UACreateManyCarreraInputEnvelope
    set?: UAWhereUniqueInput | UAWhereUniqueInput[]
    disconnect?: UAWhereUniqueInput | UAWhereUniqueInput[]
    delete?: UAWhereUniqueInput | UAWhereUniqueInput[]
    connect?: UAWhereUniqueInput | UAWhereUniqueInput[]
    update?: UAUpdateWithWhereUniqueWithoutCarreraInput | UAUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: UAUpdateManyWithWhereWithoutCarreraInput | UAUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: UAScalarWhereInput | UAScalarWhereInput[]
  }

  export type FacultadUpdateOneRequiredWithoutCarrerasNestedInput = {
    create?: XOR<FacultadCreateWithoutCarrerasInput, FacultadUncheckedCreateWithoutCarrerasInput>
    connectOrCreate?: FacultadCreateOrConnectWithoutCarrerasInput
    upsert?: FacultadUpsertWithoutCarrerasInput
    connect?: FacultadWhereUniqueInput
    update?: XOR<XOR<FacultadUpdateToOneWithWhereWithoutCarrerasInput, FacultadUpdateWithoutCarrerasInput>, FacultadUncheckedUpdateWithoutCarrerasInput>
  }

  export type UAUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<UACreateWithoutCarreraInput, UAUncheckedCreateWithoutCarreraInput> | UACreateWithoutCarreraInput[] | UAUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: UACreateOrConnectWithoutCarreraInput | UACreateOrConnectWithoutCarreraInput[]
    upsert?: UAUpsertWithWhereUniqueWithoutCarreraInput | UAUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: UACreateManyCarreraInputEnvelope
    set?: UAWhereUniqueInput | UAWhereUniqueInput[]
    disconnect?: UAWhereUniqueInput | UAWhereUniqueInput[]
    delete?: UAWhereUniqueInput | UAWhereUniqueInput[]
    connect?: UAWhereUniqueInput | UAWhereUniqueInput[]
    update?: UAUpdateWithWhereUniqueWithoutCarreraInput | UAUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: UAUpdateManyWithWhereWithoutCarreraInput | UAUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: UAScalarWhereInput | UAScalarWhereInput[]
  }

  export type VideoCreateNestedManyWithoutUaInput = {
    create?: XOR<VideoCreateWithoutUaInput, VideoUncheckedCreateWithoutUaInput> | VideoCreateWithoutUaInput[] | VideoUncheckedCreateWithoutUaInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUaInput | VideoCreateOrConnectWithoutUaInput[]
    createMany?: VideoCreateManyUaInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type CarreraCreateNestedOneWithoutUaInput = {
    create?: XOR<CarreraCreateWithoutUaInput, CarreraUncheckedCreateWithoutUaInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutUaInput
    connect?: CarreraWhereUniqueInput
  }

  export type VideoUncheckedCreateNestedManyWithoutUaInput = {
    create?: XOR<VideoCreateWithoutUaInput, VideoUncheckedCreateWithoutUaInput> | VideoCreateWithoutUaInput[] | VideoUncheckedCreateWithoutUaInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUaInput | VideoCreateOrConnectWithoutUaInput[]
    createMany?: VideoCreateManyUaInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type VideoUpdateManyWithoutUaNestedInput = {
    create?: XOR<VideoCreateWithoutUaInput, VideoUncheckedCreateWithoutUaInput> | VideoCreateWithoutUaInput[] | VideoUncheckedCreateWithoutUaInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUaInput | VideoCreateOrConnectWithoutUaInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutUaInput | VideoUpsertWithWhereUniqueWithoutUaInput[]
    createMany?: VideoCreateManyUaInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutUaInput | VideoUpdateWithWhereUniqueWithoutUaInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutUaInput | VideoUpdateManyWithWhereWithoutUaInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type CarreraUpdateOneRequiredWithoutUaNestedInput = {
    create?: XOR<CarreraCreateWithoutUaInput, CarreraUncheckedCreateWithoutUaInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutUaInput
    upsert?: CarreraUpsertWithoutUaInput
    connect?: CarreraWhereUniqueInput
    update?: XOR<XOR<CarreraUpdateToOneWithWhereWithoutUaInput, CarreraUpdateWithoutUaInput>, CarreraUncheckedUpdateWithoutUaInput>
  }

  export type VideoUncheckedUpdateManyWithoutUaNestedInput = {
    create?: XOR<VideoCreateWithoutUaInput, VideoUncheckedCreateWithoutUaInput> | VideoCreateWithoutUaInput[] | VideoUncheckedCreateWithoutUaInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUaInput | VideoCreateOrConnectWithoutUaInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutUaInput | VideoUpsertWithWhereUniqueWithoutUaInput[]
    createMany?: VideoCreateManyUaInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutUaInput | VideoUpdateWithWhereUniqueWithoutUaInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutUaInput | VideoUpdateManyWithWhereWithoutUaInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type VideoPalabraClaveCreateNestedManyWithoutPalabra_claveInput = {
    create?: XOR<VideoPalabraClaveCreateWithoutPalabra_claveInput, VideoPalabraClaveUncheckedCreateWithoutPalabra_claveInput> | VideoPalabraClaveCreateWithoutPalabra_claveInput[] | VideoPalabraClaveUncheckedCreateWithoutPalabra_claveInput[]
    connectOrCreate?: VideoPalabraClaveCreateOrConnectWithoutPalabra_claveInput | VideoPalabraClaveCreateOrConnectWithoutPalabra_claveInput[]
    createMany?: VideoPalabraClaveCreateManyPalabra_claveInputEnvelope
    connect?: VideoPalabraClaveWhereUniqueInput | VideoPalabraClaveWhereUniqueInput[]
  }

  export type VideoPalabraClaveUncheckedCreateNestedManyWithoutPalabra_claveInput = {
    create?: XOR<VideoPalabraClaveCreateWithoutPalabra_claveInput, VideoPalabraClaveUncheckedCreateWithoutPalabra_claveInput> | VideoPalabraClaveCreateWithoutPalabra_claveInput[] | VideoPalabraClaveUncheckedCreateWithoutPalabra_claveInput[]
    connectOrCreate?: VideoPalabraClaveCreateOrConnectWithoutPalabra_claveInput | VideoPalabraClaveCreateOrConnectWithoutPalabra_claveInput[]
    createMany?: VideoPalabraClaveCreateManyPalabra_claveInputEnvelope
    connect?: VideoPalabraClaveWhereUniqueInput | VideoPalabraClaveWhereUniqueInput[]
  }

  export type VideoPalabraClaveUpdateManyWithoutPalabra_claveNestedInput = {
    create?: XOR<VideoPalabraClaveCreateWithoutPalabra_claveInput, VideoPalabraClaveUncheckedCreateWithoutPalabra_claveInput> | VideoPalabraClaveCreateWithoutPalabra_claveInput[] | VideoPalabraClaveUncheckedCreateWithoutPalabra_claveInput[]
    connectOrCreate?: VideoPalabraClaveCreateOrConnectWithoutPalabra_claveInput | VideoPalabraClaveCreateOrConnectWithoutPalabra_claveInput[]
    upsert?: VideoPalabraClaveUpsertWithWhereUniqueWithoutPalabra_claveInput | VideoPalabraClaveUpsertWithWhereUniqueWithoutPalabra_claveInput[]
    createMany?: VideoPalabraClaveCreateManyPalabra_claveInputEnvelope
    set?: VideoPalabraClaveWhereUniqueInput | VideoPalabraClaveWhereUniqueInput[]
    disconnect?: VideoPalabraClaveWhereUniqueInput | VideoPalabraClaveWhereUniqueInput[]
    delete?: VideoPalabraClaveWhereUniqueInput | VideoPalabraClaveWhereUniqueInput[]
    connect?: VideoPalabraClaveWhereUniqueInput | VideoPalabraClaveWhereUniqueInput[]
    update?: VideoPalabraClaveUpdateWithWhereUniqueWithoutPalabra_claveInput | VideoPalabraClaveUpdateWithWhereUniqueWithoutPalabra_claveInput[]
    updateMany?: VideoPalabraClaveUpdateManyWithWhereWithoutPalabra_claveInput | VideoPalabraClaveUpdateManyWithWhereWithoutPalabra_claveInput[]
    deleteMany?: VideoPalabraClaveScalarWhereInput | VideoPalabraClaveScalarWhereInput[]
  }

  export type VideoPalabraClaveUncheckedUpdateManyWithoutPalabra_claveNestedInput = {
    create?: XOR<VideoPalabraClaveCreateWithoutPalabra_claveInput, VideoPalabraClaveUncheckedCreateWithoutPalabra_claveInput> | VideoPalabraClaveCreateWithoutPalabra_claveInput[] | VideoPalabraClaveUncheckedCreateWithoutPalabra_claveInput[]
    connectOrCreate?: VideoPalabraClaveCreateOrConnectWithoutPalabra_claveInput | VideoPalabraClaveCreateOrConnectWithoutPalabra_claveInput[]
    upsert?: VideoPalabraClaveUpsertWithWhereUniqueWithoutPalabra_claveInput | VideoPalabraClaveUpsertWithWhereUniqueWithoutPalabra_claveInput[]
    createMany?: VideoPalabraClaveCreateManyPalabra_claveInputEnvelope
    set?: VideoPalabraClaveWhereUniqueInput | VideoPalabraClaveWhereUniqueInput[]
    disconnect?: VideoPalabraClaveWhereUniqueInput | VideoPalabraClaveWhereUniqueInput[]
    delete?: VideoPalabraClaveWhereUniqueInput | VideoPalabraClaveWhereUniqueInput[]
    connect?: VideoPalabraClaveWhereUniqueInput | VideoPalabraClaveWhereUniqueInput[]
    update?: VideoPalabraClaveUpdateWithWhereUniqueWithoutPalabra_claveInput | VideoPalabraClaveUpdateWithWhereUniqueWithoutPalabra_claveInput[]
    updateMany?: VideoPalabraClaveUpdateManyWithWhereWithoutPalabra_claveInput | VideoPalabraClaveUpdateManyWithWhereWithoutPalabra_claveInput[]
    deleteMany?: VideoPalabraClaveScalarWhereInput | VideoPalabraClaveScalarWhereInput[]
  }

  export type VideoCreateNestedOneWithoutPalabrasInput = {
    create?: XOR<VideoCreateWithoutPalabrasInput, VideoUncheckedCreateWithoutPalabrasInput>
    connectOrCreate?: VideoCreateOrConnectWithoutPalabrasInput
    connect?: VideoWhereUniqueInput
  }

  export type PalabraClaveCreateNestedOneWithoutVideosInput = {
    create?: XOR<PalabraClaveCreateWithoutVideosInput, PalabraClaveUncheckedCreateWithoutVideosInput>
    connectOrCreate?: PalabraClaveCreateOrConnectWithoutVideosInput
    connect?: PalabraClaveWhereUniqueInput
  }

  export type VideoUpdateOneRequiredWithoutPalabrasNestedInput = {
    create?: XOR<VideoCreateWithoutPalabrasInput, VideoUncheckedCreateWithoutPalabrasInput>
    connectOrCreate?: VideoCreateOrConnectWithoutPalabrasInput
    upsert?: VideoUpsertWithoutPalabrasInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutPalabrasInput, VideoUpdateWithoutPalabrasInput>, VideoUncheckedUpdateWithoutPalabrasInput>
  }

  export type PalabraClaveUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<PalabraClaveCreateWithoutVideosInput, PalabraClaveUncheckedCreateWithoutVideosInput>
    connectOrCreate?: PalabraClaveCreateOrConnectWithoutVideosInput
    upsert?: PalabraClaveUpsertWithoutVideosInput
    connect?: PalabraClaveWhereUniqueInput
    update?: XOR<XOR<PalabraClaveUpdateToOneWithWhereWithoutVideosInput, PalabraClaveUpdateWithoutVideosInput>, PalabraClaveUncheckedUpdateWithoutVideosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type VideoCreateWithoutUsuarioInput = {
    titulo: string
    descripcion: string
    identificador: string
    fecha_de_registro?: Date | string
    fase: string
    aprobado: number
    comentario?: string | null
    ua: UACreateNestedOneWithoutVideosInput
    palabras?: VideoPalabraClaveCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    titulo: string
    descripcion: string
    identificador: string
    fecha_de_registro?: Date | string
    fase: string
    aprobado: number
    comentario?: string | null
    ua_id: number
    palabras?: VideoPalabraClaveUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutUsuarioInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutUsuarioInput, VideoUncheckedCreateWithoutUsuarioInput>
  }

  export type VideoCreateManyUsuarioInputEnvelope = {
    data: VideoCreateManyUsuarioInput | VideoCreateManyUsuarioInput[]
  }

  export type FacultadCreateWithoutUsuariosInput = {
    nombre: string
    carreras?: CarreraCreateNestedManyWithoutFacultadInput
  }

  export type FacultadUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nombre: string
    carreras?: CarreraUncheckedCreateNestedManyWithoutFacultadInput
  }

  export type FacultadCreateOrConnectWithoutUsuariosInput = {
    where: FacultadWhereUniqueInput
    create: XOR<FacultadCreateWithoutUsuariosInput, FacultadUncheckedCreateWithoutUsuariosInput>
  }

  export type SessionCreateWithoutUsuarioInput = {
    id: string
    createdAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUsuarioInput = {
    id: string
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUsuarioInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUsuarioInput, SessionUncheckedCreateWithoutUsuarioInput>
  }

  export type SessionCreateManyUsuarioInputEnvelope = {
    data: SessionCreateManyUsuarioInput | SessionCreateManyUsuarioInput[]
  }

  export type VideoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutUsuarioInput, VideoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<VideoCreateWithoutUsuarioInput, VideoUncheckedCreateWithoutUsuarioInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutUsuarioInput, VideoUncheckedUpdateWithoutUsuarioInput>
  }

  export type VideoUpdateManyWithWhereWithoutUsuarioInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    id?: IntFilter<"Video"> | number
    titulo?: StringFilter<"Video"> | string
    descripcion?: StringFilter<"Video"> | string
    identificador?: StringFilter<"Video"> | string
    fecha_de_registro?: DateTimeFilter<"Video"> | Date | string
    fase?: StringFilter<"Video"> | string
    aprobado?: IntFilter<"Video"> | number
    comentario?: StringNullableFilter<"Video"> | string | null
    usuario_id?: IntFilter<"Video"> | number
    ua_id?: IntFilter<"Video"> | number
  }

  export type FacultadUpsertWithoutUsuariosInput = {
    update: XOR<FacultadUpdateWithoutUsuariosInput, FacultadUncheckedUpdateWithoutUsuariosInput>
    create: XOR<FacultadCreateWithoutUsuariosInput, FacultadUncheckedCreateWithoutUsuariosInput>
    where?: FacultadWhereInput
  }

  export type FacultadUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: FacultadWhereInput
    data: XOR<FacultadUpdateWithoutUsuariosInput, FacultadUncheckedUpdateWithoutUsuariosInput>
  }

  export type FacultadUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    carreras?: CarreraUpdateManyWithoutFacultadNestedInput
  }

  export type FacultadUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreras?: CarreraUncheckedUpdateManyWithoutFacultadNestedInput
  }

  export type SessionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUsuarioInput, SessionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<SessionCreateWithoutUsuarioInput, SessionUncheckedCreateWithoutUsuarioInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUsuarioInput, SessionUncheckedUpdateWithoutUsuarioInput>
  }

  export type SessionUpdateManyWithWhereWithoutUsuarioInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    usuarioId?: IntFilter<"Session"> | number
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type UsuarioCreateWithoutSesionesInput = {
    nombre_de_usuario: string
    password: string
    fecha_de_registro?: Date | string
    admin: boolean
    videos?: VideoCreateNestedManyWithoutUsuarioInput
    facultad?: FacultadCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutSesionesInput = {
    id?: number
    nombre_de_usuario: string
    password: string
    fecha_de_registro?: Date | string
    admin: boolean
    facultad_id?: number | null
    videos?: VideoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutSesionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSesionesInput, UsuarioUncheckedCreateWithoutSesionesInput>
  }

  export type UsuarioUpsertWithoutSesionesInput = {
    update: XOR<UsuarioUpdateWithoutSesionesInput, UsuarioUncheckedUpdateWithoutSesionesInput>
    create: XOR<UsuarioCreateWithoutSesionesInput, UsuarioUncheckedCreateWithoutSesionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSesionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSesionesInput, UsuarioUncheckedUpdateWithoutSesionesInput>
  }

  export type UsuarioUpdateWithoutSesionesInput = {
    nombre_de_usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    videos?: VideoUpdateManyWithoutUsuarioNestedInput
    facultad?: FacultadUpdateOneWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSesionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre_de_usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    facultad_id?: NullableIntFieldUpdateOperationsInput | number | null
    videos?: VideoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutVideosInput = {
    nombre_de_usuario: string
    password: string
    fecha_de_registro?: Date | string
    admin: boolean
    facultad?: FacultadCreateNestedOneWithoutUsuariosInput
    sesiones?: SessionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutVideosInput = {
    id?: number
    nombre_de_usuario: string
    password: string
    fecha_de_registro?: Date | string
    admin: boolean
    facultad_id?: number | null
    sesiones?: SessionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutVideosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutVideosInput, UsuarioUncheckedCreateWithoutVideosInput>
  }

  export type UACreateWithoutVideosInput = {
    nombre: string
    modalidad: string
    carrera: CarreraCreateNestedOneWithoutUaInput
  }

  export type UAUncheckedCreateWithoutVideosInput = {
    id?: number
    nombre: string
    modalidad: string
    carrera_id: number
  }

  export type UACreateOrConnectWithoutVideosInput = {
    where: UAWhereUniqueInput
    create: XOR<UACreateWithoutVideosInput, UAUncheckedCreateWithoutVideosInput>
  }

  export type VideoPalabraClaveCreateWithoutVideoInput = {
    palabra_clave: PalabraClaveCreateNestedOneWithoutVideosInput
  }

  export type VideoPalabraClaveUncheckedCreateWithoutVideoInput = {
    palabra_clave_id: number
  }

  export type VideoPalabraClaveCreateOrConnectWithoutVideoInput = {
    where: VideoPalabraClaveWhereUniqueInput
    create: XOR<VideoPalabraClaveCreateWithoutVideoInput, VideoPalabraClaveUncheckedCreateWithoutVideoInput>
  }

  export type VideoPalabraClaveCreateManyVideoInputEnvelope = {
    data: VideoPalabraClaveCreateManyVideoInput | VideoPalabraClaveCreateManyVideoInput[]
  }

  export type UsuarioUpsertWithoutVideosInput = {
    update: XOR<UsuarioUpdateWithoutVideosInput, UsuarioUncheckedUpdateWithoutVideosInput>
    create: XOR<UsuarioCreateWithoutVideosInput, UsuarioUncheckedCreateWithoutVideosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutVideosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutVideosInput, UsuarioUncheckedUpdateWithoutVideosInput>
  }

  export type UsuarioUpdateWithoutVideosInput = {
    nombre_de_usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    facultad?: FacultadUpdateOneWithoutUsuariosNestedInput
    sesiones?: SessionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre_de_usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    facultad_id?: NullableIntFieldUpdateOperationsInput | number | null
    sesiones?: SessionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UAUpsertWithoutVideosInput = {
    update: XOR<UAUpdateWithoutVideosInput, UAUncheckedUpdateWithoutVideosInput>
    create: XOR<UACreateWithoutVideosInput, UAUncheckedCreateWithoutVideosInput>
    where?: UAWhereInput
  }

  export type UAUpdateToOneWithWhereWithoutVideosInput = {
    where?: UAWhereInput
    data: XOR<UAUpdateWithoutVideosInput, UAUncheckedUpdateWithoutVideosInput>
  }

  export type UAUpdateWithoutVideosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    modalidad?: StringFieldUpdateOperationsInput | string
    carrera?: CarreraUpdateOneRequiredWithoutUaNestedInput
  }

  export type UAUncheckedUpdateWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    modalidad?: StringFieldUpdateOperationsInput | string
    carrera_id?: IntFieldUpdateOperationsInput | number
  }

  export type VideoPalabraClaveUpsertWithWhereUniqueWithoutVideoInput = {
    where: VideoPalabraClaveWhereUniqueInput
    update: XOR<VideoPalabraClaveUpdateWithoutVideoInput, VideoPalabraClaveUncheckedUpdateWithoutVideoInput>
    create: XOR<VideoPalabraClaveCreateWithoutVideoInput, VideoPalabraClaveUncheckedCreateWithoutVideoInput>
  }

  export type VideoPalabraClaveUpdateWithWhereUniqueWithoutVideoInput = {
    where: VideoPalabraClaveWhereUniqueInput
    data: XOR<VideoPalabraClaveUpdateWithoutVideoInput, VideoPalabraClaveUncheckedUpdateWithoutVideoInput>
  }

  export type VideoPalabraClaveUpdateManyWithWhereWithoutVideoInput = {
    where: VideoPalabraClaveScalarWhereInput
    data: XOR<VideoPalabraClaveUpdateManyMutationInput, VideoPalabraClaveUncheckedUpdateManyWithoutVideoInput>
  }

  export type VideoPalabraClaveScalarWhereInput = {
    AND?: VideoPalabraClaveScalarWhereInput | VideoPalabraClaveScalarWhereInput[]
    OR?: VideoPalabraClaveScalarWhereInput[]
    NOT?: VideoPalabraClaveScalarWhereInput | VideoPalabraClaveScalarWhereInput[]
    video_id?: IntFilter<"VideoPalabraClave"> | number
    palabra_clave_id?: IntFilter<"VideoPalabraClave"> | number
  }

  export type UsuarioCreateWithoutFacultadInput = {
    nombre_de_usuario: string
    password: string
    fecha_de_registro?: Date | string
    admin: boolean
    videos?: VideoCreateNestedManyWithoutUsuarioInput
    sesiones?: SessionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutFacultadInput = {
    id?: number
    nombre_de_usuario: string
    password: string
    fecha_de_registro?: Date | string
    admin: boolean
    videos?: VideoUncheckedCreateNestedManyWithoutUsuarioInput
    sesiones?: SessionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutFacultadInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFacultadInput, UsuarioUncheckedCreateWithoutFacultadInput>
  }

  export type UsuarioCreateManyFacultadInputEnvelope = {
    data: UsuarioCreateManyFacultadInput | UsuarioCreateManyFacultadInput[]
  }

  export type CarreraCreateWithoutFacultadInput = {
    nombre: string
    ua?: UACreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateWithoutFacultadInput = {
    id?: number
    nombre: string
    ua?: UAUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraCreateOrConnectWithoutFacultadInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutFacultadInput, CarreraUncheckedCreateWithoutFacultadInput>
  }

  export type CarreraCreateManyFacultadInputEnvelope = {
    data: CarreraCreateManyFacultadInput | CarreraCreateManyFacultadInput[]
  }

  export type UsuarioUpsertWithWhereUniqueWithoutFacultadInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutFacultadInput, UsuarioUncheckedUpdateWithoutFacultadInput>
    create: XOR<UsuarioCreateWithoutFacultadInput, UsuarioUncheckedCreateWithoutFacultadInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutFacultadInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutFacultadInput, UsuarioUncheckedUpdateWithoutFacultadInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutFacultadInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutFacultadInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre_de_usuario?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    fecha_de_registro?: DateTimeFilter<"Usuario"> | Date | string
    admin?: BoolFilter<"Usuario"> | boolean
    facultad_id?: IntNullableFilter<"Usuario"> | number | null
  }

  export type CarreraUpsertWithWhereUniqueWithoutFacultadInput = {
    where: CarreraWhereUniqueInput
    update: XOR<CarreraUpdateWithoutFacultadInput, CarreraUncheckedUpdateWithoutFacultadInput>
    create: XOR<CarreraCreateWithoutFacultadInput, CarreraUncheckedCreateWithoutFacultadInput>
  }

  export type CarreraUpdateWithWhereUniqueWithoutFacultadInput = {
    where: CarreraWhereUniqueInput
    data: XOR<CarreraUpdateWithoutFacultadInput, CarreraUncheckedUpdateWithoutFacultadInput>
  }

  export type CarreraUpdateManyWithWhereWithoutFacultadInput = {
    where: CarreraScalarWhereInput
    data: XOR<CarreraUpdateManyMutationInput, CarreraUncheckedUpdateManyWithoutFacultadInput>
  }

  export type CarreraScalarWhereInput = {
    AND?: CarreraScalarWhereInput | CarreraScalarWhereInput[]
    OR?: CarreraScalarWhereInput[]
    NOT?: CarreraScalarWhereInput | CarreraScalarWhereInput[]
    id?: IntFilter<"Carrera"> | number
    nombre?: StringFilter<"Carrera"> | string
    facultad_id?: IntFilter<"Carrera"> | number
  }

  export type UACreateWithoutCarreraInput = {
    nombre: string
    modalidad: string
    videos?: VideoCreateNestedManyWithoutUaInput
  }

  export type UAUncheckedCreateWithoutCarreraInput = {
    id?: number
    nombre: string
    modalidad: string
    videos?: VideoUncheckedCreateNestedManyWithoutUaInput
  }

  export type UACreateOrConnectWithoutCarreraInput = {
    where: UAWhereUniqueInput
    create: XOR<UACreateWithoutCarreraInput, UAUncheckedCreateWithoutCarreraInput>
  }

  export type UACreateManyCarreraInputEnvelope = {
    data: UACreateManyCarreraInput | UACreateManyCarreraInput[]
  }

  export type FacultadCreateWithoutCarrerasInput = {
    nombre: string
    usuarios?: UsuarioCreateNestedManyWithoutFacultadInput
  }

  export type FacultadUncheckedCreateWithoutCarrerasInput = {
    id?: number
    nombre: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutFacultadInput
  }

  export type FacultadCreateOrConnectWithoutCarrerasInput = {
    where: FacultadWhereUniqueInput
    create: XOR<FacultadCreateWithoutCarrerasInput, FacultadUncheckedCreateWithoutCarrerasInput>
  }

  export type UAUpsertWithWhereUniqueWithoutCarreraInput = {
    where: UAWhereUniqueInput
    update: XOR<UAUpdateWithoutCarreraInput, UAUncheckedUpdateWithoutCarreraInput>
    create: XOR<UACreateWithoutCarreraInput, UAUncheckedCreateWithoutCarreraInput>
  }

  export type UAUpdateWithWhereUniqueWithoutCarreraInput = {
    where: UAWhereUniqueInput
    data: XOR<UAUpdateWithoutCarreraInput, UAUncheckedUpdateWithoutCarreraInput>
  }

  export type UAUpdateManyWithWhereWithoutCarreraInput = {
    where: UAScalarWhereInput
    data: XOR<UAUpdateManyMutationInput, UAUncheckedUpdateManyWithoutCarreraInput>
  }

  export type UAScalarWhereInput = {
    AND?: UAScalarWhereInput | UAScalarWhereInput[]
    OR?: UAScalarWhereInput[]
    NOT?: UAScalarWhereInput | UAScalarWhereInput[]
    id?: IntFilter<"UA"> | number
    nombre?: StringFilter<"UA"> | string
    modalidad?: StringFilter<"UA"> | string
    carrera_id?: IntFilter<"UA"> | number
  }

  export type FacultadUpsertWithoutCarrerasInput = {
    update: XOR<FacultadUpdateWithoutCarrerasInput, FacultadUncheckedUpdateWithoutCarrerasInput>
    create: XOR<FacultadCreateWithoutCarrerasInput, FacultadUncheckedCreateWithoutCarrerasInput>
    where?: FacultadWhereInput
  }

  export type FacultadUpdateToOneWithWhereWithoutCarrerasInput = {
    where?: FacultadWhereInput
    data: XOR<FacultadUpdateWithoutCarrerasInput, FacultadUncheckedUpdateWithoutCarrerasInput>
  }

  export type FacultadUpdateWithoutCarrerasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutFacultadNestedInput
  }

  export type FacultadUncheckedUpdateWithoutCarrerasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutFacultadNestedInput
  }

  export type VideoCreateWithoutUaInput = {
    titulo: string
    descripcion: string
    identificador: string
    fecha_de_registro?: Date | string
    fase: string
    aprobado: number
    comentario?: string | null
    usuario: UsuarioCreateNestedOneWithoutVideosInput
    palabras?: VideoPalabraClaveCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutUaInput = {
    id?: number
    titulo: string
    descripcion: string
    identificador: string
    fecha_de_registro?: Date | string
    fase: string
    aprobado: number
    comentario?: string | null
    usuario_id: number
    palabras?: VideoPalabraClaveUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutUaInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutUaInput, VideoUncheckedCreateWithoutUaInput>
  }

  export type VideoCreateManyUaInputEnvelope = {
    data: VideoCreateManyUaInput | VideoCreateManyUaInput[]
  }

  export type CarreraCreateWithoutUaInput = {
    nombre: string
    facultad: FacultadCreateNestedOneWithoutCarrerasInput
  }

  export type CarreraUncheckedCreateWithoutUaInput = {
    id?: number
    nombre: string
    facultad_id: number
  }

  export type CarreraCreateOrConnectWithoutUaInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutUaInput, CarreraUncheckedCreateWithoutUaInput>
  }

  export type VideoUpsertWithWhereUniqueWithoutUaInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutUaInput, VideoUncheckedUpdateWithoutUaInput>
    create: XOR<VideoCreateWithoutUaInput, VideoUncheckedCreateWithoutUaInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutUaInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutUaInput, VideoUncheckedUpdateWithoutUaInput>
  }

  export type VideoUpdateManyWithWhereWithoutUaInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutUaInput>
  }

  export type CarreraUpsertWithoutUaInput = {
    update: XOR<CarreraUpdateWithoutUaInput, CarreraUncheckedUpdateWithoutUaInput>
    create: XOR<CarreraCreateWithoutUaInput, CarreraUncheckedCreateWithoutUaInput>
    where?: CarreraWhereInput
  }

  export type CarreraUpdateToOneWithWhereWithoutUaInput = {
    where?: CarreraWhereInput
    data: XOR<CarreraUpdateWithoutUaInput, CarreraUncheckedUpdateWithoutUaInput>
  }

  export type CarreraUpdateWithoutUaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    facultad?: FacultadUpdateOneRequiredWithoutCarrerasNestedInput
  }

  export type CarreraUncheckedUpdateWithoutUaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    facultad_id?: IntFieldUpdateOperationsInput | number
  }

  export type VideoPalabraClaveCreateWithoutPalabra_claveInput = {
    video: VideoCreateNestedOneWithoutPalabrasInput
  }

  export type VideoPalabraClaveUncheckedCreateWithoutPalabra_claveInput = {
    video_id: number
  }

  export type VideoPalabraClaveCreateOrConnectWithoutPalabra_claveInput = {
    where: VideoPalabraClaveWhereUniqueInput
    create: XOR<VideoPalabraClaveCreateWithoutPalabra_claveInput, VideoPalabraClaveUncheckedCreateWithoutPalabra_claveInput>
  }

  export type VideoPalabraClaveCreateManyPalabra_claveInputEnvelope = {
    data: VideoPalabraClaveCreateManyPalabra_claveInput | VideoPalabraClaveCreateManyPalabra_claveInput[]
  }

  export type VideoPalabraClaveUpsertWithWhereUniqueWithoutPalabra_claveInput = {
    where: VideoPalabraClaveWhereUniqueInput
    update: XOR<VideoPalabraClaveUpdateWithoutPalabra_claveInput, VideoPalabraClaveUncheckedUpdateWithoutPalabra_claveInput>
    create: XOR<VideoPalabraClaveCreateWithoutPalabra_claveInput, VideoPalabraClaveUncheckedCreateWithoutPalabra_claveInput>
  }

  export type VideoPalabraClaveUpdateWithWhereUniqueWithoutPalabra_claveInput = {
    where: VideoPalabraClaveWhereUniqueInput
    data: XOR<VideoPalabraClaveUpdateWithoutPalabra_claveInput, VideoPalabraClaveUncheckedUpdateWithoutPalabra_claveInput>
  }

  export type VideoPalabraClaveUpdateManyWithWhereWithoutPalabra_claveInput = {
    where: VideoPalabraClaveScalarWhereInput
    data: XOR<VideoPalabraClaveUpdateManyMutationInput, VideoPalabraClaveUncheckedUpdateManyWithoutPalabra_claveInput>
  }

  export type VideoCreateWithoutPalabrasInput = {
    titulo: string
    descripcion: string
    identificador: string
    fecha_de_registro?: Date | string
    fase: string
    aprobado: number
    comentario?: string | null
    usuario: UsuarioCreateNestedOneWithoutVideosInput
    ua: UACreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateWithoutPalabrasInput = {
    id?: number
    titulo: string
    descripcion: string
    identificador: string
    fecha_de_registro?: Date | string
    fase: string
    aprobado: number
    comentario?: string | null
    usuario_id: number
    ua_id: number
  }

  export type VideoCreateOrConnectWithoutPalabrasInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutPalabrasInput, VideoUncheckedCreateWithoutPalabrasInput>
  }

  export type PalabraClaveCreateWithoutVideosInput = {
    nombre: string
  }

  export type PalabraClaveUncheckedCreateWithoutVideosInput = {
    id?: number
    nombre: string
  }

  export type PalabraClaveCreateOrConnectWithoutVideosInput = {
    where: PalabraClaveWhereUniqueInput
    create: XOR<PalabraClaveCreateWithoutVideosInput, PalabraClaveUncheckedCreateWithoutVideosInput>
  }

  export type VideoUpsertWithoutPalabrasInput = {
    update: XOR<VideoUpdateWithoutPalabrasInput, VideoUncheckedUpdateWithoutPalabrasInput>
    create: XOR<VideoCreateWithoutPalabrasInput, VideoUncheckedCreateWithoutPalabrasInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutPalabrasInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutPalabrasInput, VideoUncheckedUpdateWithoutPalabrasInput>
  }

  export type VideoUpdateWithoutPalabrasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    identificador?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fase?: StringFieldUpdateOperationsInput | string
    aprobado?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutVideosNestedInput
    ua?: UAUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateWithoutPalabrasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    identificador?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fase?: StringFieldUpdateOperationsInput | string
    aprobado?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: IntFieldUpdateOperationsInput | number
    ua_id?: IntFieldUpdateOperationsInput | number
  }

  export type PalabraClaveUpsertWithoutVideosInput = {
    update: XOR<PalabraClaveUpdateWithoutVideosInput, PalabraClaveUncheckedUpdateWithoutVideosInput>
    create: XOR<PalabraClaveCreateWithoutVideosInput, PalabraClaveUncheckedCreateWithoutVideosInput>
    where?: PalabraClaveWhereInput
  }

  export type PalabraClaveUpdateToOneWithWhereWithoutVideosInput = {
    where?: PalabraClaveWhereInput
    data: XOR<PalabraClaveUpdateWithoutVideosInput, PalabraClaveUncheckedUpdateWithoutVideosInput>
  }

  export type PalabraClaveUpdateWithoutVideosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PalabraClaveUncheckedUpdateWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type VideoCreateManyUsuarioInput = {
    id?: number
    titulo: string
    descripcion: string
    identificador: string
    fecha_de_registro?: Date | string
    fase: string
    aprobado: number
    comentario?: string | null
    ua_id: number
  }

  export type SessionCreateManyUsuarioInput = {
    id: string
    createdAt?: Date | string
  }

  export type VideoUpdateWithoutUsuarioInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    identificador?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fase?: StringFieldUpdateOperationsInput | string
    aprobado?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    ua?: UAUpdateOneRequiredWithoutVideosNestedInput
    palabras?: VideoPalabraClaveUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    identificador?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fase?: StringFieldUpdateOperationsInput | string
    aprobado?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    ua_id?: IntFieldUpdateOperationsInput | number
    palabras?: VideoPalabraClaveUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    identificador?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fase?: StringFieldUpdateOperationsInput | string
    aprobado?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    ua_id?: IntFieldUpdateOperationsInput | number
  }

  export type SessionUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoPalabraClaveCreateManyVideoInput = {
    palabra_clave_id: number
  }

  export type VideoPalabraClaveUpdateWithoutVideoInput = {
    palabra_clave?: PalabraClaveUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoPalabraClaveUncheckedUpdateWithoutVideoInput = {
    palabra_clave_id?: IntFieldUpdateOperationsInput | number
  }

  export type VideoPalabraClaveUncheckedUpdateManyWithoutVideoInput = {
    palabra_clave_id?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateManyFacultadInput = {
    id?: number
    nombre_de_usuario: string
    password: string
    fecha_de_registro?: Date | string
    admin: boolean
  }

  export type CarreraCreateManyFacultadInput = {
    id?: number
    nombre: string
  }

  export type UsuarioUpdateWithoutFacultadInput = {
    nombre_de_usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    videos?: VideoUpdateManyWithoutUsuarioNestedInput
    sesiones?: SessionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFacultadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre_de_usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    videos?: VideoUncheckedUpdateManyWithoutUsuarioNestedInput
    sesiones?: SessionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutFacultadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre_de_usuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CarreraUpdateWithoutFacultadInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ua?: UAUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateWithoutFacultadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ua?: UAUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateManyWithoutFacultadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type UACreateManyCarreraInput = {
    id?: number
    nombre: string
    modalidad: string
  }

  export type UAUpdateWithoutCarreraInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    modalidad?: StringFieldUpdateOperationsInput | string
    videos?: VideoUpdateManyWithoutUaNestedInput
  }

  export type UAUncheckedUpdateWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    modalidad?: StringFieldUpdateOperationsInput | string
    videos?: VideoUncheckedUpdateManyWithoutUaNestedInput
  }

  export type UAUncheckedUpdateManyWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    modalidad?: StringFieldUpdateOperationsInput | string
  }

  export type VideoCreateManyUaInput = {
    id?: number
    titulo: string
    descripcion: string
    identificador: string
    fecha_de_registro?: Date | string
    fase: string
    aprobado: number
    comentario?: string | null
    usuario_id: number
  }

  export type VideoUpdateWithoutUaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    identificador?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fase?: StringFieldUpdateOperationsInput | string
    aprobado?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutVideosNestedInput
    palabras?: VideoPalabraClaveUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutUaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    identificador?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fase?: StringFieldUpdateOperationsInput | string
    aprobado?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: IntFieldUpdateOperationsInput | number
    palabras?: VideoPalabraClaveUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateManyWithoutUaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    identificador?: StringFieldUpdateOperationsInput | string
    fecha_de_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fase?: StringFieldUpdateOperationsInput | string
    aprobado?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type VideoPalabraClaveCreateManyPalabra_claveInput = {
    video_id: number
  }

  export type VideoPalabraClaveUpdateWithoutPalabra_claveInput = {
    video?: VideoUpdateOneRequiredWithoutPalabrasNestedInput
  }

  export type VideoPalabraClaveUncheckedUpdateWithoutPalabra_claveInput = {
    video_id?: IntFieldUpdateOperationsInput | number
  }

  export type VideoPalabraClaveUncheckedUpdateManyWithoutPalabra_claveInput = {
    video_id?: IntFieldUpdateOperationsInput | number
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