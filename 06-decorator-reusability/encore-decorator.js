/*
 In creating this decorator, we actually return a factory function
 that will apply functionality to the target's prototype, based on
 the value that we pass in to the decorator.
 ---------------
 */

export function setEncore(additionalSongs) {
    return target => {
        target.prototype.encore = () => {
            let encoreMarkupString = `<h2>Encore!!!</h2><p>`;
            encoreMarkupString += additionalSongs.join('</p><p>');
            encoreMarkupString += '</p>';
            target.prototype.appendMarkup(encoreMarkupString);
        }
    };
}
