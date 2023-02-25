import type IStorageHandler from "@/packages/RequestHandler/IStorageHandler";
import { ResultCode } from "@/packages/ResultCode";
export default class StorageHandlerClass implements IStorageHandler {
    getValue(key: string): string;
    setValue(key: string, value: string): ResultCode;
}
