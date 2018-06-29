import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import * as io from 'socket.io-client';

/*
  Generated class for the SocketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SocketProvider {

  private socket;

  constructor() {
    console.log('Hello SocketProvider Provider');
  }
  
  
  createSocket(url){
    this.socket = io(url);
    console.log(this.socket);
  }


  public sendMessage(message) {
    this.socket.emit('new_message', message);
}


public getMessages = () => {
  return Observable.create((observer) => {
      console.log('estoy dentro del servicio, dentro del returnn');
      this.socket.on('new_message', (message) => {
          observer.next(message);
      });
  });
}


}
