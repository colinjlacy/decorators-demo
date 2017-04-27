/*
 This example shows how we can pass data into a decorator
 in order to dynamically set functionality.
 ---------------
 */

import { setBowieSongs, setRollingStonesSongs, setHendrixSongs } from './song-list-decorator';
import { setEncore } from './encore-decorator';

class CoverBand {

    constructor() {}

    rehearse() {
        return this.songList && this.songList.length ? this.songList.join(',\n') : 'Do we even know any songs?';
    }

    perform() {
        return this.songList && this.songList.length ? this.songList.join(',\n') : `But we don't know any songs!`;
    }
}

@setBowieSongs
@setRollingStonesSongs
class BritishCoverBand extends CoverBand {}

@setRollingStonesSongs
@setHendrixSongs
class RockCoverBand extends CoverBand {}

let theBritishInvaders = new BritishCoverBand();
let rehabAllStars = new RockCoverBand();

console.log(`Ladies and gentleman, theBritishInvaders!`);
console.log(theBritishInvaders.perform());

console.log(`
------------
`);

console.log(`Ladies and gentleman, rehabAllStars!`);
console.log(rehabAllStars.perform());

