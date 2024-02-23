function make_album(artist, title, tracks?): { artist, title, tracks? } {
    const album: { artist, title, tracks? } = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}
const album1 = make_album('Artist1', 'Album One');
const album2 = make_album('Artist2', 'Album Two', 12); 
const album3 = make_album('Artist3', 'Album Three');

console.log(album1);
console.log(album2);
console.log(album3);

const album4 = make_album('Artist4', 'Album Four', 15);
console.log(album4);
