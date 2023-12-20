

export interface BookList {
    "category": Category[];
    "Books": Book[];
}

export interface Category{
    "CatId": number,
    "CateName": string
}

export interface Book {
    "BookId": number,
    "CatId": number,
    "BookName": string,
    "image": string,
    "Date": string,
    "Author": string,
    "Price": number,
    "quantity":number,
    "Discount": number,
    "Description":string
}