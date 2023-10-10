"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <div>
      <h1>ログインページ</h1>
      <button
        className="bg-red-200"
        onClick={() => {
          signIn("google");
        }}
      >
        Google
      </button>
    </div>
  );
}
