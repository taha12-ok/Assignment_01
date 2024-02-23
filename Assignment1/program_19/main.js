var dinnerGuests = ["Mom", "Dad", "Brother", "Sister", "Aunt"];
console.log("You are inviting ".concat(dinnerGuests.length, " people to dinner."));
console.log("Due to a delay, the new dinner table won't arrive in time. You can invite only two people for dinner.");
while (dinnerGuests.length > 2) {
    var removedGuest = dinnerGuests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
for (var _i = 0, dinnerGuests_1 = dinnerGuests; _i < dinnerGuests_1.length; _i++) {
    var remainingGuest = dinnerGuests_1[_i];
    console.log("".concat(remainingGuest, ", you're still invited to dinner."));
}
dinnerGuests = [];
console.log("The guest list is now empty:", dinnerGuests);
