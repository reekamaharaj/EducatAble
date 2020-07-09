declare namespace NodeJS {
    export interface ProcessEnv {
        SECRET: string;
    }
}

declare namespace Express {
    export interface Request {
        user: string;
    }
}
