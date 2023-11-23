<script setup lang="ts">

import {
  SettingsPanelSellerInfoAction
} from "@/component-actions/view-workspace/settings-panel-sections/SettingsPanelSellerInfoAction";
import DefaultPagePreloader from "@/components/generals/DefaultPagePreloader.vue";
import ControlTextInput from "@/components/controls/ControlTextInput.vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import SettingsPanelSection from "@/components/overlays/settings-panel-overlay/SettingsPanelSection.vue";
import {reactive, ref} from "vue";
import {useRequestStore} from "@/stores/requestStore";
import {AddMarketplaceApiKeyActions} from "@/requests/request-actions/user-info/UserInfoRequestActions";

const apiKey = ref("");

const action = reactive(new SettingsPanelSellerInfoAction());
action.initPage().then(() => {
  apiKey.value = action.apiKeys[2] ?? "";
});

async function onSaveClick() {
  useRequestStore().setLevel(301);
  await (new AddMarketplaceApiKeyActions()).userInfoRequest({marketplace_id: 2, api_key: apiKey.value});
}

</script>

<template>
  <SettingsPanelSection>
    <DefaultPagePreloader v-if="action.isPageLoading"/>
    <div class="settings-panel-seller-info" v-else>
      <ControlTextInput title="API-ключ" class="api-key-input" v-model="apiKey"/>
      <ControlButton class="api-key-save-button" @click="onSaveClick">Сохранить</ControlButton>
    </div>
  </SettingsPanelSection>
</template>

<style scoped lang="scss">
.settings-panel-seller-info {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .api-key-input {
    width: 450px;
  }

  .api-key-save-button {
    width: 0;
  }
}
</style>