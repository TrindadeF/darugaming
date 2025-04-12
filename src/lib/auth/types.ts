type SessionUser = Pick<User,
    '_id' |
    'email' |
    'username' |
    'image' |
    'status' |
    'balance' |
    'kv' |
    'ev' |
    'sv' |
    'countryCode' |
    'regStep' |
    'createdAt'
>;
export type Session = {
    email: string;
    user: SessionUser;
    accessToken: string;
};