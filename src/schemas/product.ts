import { FieldConfig } from "@/components/ui/input/generic";
import { z } from "zod";

// Schemas para estruturas aninhadas
const productAttributeSchema = z.object({
    name: z.string().min(1, { message: "Nome do atributo é obrigatório" }),
    values: z.array(
        z.object({
            value: z.string().min(1, { message: "Valor é obrigatório" }),
            price: z.number().min(0, { message: "Preço deve ser ≥ 0" }),
        })
    ).min(1, { message: "Adicione pelo menos um valor" }),
});

// Schema principal do Product
export const productSchema = z.object({
    categoryId: z.string().min(1, { message: "Selecione uma categoria" }),
    deviceId: z.string().optional(),
    platformId: z.string().optional(),
    genreId: z.string().optional(),
    title: z.string().min(1, { message: "Título é obrigatório" }),
    slug: z.string().optional(),
    image: z.string().optional(),
    video: z.string().min(1, { message: "URL do vídeo é obrigatória" }),
    poster: z.string().optional(),
    shortDescription: z.string().min(1, { message: "Descrição curta obrigatória" }),
    description: z.string().min(1, { message: "Descrição completa obrigatória" }),
    discount: z.number().optional(),
    finalAmount: z.number().min(0, { message: "Valor inválido" }),
    price: z.number().min(0, { message: "Preço inválido" }),
    minimum: z.string().optional(),
    recommended: z.string().optional(),
    version: z.number().optional(),
    rating: z.number().min(0).max(5, { message: "Avaliação deve ser 0-5" }),
    isTrending: z.number().optional(),
    isPreOrder: z.number().optional(),
    status: z.number().min(0).max(1, { message: "Status inválido" }),
    metaDescription: z.string().optional(),
    backgroundImage: z.string().optional(),
    accountEmail: z.string().email().optional(),
    attributes: z.array(productAttributeSchema).min(1, { message: "Adicione pelo menos um atributo" }),
    images: z.array(z.string()).min(1, { message: "Adicione pelo menos uma imagem" }),
    minimumOs: z.string().min(1, "Sistema operacional mínimo obrigatório"),
    minimumStorage: z.string().min(1, "Armazenamento mínimo obrigatório"),
    minimumProcessor: z.string().min(1, "Processador mínimo obrigatório"),
    minimumMemory: z.string().min(1, "Memória mínima obrigatória"),
    minimumGraphicsCard: z.string().min(1, "Placa de vídeo mínima obrigatória"),
    recommendedOs: z.string().min(1, "Sistema operacional recomendado obrigatório"),
    recommendedStorage: z.string().min(1, "Armazenamento recomendado obrigatório"),
    recommendedProcessor: z.string().min(1, "Processador recomendado obrigatório"),
    recommendedMemory: z.string().min(1, "Memória recomendada obrigatória"),
    recommendedGraphicsCard: z.string().min(1, "Placa de vídeo recomendada obrigatória"),
    licenseKey: z.string().optional(),
});


export function GetProductConfig(datas: any[] = [], chave: string[] = []): Record<string, FieldConfig<any>> {
    return {
        categoryId: {
            label: "Categoria",
            placeholder: "Selecione uma categoria",
            description: "Categoria principal do produto",
            inputType: "combobox",
            referenceId: "categoryId",
            chave: chave[0],
            datas: datas[0]
        },
        deviceId: {
            label: "Dispositivo",
            placeholder: "Selecione o dispositivo",
            description: "Dispositivo compatível",
            inputType: "combobox",
            referenceId: "deviceId",
            chave: chave[1],
            datas: datas[1]
        },
        platformId: {
            label: "Plataforma",
            placeholder: "Selecione a plataforma",
            description: "Plataforma de execução",
            inputType: "combobox",
            referenceId: "platformId",
            chave: chave[2],
            datas: datas[2]
        },
        title: {
            label: "Título",
            placeholder: "Digite o título do produto",
            description: "Nome completo do produto",
            inputType: "text"
        },
        video: {
            label: "Vídeo",
            placeholder: "URL do vídeo",
            description: "Link para vídeo demonstrativo",
            inputType: "text"
        },
        shortDescription: {
            label: "Descrição Curta",
            placeholder: "Descrição resumida (máx. 150 caracteres)",
            description: "Aparece nas listagens de produtos",
            inputType: "textarea"
        },
        description: {
            label: "Descrição Completa",
            placeholder: "Detalhes do produto...",
            description: "Descrição técnica completa",
            inputType: "textarea"
        },
        price: {
            label: "Preço",
            placeholder: "0.00",
            description: "Preço de venda",
            inputType: "number"
        },
        minimumOs: {
            label: "Sistema Operacional Mínimo",
            placeholder: "Ex: Windows 10 64-bit",
            description: "Versão mínima requerida do sistema operacional",
            inputType: "text"
        },
        minimumProcessor: {
            label: "Processador Mínimo",
            placeholder: "Ex: Intel Core i5-4460",
            description: "Processador mínimo necessário",
            inputType: "text"
        },
        minimumMemory: {
            label: "Memória Mínima",
            placeholder: "Ex: 8 GB RAM",
            description: "Quantidade mínima de memória RAM",
            inputType: "text"
        },
        minimumGraphicsCard: {
            label: "Placa de Vídeo Mínima",
            placeholder: "Ex: NVIDIA GTX 960 2GB",
            description: "Configuração mínima da placa de vídeo",
            inputType: "text"
        },
        minimumStorage: {
            label: "Armazenamento Mínimo",
            placeholder: "Ex: 50 GB disponíveis",
            description: "Espaço mínimo necessário em disco",
            inputType: "text"
        },
        recommendedOs: {
            label: "Sistema Operacional Recomendado",
            placeholder: "Ex: Windows 11 64-bit",
            description: "Versão ideal do sistema operacional",
            inputType: "text"
        },
        recommendedProcessor: {
            label: "Processador Recomendado",
            placeholder: "Ex: Intel Core i7-8700",
            description: "Processador ideal para melhor desempenho",
            inputType: "text"
        },
        recommendedMemory: {
            label: "Memória Recomendada",
            placeholder: "Ex: 16 GB RAM",
            description: "Quantidade ideal de memória RAM",
            inputType: "text"
        },
        recommendedGraphicsCard: {
            label: "Placa de Vídeo Recomendada",
            placeholder: "Ex: NVIDIA RTX 3060 8GB",
            description: "Configuração ideal da placa de vídeo",
            inputType: "text"
        },
        recommendedStorage: {
            label: "Armazenamento Recomendado",
            placeholder: "Ex: 100 GB SSD",
            description: "Espaço ideal em disco para melhor performance",
            inputType: "text"
        },
        attributes: {
            label: "Atributos",
            placeholder: "Adicionar atributo",
            description: "Variações do produto",
            inputType: "dynamic-list",
            fields: {
                name: { label: "Nome", placeholder: "Ex: Cor", inputType: "text" },
                values: {
                    label: "Valores",
                    inputType: "multi-text",
                    fields: {
                        value: { label: "Valor", placeholder: "Ex: Vermelho", inputType: "text" },
                        price: { label: "Preço Extra", placeholder: "0.00", inputType: "number" }
                    }
                }
            }
        },
        images: {
            label: "Imagens",
            placeholder: "URL da imagem",
            description: "Galeria do produto",
            inputType: "multi-text"
        },
        status: {
            label: "Status",
            placeholder: "",
            description: "Status de disponibilidade",
            inputType: "select",
            options: [
                { value: "1", label: "Ativo" },
                { value: "0", label: "Inativo" }
            ]
        }
    };
}