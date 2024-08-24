import { groupByCategory } from "@/lib/calculation";
import { db } from "@/services/firebase-client";
import { DeliveryInterface } from "@/types/delivery";
import { FoodFullInterface } from "@/types/food";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";


export const getFood = async(id:string) => {
    console.log("Carregando comida...")
    const foodRef = doc(db, "foods", id);
    const foodSnap = await getDoc(foodRef);
    if(!foodSnap.exists()) return null;
    const foodData = foodSnap.data();
    return {id, ...foodData} as FoodFullInterface;
}

export const getFoods = async() => {
    console.log("Carregando comidas...")
    const foodsRef = collection(db, "foods");
    const foodsSnap = await getDocs(foodsRef);
    const files = foodsSnap.docs.map((doc) => ({id: doc.id,...doc.data()})) as FoodFullInterface[];
    return groupByCategory(files);

}

export const getRestaurant = async(id:string) => {
    const restaurantRef = doc(db, "restaurants", id);
    const restaurantSnap = await getDoc(restaurantRef);
    if(!restaurantSnap.exists()) return null;
    const restaurantData = restaurantSnap.data();
    return {id,...restaurantData} as DeliveryInterface;
}

export const searchFoods = async(search:string) => {
    const colRef = collection(db, "foods");
    const options = query(colRef, where("name", ">=", search), where("name", "<", search + "\uf8ff"));
    const docsSnap = await getDocs(options);
    if(docsSnap.empty) return [];

    let data:FoodFullInterface[] = [];

    docsSnap.forEach(doc => {
        data.push({id: doc.id,...doc.data()} as FoodFullInterface);
    });

    return data;
}