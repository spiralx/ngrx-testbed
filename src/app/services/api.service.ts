import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'

// const ENDPOINT = 'http://www.mocky.io/v2/5a16dbf2310000fe1f8d3453'
const ENDPOINT = 'http://www.mocky.io/v2/5a16dd57310000fe1f8d3456'

@Injectable()
export class ApiService {
  get
  
  constructor(private http: HttpClient) { }
}