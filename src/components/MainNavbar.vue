<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button
          v-for="(item, i) in menu"
          :key="i"
          :tab="item.tab"
          :href="item.href"
        >
          <ion-icon :icon="item.icon" />
          <ion-label>{{ item.label }}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import {
  addCircleOutline,
  homeOutline,
  playCircleOutline,
} from "ionicons/icons";

const menu = [
  { icon: homeOutline, label: "Home", tab: "home", href: "/home" },
  { icon: addCircleOutline, label: "Upload", tab: "upload", href: "/upload" },
  {
    icon: playCircleOutline,
    label: "Library",
    tab: "library",
    href: "/library",
  },
];
</script>
