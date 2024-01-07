import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemsServiceService } from '../services/items-service.service';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.scss'],
})
export class AddPublisherComponent {
  form = new FormGroup({
    publisher: new FormControl('', [Validators.required]),
  });

  constructor(
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddPublisherComponent>,
    private itemsService: ItemsServiceService
  ) {}

  onSave() {
    const publisher = this.form.value.publisher as string
    this.itemsService.addPublisher(publisher).subscribe(() => {
      this.dialogRef.close(publisher);
      this.snackBar.open('Publisher added Successfully', 'Dismiss', {
        duration: 3000,
      });
    });
  }
}
