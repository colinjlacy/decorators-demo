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
        let rehearsalMarkupString = `<h2>Time for rehearsal:</h2><p>`;
        rehearsalMarkupString += this.songList && this.songList.length ? this.songList.join('</p><p>') : 'Do we even know any songs?';
        rehearsalMarkupString += '</p>';
        this.appendMarkup(rehearsalMarkupString);
    }

    perform() {
        let performanceMarkupString = `<h2>Show time!</h2><p>`;
        performanceMarkupString += this.songList && this.songList.length ? this.songList.join('</p><p>') : `But we don't know any songs!`;
        performanceMarkupString += '</p>';
        this.appendMarkup(performanceMarkupString);
    }

    appendMarkup(string) {
        let entryPoint = document.getElementById('entryPoint');
        let originalContent = entryPoint.innerHTML;
        entryPoint.innerHTML = originalContent + string;
    }
}

let theBritishInvaders = new CoverBand();

theBritishInvaders.perform();
theBritishInvaders.encore();