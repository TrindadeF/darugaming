'use client';

import { getTickets } from "@/lib/requests/getTickets"
import { atom, useAtom } from "jotai"

const tickets = await getTickets()

type Config = {
    selected: SupportTicket["_id"] | null
}

const configAtom = atom<Config>({
    selected: tickets.length > 0 ? tickets[0]._id : null,
})


export function useMail() {
    return useAtom(configAtom)
}