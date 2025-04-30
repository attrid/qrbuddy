import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButtons, IonCard, IonCardContent, IonCardHeader,
  IonCardSubtitle, IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { ActivatedRoute } from "@angular/router";

interface QRCode {
  id: string;
  name: string;
  description: string;
  items?: Item[];
  attachments?: Attachment[];
}

interface Item {
  id: string;
  name: string;
  description: string;
}

interface Attachment {
  id: string;
  name: string;
  description: string;
  fileUrl: string;
}

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton,
    IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonCardContent
  ]
})
export class QrcodePage implements OnInit {
  data?: QRCode;

  DUMMYDATA: QRCode[] = [
    {
      id: 'http://drini.mx',
      name: 'Drini MX',
      description: "I actually don't know what this is",
      attachments: [
        {
          id: 'manual',
          name: 'Manual',
          description: 'The manual to my coffee maker',
          fileUrl: 'https://localhost/assets/coffee-maker-manual.pdf'
        },
        {
          id: 'warranty-card',
          name: 'Warranty Card',
          description: 'The warranty card to my coffee maker',
          fileUrl: 'https://localhost/assets/coffee-maker-warranty-card.pdf'
        }
      ]
    },
    {
      id: 'LOCATION-A',
      name: 'Location A',
      description: "A dummy location",
      items: [
        {
          id: 'ITEM-A',
          name: 'Item A',
          description: "A dummy item",
        },
        {
          id: 'ITEM-B',
          name: 'Item B',
          description: "A dummy item B",
        }
      ]
    },
    {
      id: 'coffee-maker',
      name: 'Coffee Maker',
      description: 'My coffee maker',
      attachments: [
        {
          id: 'manual',
          name: 'Manual',
          description: 'The manual to my coffee maker',
          fileUrl: 'https://localhost/assets/cofee-maker-manual.pdf'
        }
      ]
    }
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const barcodeId = params.get('id');
      this.data = this.DUMMYDATA.find(d => d.id === barcodeId);
    })
  }

}
