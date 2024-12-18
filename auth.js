import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const baseUrl = "https://churchflowx-backend.onrender.com";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    // Called after a user successfully signs in
    async signIn({ user }) {
      const url = `${baseUrl}/people/admins?GID=${user.id}`;
      const newurl = `${baseUrl}/people/admins/new`;

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
          try {
                const new_user = {
                    GID: user.id,
                    Name: user.name,
                    Email: user.email,
                    ProfileImg: user.image
                }
                console.log(new_user)
                console.log("initial user id: ", user.id)
                console.log(typeof(new_user.GID))
                const response = await fetch(newurl, {
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
                return true
            } catch (error) {
                console.error("Error adding user:", error);
                return false;
            }
        } else {
            return true;
        }
      }catch(error){
        console.log(error)
        return false
      }
    },

    // Called when a token is created
    async jwt({ token, user }) {
      // If this is the first time, add the user info to the token
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
      }

      return token;
    },

    // Called when a session is created
    async session({ session, token }) {
      // Pass user info from token to the session
      session.user = {
        id: token.id,
        email: token.email,
        name: token.name,
        image: token.picture,
      };

      return session;
    },
  },
});
