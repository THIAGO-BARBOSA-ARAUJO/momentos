import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  message: string = 'Deu bom o componente!'
  constructor() { }
}
