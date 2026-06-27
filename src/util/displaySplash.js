function displaySplash(seconds){
    const lastVisited = localStorage.getItem("lastVisited");
    if(lastVisited){
        const lastVisitedDate = new Date(parseInt(lastVisited));
        const currentDate = new Date();
        const timeDifference = Math.abs(currentDate - lastVisitedDate);
        const differenceInSeconds = Math.floor(timeDifference / 1000);
        const splashInterval =  seconds;
        if(differenceInSeconds >= splashInterval){
            localStorage.setItem('lastVisited', Date.now());
            return true;
        } else {
            return false;
        }
    } else {
        localStorage.setItem('lastVisited', Date.now());
        return true;
    }
}

export default displaySplash;