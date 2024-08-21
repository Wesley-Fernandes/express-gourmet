"use client"
import { links } from '@/constants/links'
import { Logout } from './Logout'
import { Login } from './Login'
import { useAuth } from '@/hooks/useAuth'
import Jumper from './Jumper'

export function Links() {
  const user = useAuth();

  return (
    <div className="flex flex-1 flex-col h-[calc(100vh-5.95rem)]">
      <ul className='flex flex-1 flex-col'>
        {
          !user ? (
            links.notLogged.map((i) => (
              <Jumper key={i.title} to={i.to}>{i.title}</Jumper>
          ))): (
            links.logged.map((i) => (
              <Jumper key={i.title} to={i.to}>{i.title}</Jumper>
            ))
          )}
      </ul>
      {user && <Logout user={user}/>}
      {!user && <Login />}
    </div>
  )
}
