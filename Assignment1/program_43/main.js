var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var copiedmagicians = __spreadArray([], magicians, true);
    return copiedmagicians.map(function (magician) { return magician + ' the Great'; });
}
var magicianNames = ['Magician1', 'Magician2', 'Magician3', 'Magician4'];
var greatMagicians = make_great(magicianNames);
console.log("Original Magicians:");
show_magicians(magicianNames);
console.log("\nModified Magicians (the Great added):");
show_magicians(greatMagicians);
