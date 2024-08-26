"use client"
import { FoodOptionButton } from './FoodOptionButton'
import { categorys } from '@/constants/constants'
import FoodOptionButtonIcon from './FoodOptionButtonIcon'


export default function FoodOptions() {

  return (
    <header className='h-fit bg-green-700 w-full py-2 flex justify-center gap-2'>
        {categorys.map((category)=>{
            return (
            <FoodOptionButton categoryType={category} key={category}>
                <FoodOptionButtonIcon category={category}/>
            </FoodOptionButton>)
        })}
    </header>
  )
}
