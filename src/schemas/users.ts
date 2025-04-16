import { FieldConfig } from "@/components/ui/input/generic"
import { z } from "zod"

export const userSchema = z.object({
    username: z.string().min(3, "Mínimo de 3 caracteres"),
    email: z.string().email("Email inválido"),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    balance: z.number().min(0, "Saldo não pode ser negativo"),
    status: z.boolean(),
    mobile: z.string().optional(),
    address: z.string().optional(),
})

export function GetUserConfig(): Record<string, FieldConfig<any>> {
    return {
        username: {
            label: "Nome de usuário",
            placeholder: "Digite o username",
            description: "Identificador único do usuário (não pode ser alterado)",
            inputType: "text"
        },
        email: {
            label: "Email",
            placeholder: "exemplo@email.com",
            description: "Endereço de email principal do usuário",
            inputType: "text"
        },
        firstName: {
            label: "Nome",
            placeholder: "Primeiro nome",
            description: "Nome legal do usuário (opcional)",
            inputType: "text"
        },
        lastName: {
            label: "Sobrenome",
            placeholder: "Último nome",
            description: "Sobrenome do usuário (opcional)",
            inputType: "text"
        },
        balance: {
            label: "Saldo",
            placeholder: "0.00",
            description: "Saldo atual da carteira do usuário",
            inputType: "number"
        },
        status: {
            label: "Status",
            description: "Estado da conta do usuário no sistema",
            placeholder: "Selecione o status",
            inputType: "select",
            options: [
                { value: "true", label: "Ativo" },
                { value: "false", label: "Inativo" }
            ]
        },
        mobile: {
            label: "Celular",
            placeholder: "+55 (00) 00000-0000",
            description: "Número de telefone com código do país",
            inputType: "text"
        },
        address: {
            label: "Endereço",
            placeholder: "Rua, Número, Cidade",
            description: "Endereço físico completo para correspondência",
            inputType: "textarea"
        },
        // Adicionando campos importantes que estavam faltando
        image: {
            label: "Foto de Perfil",
            placeholder: "URL da imagem",
            description: "Avatar ou foto do perfil do usuário",
            inputType: "text"
        },
        kycData: {
            label: "Dados KYC",
            placeholder: "Dados de verificação",
            description: "Informações de Know Your Customer",
            inputType: "textarea"
        },
        banReason: {
            label: "Motivo da Bloqueio",
            placeholder: "Descreva o motivo...",
            description: "Registro obrigatório para contas desativadas",
            inputType: "textarea"
        }
    }
}