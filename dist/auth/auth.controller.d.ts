import { AuthService } from './auth.service';
export declare class AuthController {
    private authservice;
    constructor(authservice: AuthService);
    signIn(signInDto: Record<string, any>): Promise<any>;
    getProfile(req: any): any;
}
