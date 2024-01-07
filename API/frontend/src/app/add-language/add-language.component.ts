import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemsServiceService } from '../services/items-service.service';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.scss'],
})
export class AddLanguageComponent {
  form = new FormGroup({
    language: new FormControl('', [Validators.required]),
  });

  constructor(
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddLanguageComponent>,
    private itemsService: ItemsServiceService
  ) {}

  onSave() {
    const language = this.form.value.language as string
    this.itemsService.addLanguage(language).subscribe(() => {
      this.dialogRef.close(language);
      this.snackBar.open('Language added Successfully', 'Dismiss', {
        duration: 3000,
      });
    });
  }
}
