


import { useCart } from "@/components/providers/cart";
import { Button } from "@/components/ui/button";
import { Cart } from "@/components/ui/cart";
import type { Meta, StoryObj } from "@storybook/react";
const mockItem: Product[] = [
    {
        _id: "1",
        categoryId: "cat1",
        title: "Cyberpunk 2077",
        slug: "cyberpunk-2077",
        image: "https://example.com/cyberpunk.jpg",
        video: "https://example.com/cyberpunk-trailer.mp4",
        poster: "https://example.com/cyberpunk-poster.jpg",
        shortDescription: "A futuristic open-world RPG.",
        description: "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour, and body modification.",
        discount: 20,
        finalAmount: 40,
        price: 50,
        rating: 4.5,
        status: 1,
        metaDescription: "Experience the future with Cyberpunk 2077.",
        backgroundImage: "https://example.com/cyberpunk-bg.jpg",
        attributes: [
            { _id: "attr1", name: "Platform", values: [{ price: 1, value: "PC" }] },
            { _id: "attr2", name: "Genre", values: [{ price: 1, value: "RPG" }] },
        ],
        images: [
            "https://example.com/cyberpunk1.jpg",
            "https://example.com/cyberpunk2.jpg",
        ],
        createdAt: new Date("2023-01-01"),
        updatedAt: new Date("2023-01-02"),
    },
    {
        _id: "2",
        categoryId: "cat2",
        title: "The Witcher 3: Wild Hunt",
        slug: "the-witcher-3",
        image: "https://example.com/witcher3.jpg",
        video: "https://example.com/witcher3-trailer.mp4",
        poster: "https://example.com/witcher3-poster.jpg",
        shortDescription: "An epic fantasy RPG.",
        description: "The Witcher 3: Wild Hunt is a story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.",
        finalAmount: 30,
        price: 30,
        rating: 5,
        status: 1,
        metaDescription: "Embark on an epic journey in The Witcher 3.",
        backgroundImage: "https://example.com/witcher3-bg.jpg",
        attributes: [
            { _id: "attr1", name: "Platform", values: [{ price: 1, value: "PC" }] },
            { _id: "attr2", name: "Genre", values: [{ price: 1, value: "RPG" }] },
        ],
        images: [
            "https://example.com/witcher3-1.jpg",
            "https://example.com/witcher3-2.jpg",
        ],
        createdAt: new Date("2023-02-01"),
        updatedAt: new Date("2023-02-02"),
    },
    {
        _id: "3",
        categoryId: "cat3",
        title: "FIFA 23",
        slug: "fifa-23",
        image: "https://example.com/fifa23.jpg",
        video: "https://example.com/fifa23-trailer.mp4",
        poster: "https://example.com/fifa23-poster.jpg",
        shortDescription: "The latest installment in the FIFA series.",
        description: "FIFA 23 brings the game even closer to the real thing with groundbreaking technology, enhanced gameplay, and more.",
        discount: 10,
        finalAmount: 54,
        price: 60,
        rating: 4.2,
        status: 1,
        metaDescription: "Experience the world's game with FIFA 23.",
        backgroundImage: "https://example.com/fifa23-bg.jpg",
        attributes: [
            { _id: "attr1", name: "Platform", values: [{ price: 1, value: "PC" }] },
            { _id: "attr2", name: "Genre", values: [{ price: 1, value: "Sports" }] },
        ],
        images: [
            "https://example.com/fifa23-1.jpg",
            "https://example.com/fifa23-2.jpg",
        ],
        createdAt: new Date("2023-03-01"),
        updatedAt: new Date("2023-03-02"),
    },
    {
        _id: "4",
        categoryId: "cat4",
        title: "Call of Duty: Modern Warfare II",
        slug: "cod-mw2",
        image: "https://example.com/cod-mw2.jpg",
        video: "https://example.com/cod-mw2-trailer.mp4",
        poster: "https://example.com/cod-mw2-poster.jpg",
        shortDescription: "The next generation of Call of Duty.",
        description: "Call of Duty: Modern Warfare II delivers an unprecedented level of realism and immersion, with state-of-the-art graphics and gameplay.",
        finalAmount: 70,
        price: 70,
        rating: 4.7,
        status: 1,
        metaDescription: "Join the fight in Call of Duty: Modern Warfare II.",
        backgroundImage: "https://example.com/cod-mw2-bg.jpg",
        attributes: [
            { _id: "attr1", name: "Platform", values: [{ price: 1, value: "PC" }] },
            { _id: "attr2", name: "Genre", values: [{ price: 1, value: "FPS" }] },
        ],
        images: [
            "https://example.com/cod-mw2-1.jpg",
            "https://example.com/cod-mw2-2.jpg",
        ],
        createdAt: new Date("2023-04-01"),
        updatedAt: new Date("2023-04-02"),
    },
    {
        _id: "5",
        categoryId: "cat5",
        title: "Elden Ring",
        slug: "elden-ring",
        image: "https://example.com/elden-ring.jpg",
        video: "https://example.com/elden-ring-trailer.mp4",
        poster: "https://example.com/elden-ring-poster.jpg",
        shortDescription: "A new fantasy action RPG.",
        description: "Elden Ring is a vast, open-world RPG developed by FromSoftware and written by George R.R. Martin, offering a rich story and challenging gameplay.",
        discount: 15,
        finalAmount: 50,
        price: 60,
        rating: 4.8,
        status: 1,
        metaDescription: "Embark on an epic journey in Elden Ring.",
        backgroundImage: "https://example.com/elden-ring-bg.jpg",
        attributes: [
            { _id: "attr1", name: "Platform", values: [{ price: 1, value: "PC" }] },
            { _id: "attr2", name: "Genre", values: [{ price: 1, value: "RPG" }] },
        ],
        images: [
            "https://example.com/elden-ring-1.jpg",
            "https://example.com/elden-ring-2.jpg",
        ],
        createdAt: new Date("2023-05-01"),
        updatedAt: new Date("2023-05-02"),
    },
];

const meta: Meta<typeof Cart> = {
    title: "Components/Widgets/Cart",
    component: Cart,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        nextjs: {
            appDirectory: true,
        },
    },
};

export default meta;

type Story = StoryObj<typeof Cart>;

export const Default: Story = {
    render: () => {
        const { addToCart } = useCart()
        const handleAddMock = () => {
            addToCart(mockItem[Math.floor(Math.random() * mockItem.length)])
        }
        return <div className="flex gap-4 w-screen h-screen items-center justify-center">
            <Button size={'icon'} onClick={handleAddMock} variant={'outline'}>+</Button>
            <Cart />
        </div>
    },
};

