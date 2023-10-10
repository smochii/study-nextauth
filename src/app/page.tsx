"use client";

import NextAuthProvider from "@/providers/NextAuth";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <NextAuthProvider>
      <Content />
    </NextAuthProvider>
  );
}

const Content: React.FC = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Home</h1>
      <code className="font-mono font-bold">
        {session?.user?.name ?? "guest"}
      </code>
      {!session && (
        <button
          onClick={() => signIn()}
          className="flex w-full justify-center border-2 border-b border-red-300 hover:border-red-400 bg-red-200 hover:bg-red-300 pb-6 pt-8 backdrop-blur-2xl dark:border-red-800 dark:hover:border-red-900 dark:bg-red-800/50 dark:hover:bg-red-900/30 lg:static lg:w-auto lg:rounded-xl lg:p-4"
        >
          Sign In
        </button>
      )}
      {session && (
        <button
          onClick={() => signOut()}
          className="flex w-full justify-center border-2 border-b border-green-300 bg-green-200 pb-6 pt-8 backdrop-blur-2xl dark:border-green-800 dark:bg-green-800/30 lg:static lg:w-auto lg:rounded-xl lg:p-4 hover:border-green-400 hover:bg-green-300 dark:hover:border-green-900 dark:hover:bg-green-900/30"
        >
          Sign Out
        </button>
      )}
    </div>
  );
};
