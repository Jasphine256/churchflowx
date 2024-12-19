import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const baseUrl = process.env.BACKEND_BASE_URL

export const {handlers, signIn, signOut, auth} = NextAuth({
  providers: [
    Google,
  ],
  callbacks: {
    async signIn({ user, profile }) {
      const url = `${baseUrl}/people/admins?GID=${profile.sub}`;
      const newurl = `${baseUrl}/people/admins/new`;

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const res = await response.json();
        const users = res.data.objects || [];
        if (users.length === 0) {
          try {
            const newUser = {
              GID: String(profile.sub),
              Name: user.name,
              Email: user.email,
              ProfileImg: user.id,
            };

            const saveResponse = await fetch(newurl, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(newUser),
            });

            if (!saveResponse.ok) {
              throw new Error("Failed to add user to the database.");
            }

            return true;
          } catch (error) {
            console.error("Error adding user:", error);
            return false;
          }
        } else {
          return true;
        }
      } catch (error) {
        console.error("Sign-in error:", error);
        return false;
      }

    },
    async jwt({ token, user, profile }) {
      if (user) {
        token.id = profile.sub;
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
      }
      return token;
    },
    async session({ session, token }) {
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
