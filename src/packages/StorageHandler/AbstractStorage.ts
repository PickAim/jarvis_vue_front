import IStorageHandler from "@/packages/RequestHandler/IStorageHandler";

export default abstract class AbstractStorage{
    storageHandler: IStorageHandler;

    protected constructor(storageHandler: IStorageHandler) {
        this.storageHandler = storageHandler;
    }
}