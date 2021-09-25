// it's funny that actually removing that buttons requires only one line,
// but making sure it's removed without checking it every second (and wasting small amount of precious cpu) if they magically appears added another 33 lines
//
// if you have better/easier solution feel free to create an issue or pull request (I'm curios if there is better/easier solution)

const makeBetterPlace = () => {
    const theyShouldNeverExist = document.querySelectorAll('a[title=Explore]')
    theyShouldNeverExist.forEach(iShouldNeverExist => iShouldNeverExist.remove()) // <- here is that one line witch makes job done
    return theyShouldNeverExist.length
}

let howManyToRemove = 2;

const justToMakeSureItIsBetterPlace = () => {
    howManyToRemove -= makeBetterPlace()

    if(howManyToRemove === 2) {
        setTimeout(justToMakeSureItIsBetterPlace, 100);
    }
}

const pleaseHideIt = () => {
    const removed = makeBetterPlace()
    howManyToRemove -= removed;
    if(howManyToRemove > 0 && removed === 0) {
        setTimeout(pleaseHideIt, 100)
    }
}

const attachHandlersToJustBeSureThatItWillBeBetterPlace = () => {
    justToMakeSureItIsBetterPlace()
    const theyShouldMakeSureThatTheyDontExist = document.querySelectorAll('[aria-label=Guide]')
    theyShouldMakeSureThatTheyDontExist.forEach(okIHandleThat => okIHandleThat.onclick = pleaseHideIt)

    if(theyShouldMakeSureThatTheyDontExist.length === 0) {
        setTimeout(attachHandlersToJustBeSureThatItWillBeBetterPlace, 100)
    }
}

attachHandlersToJustBeSureThatItWillBeBetterPlace()

