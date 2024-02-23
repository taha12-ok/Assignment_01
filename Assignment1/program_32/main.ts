let current_users: string[] = ["Taha", "Zaka", "Ali", "Ahmed", "Asif"];
let new_users: string[] = ["Rizwan", "Fawad", "Bilal", "Amir", "Abid"];
for (let new_username of new_users) {
    let usernameExists = current_users.some(user => user.toLowerCase() === new_username.toLowerCase());

    if (usernameExists) {
        console.log(`Sorry, the username '${new_username}' is already taken. Please choose a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_username}' is available.`);
    }
}
