import Link from 'next/link';
import React from 'react'

interface Props{
    children: React.ReactNode;
    to: string;
    label: string;
}
export function Jumper({children,label,to}:Props) {
  return (
    <li className="hover:text-blue-500">
        <Link href={to} className="flex items-center gap-2">
            {children}{label}
        </Link>
    </li>
  )
}
