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
        let rehearsalMarkupString = `<h2>Time for rehearsal:</h2><p>`;
        rehearsalMarkupString += this.songList.length ? this.songList.join('</p><p>') : 'Do we even know any songs?';
        rehearsalMarkupString += '</p>';
        this.appendMarkup(rehearsalMarkupString);
    }

    @preventEmbarrassment
    perform() {
        let performanceMarkupString = `<h2>Show time!</h2><p>`;
        performanceMarkupString += this.songList.length ? this.songList.join('</p><p>') : `But we don't know any songs!`;
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

// expect a console warning about not having songs
theSpidersFromMars.rehearse();

// expect an error to be thrown if there are no songs
theSpidersFromMars.perform();
