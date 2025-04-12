"use client";

import OrderListPurchased from "@/app/components/OrderListPurchased";
import Tabbar from "@/app/components/Tabbar";

export default function Orders() {
  const orders = [
    {
      id: 1,
      id_order: "#3098029384012",
      data: "March 11, 2025",
      payment: "PIX",
      price: "R$ 167,92",
      status: "Released",
      purchasedProducts: [
        "Mortal Kombat X",
        "LEGO Star Wars: The Force Awakens - Deluxe Edition",
        "The LEGO Ninjago Movie Video Game",
      ]
    },
    {
      id: 2,
      id_order: "#3098029384012",
      data: "March 11, 2025",
      payment: "PIX",
      price: "R$ 167,92",
      status: "Released",
      purchasedProducts: [
        "Mortal Kombat X",
        "LEGO Star Wars: The Force Awakens - Deluxe Edition",
        "The LEGO Ninjago Movie Video Game",
      ]
    },
    {
      id: 3,
      id_order: "#3098029384012",
      data: "March 11, 2025",
      payment: "PIX",
      price: "R$ 167,92",
      status: "Released",
      purchasedProducts: [
        "Mortal Kombat X",
        "LEGO Star Wars: The Force Awakens - Deluxe Edition",
        "The LEGO Ninjago Movie Video Game",
      ]
    },
    {
      id: 4,
      id_order: "#3098029384012",
      data: "March 11, 2025",
      payment: "PIX",
      price: "R$ 167,92",
      status: "Released",
      purchasedProducts: [
        "Mortal Kombat X",
        "LEGO Star Wars: The Force Awakens - Deluxe Edition",
        "The LEGO Ninjago Movie Video Game",
      ]
    },
    {
      id: 5,
      id_order: "#3098029384012",
      data: "March 11, 2025",
      payment: "PIX",
      price: "R$ 167,92",
      status: "Released",
      purchasedProducts: [
        "Mortal Kombat X",
        "LEGO Star Wars: The Force Awakens - Deluxe Edition",
        "The LEGO Ninjago Movie Video Game",
      ]
    },
    {
      id: 6,
      id_order: "#3098029384012",
      data: "March 11, 2025",
      payment: "PIX",
      price: "R$ 167,92",
      status: "Released",
      purchasedProducts: [
        "Mortal Kombat X",
        "LEGO Star Wars: The Force Awakens - Deluxe Edition",
        "The LEGO Ninjago Movie Video Game",
      ]
    },
    {
      id: 7,
      id_order: "#3098029384012",
      data: "March 11, 2025",
      payment: "PIX",
      price: "R$ 167,92",
      status: "Released",
      purchasedProducts: [
        "Mortal Kombat X",
        "LEGO Star Wars: The Force Awakens - Deluxe Edition",
        "The LEGO Ninjago Movie Video Game",
      ]
    },
    {
      id: 8,
      id_order: "#3098029384012",
      data: "March 11, 2025",
      payment: "PIX",
      price: "R$ 167,92",
      status: "Released",
      purchasedProducts: [
        "Mortal Kombat X",
        "LEGO Star Wars: The Force Awakens - Deluxe Edition",
        "The LEGO Ninjago Movie Video Game",
      ]
    },
    {
      id: 9,
      id_order: "#3098029384012",
      data: "March 11, 2025",
      payment: "PIX",
      price: "R$ 167,92",
      status: "Released",
      purchasedProducts: [
        "Mortal Kombat X",
        "LEGO Star Wars: The Force Awakens - Deluxe Edition",
        "The LEGO Ninjago Movie Video Game",
      ]
    },
  ];

  return (
    <div className="md:w-[1100px] w-full container mx-auto mt-20  relative text-white">
      <div className="md:p-10 p-5 backdrop-blur-md clip-path-element" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
        <Tabbar />
        <div className="flex flex-col gap-6 mt-6">
          <OrderListPurchased orders={orders}/>
        </div>
      </div>
    </div>
  );
}