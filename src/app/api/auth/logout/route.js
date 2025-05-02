import { NextResponse } from 'next/server';

export async function GET() {
  // Create a response to remove the token cookie
  const response = NextResponse.json({ message: 'Logout successful' });

  // Remove the token cookie by setting it with an empty value and past expiration date
  response.cookies.set('token', '', {
    httpOnly: true,
    expires: new Date(0), // Expire the cookie immediately
    path: '/', // Ensure it applies to all paths
  });

  return response;
}