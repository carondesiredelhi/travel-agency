import { NextResponse } from 'next/server';
import { testBrevoSetup } from '@/lib/notifications';

export async function GET() {
  try {
    const results = await testBrevoSetup();
    return NextResponse.json({
      success: true,
      message: 'Brevo test completed',
      results
    });
  } catch (error) {
    console.error('Test notifications error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Test failed',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

