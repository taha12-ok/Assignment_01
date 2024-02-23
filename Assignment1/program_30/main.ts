let usernames: string[] = ["admin", "staff1", "staff2", "staff3", "staff4"];
for (let username of usernames) {
    if (username.toLowerCase() === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
