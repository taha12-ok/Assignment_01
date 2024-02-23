let dinnerGuests: string[] = ["Mom", "Dad", "Brother", "Sister", "Aunt"];
console.log(`You are inviting ${dinnerGuests.length} people to dinner.`);
console.log("Due to a delay, the new dinner table won't arrive in time. You can invite only two people for dinner.");
while (dinnerGuests.length > 2) {
    const removedGuest = dinnerGuests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
for (const remainingGuest of dinnerGuests) {
    console.log(`${remainingGuest}, you're still invited to dinner.`);
}
dinnerGuests = [];
console.log("The guest list is now empty:", dinnerGuests);
