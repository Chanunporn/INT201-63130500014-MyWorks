function sodiac(year) {
    let mod = year % 12
    let sodiac
    switch (mod) {
        case 0:
            sodiac = "monkey"
            break;
        case 1:
            sodiac = "rooster"
            break;
        case 2:
            sodiac = "dog"
            break;
        case 3:
            sodiac = "pig"
            break;
        case 4:
            sodiac = "rat"
            break;
        case 5:
            sodiac = "ox"
            break;
        case 6:
            sodiac = "tiger"
            break;
        case 7:
            sodiac = "rabbit"
            break;
        case 8:
            sodiac = "dragon"
            break;
        case 9:
            sodiac = "snake"
            break;
        case 10:
            sodiac = "horse"
            break;
        case 11:
            sodiac = "sheep"
            break;
    }

    return sodiac;

}

console.log("zodiac of 1990 is " + sodiac(1990))
console.log("zodiac of 1847 is " + sodiac(1847))
console.log("zodiac of 2548 is " + sodiac(2548))