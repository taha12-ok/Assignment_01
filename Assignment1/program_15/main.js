var originalguests = ["Mom", "Dad", "Big Bro"];
console.log("Original Dinner Invitations:");
for (var _i = 0, originalguests_1 = originalguests; _i < originalguests_1.length; _i++) {
    var guest = originalguests_1[_i];
    console.log("Dear ".concat(guest, ",\n\tYou are  invited to dinner. We would be honored to have your presence.\nSincerely,\nYour Name"));
    console.log();
}
// Update guest list (if someone not come)
var guestwhonotcome = "Big Bro";
var newguest = "Small Bro";
var updatedguests = originalguests.filter(function (guest) { return guest !== guestwhonotcome; });
updatedguests.push(newguest);
console.log("Updated Dinner Invitations:");
for (var _a = 0, updatedguests_1 = updatedguests; _a < updatedguests_1.length; _a++) {
    var guest = updatedguests_1[_a];
    console.log("Dear ".concat(guest, ",\n\tYou are  invited to dinner. We would be honored to have your presence.\nSincerely,\nYour Name"));
    console.log();
}
