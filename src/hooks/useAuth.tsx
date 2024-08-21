/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { auth } from '@/services/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react'

export function useAuth() {
    const [user, setUser] = useState<User|null| false>(false);
    useEffect(()=>{
        return onAuthStateChanged(auth,(e)=>setUser(e));
    }, [])

    return user;
}
