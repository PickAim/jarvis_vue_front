import SettingsPanelPersonalInfo
    from "@/components/overlays/settings-panel-overlay/SettingsPanelPersonalInfo.vue";
import SettingsPanelAccount from "@/components/overlays/settings-panel-overlay/SettingsPanelAccount.vue";
import SettingsPanelSubscribe
    from "@/components/overlays/settings-panel-overlay/SettingsPanelSubscribe.vue";
import SettingsPanelSellerInfo
    from "@/components/overlays/settings-panel-overlay/SettingsPanelSellerInfo.vue";

export const settingsPanelSections = {
    personalInfo: SettingsPanelPersonalInfo,
    account: SettingsPanelAccount,
    subscribe: SettingsPanelSubscribe,
    sellerInfo: SettingsPanelSellerInfo
}