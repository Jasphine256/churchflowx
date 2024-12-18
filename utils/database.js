const baseUrl = "https://churchflowx-backend.onrender.com";
    
// Check if the user exists in the database
export async function UserExists(userData) {
    const url = `${baseUrl}/people/admins?Email=${userData.email}`;
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const res = await response.json();
        const users = res.data.objects || [];

        if (users.length === 0) {
            // User does not exist; add to DB and fetch immediately
            const newUser = await AddUserToDb(userData);
            return newUser; // Return the newly added user
        } else {
            // Return existing user
            return users[0];
        }
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
}

// Add a new user to the database and fetch their data
async function AddUserToDb(userData) {
    const url = `${baseUrl}/people/admins/new`;
    try {
        const new_user = {
            Name: userData.name,
            Email: userData.email,
            ProfileImg: userData.picture
        }
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(new_user),
        });

        if (!response.ok) {
            throw new Error("Failed to add user to the database.");
        }

        // Fetch the user immediately after saving to the database
        return await UserExists(userData);
    } catch (error) {
        console.error("Error adding user:", error);
        return null;
    }
}
