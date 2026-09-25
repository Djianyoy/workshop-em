"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/admin"); 
    };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-10 shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Sign in</h2>
          <p className="mt-2 text-sm text-gray-600">Masukkan kredensial Anda</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input id="email" type="email" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500" placeholder="admin@example.com" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input id="password" type="password" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500" placeholder="••••••••" />
            </div>
          </div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}