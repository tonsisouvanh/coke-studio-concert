import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
// ====================================================== //
// ================== GET ALL SHOPS ================== //
// ====================================================== //
export async function GET(req: NextRequest) {
  try {
    const mockData = [
      {
        id: 1,
        name: 'Shop 1',
        location: 'Location 1',
        phone: '1234567890',
        email: 'johndoe@gmail.com',
      },
      {
        id: 2,
        name: 'Shop 2',
        location: 'Location 2',
        phone: '1234567890',
        email: 'jeff@gmail.com',
      },
    ];

    return NextResponse.json(
      {
        status: 'success',
        data: mockData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching shops:', error);
    return NextResponse.json({ status: 'error', message: 'Failed to fetch shops' }, { status: 500 });
  }
}
