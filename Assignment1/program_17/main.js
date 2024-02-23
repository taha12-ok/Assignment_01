var dinnerguests = ["Mom", "Dad", "Brother", "Sister", "Aunt"];
console.log("Due to a delay, the new dinner table won't arrive in time. You can invite only two people for dinner.");
while (dinnerguests.length > 2) {
    var removedguest = dinnerguests.pop();
    console.log("Sorry, ".concat(removedguest, ", I can't invite you to dinner."));
}
for (var _i = 0, dinnerguests_1 = dinnerguests; _i < dinnerguests_1.length; _i++) {
    var remainingguest = dinnerguests_1[_i];
    console.log("".concat(remainingguest, ", you're still invited to dinner."));
}
dinnerguests = [];
console.log("The guest list is now empty:", dinnerguests);
