import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { SubirPage } from "../subir/subir";

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { CargaArchivoProvider } from "../../providers/carga-archivo/carga-archivo";

// Plugins
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    hayMas:boolean = true;
    posts: Observable<any[]>;

    constructor( private modalCtrl: ModalController,
                 private _cap: CargaArchivoProvider,
                 private socialSharing: SocialSharing,
                 afDB: AngularFireDatabase) {

        this.posts = afDB.list('post').valueChanges();

    }

    mostrar_modal(){
        let modal = this.modalCtrl.create( SubirPage );
        modal.present();
    }

    doInfinite(infiniteScroll) {
        console.log('Begin async operation');
    }

    compartir( post:any ){
        this.socialSharing.shareViaFacebook( post.titulo, post.img, post.img )
            .then( ()=>{} ) // se pudo compartir
            .catch( ()=>{} ) // si sucede un error
    }
}
