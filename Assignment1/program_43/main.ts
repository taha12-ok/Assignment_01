function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians: string[]): string[] {
    const copiedmagicians = [...magicians];
    return copiedmagicians.map(magician => magician + ' the Great');
}
const magicianNames: string[] = ['Magician1', 'Magician2', 'Magician3', 'Magician4'];
const greatMagicians = make_great(magicianNames);
console.log("Original Magicians:");
show_magicians(magicianNames);
console.log("\nModified Magicians (the Great added):");
show_magicians(greatMagicians);
