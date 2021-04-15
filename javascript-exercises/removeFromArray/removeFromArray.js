const removeFromArray = function(array, ...args) {
    let newArray = array.slice();
    for (let i = 0; i < array.length; i++){
        if (newArray.includes(args[i])) {
            newArray.splice(newArray.indexOf(args[i]), 1);
        }
    } return newArray;
}

module.exports = removeFromArray
