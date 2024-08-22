"use client"
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';

interface Props{
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
}
export function Quantity({quantity, setQuantity}:Props) {
    const handleDecrement = () => {
        if(quantity > 1){
            setQuantity((prev:number)=> prev - 1)
        };
    }

    const handleIncrement = () => {
        if(quantity < 9){
            setQuantity((prev:number)=> prev + 1)
        };
    }
  return (
    <div className='flex items-center w-fit gap-1 py-1'>
        <Button onClick={handleDecrement} size={"icon"} variant="outline">
            <Minus strokeWidth={1}/>
        </Button>
        <Input type="number" disabled value={quantity} min={1} className='w-12 p-0 text-center'/>
        <Button onClick={handleIncrement} size={"icon"} variant="outline">
            <Plus strokeWidth={1} />
        </Button>
    </div>
  )
}
