import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; // JWT token library
import mysql from 'mysql2/promise';


// Create a connection to the MySQL database
const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'itam',
});

// Secret key for signing the JWT
const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';


export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Check if the email exists
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const user = rows[0];

    // Compare the password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // JWT token generation
    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.name }, // Payload: user data
      SECRET_KEY, // Secret key
      { expiresIn: '1h' } // Token expiration time
    );

    // Set token in a cookie (httpOnly and secure for better security)
    const response = NextResponse.json({
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });

    response.cookies.set('token', token, {
      httpOnly: true, // Prevent client-side access to the token
      maxAge: 60 * 60, // 1 hour expiration
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Error logging in:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}