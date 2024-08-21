import { links } from '@/constants/links'
import React from 'react'
import Jumper from './Jumper'
import { Logout } from './Logout'
import { Login } from './Login'

export function Links() {
  return (
    <div className="flex flex-1 flex-col h-[calc(100vh-5.95rem)]">
      <ul className='flex flex-1 flex-col'>
        {
          links.logged.map((i) => (
              <Jumper key={i.title} to={i.to}>{i.title}</Jumper>
          ))}
      </ul>
      <Login/>
    </div>
  )
}
