import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsServiceService {
  private baseUrl: string = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  // ITEMS
  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${this.baseUrl}/items`, item);
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}/items`);
  }

  updateItem(item: Item, id: string): Observable<Item> {
    return this.http.patch<Item>(`${this.baseUrl}/items/${id}`, item);
  }

  deleteItem(id: string): Observable<any> {
    return this.http.delete<Item>(`${this.baseUrl}/items/${id}`);
  }

  getItemById(id: string): Observable<Item> {
    return this.http.get<Item>(`${this.baseUrl}/items/item/${id}`);
  }

  //PUBLISHER
  addPublisher(publisher: string): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/publishers`, { publisher });
  }

  getPublishers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/publishers`);
  }

  //AUTHORS
  addAuthor(author: string): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/authors`, { author });
  }

  getAuthors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/authors`);
  }

  //CATEGORIES
  addCategory(category: string): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/categories`, { category });
  }

  getCategory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/categories`);
  }

  //CATEGORIES
  addLanguage(language: string): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/languages`, { language });
  }

  getLanguages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/languages`);
  }
}
