/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let l = /L/g;
    let r = /R/g;
    let u = /U/g;
    let d = /D/g;
    let cl = moves.match(l) == null ? 0 : moves.match(l).length;
    let cr = moves.match(r) == null ? 0 : moves.match(r).length;
    let cu = moves.match(u) == null ? 0 : moves.match(u).length;
    let cd = moves.match(d) == null ? 0 : moves.match(d).length;

    return cl == cr && cu == cd;
};