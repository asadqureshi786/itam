import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('token'); // Assuming user ki login state token ke through track kar rahay ho

  const loginPath = '/auth/login'; // Login page ka path
  const signUpPath = '/auth/sign_up'; // Sign up page ka path
  const dashboardPath = '/dashboard'; // Redirect path for logged-in users
  
  // Agar token hai (user logged in hai) aur user login ya signup page par jane ki koshish kar raha hai
  if (token && (req.nextUrl.pathname === loginPath || req.nextUrl.pathname === signUpPath)) {
    return NextResponse.redirect(new URL(dashboardPath, req.url)); // Redirect logged-in user to dashboard
  }


  // Agar token nahi hai, tou user ko login page par redirect kar do
  if (!token && req.nextUrl.pathname !== loginPath && req.nextUrl.pathname !== signUpPath ) {
    return NextResponse.redirect(new URL(loginPath, req.url));
  }

  return NextResponse.next(); // Warna agay process hone do
}

export const config = {
    matcher: [
        '/', 
        '/add_assets', 
        '/add_license', 
        '/add_maintenance',
        '/add_order',
        '/add_request',
        '/asset_management',
        '/assets',
        '/dashboard',
        '/licenses',
        '/procurement',
        '/reports',
        '/settings',
        '/ticket_view',
        '/user_view',
        '/users',
        '/auth/login', // Include login page in matcher
        '/auth/sign_up', // Include sign up page in matcher
      ],
};