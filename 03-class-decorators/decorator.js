/*
This decorator adds a property to a class.  Notice that we add
this property to the class prototype.  This ensures that the
 property is inherited by new instances.  If we were to add it
to the target class, it would become a static property that would
not be inherited.
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