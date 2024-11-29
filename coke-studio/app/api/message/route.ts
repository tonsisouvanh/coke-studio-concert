import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { phone } = body;
  const url = `${process.env.NEXT_PUBLIC_TELBIZ_API}/api/send_sms` || 'http://localhost:8000/api/send_sms';
  try {
    const res = await axios.post(url, { phone });
    return NextResponse.json({ status: 'success', data: res.data }, { status: 200 });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ status: 'error', message: 'message not sent' }, { status: 400 });
  }
}
