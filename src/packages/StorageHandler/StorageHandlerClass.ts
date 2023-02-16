import IStorageHandler from "@/packages/RequestHandler/IStorageHandler";
import {ResultCodes} from "@/packages/Entities";

export default class StorageHandlerClass implements IStorageHandler{

    // TODO: make storage

    getValue(key: string): string {
        return "";
    }

    setValue(key: string, value: string): ResultCodes {
        return ResultCodes.OK;
    }
}