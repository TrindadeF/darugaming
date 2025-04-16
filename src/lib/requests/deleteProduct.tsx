export async function deleteProduct(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });

    if (!res.ok) {
        throw new Error("Failed to delete product");
    }

    return res.json();
}