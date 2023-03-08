function bookPurchasing({title, price, category, author, status}, discount, tax) {
    const amountOfDiscount = price * (discount / 100);
    const priceAfterDiscount = price - amountOfDiscount;
    const amountOfTax = priceAfterDiscount * (tax / 100);
    const priceAfterTax = priceAfterDiscount + amountOfTax;
    
    return {
        title: title,
        price: price,
        category: category,
        author: author,
        status : status,
        amountOfDiscount: amountOfDiscount,
        priceAfterDiscount: priceAfterDiscount,
        amountOfTax: amountOfTax,
        priceAfterTax: priceAfterTax
    };
}
        
let book = {
    "title": "Mariposa",
    "price": 100000,
    "category" : "Novel",
    "author" : "Luluk Hf",
    "status" : true
}


console.log(bookPurchasing(book, 20, 5));