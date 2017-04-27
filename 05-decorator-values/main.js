/*
 This example shows how we can pass data into a decorator
 in order to dynamically set functionality.
 ---------------
 */

import { setBowieSongs, setRollingStonesSongs } from './song-list-decorator';
import { setEncore } from './encore-decorator';

@setBowieSongs
@setRollingStonesSongs
@setEncore(['Under Pressure', 'Ruby Tuesday', 'Purple Haze'])
class CoverBand {

    constructor() {}

    rehearse() {
        return this.songList && this.songList.length ? this.songList.join(',\n') : 'Do we even know any songs?';
    }

    perform() {
        return this.songList && this.songList.length ? this.songList.join(',\n') : `But we don't know any songs!`;
    }
}

let theBritishInvaders = new CoverBand();

console.log(theBritishInvaders.perform());
console.log(theBritishInvaders.encore());