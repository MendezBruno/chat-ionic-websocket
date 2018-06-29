import { Injectable } from '@angular/core';

import * as ws  from 'ws';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the WsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WsProvider {

  constructor() {
    console.log('Hello WsProvider Provider');
  }

  websocket;

  createSocket(url){
  //  let ws2 = new ws(url);
  //  console.log( ws2 );
   this.websocket = new WebSocket(url);
   console.log(this.websocket);
  }
 
  public sendMessage(message) {
    this.websocket.send(message);
  }
 

  public getMessages = () => {
    
    return Observable.create( (observer) => {
      console.log('estoy dentro del servicio, dentro del returnn');
        this.websocket.on('message', (message) => {
        observer.next(message);
      });
    });
  
  }

}
