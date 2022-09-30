<template>
  <app-layout pageTitle="Login">
    <ion-button @click="authPopup">Sign in with Google</ion-button>
  </app-layout>
</template>

<script lang="ts" setup>
import AppLayout from "@/components/AppLayout.vue";

import { IonButton } from "@ionic/vue";
import { supabase } from "@/supabase";

/* TODO */
const authPopup = async () => {
  /*
    - Check ionic in-app-browser
    - Check supabase.auth.onAuthStateChange
    - Other links: 
      * https://stackoverflow.com/questions/46980164/cant-visit-website-on-ios-simulator-this-connection-is-not-private
      * https://blog.logrocket.com/ultimate-guide-authentication-vue-js-supabase/
      * https://dev.to/aaronksaunders/how-to-build-a-nuxt-3-ionic-capacitor-starter-app-supabase-setup-and-authentication-3gd0
  */
  await supabase.auth.signIn({ provider: "google" });
};
</script>
