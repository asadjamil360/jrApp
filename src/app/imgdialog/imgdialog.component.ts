import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularMaterialModule } from '../material.module';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-imgdialog',
  templateUrl: './imgdialog.component.html',
  styleUrls: ['./imgdialog.component.css']
})
export class ImgdialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
