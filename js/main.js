/*
let oddiyObjct = {
    ism: 'Oloviddin', yoshi:17};

let talabami = 'Yoq, talaba emas';
if (oddiyObjct.yoshi >=17){
    talabami = "Ha talaba!"
}
console.log("Olov talabami? " + talabami);*/
/*let arrayObject = [45,78, 'salom', 'matn',true,false];
console.log(arrayObject[3]);*/




let sana = new Date();

let yil = sana.getFullYear();

let oy = sana.getMonth();

let kun = sana.getDate();

let haftakun = sana.getDay();

let soat = sana.getHours();

let minut = sana.getMinutes();

let secund = sana.getSeconds();

let millisec = sana.getMilliseconds();

let haftakunlari = ["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"];

let oylar = ["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentyabr","Oktyart","Noyabr","Dekabr"];

document.write("Bugun " + yil + "-yil " + oylar[oy] + "-oyning " + kun + "-kuni. Haftaning esa " + haftakunlari[haftakun] +"-kuni.");
