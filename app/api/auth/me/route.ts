import { NextResponse } from "next/server";
import { getCurrentUser } from "../../../../lib/auth";

export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }

    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Failed to get user" },
      { status: 500 }
    );
  }
}
