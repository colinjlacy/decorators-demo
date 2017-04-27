/*
 In creating this decorator, we actually return a factory function
 that will apply functionality to the target's prototype, based on
 the value that we pass in to the decorator.
 ---------------
 */

export function setEncore(additionalSongs) {
    return target => {
        target.prototype.encore = () => {
            console.log(`---`);
            return additionalSongs.join(',\n');
        }
    };
}
