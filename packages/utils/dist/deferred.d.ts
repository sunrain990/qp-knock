/**
 * @public
 */
export type ResolveHandler<T> = (value: T | PromiseLike<T>) => void;
/**
 * @public
 */
export type RejectHandler = (reason: unknown) => void;
/**
 * An "inverted" promise, that can be resolved
 * from the outside
 *
 * @public
 */
declare class Deferred<T> {
    $_promise: Promise<T>;
    $_resolve: ResolveHandler<T>;
    $_reject: RejectHandler;
    constructor();
    get promise(): Promise<T>;
    get resolve(): ResolveHandler<T>;
    get reject(): RejectHandler;
}
export default Deferred;
