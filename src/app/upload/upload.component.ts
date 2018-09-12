import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { UploadEvent } from '@progress/kendo-angular-upload';

@Component({
  selector: 'app-upload',
  template: `
  <kendo-upload [saveUrl]="uploadSaveUrl"
  [autoUpload]="false"
  (upload)="uploadEventHandler($event)"
  (error)="errorEventHandler($event)">
  </kendo-upload>
  `,
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  uploadSaveUrl = environment.apiUrl;

  public uploadEventHandler(e: UploadEvent) {
    console.log("Upload event ==> ", e)
  }

  public errorEventHandler(e: ErrorEvent) {
    console.log("Error event ===> ", e);
  }
}
