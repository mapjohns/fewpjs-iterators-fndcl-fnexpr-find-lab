function superbowlWin(array) {
    if (array.find(({ result }) => result === "W")) {
        return array.find(({ result }) => result === "W").year
    }
    else 
        {return undefined}

}