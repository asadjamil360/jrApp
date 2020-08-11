import { Component, OnInit, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { JrecordService } from './../../shared/jrecord.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Jrecord } from './../../shared/jrecord';
import { Scan } from 'src/app/shared/scan';
import { MatTableModule, MatTableDataSource } from '@angular/material/table'
import { AngularMaterialModule } from '../../../app/material.module';
import {MatDialog} from '@angular/material/dialog';
import { ImgdialogComponent } from 'src/app/imgdialog/imgdialog.component';

@Component({
  selector: 'app-jrecords',
  templateUrl: './jrecords.component.html',
  styleUrls: ['./jrecords.component.css']
})
export class JrecordsComponent implements OnInit {

  recordApi: JrecordService;
  RecordData: any = [];
  ScanData: any = [];
  merged: any = [];
  tableColumns  :  string[] = ['imageUrl','customerName', 'email', 'phno', '$key','confidence','text', 'createdTime']
  
  //, 'creationDate', 'expireDate', 'policyAmount', 'clientId', 'employeeId'];
  datasource: MatTableDataSource<Scan>;

  constructor(recordApi: JrecordService, public dialog: MatDialog) {
    this.recordApi = recordApi;
    this.GetScans();
    console.log(this.RecordData);
    this.datasource = new MatTableDataSource(this.ScanData);
    //this.datasource = this.RecordData;
    //.data = this.RecordData;
    console.log(this.datasource.data)
   }

  ngOnInit(): void {
    
  }

  GetScans(){
    this.recordApi.GetAllScans().
    snapshotChanges().subscribe(scans =>{
      scans.forEach(item=>{
        let b = item.payload.toJSON();
        b['$key']= item.key;
        this.ScanData.push(b as Scan);
      })
    })

    // console.log(this.ScanData);
    // this.ScanData.forEach(element => {
    //   console.log(element.userObject.firstName +' ' + element.userObject.lastName);
    // });
  }

  openDialog(imgPath){ 
    debugger
    if(imgPath){ 
      this.dialog.open(ImgdialogComponent, {data: {img: imgPath}})
    }
    
    //this.dialog.open(ImgdialogComponent, {data: {img: "https://firebasestorage.googleapis.com/v0/b/jrregistration.appspot.com/o/images%2F2D151521-4EB2-4FEE-BBB7-8401A21B5F02.jpg?alt=media&token=3c9b013d-a15d-4f9b-a6ea-d8fe03a89031"}})
  }

  
  GetJRecords(){
    //console.log("Hi there");
    
    //console.log(
      this.recordApi.GetAllRecords()
    .snapshotChanges().subscribe(jrecords => {
      jrecords.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        
        this.RecordData.push(a as Jrecord)
      })
      /* Data table */
      //console.log(this.RecordData);
      //console.log(this.ScanData);

      // let result = this.ScanData.map((a)=>{
      //   let obj2 = this.RecordData.find((b)=> a.key === b.key);
      //   if(obj2)
      //    Object.assign(a,obj2);
      //   return a;
      //  });

      //  console.log(result);

        //let rectobemerged;

      //  this.ScanData.forEach(element => {
      //    element.forEach(scan => {
      //      this.merged = scan;
      //      console.log(scan);
      //    });
      //  });

      //  this.RecordData.forEach(element => {
      //    rectobemerged = element;
      //    console.log(rectobemerged.$key);
      //    this.GetScans(rectobemerged.$key);
      //    console.log(this.ScanData);
      //    //console.log(this.GetScans())
      //   //  this.ScanData.forEach(scanlist => {
      //   //    if(scanlist.$key == element.$key){
      //   //      scanlist.forEach(scan => {
      //   //        //Object.assign(scan, rectobemerged);
      //   //        //return scan;
      //   //        console.log(scan);
      //   //      });
      //   console.log(rectobemerged);
      //      })
           
      //    });
      //  });
      //this.dataSource = new MatTableDataSource(this.BookData);
      /* Pagination */
      // setTimeout(() => {
      //   this.dataSource.paginator = this.paginator;
      // }, 0);
  })
  //)
  ;
  }
  
}
