function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    return magicians.map(function (magician) { return magician + ' the Great'; });
}
var magiciannames = ['Magician1', 'Magician2', 'Magician3', 'Magician4'];
var greatmagicians = make_great(magiciannames);
show_magicians(greatmagicians);
