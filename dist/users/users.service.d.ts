export type UserType = {
    userId: number;
    userName: string;
    password: string;
} | undefined;
export declare class UsersService {
    private readonly users;
    findOne(username: string): Promise<UserType>;
}
