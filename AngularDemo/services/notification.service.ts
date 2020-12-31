import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackbar:MatSnackBar) { }

  config:MatSnackBarConfig={
    duration:5000
  }
  success(msg){
    this.snackbar.open(msg,'',this.config);
  }

}
