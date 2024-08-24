import { cert, initializeApp } from 'firebase-admin/app';
import { v4 as uuidv4 } from 'uuid';

export const ADMIN = initializeApp({
    credential: cert({
        clientEmail: process.env.FIREBASE_ADMIN_EMAIL as string,
        privateKey: process.env.FIREBASE_ADMIN_KEY as string,
        projectId:  process.env.FIREBASE_ADMIN_ID as string
    }),
    databaseURL: process.env.FIREBASE_ADMIN_DB_URL as string
}, uuidv4());