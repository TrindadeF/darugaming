const mockTicket = [
    {
        _id: "1",
        userId: 101,
        name: "João da Silva",
        email: "joao@example.com",
        ticket: "Problema no login",
        subject: "Não consigo acessar minha conta",
        status: false,
        priority: true,
        lastReply: new Date(),
        messages: [
            {
                _id: "m1",
                supportTicketId: 1,
                adminId: 1,
                message: "Você pode tentar redefinir sua senha?",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ],
        read: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        _id: "2",
        userId: 102,
        name: "Maria Oliveira",
        email: "maria@example.com",
        ticket: "Erro no pagamento",
        subject: "Meu cartão foi recusado",
        status: true,
        priority: false,
        lastReply: new Date(),
        messages: [],
        read: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
]

export async function getTickets(): Promise<SupportTicket[]> {
    return mockTicket
}