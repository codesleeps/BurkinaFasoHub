import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { authenticateUser, signToken } from "../../../../lib/auth";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // Authenticate the user
    const user = await authenticateUser(username, password);

    // Create JWT token
    const token = await signToken(user.id, user.username);

    // Set the token in a cookie
    const cookieStore = await cookies();
    cookieStore.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    return NextResponse.json({
      id: user.id,
      username: user.username,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Login failed" },
      { status: 401 }
    );
  }
}