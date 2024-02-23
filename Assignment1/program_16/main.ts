const originalguests: string[] = ["Mom", "Dad", "Big Bro"];
console.log("Original Dinner Invitations:");
for (const guest of originalguests) {
    console.log(`Dear ${guest},\n\tYou are invited to dinner. We would be honored to have your presence.\nSincerely,\nTaha Shabbir`);
    console.log(); 
}
// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");
// Additional guests
const newguestAtBeginning = "Big Bro";
const newguestInMiddle = "Uncle";
const newguestAtEnd = "Aunt";
// Add new guests to the list
originalguests.unshift(newguestAtBeginning);
originalguests.splice(Math.floor(originalguests.length / 2), 0, newguestInMiddle);
originalguests.push(newguestAtEnd);
// Print new dinner invitations
console.log("Updated Dinner Invitations:");
for (const guest of originalguests) {
    console.log(`Dear ${guest},\n\tYou are invited to dinner. We would be honored to have your presence.\nSincerely,\nTaha Shabbir`);
    console.log();
}