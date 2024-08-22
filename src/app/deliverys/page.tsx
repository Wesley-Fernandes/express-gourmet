
import Item from "@/components/Item";
import CONSTANTS from "@/constants/constants";

export default function FoodSearch() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      
      <ul className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 gap-2 flex-col w-full">
        {
          CONSTANTS.deliverys.map((delivery) => {
            return (
              <Item {...delivery} key={delivery.id}/>
            )}
        )}
      </ul>
    </main>
  );
}
