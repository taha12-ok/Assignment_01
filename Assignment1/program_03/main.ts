let personname = "Taha Shabbir";

// Convert to lowercase
let lowercase  = personname.toLowerCase();
console.log("Lowercase: ", lowercase);

// Convert to uppercase
let uppercase = personname.toUpperCase();
console.log("Uppercase: ", uppercase);

// Convert to title case
let titlecase = personname.toLowerCase().replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
console.log("Titlecase: ", titlecase);
