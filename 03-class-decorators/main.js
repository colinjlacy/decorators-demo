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

let theSpidersFromMars = new CoverBand();

theSpidersFromMars.perform();