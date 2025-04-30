import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import { addIcons } from "ionicons";
import { addOutline } from "ionicons/icons";

@Component({
  selector: 'app-tab2',
  templateUrl: 'qrcodes.page.html',
  styleUrls: ['qrcodes.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonFab,
    IonFabButton,
    IonIcon
  ]
})
export class QrcodesPage {

  constructor() {
    addIcons({ addOutline });
  }

}
