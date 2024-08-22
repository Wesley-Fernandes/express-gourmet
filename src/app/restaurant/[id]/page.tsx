/* eslint-disable @next/next/no-img-element */
"use client"
import { getRestaurantFullData } from "@/api/food";
import { pageProps } from "@/types/page";
import { useQuery } from "@tanstack/react-query";
import { Headset, Soup } from "lucide-react";
import LoadingPage from "@/components/LoadingPage";
import NotExist from "@/components/NotExist";
import ErrorPage from "@/components/ErrorPage";
import Item from "@/components/Item";
export default function RestaurantById({params}:pageProps) {
 const {data, isPending, error} = useQuery({
  queryKey: ['restaurant'],
  queryFn: async () => await getRestaurantFullData(params.id)
 });
 if(!data && !isPending && !error && data==null) return <NotExist/>;
 if(!data && isPending) return <LoadingPage/>;
 if(error) return <ErrorPage error={error.message}/>;
 if(data) return (
    <main className="flex min-h-screen">
     <section className="sm:container w-full flex flex-col">
      <header className="h-48 w-full border-b">
          <img src={data.restaurant.thumbnail}  alt="background" className="h-full w-full object-cover"/>
          <div className="w-full flex items-center justify-around">
            <div className="absolute top-48 flex items-center gap-4">
              <div className="h-28 w-32 bg-white border-2 p-1">
                <img src={data.restaurant.icon} alt={data.restaurant.name} className="h-full w-full object-fill"/>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className=" mt-12 py-2 text-base text-center font-black text-black rounded-xl uppercase">{data.restaurant.name}</h1>
                <span className="-mt-4 flex items-center gap-1 text-xs">
                  <Headset strokeWidth={1} size={14}/>
                  {data.restaurant.cellphone}
                </span>
              </div>
            </div>
          </div>
      </header>
      <main className="pt-16">
        <h1 className="font-bold pl-1 mb-1 text-2xl flex items-center gap-1"><Soup strokeWidth={1}/>Catalogo</h1>
        <ul className="px-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {
            data.foods.map((food) => {
              return (<Item {...food} key={food.id}/>)
            })
          }
        </ul>
      </main>
     </section>
    </main>
  );
}
