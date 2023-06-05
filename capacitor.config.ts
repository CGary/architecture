import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'my.vite.appp',
  appName: 'my-vite-appp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
