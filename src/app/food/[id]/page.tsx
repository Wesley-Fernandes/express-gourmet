/* eslint-disable @next/next/no-img-element */
"use client"
import { Complement } from "@/components/Complement";
import { Quantity } from "@/components/quantity";
import { Button } from "@/components/ui/button";
import { ComplementType } from "@/types/food";
import { pageProps } from "@/types/page";
import { useState } from "react";
import CONSTANTS from "@/constants/constants";
import Link from "next/link";
import { ArrowLeft, Soup } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FoodById({params}:pageProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const [complements, setComplements] = useState<ComplementType[]>([]);
  const food = CONSTANTS.foods.filter((food) => food.id === params.id)[0];
  const {back} = useRouter();

  if(!food) return <h1>Item não encontrado</h1>;

  const calculateTotal = () => {
    let total = food.price * quantity;
    complements.forEach((complement) => {
      total += complement.price * quantity;
    });
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
  };


  const turnBack = () => {
    back();
  }

  return (
    <main className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-center">
      <div className="w-[90vw] sm:w-96 flex p-0 mb-2">
        <Button onClick={turnBack} className="-ml-2" variant="outline"><ArrowLeft strokeWidth={1}/> Voltar</Button>
      </div>
      <div className="flex flex-col gap-2 border p-2 rounded-md shadow-md h-fit">
          <h1 className="font-black uppercase">{food.name}</h1>
          <div className="w-[90vw] sm:w-96 h-40 overflow-hidden rounded-md">
              <img src={food.thumbnail} alt="" className="w-full h-full object-cover"/>
          </div>
          <Link href={`/deliverys/${food.delivery.id}`} className="flex items-center gap-2 my-1 p-2 hover:text-red-400">
            <div className="h-12 w-12">
                <img src={food.delivery.icon} alt={food.delivery.name} className="w-full object-fill"/>
            </div>
            <span className="font-bold">{food.delivery.name}</span>
          </Link>
          <hr />
          <p className="bg-primary-foreground text-xs h-14 p-1">
            {food.description}
          </p>
          <div className="flex flex-col gap-1 p-1">
            <h2 className="font-black uppercase border-b text-red-500">
              Complementos
            </h2>
              {
                food.complements?.map((complement) => {
                  return (
                    <Complement
                      complement={complement}
                      key={complement.name}
                      complements={complements}
                      setComplements={setComplements}/>
                  )
                })
              }
          </div>
          <div className="flex items-center gap-1">
            <Quantity quantity={quantity} setQuantity={setQuantity}/>
            <Button variant="destructive" className="uppercase font-bold flex-1">Adicionar</Button>
          </div>
          <div className="flex justify-between border p-1">
            <h2 className="font-bold">Preço</h2>
            <p className="text-sm">{calculateTotal()}</p>
          </div>
      </div>
    </main>
  );
}
