<template>
  <div class="ion-margin-vertical">
    <ion-card class="title-container ion-no-margin margin-bottom no-shadow">
      <ion-card-title class="title">{{ props.industry }}</ion-card-title>
      <ion-card-subtitle class="sub-title">{{
        props.subTitle
      }}</ion-card-subtitle>
    </ion-card>
    <ion-card class="ion-no-margin">
      <div class="img-container">
        <ion-img class="img" :src="props.thumbnail"></ion-img>
      </div>
      <ion-card-header>
        <ion-card-subtitle class="ion-no-padding sub-title-in">{{
          props.title
        }}</ion-card-subtitle>
        <ion-card-content class="ion-no-padding">
          {{ props.description }}
        </ion-card-content>
      </ion-card-header>
    </ion-card>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import {
  IonImg,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";

const props = defineProps<{
  industry: string;
  subTitle: string;
  title: string;
  description: string;
  thumbnail: string;
}>();
</script>

<style lang="scss">
.title {
  font-size: 22px;
}

.sub-title {
  font-size: 15px;
  font-weight: normal;
  text-transform: none;
}

.sub-title-in {
  font-size: 18px;
  font-weight: 600;
  text-transform: none;
}

.margin-bottom {
  margin-bottom: 5px;
}

.title-container {
  background-color: rgba(255, 255, 255, 0);
}

.img-container {
  width: 100%;
  height: 15rem;
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.no-shadow {
  box-shadow: none !important;
}
</style>
