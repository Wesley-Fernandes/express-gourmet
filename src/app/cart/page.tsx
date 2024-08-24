/* eslint-disable @next/next/no-img-element */
"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/useCart";
import { calculateCartItems, calculateTotal } from "@/lib/calculation";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const {cart, addQuantity, removeQuantity} = useCart();
  return (
    <main className="flex h-[calc(100vh-3.5rem)] min-h-[calc(100vh-3.5rem)] flex-1 flex-col">
      <section className="sm:container flex flex-col flex-1">
        <header className="h-14 flex items-center px-4  border-b bg-primary-foreground">
          <h1 className="font-bold">Carrinho</h1>
        </header>
        <ul className="p-2 flex flex-col gap-4 h-[calc(100%-7rem)] overflow-y-scroll">
          {
            cart?.map((item) => (
              <li className="border flex items-center min-h-32 gap-2 px-2 shadow-lg rounded-lg" key={item.id}>
                <div className="h-28 w-32 rounded-md overflow-hidden border">
                  <img src={item.thumbnail} alt={item.name} className="h-full w-full object-fill p-1 rounded-lg"/>
                </div>
                <div className="flex flex-col justify-start flex-1 h-full gap-1">
                  <h2 className="font-black capitalize pt-1">
                    <Link href={`/food/${item.id}`}>
                      {item.name}
                    </Link>
                  </h2>
                  <span className="px-1 py-0.5 border w-fit rounded-2xl text-xs lowercase">{item.category}</span>
                  <div>
                    <ul>
                      {item.complements?.map((c)=>(
                        <li key={c.name} className="flex justify-between text-xs">
                          <span>{c.name}</span>
                          <span className="text-red-400">+ {c.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-1 justify-between items-end pb-2">
                  <div className="flex items-center w-fit gap-1">
                    <Button size="icon" className="h-8 w-8" onClick={()=>addQuantity(item.id)}><Plus/></Button>
                    <Input value={item.quantity} className="h-8 w-8 p-0 text-center" disabled/>
                    <Button size="icon" className="h-8 w-8" onClick={()=>removeQuantity(item.id)}><Minus/></Button>
                  </div>
                  <span className="font-bold text-red-500 pointer-events-none">{calculateTotal({data: (item) as any, complements: item?.complements!, quantity: item.quantity})}</span>
                  </div>
                </div>
            </li>
            ))
          }
            
        </ul>
        <footer className="h-14 border-t px-4 flex items-center justify-between">
          <Button>Comprar</Button>
          <div className="flex flex-col items-end">
            <span className="font-bold text-red-500">Total: {calculateCartItems({cart})}</span>
            <span className="text-xs pl-2">({cart.length} itens)</span>
          </div>
        </footer>
      </section>
    </main>
  );
}
