'use client'

import * as React from "react"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"

import {
    SearchBox,
    Hits,
    Configure
} from 'react-instantsearch-dom'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandInputWithMeili,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"


function CustomHit({ hit }: { hit: any }) {
    const router = useRouter()

    return (
        <CommandItem
            key={hit.objectID}
            value={hit.title}
            onSelect={() => {
                router.push(`/projects/${hit.objectID}`)
            }}
        >
            {hit.title}
        </CommandItem>
    )
}

function GlobalSearch() {
    const router = useRouter()
    const [open, setOpen] = React.useState(false)


    React.useEffect(() => {
        const handleShortcut = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault()
                setOpen(prev => !prev)

            }
        }

        document.addEventListener('keydown', handleShortcut)
        return () => document.removeEventListener('keydown', handleShortcut)
    }, [])

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className="w-[150px] md:w-[230px] justify-between text-muted-foreground"
                >
                    <Search className="h-4 w-4 opacity-50" />
                    Pesquisar...
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[230px] p-0">
                <Command shouldFilter={false}>
                    <CommandInputWithMeili placeholder="Search a game" className="focus-visible:ring-0 " />
                    {/* <SearchBox

                        className={cn(
                            "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50")}
                        submit={<></>}
                    /> */}
                    <CommandList>
                        <Configure hitsPerPage={5} />
                        <Hits hitComponent={CustomHit} />
                        <CommandEmpty>Nenhum resultado encontrado</CommandEmpty>

                        <CommandGroup heading="Configurações">
                            <CommandItem
                                onSelect={() => {
                                    router.push('/account')
                                    setOpen(false)
                                }}
                            >
                                Minha Conta
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export { GlobalSearch }