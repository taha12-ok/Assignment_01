const originalguests: string[] = ["Mom", "Dad", "Big Bro"];
console.log("Original Dinner Invitations:");
for (const guest of originalguests) {
    console.log(`Dear ${guest},\n\tYou are  invited to dinner. We would be honored to have your presence.\nSincerely,\nTaha Shabbir`);
    console.log(); 
}

// Update guest list (if someone not come)
const guestwhonotcome = "Big Bro";
const newguest = "Small Bro";

const updatedguests = originalguests.filter(guest => guest !== guestwhonotcome);
updatedguests.push(newguest);
console.log("Updated Dinner Invitations:");
for (const guest of updatedguests) {
    console.log(`Dear ${guest},\n\tYou are  invited to dinner. We would be honored to have your presence.\nSincerely,\nTaha Shabbir`);
    console.log(); 
}