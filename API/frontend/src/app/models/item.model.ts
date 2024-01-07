export interface Item {
  _id?: string,
  id: string;
  title: string;
  author?: string;
  publisher?: string;
  language?: string;
  category: string;
  status: string;
  borrowedBy?: string;
  borrowedDate?: any;
}


export interface User {
  _id?: string,
  name?: string;
  email: string;
  password?: string;
}
