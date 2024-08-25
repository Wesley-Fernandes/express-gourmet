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
        <Button onClick={handleDecrement} size={"icon"} className='bg-yellow-500 hover:bg-yellow-600'>
            <Minus strokeWidth={1}/>
        </Button>
        <Input type="number" disabled value={quantity} min={1} className='w-10 pr-0 text-center border-green-700 text-white bg-green-900'/>
        <Button onClick={handleIncrement} size={"icon"} className='bg-yellow-500 hover:bg-yellow-600'>
            <Plus strokeWidth={1} />
        </Button>
    </div>
  )
}
