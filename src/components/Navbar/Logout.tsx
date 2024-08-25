"use client"
import { useState } from 'react'
import { Button } from '../ui/button'
import { User } from 'firebase/auth'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { auth } from '@/services/firebase-client'

interface Props{
  user: User;
}
export function Logout({user}:Props) {
  const [loading, setLoading] = useState(false);

  const logout = async () => {
      setLoading(true);
      await auth.signOut();
      setLoading(false);
  }
  return (
    <div className='flex flex-col gap-2 p-2'>
        <div className='flex items-center gap-2'>
            <Avatar className='border-2 border-amber-500'>
                <AvatarImage src={user?.photoURL as string} alt={user?.displayName as string} />
                <AvatarFallback>{String(user?.displayName)[0]}</AvatarFallback>
            </Avatar>
            <span className='text-white'>{String(user?.displayName)}</span>
        </div>
        <Button onClick={logout} disabled={loading} className='w-full bg-amber-600 hover:bg-amber-700'>Desconectar-se</Button>
    </div>
  )
}
