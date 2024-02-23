var personname = "Taha Shabbir";
// Convert to lowercase
var lowercase = personname.toLowerCase();
console.log("Lowercase: ", lowercase);
// Convert to uppercase
var uppercase = personname.toUpperCase();
console.log("Uppercase: ", uppercase);
// Convert to title case
var titlecase = personname.toLowerCase()
    .replace(/(?:^|\s)\S/g, function (match) { return match.toUpperCase(); });
console.log("Titlecase: ", titlecase);
