<template>
  <app-layout pageTitle="Home">
    <ion-list>
      <ion-item class="ion-no-padding" v-for="(el, i) in data" :key="i">
        <video-card
          :industry="el.industry"
          :title="el.title"
          :subTitle="el.subTitle"
          :thumbnail="el.thumbnail"
          :description="el.description"
        ></video-card>
      </ion-item>
    </ion-list>
  </app-layout>
</template>

<script lang="ts" setup>
import AppLayout from "@/components/AppLayout.vue";
import VideoCard from "@/components/VideoCard.vue";
import { supabase } from "@/supabase";

import { IonList, IonItem } from "@ionic/vue";

const data = [
  {
    industry: "Healthcade",
    title: "This is the main title",
    subTitle: "Destination lorem ipsum",
    thumbnail:
      "https://images.pexels.com/photos/12426731/pexels-photo-12426731.jpeg?cs=srgb&dl=pexels-lisa-fotios-12426731.jpg&fm=jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
  },
  {
    industry: "Healthcade",
    title: "This is the main title",
    subTitle: "Destination lorem ipsum",
    thumbnail:
      "https://images.pexels.com/photos/13290875/pexels-photo-13290875.jpeg?cs=srgb&dl=pexels-c%C3%A9line-13290875.jpg&fm=jpg",
    description: "Lorem Ipsum is",
  },
  {
    industry: "Healthcade",
    title: "This is the main title",
    subTitle: "Destination lorem ipsum",
    thumbnail:
      "https://images.pexels.com/photos/13302244/pexels-photo-13302244.jpeg?cs=srgb&dl=pexels-kayra-sercan-13302244.jpg&fm=jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
</script>

<style lang="scss" scoped>
ion-item {
  --inner-padding-start: 16px;
  --inner-padding-end: 16px;
}
</style>
