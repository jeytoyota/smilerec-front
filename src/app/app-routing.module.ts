import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CommonModule } from '@angular/common';
import { TutorEditComponent } from './edit/tutor-edit/tutor-edit.component';
import { TutorDeleteComponent } from './delete/tutor-delete/tutor-delete.component';


const routes: Routes = [
  {path:'', redirectTo:'cadastro', pathMatch: 'full'},
  {path:'cadastro', component: CadastroComponent},
  {path:'edit-tutor/:cdCadastro', component: TutorEditComponent},
  {path:'delete-tutor/:cdCadastro', component: TutorDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
