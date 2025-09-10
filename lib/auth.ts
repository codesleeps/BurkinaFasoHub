import { cookies } from "next/headers";
import { jwtVerify, SignJWT } from "jose";
import { nanoid } from "nanoid";

// In a real application, this would be stored securely in a database
// For this implementation, we'll hardcode the delegate user
const DELEGATE_USERS = [
  { id: 140, username: "delegate140", password: "securePassword123" },
];

const secretKey =
  process.env.AUTH_SECRET || "default_secret_key_for_development";
const key = new TextEncoder().encode(secretKey);

export type UserJwtPayload = {
  jti: string;
  iat: number;
  exp: number;
  userId: number;
  username: string;
};

/**
 * Create a new JWT token for a user
 */
export async function signToken(userId: number, username: string) {
  const token = await new SignJWT({ userId, username })
    .setProtectedHeader({ alg: "HS256" })
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(key);

  return token;
}

/**
 * Verify a JWT token and return the payload
 */
export async function verifyToken(token: string): Promise<UserJwtPayload> {
  try {
    const verified = await jwtVerify(token, key);
    return verified.payload as UserJwtPayload;
  } catch (error) {
    throw new Error("Invalid token");
  }
}

/**
 * Authenticate a user with username and password
 */
export async function authenticateUser(username: string, password: string) {
  const user = DELEGATE_USERS.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    throw new Error("Invalid credentials");
  }

  return { id: user.id, username: user.username };
}

/**
 * Get the current user from the request cookies
 */
export async function getCurrentUser() {
  const cookieStore = cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) return null;

  try {
    const payload = await verifyToken(token);
    return { id: payload.userId, username: payload.username };
  } catch {
    return null;
  }
}
