import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, getDoc, orderBy, query } from '@angular/fire/firestore';
import { Actor } from '../clases/actor';
import { Observable } from 'rxjs';
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

  GetData(coleccion: string): Observable<any[]> {
    const objectRef = collection(this.firestore, coleccion);
    const objectQuery = query(objectRef, orderBy('nombre'));
    return collectionData(objectQuery, { idField: 'id' });
  }

  getActores(): Observable<any[]>
  {
    return this.GetData("actores");
  }

  getPeliculas(): Observable<any[]>
  {
    return this.GetData("peliculas");
  }
}
