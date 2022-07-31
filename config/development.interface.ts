export interface IToken {
    secret: string;
    expiry: string;
}

export interface ITokens {
    access: IToken;
    refresh: IToken;
}

export interface ISecurity {
    token: ITokens;
}

export interface IServer {
    protocol: string;
    hostname: string;
    port: string;
}

export interface IDB {
    client: string;
    database: string;
    username: string;
    password: string;
    port: string;
    poolMax?: number;
    poolMin?: number;
}

export interface IConfig {
    server: IServer;
    security: ISecurity;
    db: IDB;
}