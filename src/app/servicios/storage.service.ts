import { Injectable } from '@angular/core';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { enviroment } from '../../../enviroment.config';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private app = initializeApp(enviroment.firebaseConfig);
  private storage = getStorage(this.app);

  constructor() {}

  async uploadImage(file: File, folderPath: string): Promise<string> {
    const storageRef = ref(this.storage, `${folderPath}/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;  // Devuelve la URL de descarga
  }
}
