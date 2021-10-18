console.log("Hello World!")

// Terminal kısmına 'npm run dev' yazarsak çıktı alınacak yere gideriz.
// JavaScript type safe değildir. Yani farklı veri değerler atanabilir.

let dolarBugun = 9.30
let dolarDun = 9.20
/*
dolarDun = "Ankara"
Burada "Ankara" atarsak hata vermez. Çıktı olarak 'Ankara' verisini alırız.
*/

{
    let dolarDun = 9.10
    // Bu başka bir blok olduğu için biz çıktı olarak 9.20 alırız.
    // Eğer 'let' yerine 'var' olarak yazarsak çıktı olarak 9.10 alırız.
    // Bu yüzden 'var' yerine 'let' kullanmalıyız.
}

console.log(dolarDun)   // Eğer tanımlanmayan bir şeyi yazdırmaya çalışırsak hata almayız.Ancak  'undefined' ile karşılaşırız.

const euroDun = 11.2
//euroDun = 11
// Eğer bu şekilde farklı bir değer atarsak 'euroDun is ready-only' hatasını alırız.
// 'const' kodu sabit olduğu için farklı bir değer ataması yapamayız.

console.log(euroDun)

// Birden fazla veriyi tutmak için Array(Dizi) lerden yararlanırız. ' [] ' ile gösterilir.
// camelCase/cameLCasing ile isimlendirilir.
// PascalCasing kelimelerin ilk harflerinin büyük yazılmasıdır.(Ek bilgi!)

let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredileri"]

console.log("<ul>")
for (let i = 0;i<konutKredileri.length;i++) {
    // Eğer i<3 yazarsak veri sayısını sabitleriz.
    //Ama eğer 'i<konutKredileri.length' yazarsak yeni veri eklenince otomatik olarak döngüye eklenir.
    console.log("<li>" + konutKredileri[i] + "</li>")   // Yanda ise 'li' etiketi içerisinde 'konutKredileri' dizisinin çıktısını alırız.
}
// for döngüsü ile 'li' komutunu kullanarak 'li' komutu içinde 
// '0,1,2' elemanları yazılı olan 3 çıktı alırız.

console.log("</ul>")

console.log(konutKredileri)
