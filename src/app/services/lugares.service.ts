import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Lugares } from '../share/lugares';


@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  constructor(private firestore: Firestore) { }

  getLugares(): Observable<Lugares[]> {
    const lugaressRef = collection(this.firestore, 'lugares');
    return collectionData(lugaressRef, { idField: 'id'}) as Observable<Lugares[]>;
  }

  getLugaresById(id): Observable<Lugares> {
    const lugaresDocRef = doc(this.firestore, `lugares/${id}`);
    return docData(lugaresDocRef, { idField: 'id' }) as Observable<Lugares>;
  }

  addlugares(lugar: Lugares) {
    const lugaressRef = collection(this.firestore, 'lugares');
    return addDoc(lugaressRef, lugar);
  }

  deletelugares(lugar: Lugares) {
    const lugaresDocRef = doc(this.firestore, `lugares/${lugar.id}`);
    return deleteDoc(lugaresDocRef);
  }

  updatelugares(lugar: Lugares) {
    const lugaresDocRef = doc(this.firestore, `lugares/${lugar.id}`);
    return updateDoc(lugaresDocRef, { title: lugar.descripcion, text: lugar.ubicacion });
  }
}
