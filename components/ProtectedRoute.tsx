"use client";

import { useAuth } from "./AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      // Redirect to login if not authenticated
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-burkina-green"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  // Check if user is delegate (ID 140)
  if (user.id !== 140) {
    return (
      <div className="max-w-md mx-auto text-center py-12">
        <h2 className="text-2xl font-bold text-red-600">Access Denied</h2>
        <p className="mt-2 text-black/70">
          You do not have permission to access this page.
        </p>
        <button onClick={() => router.push("/")} className="mt-4 btn-primary">
          Go Home
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
