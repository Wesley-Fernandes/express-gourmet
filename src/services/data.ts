import { useStateFoodsTypes } from "@/types/delivery";
import { CategoryTypes, FoodFullInterface } from "@/types/food";

export const getFoodsByCategory = async ({category, setData}:{category: CategoryTypes, setData:useStateFoodsTypes}) =>{
    const req = await fetch(`/api/food/query/${category}`, {method: 'GET'});
    const archives = await req.json() as FoodFullInterface[];
    setData(archives);
}