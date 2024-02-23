var originalguests = ["Mom", "Dad", "Big Bro"];
console.log("Original Dinner Invitations:");
for (var _i = 0, originalguests_1 = originalguests; _i < originalguests_1.length; _i++) {
    var guest = originalguests_1[_i];
    console.log("Dear ".concat(guest, ",\n\tYou are invited to dinner. We would be honored to have your presence.\nSincerely,\nTaha Shabbir"));
    console.log();
}
// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");
// Additional guests
var newguestAtBeginning = "Big Bro";
var newguestInMiddle = "Uncle";
var newguestAtEnd = "Aunt";
// Add new guests to the list
originalguests.unshift(newguestAtBeginning);
originalguests.splice(Math.floor(originalguests.length / 2), 0, newguestInMiddle);
originalguests.push(newguestAtEnd);
// Print new dinner invitations
console.log("Updated Dinner Invitations:");
for (var _a = 0, originalguests_2 = originalguests; _a < originalguests_2.length; _a++) {
    var guest = originalguests_2[_a];
    console.log("Dear ".concat(guest, ",\n\tYou are invited to dinner. We would be honored to have your presence.\nSincerely,\nTaha Shabbir"));
    console.log();
}
