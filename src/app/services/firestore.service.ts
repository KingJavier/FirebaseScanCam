import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService{

    constructor(private firestore: AngularFirestore){}

    createDoc(data: any, path: string, id: string) {
        const collection = this.firestore.collection(path);
        return collection.doc(id).set(data);
    }

    getDoc<Tipo>(path: string, id: string){
        return this.firestore.collection(path).doc<Tipo>(id).valueChanges();
    }
}
