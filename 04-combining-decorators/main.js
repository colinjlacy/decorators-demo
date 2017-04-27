/*
 In this example, we'll set two decorators to work on a class.  They'll
 run in order, which means that we'll have to be careful not to create
 conflicts.  In this case, we'll just set additional values to the
 songList property that we created in the previous example.
 ---------------
 */

import { setBowieSongs, setRollingStonesSongs } from './decorator';

@setBowieSongs
@setRollingStonesSongs
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