import type {TokenData} from "@/types/DataTypes";
import type {ResultCode} from "@/types/ResultCode";

export default interface IAuthStore {
    setAccessToken(token: string): ResultCode,
    setUpdateToken(token: string): ResultCode,
    setImprint(key: string | undefined): ResultCode,
    setTokens(token: TokenData): void,
    getTokens(): TokenData,
}
