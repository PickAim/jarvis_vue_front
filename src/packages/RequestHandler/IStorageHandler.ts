import {ResultCodes} from "@/packages/Entities";

export default interface IStorageHandler{
    getValue(key: string): string;
    setValue(key: string, value: string): ResultCodes;
}