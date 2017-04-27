/*
 In this case, we'll add two decorators.  Each one interacts with the same
 class property, but provides it with different values.
 ---------------
 */

export function setBowieSongs(target) {

    const bowieSongs = ['Rebel Rebel', 'Ziggy Stargust', 'Starman'];

    if(Array.isArray(target.prototype.songList)) {
        target.prototype.songList = target.prototype.songList.concat(bowieSongs);
    } else {
        target.prototype.songList = bowieSongs;
    }
}

export function setRollingStonesSongs(target) {

    const stonesSongs = ['Satisfaction', 'Time is on My Side', 'Paint it Black'];

    if(Array.isArray(target.prototype.songList)) {
        target.prototype.songList = target.prototype.songList.concat(stonesSongs);
    } else {
        target.prototype.songList = stonesSongs;
    }
}