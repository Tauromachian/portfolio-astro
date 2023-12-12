<template>
  <base-section
    class="items-center justify-center"
    :title="$t('contacts')"
    title-alignment="self-center"
    id="contacts"
  >
    <div class="flex flex-wrap gap-4 justify-center text-7xl md:text-8xl">
      <a
        v-for="(link, index) in socialLinks"
        :key="link + index"
        :title="link.alt"
        :href="link.link"
        class="transition scale-110"
      >
        <div style="height: 80px; width: 80px">
          <SocialIconsBase
            class="color-primary"
            height="80px"
            width="80px"
            :icon="link.icon"
          />
        </div>
      </a>
    </div>
    <base-card class="mt-8 p-4 card">
      <h3 class="text-base sm:text-2xl font-bold">
        {{ $t("formTitle") }}
      </h3>
      <app-alert
        v-if="state.message.active"
        :message="state.message"
        class="mt-3"
      />
      <form @submit.prevent="submitForm">
        <base-input-text
          v-model="state.form.name"
          :label="$t('form.name')"
          class="mt-3"
          required
          name="name"
        />
        <base-input-text
          v-model="state.form.from"
          :label="$t('form.email')"
          class="mt-3"
          type="email"
          required
          name="email"
        />
        <base-area-text
          v-model="state.form.body"
          :label="$t('form.message')"
          required
          class="mt-3"
          name="message"
        />

        <span class="flex w-full">
          <base-button
            class="mt-5 ml-auto"
            :loading="state.loading"
            prepend-icon="mdiEmailArrowRight"
            type="submit"
          >
            {{ $t("button.send") }}
          </base-button>
        </span>
      </form>
    </base-card>
  </base-section>
</template>

<script setup>
import { reactive } from "vue";

import BaseButton from "./BaseButton.vue";
import BaseAreaText from "./BaseAreaText.vue";
import BaseInputText from "./BaseInputText.vue";
import AppAlert from "./AppAlert.vue";
import BaseCard from "./BaseCard.vue";
import BaseSection from "./BaseSection.vue";
import SocialIconsBase from "./SocialIconsBase.vue";

import { useStore } from "@nanostores/vue";
import { t } from "../stores/langStore";

const socialLinks = [
  {
    link: "https://www.linkedin.com/in/dev-jose-garcia",
    icon: "mdiLinkedin",
    alt: "Linkedin icon",
  },
  {
    link: "https://t.me/BetanKore",
    icon: "telegram",
    alt: "Telegram icon",
  },
  {
    link: "https://www.reddit.com/user/BetanKore",
    icon: "mdiReddit",
    alt: "Reddit icon",
  },
];

const state = reactive({
  form: {
    from: "",
    name: "",
    subject: "Work for me",
    body: "",
  },
  message: { success: true, text: "", active: false },
  loading: false,
});

const $t = useStore(t);

const submitForm = async () => {
  state.loading = true;

  const body = {
    ...state.form,
    body: `Name: ${state.form.name}\nMessage: ${state.form.body}\nFrom:${state.form.from}`,
    addresses: import.meta.env.PUBLIC_TARGET_EMAIL,
  };
  let response;
  try {
    response = await fetch(
      `${import.meta.env.PUBLIC_SERVICE_MAILER_URL}send-email`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    displayErrorMessage();
    return;
  }
  if (response.error) {
    displayErrorMessage();
    return;
  }
  displaySuccessMessage();
  state.loading = false;
};

const displaySuccessMessage = () => {
  state.message.text = "Success! email sent correctly";
  state.message.type = "success";
  state.message.active = true;
  state.loading = false;
};

const displayErrorMessage = () => {
  state.message.text = "Error there was a problem sending the email";
  state.message.type = "error";
  state.message.active = true;
  state.loading = false;
};
</script>

<style>
.card {
  background: var(--bg-card);
}
</style>
