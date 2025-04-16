import { UserTable } from "@/components/admin/customer"

const mockUsers: User[] = [
    {
        _id: "user_123",
        username: "johndoe",
        email: "john@example.com",
        balance: 1500.00,
        status: true,
        password: "hashedpassword",
        pin: 1234,
        kv: true,
        ev: true,
        sv: false,
        ts: true,
        tv: false,
        regStep: true,
        createdAt: new Date(),
        updatedAt: new Date()
    }]


export default function Page() {
    return (
        <div className="w-full">
            <UserTable data={mockUsers} />
        </div>
    )
}