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
  
ngOnInit(): void {
  this.itemsService.getAuthors().subscribe({
    next: (res)=>{
      this.authorsList = res.map(item => item.author);
    }
  })
  this.itemsService.getPublishers().subscribe({
    next: (res)=>{
      this.publishersList = res.map(item => item.publisher);
    }
  })
  this.itemsService.getLanguages().subscribe({
    next: (res)=>{
      this.languagesList = res.map(item => item.language);
    }
  })
  this.itemsService.getCategory().subscribe({
    next: (res)=>{
      this.categoriesList = res.map(item => item.category);
    }
  })
}  

  onSave() {
    const postData = {
      title: this.form.value.title,
      author: this.form.value.author,
      category: this.form.value.category,
      publisher: this.form.value.publisher,
      language: this.form.value.language,
      status: this.form.value.status,
      borrowedBy: this.form.value.borrowedBy,
      borrowedDate: this.form.value.borrowedDate,
    };
    this.itemsService.addItem(postData as Item).subscribe(() => {
      this.dialogRef.close(postData as Item);
      this.snackBar.open('Item added Successfully', 'Dismiss', {
        duration: 3000,
      });
    });
  }

  generateUniqueId() {
    let newId: string;
    let idExists: boolean;
    let existData: string[] = [];

    this.itemsService.getItems().subscribe((res) => {
      res.forEach((item) => existData.push(item.id));
    });

    do {
      newId = (Math.floor(Math.random() * 90000) + 10000).toString();
      idExists = existData.includes(newId);
    } while (idExists);

    return newId;
  }
}
