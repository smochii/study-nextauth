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

  // console.log(session);

  return (
    <div>
      <h1>Home</h1>
      <p className="font-mono font-bold">{session?.user?.name ?? "guest"}</p>
      {session ? (
        <div>
          <button
            className="bg-red-200"
            onClick={() => {
              signOut();
            }}
          >
            サインアウト
          </button>
        </div>
      ) : (
        <div>
          <button
            className="bg-red-200"
            onClick={() => {
              signIn("google");
            }}
          >
            Googleサインイン
          </button>
        </div>
      )}
    </div>
  );
};
