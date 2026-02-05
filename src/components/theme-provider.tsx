import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark"

type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
    theme: "dark",
    setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
    children,
    ...props
}: ThemeProviderProps) {
    const theme = "dark"

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove("light")
        root.classList.add("dark")
    }, [])

    const value = {
        theme,
        setTheme: () => null,
    }

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    return {
        theme: "dark",
        setTheme: () => null
    }
}
