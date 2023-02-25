import type { TokenData } from "@/packages/Objects";
import type { ResultCode } from "@/packages/ResultCode";
export default interface IAuthStorage {
    setAccessToken(token: string): ResultCode;
    setUpdateToken(token: string): ResultCode;
    setImprint(key: string | undefined): ResultCode;
    getTokenData(): TokenData;
}
