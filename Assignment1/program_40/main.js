function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Artist1', 'Album One');
var album2 = make_album('Artist2', 'Album Two', 12);
var album3 = make_album('Artist3', 'Album Three');
console.log(album1);
console.log(album2);
console.log(album3);
var album4 = make_album('Artist4', 'Album Four', 15);
console.log(album4);
