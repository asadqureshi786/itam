import { createConnection } from 'mysql2/promise';
import bcrypt from 'bcryptjs';

const connectionConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'itam',
};

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return new Response(JSON.stringify({ message: 'email and password are required.',status : 'email_required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const connection = await createConnection(connectionConfig);

        await connection.execute('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);

        return new Response(JSON.stringify({ message: 'User created successfully.',status : 'user_created' }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return new Response(JSON.stringify({ message: 'email already exists.',status : 'email_exist' }), {
                status: 409,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        return new Response(JSON.stringify({ message: 'Error creating user.',status : "something_went_wrong" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
