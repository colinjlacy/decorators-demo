/*
In this file we define two decorators.

The first will add functionality when the method is called, and then
continue to call the original method.

The second will replace the method functionality with a function
that throws an error instead of firing the functionality that's been
defined.
 ---------------
 */

export function warn(target, key, desc) {
    let hasNewVal = {
        value() {
            if(!this.songList.length) {
                console.warn(`The band is probably going to split up if you don't learn some songs!`);
            }
            return desc.value.call(this, arguments);
        }
    };
    return Object.assign({}, desc, hasNewVal);
}

export function preventEmbarrassment(target, key, desc) {
    let hasNewVal = {
        value() {
            if(!this.songList.length) {
                throw new Error(`You can't perform until you learn some songs!`);
            } else {
                return desc.value.call(this, arguments);
            }
        }
    };
    return Object.assign({}, desc, hasNewVal);
}