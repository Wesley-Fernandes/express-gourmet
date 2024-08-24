/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { auth } from '@/services/firebase-client';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react'

interface CustomUser extends User {
    reloadUserInfo:{
            customAttributes: {
                ['admin']?: boolean
    };
}
}
export function useAuth() {
    const [user, setUser] = useState<CustomUser|null| false>(false);
    useEffect(()=>{

        return onAuthStateChanged(auth,(e)=>{
            if(e==null){
                setUser(null);
                return;
            }
            const USER = e as CustomUser;
            const exist = USER.reloadUserInfo.customAttributes ? true : false;
            let admin: boolean = false;

            if (exist){
                const custom = JSON.parse(JSON.stringify(USER.reloadUserInfo.customAttributes) || '{}');
                admin = JSON.parse(custom)["admin"];
            }else{
                admin = false;
            }
           
            const NEW_USER = {...USER, reloadUserInfo: {
                customAttributes: {admin}
            }}
            setUser(NEW_USER)
        });
    }, [])

    return user;
}
