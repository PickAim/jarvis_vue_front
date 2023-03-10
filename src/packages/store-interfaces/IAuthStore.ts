import type {TokenData} from "@/Objects";
import type {ResultCode} from "@/ResultCode";

export default interface IAuthStore {
    setAccessToken(token: string): ResultCode,
    setUpdateToken(token: string): ResultCode,
    setImprint(key: string | undefined): ResultCode,
    getTokenData(): TokenData,
}
