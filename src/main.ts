import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

async function bootstrap() {
  const firebaseConfig = {
    apiKey: "AIzaSyD8nXQyA4R_C9gibUHMJQDp0gqrQZqfBdU",
    authDomain: "taskmanagement-6c61a.firebaseapp.com",
    projectId: "taskmanagement-6c61a",
    storageBucket: "taskmanagement-6c61a.appspot.com",
    messagingSenderId: "191041638707",
    appId: "1:191041638707:web:938c8b8f233be31ad96e46",
    measurementId: "G-VBCV5T8KZD"
  };
  
  initializeApp(firebaseConfig)
  
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
