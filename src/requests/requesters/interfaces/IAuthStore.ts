import type {TokenData} from "@/types/DataTypes";

export default interface IAuthStore {
    setAccessToken(token: string | undefined): void,

    setUpdateToken(token: string | undefined): void,

    setImprint(key: string | undefined): void,

    setTokens(token: TokenData | undefined): void,

    getTokens(): { [ind in keyof TokenData]: string | undefined },
}
