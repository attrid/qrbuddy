import { Injectable, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from "@capacitor/camera";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Preferences } from "@capacitor/preferences";
import { Barcode, BarcodeScanner } from "@capacitor-mlkit/barcode-scanning";
import { AlertController } from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ScannerService {
  isSupported = false;

  constructor(private alertController: AlertController) {
    BarcodeScanner.isSupported().then(result => {
      this.isSupported = result.supported;
    });
  }

  async scan(): Promise<Barcode[] | null> {
    const granted = await this.requestPermissions();

    if (!granted) {
      await this.presentAlert()
      return null;
    }

    const { barcodes } = await BarcodeScanner.scan();
    return barcodes;
  }

  async requestPermissions(): Promise<boolean> {
    console.log("Checking if scanner is supported...");
    const supported = await BarcodeScanner.isSupported();
    console.log("Scanner supported:", supported.supported);

    if (!supported.supported) {
      console.log("Scanner is not supported on this device");
      return false;
    }

    try {
      console.log("Requesting camera permissions...");
      const { camera } = await BarcodeScanner.requestPermissions();
      console.log("Camera permission status:", camera);

      if (camera === 'prompt') {
        // If we get 'prompt', we need to request the permission again
        console.log("Permission is in prompt state, requesting again...");
        const { camera: camera2 } = await BarcodeScanner.requestPermissions();
        console.log("Second camera permission status:", camera2);
        return camera2 === 'granted' || camera2 === 'limited';
      }

      return camera === 'granted' || camera === 'limited';
    } catch (error) {
      console.error("Error requesting permissions:", error);
      return false;
    }
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission Denied',
      message: 'Please grant camera permissions to use the scanner.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
