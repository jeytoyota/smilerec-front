import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TutorEditComponent } from './edit/tutor-edit/tutor-edit.component';
import { TutorDeleteComponent } from './delete/tutor-delete/tutor-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    TutorEditComponent,
    TutorDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
