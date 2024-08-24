"use client"
import { useAuth } from '@/hooks/useAuth'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

export default function User() {
    const user =  useAuth();
    if (!user) return null

  return (
    <div className='py-1 border flex flex-col mt-2 w-[320px] sm:w-96 p-2 rounded-xl mb-4 shadow-md'>
      <div className='flex items-center gap-2'>
        <Avatar className='h-12 w-12 rounded-full overflow-hidden'>
            <AvatarImage src={user?.photoURL as string} alt={user?.displayName as string} />
            <AvatarFallback>{String(user?.displayName)[0]}</AvatarFallback>
        </Avatar>
        <div className='flex flex-col flex-1'>
          <span className='font-bold'>{String(user?.displayName)}</span>
          <span className='font-medium text-xs opacity-70'>{user.reloadUserInfo.customAttributes.admin?"Admin":"Cliente"}</span>
        </div>
      </div>
    </div>
  )
}
