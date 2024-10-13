import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, orderBy, query } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class BdService {
  private firestore = inject(Firestore);
  constructor() { }
  InsertData(coleccion: string, json: Object) {
    let col = collection(this.firestore, coleccion);
    addDoc(col, json);
  }
}
