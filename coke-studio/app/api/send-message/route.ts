import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { phone } = body;
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_TELBIZ_API}/send_sms`, { phone });
    return NextResponse.json({ status: 'success', data: res.data }, { status: 200 });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ status: 'error', message: 'message not sent' }, { status: 400 });
  }
}
