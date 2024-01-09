export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
        session.user.username = token.username;
        return session;
      }
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnNetworkPage = request.nextUrl?.pathname.startsWith('/network');
      const isOnSavedPage = request.nextUrl?.pathname.startsWith('/saved');
      const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');

      // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD

      if (isOnNetworkPage && !user?.isAdmin) {
        return false;
      }

      // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
      if (isOnSavedPage && !user) {
        return false;
      }

      // ONLY AUTHENTICATED USERS CAN REACH THE LOGIN PAGE
      if (isOnLoginPage && user) {
        return Response.redirect(new URL('/', request.nextUrl));
      }

      return true;
    },
  },
};
