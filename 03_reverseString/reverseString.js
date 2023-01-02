const reverseString = function(str) {  // add argument str
    
    //empty string loop
    let  newString = "";   // empty string var is created
    for(let i = str.length - 1; i >= 0; i--) {         //str.length - 1 gives the position of the last element
        newString += str[i];                           // that element is added to the new string var newString
    }                                                  // the value of i decreases by 1 each time the loop runs until it reaches 0
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
