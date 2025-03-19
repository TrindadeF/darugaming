"use client"

import * as React from "react"
import { Search } from "lucide-react"


import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const games = [
    { title: 'lol', id: '123' },
    { title: 'dota', id: '1234' }
]

function GlobalSearch() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const router = useRouter()
    const inputRef = useRef<HTMLInputElement>(null)
    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey) && inputRef.current) {
                e.preventDefault()
                setOpen((open) => !open)
                inputRef.current.focus()
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[230px] justify-between text-muted-foreground"
                >
                    <Search className="opacity-50" />
                    Search...
                    <div className="flex gap-1">
                        <p className="text-sm text-muted-foreground">
                            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                                <span className="text-xs">Ctrl</span>+ K
                            </kbd>
                        </p>
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[230px] p-0">
                <Command>
                    <CommandInput ref={inputRef} placeholder="Search a game..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No game found.</CommandEmpty>
                        <CommandGroup heading={'Games'}>
                            {games.map((game) => (
                                <CommandItem
                                    key={game.id}
                                    value={game.title}
                                    onSelect={(currentTarget) => {
                                        router.push(`/projects/${currentTarget}`)
                                        setOpen(false)
                                    }}
                                >
                                    {game.title}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                        <CommandGroup heading={'Settings'}>
                            <CommandItem
                                key={0}
                                value={'account'}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                            >
                                Account
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
export { GlobalSearch }