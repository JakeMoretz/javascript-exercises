const repeatString = function(str, num) {
    let accumulatedstr = ""; // create empty string variable
    for (let i = 0; i < num; i++) {  // use for loop to run as many times at the num
        accumulatedstr += str;  // add string to new variable
    }
    return accumulatedstr;  // return variable for repeated string 
};

// Do not edit below this line
module.exports = repeatString;
