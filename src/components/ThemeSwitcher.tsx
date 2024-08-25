"use client"
import { useTheme } from 'next-themes'
import React from 'react'
import { Card } from './ui/card'
import { Switch } from './ui/switch'

export default function ThemeSwitcher() {
    const { setTheme, theme } = useTheme()
    const toggleTheme = (value: boolean) => {
        setTheme(theme => !value ? 'light' : 'dark')
    }
  return (
    <Card className='h-16 flex items-center px-3 w-[320px] sm:w-96 justify-between'>
        <span>{theme === 'light' ? "Modo claro": "Modo escuro"}</span>
        <Switch onCheckedChange={toggleTheme} checked={theme==="light"?false:true}/>
    </Card>
  )
}
