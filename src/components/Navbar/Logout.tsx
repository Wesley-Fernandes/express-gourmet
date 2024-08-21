import React from 'react'
import { Button } from '../ui/button'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
export function Logout() {
  return (
    <div className='flex flex-col gap-2 border p-2 rounded-lg'>
        <div className='flex items-center gap-2'>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>Wesley Fernandes</span>
        </div>
        <Button className='w-full' variant="destructive">Desconectar-se</Button>
    </div>
  )
}
