import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocketProvider } from '../../providers/socket/socket';
import { WsProvider } from '../../providers/ws/ws';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  elMensaje: any = {};
  mensajes: any[] = ['lala', 'lalalal', 'lalitalala'];
  mensajeModel: string;
  configuracioIp: string;
  configuracionPuerto: string;
  
  constructor(
    public navCtrl: NavController,
    // public socketIO: SocketProvider,
    public socketIO: WsProvider
  ) {
    
  }
 
  creararSocket(ip, puerto){
    var url = 'ws://' + ip + ':' + puerto+'/';
    this.socketIO.createSocket(url);
    // this.agregarObservable();
  }
  
  enviar(mensaje) {
    console.log(mensaje);
    this.socketIO.sendMessage(mensaje);
    
  }
  
  agregarObservable() {
    this.socketIO.getMessages().subscribe(message => {
      console.log('alguien: ' + message);
      this.mensajes.push(message);
        // console.log('ChatComponent Initialized '+this.messages+' y los mensajes');
      });
  }
  
}
