import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Note } from '../models/Note'

const ApiUrl = 'http://kcpelevennoteapie.azurewebsites.net/api'

@Injectable()
export class NotesService {

  constructor(private _http: HttpClient) { }

  getNotes() {
    return this._http.get(`${ApiUrl}/Notes`, {headers: this.getHeaders()})
  }
  createNote(note: Note) {
    return this._http.post(`${ApiUrl}/Notes`, note, { headers: this.getHeaders()})
  }
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
  }

}
