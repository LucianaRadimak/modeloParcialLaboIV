import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'modeloparcial-47ba7',
        appId: '1:1048925692464:web:70f4908cce568e80b583f5',
        storageBucket: 'modeloparcial-47ba7.appspot.com',
        apiKey: 'AIzaSyD3BlGEfVRD7flQsBc_ZxiKdNKrmOPwnH0',
        authDomain: 'modeloparcial-47ba7.firebaseapp.com',
        messagingSenderId: '1048925692464',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
