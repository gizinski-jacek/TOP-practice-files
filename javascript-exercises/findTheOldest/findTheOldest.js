// let findTheOldest = function(array) {
//     array.sort((a, b) => {
//             let aGuy = findAge(a.yearOfDeath, a.yearOfBirth);
//             let bGuy = findAge(b.yearOfDeath, b.yearOfBirth);
//             if (aGuy > bGuy) {
//                 return -1;
//             } else return 1;
//     })
//         return array[0];
// }

let findTheOldest = function(array) {
    return array.reduce((a, b) => {
            let aGuy = findAge(a.yearOfDeath, a.yearOfBirth);
            let bGuy = findAge(b.yearOfDeath, b.yearOfBirth);
            return (aGuy > bGuy) ? a : b;
    })
}

function findAge(deathDate, birthDate) {
    if (!deathDate) {
        deathDate = new Date().getFullYear();
    }
    return deathDate - birthDate;
}

module.exports = findTheOldest
