<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>{{ props.pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content scroll-y>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ props.pageTitle }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <slot></slot>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

const props = defineProps<{ pageTitle: string }>();
</script>
