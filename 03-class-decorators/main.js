/*
 Here, we'll use a decorator to add functionality to a class.  In this
 case, we're adding a property to a class so that it can be referenced
 by class methods
 ---------------
 */

import { setBowieSongs } from './decorator';

@setBowieSongs
class CoverBand {

    constructor() {}

    rehearse() {
        return this.songList && this.songList.length ? this.songList.join(',\n') : 'Do we even know any songs?';
    }

    perform() {
        return this.songList && this.songList.length ? this.songList.join(',\n') : `But we don't know any songs!`;
    }
}

let theSpidersFromMars = new CoverBand();

console.log(theSpidersFromMars.perform());