import {ResultCodes, TokenData} from "@/packages/Entities";

export default interface IAuthStorage{
    setAccessToken(token: string): ResultCodes,
    setUpdateToken(token: string): ResultCodes,
    setImprint(key: string | undefined): ResultCodes,
    getTokenData(): TokenData,
}