///-----BOSS FILE---///
import { AuthService } from './services/auth.service';
import { NotesService } from './services/notes.service'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatFormField, MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material'; //add material module
import { FormsModule, ReactiveFormsModule } from '@angular/forms' //adds form module built into Angular
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { NoteIndexComponent } from './components/note/note-index/note-index.component'

const routes = [
  { path: 'register', component: RegistrationComponent}, ///define path routes with router
  { path: '**', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'notes', component: NoteIndexComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    NoteIndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule, ///add material module
    MatButtonModule, //add button module
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
