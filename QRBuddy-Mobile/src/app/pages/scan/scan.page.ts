import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import { ScannerService } from "../../services/scanner.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'scan.page.html',
  styleUrls: ['scan.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class ScanPage {
  constructor(private scannerService: ScannerService, private router: Router) {}

  async ionViewDidEnter() {
    try {
      const scannedCode = await this.scannerService.scan();

      console.log('Scanned code:');
      console.log(scannedCode);

      if (scannedCode === null) {
        return;
      }

      console.log(scannedCode[0]);

      await this.router.navigate(['tabs', 'qrcodes', 'qrcode', scannedCode[0].rawValue])
    } catch (error) {
      console.error('Error initializing scanner:', error);
    }
  }
}
