/**
 * Partially add any argument(closure)
 * 
 * @param {function} fn 
 * @param {*} args accept any multiple args
 * @return {function} with partially added data
 */
export const partial = (fn, ...args) => fn.bind(null, ...args)

/**
 * Nest two functions
 * 
 * @param {function} fn1 
 * @param {function} fn2
 * @return {function} inner function that accepts multiple args
 */
const _pipe = (fn1, fn2) => (...args) => fn2(fn1(...args))

/**
 * Handles multiple function and return a single function
 * 
 * @param {function} fns accept multiple functions
 * @return {function} reduce to a single function
 */
export const pipe = (...fns) => fns.reduce(_pipe)