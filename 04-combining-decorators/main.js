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