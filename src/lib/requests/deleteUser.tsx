export async function deleteUser(userId: string): Promise<void> {
    const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to delete user');
    }
}