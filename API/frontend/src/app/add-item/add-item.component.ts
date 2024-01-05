import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemsServiceService } from '../services/items-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Item } from '../models/item.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {

  authorsList: string[] = [];
  publishersList: string[] = [];
  categoriesList: string[] = [];
  languagesList: string[] = [];

  // categoryList: string[] = [
  //   'Fantasy',
  //   'Science Fiction',
  //   'Mystery',
  //   'Thriller',
  //   'Horror',
  //   'Romance',
  //   'Historical Fiction',
  //   'Biography',
  //   'Cookbooks',
  //   'Art',
  //   'Science',
  //   'Poetry',
  //   'Children',
  //   'Thriller',
  // ];
  status = ['Borrowed', 'Available'];

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    publisher: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    borrowedBy: new FormControl(''),
    borrowedDate: new FormControl(null),
  });

  constructor(
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddItemComponent>,
    private itemsService: ItemsServiceService
  ) {}
