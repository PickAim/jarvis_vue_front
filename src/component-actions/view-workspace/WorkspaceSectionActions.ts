export abstract class WorkspaceSectionActions {
    isPageLoading = false;

    async initSection() {
        this.isPageLoading = true;
        await this.prepareSectionData();
        this.isPageLoading = false;
    }

    protected abstract prepareSectionData(): Promise<void>;
}