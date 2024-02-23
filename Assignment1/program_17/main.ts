let dinnerguests: string[] = ["Mom", "Dad", "Brother", "Sister", "Aunt"];
console.log("Due to a delay, the new dinner table won't arrive in time. You can invite only two people for dinner.");
while (dinnerguests.length > 2) {
    const removedguest = dinnerguests.pop();
    console.log(`Sorry, ${removedguest}, I can't invite you to dinner.`);
}
for (const remainingguest of dinnerguests) {
    console.log(`${remainingguest}, you're still invited to dinner.`);
}
dinnerguests = [];
console.log("The guest list is now empty:", dinnerguests);