import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { AlignJustify } from "lucide-react"
import { Links } from "./Links"

export function Menu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" className="bg-yellow-500 text-white hover:bg-yellow-600 hover:text-white">
          <AlignJustify strokeWidth={2} />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-green-800 border-green-600">
          <Links />
      </SheetContent>
    </Sheet>
  )
}
