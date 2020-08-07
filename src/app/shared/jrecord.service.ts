import { Injectable } from '@angular/core';
import { Jrecord } from './jrecord';
import { Scan } from './scan';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database/';

@Injectable({
  providedIn: 'root'
})
export class JrecordService {

  JrecordsRef: AngularFireList<any>;
  ScansRef: AngularFireList<any>;
  JrecordRef: AngularFireObject<any>;
  RecordData: any = [];



  constructor(private db: AngularFireDatabase) { }

  GetAllRecords(){
    this.JrecordsRef= this.db.list('users')
    // .snapshotChanges().subscribe(jrecords=>{
    //   jrecords.forEach(item=>{
    //     let a = item.payload.toJSON();
    //     a['$key'] = item.key;

    //     this.RecordData.push(a as Jrecord)
    //   })
    // });
    
    //console.log(this.JrecordsRef);

    return this.JrecordsRef;
  }

  GetAllScans(){
    //let query = this.db.collection("myscans");
    this.ScansRef = this.db.list('myscans/')
    //orderByChild('$key').equalTo(userid));
    
    
    console.log(this.ScansRef);
    return this.ScansRef;
  }
}
