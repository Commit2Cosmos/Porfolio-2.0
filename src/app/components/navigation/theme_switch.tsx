'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"


export default function ThemeSwitch() {

    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() =>  setMounted(true), [])

    if (mounted) {
        if (resolvedTheme === 'dark') {
            return <FiSun className="h-full w-auto pointer-events-auto hover:cursor-pointer" onClick={() => setTheme('light')} />
        }
    
        if (resolvedTheme === 'light') {
            return <FiMoon className="h-full w-auto pointer-events-auto hover:cursor-pointer" onClick={() => setTheme('dark')} />
        }
    }
}