const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

function superbowlWin(array) {
    let result;
    array.forEach(element => {
        if (element.result === "W") {
            result = element.year;
        }
    });
    return result
}