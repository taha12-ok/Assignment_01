function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => magician + ' the Great');
}
const magiciannames: string[] = ['Magician1', 'Magician2', 'Magician3', 'Magician4'];
const greatmagicians = make_great(magiciannames);
show_magicians(greatmagicians);
