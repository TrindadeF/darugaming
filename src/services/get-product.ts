'use server'

async function getProduct(slug: string) {
    const res = await fetch(`/api/product/${slug}`);
    return res
}

export { getProduct }