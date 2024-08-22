/* eslint-disable @next/next/no-img-element */
import { Complement } from "@/components/Complement";
import Item from "@/components/Item";
import CONSTANTS from "@/constants/constants";
import { pageProps } from "@/types/page";
import { Headset, Soup } from "lucide-react";

export default function page({params}:pageProps) {
  const delivery = CONSTANTS.delivery.filter((food) => food.id === params.id)[0];

  if(!delivery) return <h1>Nenhum delivery encontrada</h1>;

  return (
    <main className="flex min-h-screen">
     <section className="sm:container w-full flex flex-col">
      <header className="h-48 w-full border-b">
          <img src={delivery.thumbnail}  alt="background" className="h-full w-full object-cover"/>
          <div className="w-full flex items-center justify-around">
            <div className="absolute top-48 flex items-center gap-4">
              <div className="h-28 w-32 bg-white border-2 p-1">
                <img src={delivery.icon} alt={delivery.name} className="h-full w-full object-fill"/>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className=" mt-12 py-2 text-base text-center font-black text-black rounded-xl uppercase">{delivery.name}</h1>
                <span className="-mt-4 flex items-center gap-1 text-xs">
                  <Headset strokeWidth={1} size={14}/>
                  {delivery.cellphone}
                </span>
              </div>
            </div>
          </div>
      </header>
      <main className="pt-16">
        <h1 className="font-bold pl-1 mb-1 text-2xl flex items-center gap-1"><Soup strokeWidth={1}/>Catalogo</h1>
        <ul className="px-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {
            delivery.foods.map((food) => {
              return (<Item {...food} key={food.id}/>)
            })
          }
        </ul>
      </main>
     </section>
    </main>
  );
}
