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
    'regStep'
>;
export type Session = {
    email: string;
    user: SessionUser;
    accessToken: string;
};