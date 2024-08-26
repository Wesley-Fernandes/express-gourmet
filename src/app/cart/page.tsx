/* eslint-disable @next/next/no-img-element */
"use client"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/useCart";
import { calculateCartItems, calculateTotal } from "@/lib/calculation";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const {cart, addQuantity, removeQuantity} = useCart();
  return (
    <main className="flex h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)] flex-1 flex-col">
      <section className="flex flex-col flex-1">
        <header className="h-14 flex items-center px-4 bg-transparent border-b border-b-yellow-600 bg-gradient-to-r from-yellow-300 to-amber-500">
          <h1 className="font-black text-lg text-white uppercase">Carrinho</h1>
        </header>
        <div className="p-2 flex flex-col gap-4 h-[calc(100%-7rem)] overflow-y-scroll">
          {
            cart?.map((item) => (
              <Card className="flex items-center min-h-32 gap-2 px-2 bg-green-900 border-green-800" key={item.id}>
                <div className="h-28 w-32 rounded-md overflow-hidden bg-green-800">
                  <img src={item.thumbnail} alt={item.name} className="h-full w-full object-fill p-1 rounded-lg"/>
                </div>
                <div className="flex flex-col justify-start flex-1 h-full gap-1">
                  <h2 className="font-black capitalize pt-1 text-white">
                    <Link href={`/food/${item.id}`}>
                      {item.name}
                    </Link>
                  </h2>
                  <span className="px-1.5 py-0.5 border w-fit rounded-2xl text-xs lowercase bg-green-800 text-white border-green-700 shadow-md">{item.category}</span>
                  <div>
                    <ul>
                      {item.complements?.map((c)=>(
                        <li key={c.name} className="flex justify-between text-xs font-normal text-secondary-foreground/50">
                          <span>{c.name}</span>
                          <span className="text-secondary-foreground/50">+ {c.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-1 justify-between items-end pb-2">
                  <div className="flex items-center w-fit gap-1">
                    <Button size="icon" className='bg-yellow-500 hover:bg-yellow-600' onClick={()=>addQuantity(item.id)}><Plus/></Button>
                    <Input value={item.quantity} className='w-10 p-0 text-center border-green-700 text-white bg-green-900' disabled/>
                    <Button size="icon" className='bg-yellow-500 hover:bg-yellow-600' onClick={()=>removeQuantity(item.id)}><Minus/></Button>
                  </div>
                  <span className="font-bold text-white pointer-events-none">{calculateTotal({data: (item) as any, complements: item?.complements!, quantity: item.quantity})}</span>
                  </div>
                </div>
            </Card>
            ))
          }
        </div>
        <footer className="h-14 border-t border-t-green-500 px-4 flex items-center justify-between">
          <Button>Comprar</Button>
          <div className="flex flex-col items-end">
            <span className="font-bold text-amber-500">Total: {calculateCartItems({cart})}</span>
            <span className="text-xs pl-2 text-white">({cart.length} itens)</span>
          </div>
        </footer>
      </section>
    </main>
  );
}
