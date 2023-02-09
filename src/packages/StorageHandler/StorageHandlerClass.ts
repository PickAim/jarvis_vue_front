import IStorageHandler from "@/packages/RequestHandler/IStorageHandler";
import {ResultCodes} from "@/packages/Entities";

export default class StorageHandlerClass implements IStorageHandler{
    getValue(key: string): string {
        return localStorage.getItem(key) || "";
    }

    setValue(key: string, value: string): ResultCodes {
        localStorage.setItem(key, value)
        return ResultCodes.OK;
    }
}