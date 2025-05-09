'use client';

import { ComponentProps } from "react"
import { formatDistanceToNow } from "date-fns"

import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { useMail } from "./use-mail"



interface MailListProps {
    items: SupportTicket[]
}

export function MailList({ items }: MailListProps) {
    const [mail, setMail] = useMail()

    return (
        <ScrollArea className="h-screen">
            <div className="flex flex-col gap-2 p-4 pt-0">
                {items.map((item) => (
                    <button
                        key={item._id}
                        className={cn(
                            "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                            mail.selected === item._id && "bg-muted"
                        )}
                        onClick={() =>
                            setMail({
                                ...mail,
                                selected: item._id,
                            })
                        }
                    >
                        <div className="flex w-full flex-col gap-1">
                            <div className="flex items-center">
                                <div className="flex items-center gap-2">
                                    <div className="font-semibold">{item.name}</div>
                                    {!item.read && (
                                        <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                                    )}
                                </div>
                                <div
                                    className={cn(
                                        "ml-auto text-xs",
                                        mail.selected === item._id
                                            ? "text-foreground"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {formatDistanceToNow(new Date(item.createdAt), {
                                        addSuffix: true,
                                    })}
                                </div>
                            </div>
                            <div className="text-xs font-medium">{item.subject}</div>
                        </div>
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                            {item.messages?.[0]?.message?.substring(0, 300) || "Sem mensagens"}

                        </div>
                    </button>
                ))}
            </div>
        </ScrollArea>
    )
}

function getBadgeVariantFromLabel(
    label: string
): ComponentProps<typeof Badge>["variant"] {
    if (["work"].includes(label.toLowerCase())) {
        return "default"
    }

    if (["personal"].includes(label.toLowerCase())) {
        return "outline"
    }

    return "secondary"
}