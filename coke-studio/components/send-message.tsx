'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Axios } from '@/config/axios.config';
import { Input } from './ui/input';
import { toast } from '@/hooks/use-toast';

export default function SendMessage() {
  const [phone, setPhone] = useState<string>('');

  const handleSendMessage = async () => {
    if (!phone || phone === '') {
      alert('Please enter a phone number');
      return;
    }
    try {
      const res = await Axios.post('/message', phone);
      toast({
        title: 'Message Sent',
        // description: res?.data || 'Message sent successfully',
        description: 'Message sent successfully',
        variant: 'success',
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col gap-1">
      <Input placeholder="20..." value={phone} onChange={e => setPhone(e.target.value)} />
      <Button onClick={handleSendMessage}>Send Message</Button>
    </div>
  );
}
