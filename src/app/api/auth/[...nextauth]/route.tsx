import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

const githubClientId = process.env.GITHUB_ID || '';
const githubClientSecret = process.env.GITHUB_SECRET || '';

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: githubClientId,
      clientSecret: githubClientSecret,
    }),
  ],
});

export { handler as GET, handler as POST };
