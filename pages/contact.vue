<script setup lang="ts">
import { FormKitSchema } from "@formkit/vue";
import { getNode } from "@formkit/core";
import type { FormKitNode } from "@formkit/core";
import { useChallengeV3 } from "vue-recaptcha";
import Botpoison from "@botpoison/browser";

const config = useRuntimeConfig();

const { data: contactFormJson } = await useAsyncData("contactFormJson", () => {
  return queryContent("forms", "contact").findOne();
});

const mapQ = "Hachiōji+(NONOCO)";

const state = reactive({
  loading: false,
  sent: false,
  error: "",
  bot: null,
  botpoison: null,
  isBot: false,
  reCaptchaRes: "",

  // handleMessageInput,
});

// TODO: optimize: this seems like a lot just to update the hint text on input...
const contactForm = ref({ message: "" });
const contactFormMessageLength = computed(
  () => contactForm.value?.message.length || 0
);
watch(contactFormMessageLength, (messageLength) => {
  if (!state.sent)
    getNode("contactmessage")!.props.help = `${messageLength} / 500`;
});

const { execute } = useChallengeV3("submit_contact_form");

onMounted(() => {
  // @ts-ignore
  state.botpoison = new Botpoison({
    publicKey: config.public.BOTPOISON_PUBLIC_KEY + "",
  });
});

// If all inputs are valid it fires the @submit event
async function submitContactForm(_data: any, _node: FormKitNode | undefined) {
  state.loading = true;

  try {
    if (_data.bot) {
      state.isBot = true;
    } else {
      // Process botpoison challenge
      // @ts-ignore
      const { solution } = await state.botpoison.challenge();

      // Wait for the reCAPTCHA token
      state.reCaptchaRes = await execute();
      console.log("recaptcha response", state.reCaptchaRes);

      const subject = "NONO.CO/Contact Form 📮" + _data.subject;
      const res = await fetch(config.public.FORMSPARK_ACTION_URL + "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ..._data, subject, _botpoison: solution }),
      });

      // Throw an error if the response was not successful
      if (!res.ok) throw new Error("Response was not successful");
    }
  } catch (error: any) {
    _node!.setErrors(error);
    state.error = "Error, please try again later."; // e.error_description || e.message
  } finally {
    state.loading = false;
    state.sent = true;
  }
}

useHead({
  title: `Contact | ${config.public.app.name}`,
});
</script>

<template>
  <div id="contact-page" relative flex items-center justify-end>
    <div id="map-container" absolute inset-0 bg-gray-300>
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        :title="`${mapQ}`"
        scrolling="no"
        :src="`https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=${mapQ}&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed`"
        style="filter: grayscale(1) contrast(1.2) opacity(0.4)"
      />
    </div>

    <div
      mx-4
      z-10
      p-4
      md:p-8
      bg-white
      shadow-md
      class="md:w-2/3 lg:w-1/2 xl:w-1/3 md:mr-20 lg:mr-40"
    >
      <h1 text-3xl lg:text-5xl font-bold mb-4>Get in Touch</h1>
      <p>
        Have a question 🤔? Want to leave some feedback? Report a bug 🐞? et
        cetera. Please fill out the contact form below or feel free to
        <a href="mailto:contact@nomadsnotebook.co" text-primary hover:underline>
          contact@nomadsnotebook.co
        </a>
        via email. 🥰
      </p>

      <div v-if="state.isBot" class="alert warning-alert">
        🍯 Oh honey pot! We think not, you must be a bot!
      </div>
      <div
        v-if="state.sent"
        class="alert"
        :class="state.error ? 'error-alert' : 'success-alert'"
      >
        <span v-if="state.error">❗ {{ state.error }}</span>
        <span v-else>✔️ Message sent. Thanks!</span>
      </div>
      <FormKit
        v-else
        id="contact"
        v-model="contactForm"
        type="form"
        :actions="false"
        form-class="mt-6"
        @submit="submitContactForm"
      >
        <FormKitSchema :schema="contactFormJson?.body" :data="state" />
      </FormKit>
      <!-- registers all the classes from contact.json schema -->
      <div
        hidden
        class="w-full p-3 mt-4 mb-3 ml-auto bg-gray-200 text-red text-xs text-right uppercase flex-1 flex-col gap-3 items-center md:flex-row md:mb-3 bg-primary btn btn-primary"
      />
    </div>
  </div>
</template>

<style>
#contact-page {
  /* screen ( adminBar + header height) */
  min-height: calc(100vh - (32px + 80px));
}

.send-btn {
  width: 100px !important;
}
</style>
