import { NextResponse } from 'next/server';
import { verifyAdminCredentials, generateAdminToken, setAdminCookie } from '@/lib/adminAuth';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    if (!verifyAdminCredentials(username, password)) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const token = generateAdminToken();
    const response = NextResponse.json({
      success: true,
      message: 'Login successful'
    });

    return setAdminCookie(response, token);

  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
