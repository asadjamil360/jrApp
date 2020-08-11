import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AngularMaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BookService } from './shared/book.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JrecordsComponent } from './components/jrecords/jrecords.component';
import { ImgdialogComponent } from './imgdialog/imgdialog.component';
import { ImgSrcDirective } from './img-src.directive';

@NgModule({
  declarations: [
    AppComponent,
    JrecordsComponent,
    ImgdialogComponent,
    ImgSrcDirective
  ],
  entryComponents:[ImgdialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
