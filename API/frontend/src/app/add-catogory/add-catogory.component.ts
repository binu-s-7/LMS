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
