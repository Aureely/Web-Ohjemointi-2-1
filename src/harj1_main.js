// Implement createUser function
export function createUser(id, username, email, location) {
    return {
        id,
        user: username,
        email,
        status: "pending",
        location,
    };
    throw new Error("Not implemented");
}
createUser(1, "Aura", "aurahelmiina@gmail.com", [23, 55]);
