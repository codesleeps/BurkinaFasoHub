import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Clear the auth token cookie
    const cookieStore = cookies();
    cookieStore.delete("auth_token");

    return NextResponse.json({ message: "Logged out successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Logout failed" },
      { status: 500 }
    );
  }
}
