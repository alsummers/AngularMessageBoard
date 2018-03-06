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
import { NoteCreateComponent } from './components/note/note-create/note-create.component';
import { NoteDetailsComponent } from './components/note-detail/note-detail.component';
import { NoteEditComponent } from './components/note/note-edit/note-edit.component';
import { NoteDeleteComponent } from './components/note/note-delete/note-delete.component'
import { AuthGuard } from './guards/auth.guard'

const routes = [
  { path: 'Register', component: RegistrationComponent}, ///define path routes with router
  { path: 'login', component: LoginComponent},
  { path: 'notes', canActivate: [AuthGuard], children: [
    { path: '', component: NoteIndexComponent },
    { path: 'create', component: NoteCreateComponent },
    { path: 'detail/:id', component: NoteDetailsComponent },
    { path: 'edit/:id', component: NoteEditComponent},
    { path: 'delete/:id', component: NoteDeleteComponent}
]},
  { path: '**', component: RegistrationComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    NoteIndexComponent,
    NoteDetailsComponent,
    NoteCreateComponent,
    NoteEditComponent,
    NoteDeleteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule, ///add material module
    MatButtonModule, //add button module
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    NotesService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
