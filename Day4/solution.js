/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    const initialValue = init;
    return {
        increment: function () {
            return ++init;
        },
        decrement: function () {
            return --init;
        },
        reset: function () {
            init = initialValue;
            return initialValue;
        }
    }
};