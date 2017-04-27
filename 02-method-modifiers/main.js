/*
This time we'll add some functionality to our decorator, in order to demonstrate
how we can modify, or even entirely overwrite the functionality of a method
using decorators
 ---------------
 */

import { warn, preventEmbarrassment } from './decorator';

class CoverBand {

    constructor() {
        this.songList = [];
    }

    @warn
    rehearse() {
        return this.songList.length ? this.songList.join(',\n') : 'Do we even know any songs?';
    }

    @preventEmbarrassment
    perform() {
        return this.songList.length ? this.songList.join(',\n') : `But we don't know any songs!`;
    }
}

let theSpidersFromMars = new CoverBand();

// expect a console warning about not having songs
console.log(theSpidersFromMars.rehearse());

console.log(`
---------------
`);

// expect an error to be thrown if there are no songs
console.log(theSpidersFromMars.perform());
