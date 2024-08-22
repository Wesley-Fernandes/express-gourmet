import { db } from "@/services/firebase";
import { FoodFullInterface } from "@/types/food";
import { doc, getDoc } from "firebase/firestore";

export const getFood = async(id:string) => {
    const foodRef = doc(db, "foods", id);
    const foodSnap = await getDoc(foodRef);
    if(!foodSnap.exists()) return null;
    const foodData = foodSnap.data();
    return {id, ...foodData} as FoodFullInterface;
}