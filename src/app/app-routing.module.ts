import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JrecordsComponent } from './components/jrecords/jrecords.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'jrecords' },
  // { path: 'add-book', component: AddBookComponent },
  // { path: 'edit-book/:id', component: EditBookComponent },
  // { path: 'books-list', component: BookListComponent },
  { path: 'jrecords' , component: JrecordsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
