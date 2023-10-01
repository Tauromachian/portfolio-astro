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
      <app-alert v-if="message.active" :message="message" class="mt-3" />
      <form @submit.prevent="submitForm">
        <base-input-text
          v-model="form.name"
          :label="$t('form.name')"
          class="mt-3"
          required
          name="name"
        />
        <base-input-text
          v-model="form.from"
          :label="$t('form.email')"
          class="mt-3"
          type="email"
          required
          name="email"
        />
        <base-area-text
          v-model="form.body"
          :label="$t('form.message')"
          required
          class="mt-3"
          name="message"
        />

        <span class="flex w-full">
          <base-button
            class="mt-5 ml-auto"
            :loading="loading"
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
import BaseButton from "./BaseButton.vue";
import BaseAreaText from "./BaseAreaText.vue";
import BaseInputText from "./BaseInputText.vue";
import AppAlert from "./AppAlert.vue";
import BaseCard from "./BaseCard.vue";
import BaseSection from "./BaseSection.vue";
import SocialIconsBase from "./SocialIconsBase.vue";

import { useStore } from "@nanostores/vue";
import { t } from "../stores/langStore";

const $t = useStore(t);
</script>

<script>
export default {
  name: "SectionContacts",

  data() {
    return {
      colorIcons: "",
      socialLinks: [
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
      ],
      form: {
        from: "",
        name: "",
        subject: "Work for me",
        body: "",
      },
      message: { success: true, text: "", active: false },
      loading: false,
    };
  },

  methods: {
    async submitForm() {
      this.loading = true;

      const body = {
        ...this.form,
        text: `${this.form.name}\n${this.form.body}`,
        to: import.meta.env.PUBLIC_TARGET_EMAIL,
      };
      let response;
      try {
        response = await fetch(
          `${import.meta.env.PUBLIC_SERVICE_MAILER_URL}contact-me`,
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
      } catch (error) {
        this.displayErrorMessage();
        return;
      }
      if (response.error) {
        this.displayErrorMessage();
        return;
      }
      this.displaySuccessMessage();
      this.loading = false;
    },
    displaySuccessMessage() {
      this.message.text = "Success! email sent correctly";
      this.message.type = "success";
      this.message.active = true;
      this.loading = false;
    },
    displayErrorMessage() {
      this.message.text = "Error there was a problem sending the email";
      this.message.type = "error";
      this.message.active = true;
      this.loading = false;
    },
  },
};
</script>

<style>
.card {
  background: var(--bg-card);
}
</style>
