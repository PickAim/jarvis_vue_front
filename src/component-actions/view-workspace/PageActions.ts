export abstract class PageActions {
    isPageLoading = false;

    async initPage() {
        this.isPageLoading = true;
        await this.prepareSectionData();
        this.isPageLoading = false;
    }

    protected abstract prepareSectionData(): Promise<void>;
}