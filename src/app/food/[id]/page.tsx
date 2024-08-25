/* eslint-disable @next/next/no-img-element */
"use client"

import { Complement } from "@/components/Complement";
import { Quantity } from "@/components/quantity";
import { Button } from "@/components/ui/button";
import { ComplementType } from "@/types/food";
import { pageProps } from "@/types/page";
import { useState } from "react";
import { ArrowLeft} from "lucide-react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getFood } from "@/api/food";
import { calculateTotal } from "@/lib/calculation";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import LoadingPage from "@/components/LoadingPage";
import ErrorPage from "@/components/ErrorPage";
import NotExist from "@/components/NotExist";
import { Card } from "@/components/ui/card";

export default function FoodById({params}:pageProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const {addItem} = useCart();
  
  const [complements, setComplements] = useState<ComplementType[]>([]);
  const { isPending, error, data } = useQuery({
    queryKey: ['food'],
    queryFn: async ()=> await getFood(params.id),
    refetchOnWindowFocus: false
  })
  const {back} = useRouter();

  const turnBack = () => {
    back();
  }
  const handleAddItem = () => {
    addItem({
      category: String(data?.category),
      id: String(data?.id),
      name: String(data?.name),
      price: Number(data?.price),
      quantity,
      complements,
      thumbnail: String(data?.thumbnail),
     });

     toast.success("Item adicionado.");
  }


  if(!data && !isPending && !error && data==null) return <NotExist/>;
  if(!data && isPending) return <LoadingPage/>;
  if(error) return <ErrorPage error={error.message}/>;
  if(data) return (
    <main className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-center">
      <div className="w-[90vw] sm:w-96 flex p-0 mb-2">
        <Button onClick={turnBack} variant="outline"><ArrowLeft strokeWidth={1}/> Voltar</Button>
      </div>
      <Card className="w-[90vw] sm:w-96 flex flex-col gap-2 border p-2 rounded-md shadow-md h-fit">
          <h1 className="font-black uppercase">{data?.name}</h1>
          <div className="w-full h-40 overflow-hidden rounded-md">
              <img src={data?.thumbnail} alt="foto do prato" className="w-full h-full object-cover"/>
          </div>
          <hr />
          <p className="bg-primary-foreground text-xs h-14 p-1">
            {data?.description}
          </p>
          <div className="flex flex-col gap-1 p-1">
            <h2 className="font-black uppercase border-b text-red-500">
              Complementos
            </h2>
              {
                data?.complements?.map((complement) => {
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
            <Button variant="destructive" className="uppercase font-bold flex-1" onClick={handleAddItem}>Adicionar</Button>
          </div>
          <div className="flex justify-between border p-1">
            <h2 className="font-bold">Preço</h2>
            <p className="text-sm">{calculateTotal({data, complements, quantity})}</p>
          </div>
      </Card>
    </main>
  );
}
