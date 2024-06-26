"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


export function SelectWords({ nouns }: { nouns: string[] }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? nouns.find((noun: string) => noun === value)
                        : "Select noun..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Select Word" />
                    <CommandEmpty>No word found.</CommandEmpty>

                    <CommandGroup>
                        {nouns && Array.isArray(nouns) && nouns.length > 0 && nouns.map((noun) => (<CommandItem
                            key={noun}
                            value={noun}
                            onSelect={(currentValue: string) => {
                                setValue(currentValue === value ? "" : currentValue)
                                setOpen(false)
                            }}
                        >
                            <Check
                                className={cn(
                                    "mr-2 h-4 w-4",
                                    value === noun ? "opacity-100" : "opacity-0"
                                )}
                            />
                            {noun}
                        </CommandItem>
                        ))}
                    </CommandGroup>

                </Command>
            </PopoverContent>
        </Popover>
    )
}

