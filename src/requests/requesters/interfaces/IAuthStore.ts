import type {TokenData} from "@/types/DataTypes";
import type {ResultCode} from "@/types/ResultCode";

export default interface IAuthStore {
    setAccessToken(token: string): void,

    setUpdateToken(token: string): void,

    setImprint(key: string | undefined): void,

    setTokens(token: TokenData): void,

    getTokens(): TokenData,
}
