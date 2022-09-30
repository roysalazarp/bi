import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.bi",
  appName: "bi",
  webDir: "dist",
  bundledWebRuntime: false,
  server: {
    url: "http://localhost:8100/",
    // allowNavigation: [
    //   "*"
    // ]
  },
};

export default config;
