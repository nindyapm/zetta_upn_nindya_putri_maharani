function bookPurchasing({title, price, category, author, status, stock}, discount, tax, amountPurchased) {
    let amount = 0;
    for (let i=1; i<=amountPurchased; i++){
        if(amountPurchased <= stock){
            const amountOfDiscount = price * (discount / 100);
            const priceAfterDiscount = price - amountOfDiscount;
            const amountOfTax = priceAfterDiscount * (tax / 100);
            const priceAfterTax = priceAfterDiscount + amountOfTax;
            console.log("Buku ke-" + i);
            console.log("- Title : " + title);
            console.log("- Price : " + price);
            console.log("- Category : " + category);
            console.log("- Author : " + author);
            console.log("- Price : " + price);
            console.log("- Amount of discount : " + amountOfDiscount);
            console.log("- Price after discount : " + priceAfterDiscount);
            console.log("- Amount of tax : " + amountOfTax);
            console.log("- Price after tax and discount : " + priceAfterTax);
            amount = amount + priceAfterTax;
        }
        else{
            console.log("Maaf, stok buku tidak memenuhi");
        }
    }
    console.log(" ");
    console.log("Total harga semua buku : " + amount);
}
        
let book = {
    "title": "Mariposa",
    "price": 100000,
    "category" : "Novel",
    "author" : "Luluk hf",
    "status" : true,
    "stock" : 50
}

bookPurchasing(book, 30, 6, 4);