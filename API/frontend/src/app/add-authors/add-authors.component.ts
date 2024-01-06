import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemsServiceService } from '../services/items-service.service';

@Component({
  selector: 'app-add-authors',
  templateUrl: './add-authors.component.html',
  styleUrls: ['./add-authors.component.scss'],
})

  export class AddAuthorsComponent {
  form = new FormGroup({
    author: new FormControl('', [Validators.required]),
  });

   constructor(
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddAuthorsComponent>,
    private itemsService: ItemsServiceService
  ) {}

  onSave() {
    const author = this.form.value.author as string;
    this.itemsService.addAuthor(author).subscribe(() => {
      this.dialogRef.close(author);
      this.snackBar.open('Author added Successfully', 'Dismiss', {
        duration: 3000,
      });
    });
  }
}

  


