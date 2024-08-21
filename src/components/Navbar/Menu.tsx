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
        <Button variant="outline" size="icon">
          <AlignJustify strokeWidth={1} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b pb-2 mb-2 h-14">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
          <Links />
      </SheetContent>
    </Sheet>
  )
}
