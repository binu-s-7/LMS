import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DisplayItemsComponent } from './display-items/display-items.component';
import { HttpClientModule } from '@angular/common/http';
import { NgConfirmModule } from 'ng-confirm-box';
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddAuthorsComponent } from './add-authors/add-authors.component';
import { AddCatogoryComponent } from './add-catogory/add-catogory.component';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';
import { AddLanguageComponent } from './add-language/add-language.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayItemsComponent,
    AddItemComponent,
    ConfirmationDialogComponent,
    ViewProfileComponent,
    //
    RegisterComponent,
    LoginComponent,
    AddAuthorsComponent,
    AddCatogoryComponent,
    AddPublisherComponent,
    AddLanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, 
    HttpClientModule,
    NgConfirmModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
