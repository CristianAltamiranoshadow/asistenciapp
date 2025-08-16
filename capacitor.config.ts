// capacitor.config.ts
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cristianaltamirano.asistencias',
  appName: 'Registro de Asistencias',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    allowNavigation: ['puce.estudioika.com'], // tu dominio de la API
  },
};

export default config;
