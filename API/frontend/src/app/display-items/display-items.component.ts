import { Component, ViewChild } from '@angular/core';
import { ItemsServiceService } from '../services/items-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Item } from '../models/item.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AddItemComponent } from '../add-item/add-item.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AddLanguageComponent } from '../add-language/add-language.component';
import { AddPublisherComponent } from '../add-publisher/add-publisher.component';
import { AddCatogoryComponent } from '../add-catogory/add-catogory.component';
import { AddAuthorsComponent } from '../add-authors/add-authors.component';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.scss'],
})
export class DisplayItemsComponent {
 isLoading = false
  public items!: Item[];
  isEdit = false;
  editItemId!: string;
  editItem!: any;
  dataSource!: MatTableDataSource<Item>;

  authorsList: string[] = [];
  publishersList: string[] = [];
  categoriesList: string[] = [];
  languagesList: string[] = [];

  displayedColumns: string[] = [
    'id',
    'title',
    'author',
    'category',
    'publisher',
    'language',
    'borrowedBy',
    'Availability',
    'borrowedDate',
    'action',
  ];
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

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    publisher: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
    borrowedBy: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    borrowedDate: new FormControl(null, [Validators.required]),
  });

  constructor(
    private itemsService: ItemsServiceService,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.fetchData()

    this.isLoading = true
    this.itemsService.getItems().subscribe({
      next: (res) => {
        this.isEdit = false;
        this.items = res;
        this.dataSource = new MatTableDataSource(this.items);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false
      },
      error: () => {
        this.snackBar.open('Oopz Something went wrong!!', 'Dismiss', {
          duration: 3000,
        });
        this.isLoading = false
      },
    });
  }

  fetchData(){
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

  onEdit(id: string) {
    this.isLoading = true
    this.isEdit = true;
    this.editItemId = id;

    const item = this.dataSource.data.find((item) => item._id === id);
    const itemObjId = item?._id?.toString() as string
    this.editItem = { ...item };

    this.itemsService.getItemById(itemObjId).subscribe({
      next: (res) => {
        const item = res;
        this.form.patchValue({
          title: item.title,
          category: item.category,
          publisher: item.publisher,
          language: item.language,
          author: item.author,
          borrowedBy: item.borrowedBy,
          status: item.status,
          borrowedDate: item.borrowedDate,
        });
        this.isLoading = false
      },
      error: () => {
        this.isEdit = false;
        this.snackBar.open('Oopz Something went wrong!!', 'Dismiss', {
          duration: 3000,
        });
        this.isLoading = false
      },
    });
  }

  getChipColor(value: string): string {
    if (value === 'Borrowed') {
      return 'warn'; 
    } else {
      return 'primary'; 
    }
  }

  onSave(id: string) {
    this.isLoading = true
    const postData = {
      id: id,
      title: this.form.value.title,
      author: this.form.value.author,
      category: this.form.value.category,
      publisher: this.form.value.publisher,
      language: this.form.value.language,
      borrowedBy: this.form.value.borrowedBy,
      status: this.form.value.status,
      borrowedDate: this.form.value.borrowedDate,
    };
    const item = this.dataSource.data.find((item) => item._id === id);
    const itemObjId = item?._id?.toString() as string
    this.itemsService.updateItem(postData as Item, itemObjId).subscribe({
      next: () => {
        this.isEdit = false;
        this.getItems();
        this.snackBar.open('Item Saved Successfully', 'Dismiss', {
          duration: 3000,
        });
        this.isLoading = false
      },
      error: () => {
        this.snackBar.open('Oopz Something went wrong!!', 'Dismiss', {
          duration: 3000,
        });
        this.isLoading = false
      },
    });
  }

  deleteItem(id: string) {
    const item = this.dataSource.data.find((item) => item._id === id);
    const itemObjId = item?._id?.toString() as string
  
    this.isLoading = true
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: { message: 'Are you sure you want to delete this item?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.itemsService.deleteItem(itemObjId).subscribe({
          next: () => {
            this.getItems();
            this.snackBar.open('Successfully Deleted', 'Dismiss', {
              duration: 3000,
            });
            this.isLoading = false
          },
          error: () => {
            this.snackBar.open('Oopz Something went wrong!!', 'Dismiss', {
              duration: 3000,
            });
            this.isLoading = false
          },
        });
      }
    });
  }

  addItem() {
    const dialogRef = this.dialog.open(AddItemComponent, {
      maxWidth: '600px',
      width: '85vw',
      maxHeight: '90vh',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getItems();
    });
  }

  addLanguage() {
    const dialogRef = this.dialog.open(AddLanguageComponent, {
      maxWidth: '400px',
      width: '60vw',
      maxHeight: '60vh',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getItems();
    });
  }

  addCategory() {
    const dialogRef = this.dialog.open(AddCatogoryComponent, {
      maxWidth: '400px',
      width: '60vw',
      maxHeight: '60vh',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getItems();
    });
  }

  addPublisher() {
    const dialogRef = this.dialog.open(AddPublisherComponent, {
      maxWidth: '400px',
      width: '60vw',
      maxHeight: '60vh',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getItems();
    });
  }

  addAuthor() {
    const dialogRef = this.dialog.open(AddAuthorsComponent, {
      maxWidth: '400px',
      width: '60vw',
      maxHeight: '60vh',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getItems();
    });
  }

  logOut(){
    this.userService.logOutUser().subscribe((res) => {
      this.cookieService.delete('jwt');
      this.snackBar.open('Logged out Successfully', 'Dismiss', {
        duration: 3000,
      });
      this.router.navigate([`/login`]);
     });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
