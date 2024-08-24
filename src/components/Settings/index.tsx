import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Jumper } from './Jumper'
import { BookDown, BookPlus, BookX, UserRoundPen, UserX } from 'lucide-react'
export default function Settings() {
  return (
    <Card className="w-[320px] sm:w-96 shadow-md">
        <CardHeader>
          <CardTitle>Gerenciar o site</CardTitle>
          <CardDescription>Você pode gerenciar os produtos aqui.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="flex-1 w-full p-1 border rounded-md">
              <Jumper label="Adicionar item" to="/settings/create">
                <BookPlus strokeWidth={1} size={15}/>
              </Jumper>
              <Jumper label="Remover item" to="/settings/remove">
                <BookX strokeWidth={1} size={15}/>
              </Jumper>
              <Jumper label="Atualizar item" to="/settings/update">
                <BookDown strokeWidth={1} size={15}/>
              </Jumper>
              <Jumper label="Atualizar um usuario" to="/settings/update-user">
                <UserRoundPen strokeWidth={1} size={15}/>
              </Jumper>
              <Jumper label="Deletar um usuario" to="/settings/delete-user">
                <UserX strokeWidth={1} size={15}/>
              </Jumper>
          </ul>
        </CardContent>
      </Card>
  )
}
