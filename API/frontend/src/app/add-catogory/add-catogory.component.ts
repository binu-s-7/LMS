import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemsServiceService } from '../services/items-service.service';

@Component({
  selector: 'app-add-catogory',
  templateUrl: './add-catogory.component.html',
  styleUrls: ['./add-catogory.component.scss'],
})
export class AddCatogoryComponent {
  form = new FormGroup({
    category: new FormControl('', [Validators.required]),
  });

  constructor(
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddCatogoryComponent>,
    private itemsService: ItemsServiceService
  ) {}

  onSave() {
    const category = this.form.value.category as string;
    this.itemsService.addCategory(category).subscribe(() => {
      this.dialogRef.close(category);
      this.snackBar.open('Category added Successfully', 'Dismiss', {
        duration: 3000,
        
   onSave() { 
     const category = this.form.value.category as string;
    this.itemsService.addCategory(category).subscribe(() =>}
        
     
      });
    });
  }
}

