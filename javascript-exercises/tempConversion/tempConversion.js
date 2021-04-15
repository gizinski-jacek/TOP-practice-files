const ftoc = function(fTemp) {
    let celTemp = (fTemp - 32) * (5/9);
    let celTempRounded = Math.round(celTemp * 10) / 10;
    return celTempRounded;
}

const ctof = function(cTemp) {
    let fahTemp = (cTemp * (9/5) + 32);
    let fahTempRounded = Math.round(fahTemp * 10) / 10;
    return fahTempRounded;
}

module.exports = {
  ftoc,
  ctof
}
