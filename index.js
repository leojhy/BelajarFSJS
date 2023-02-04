/**
 *
 *
 */
var alas = 10;
var tinggi = 5;

var luas = 0.5 * alas * tinggi;
console.log("luas : " + luas);

var u = 16;
if (u >= 17) {
  console.log("Bisa bikin KTP");
} else console.log("Belum bisa bikin KTP");

var pilih = "teh";
switch (pilih) {
  case "kopi":
    console.log("Anda pilih Kopi");
    break;
  case "teh":
    console.log("anda pilih teh");
    break;
}

var b = 4;
if (b % 2 == 0) console.log(b + " Bilangan Genap");
else console.log(b + " Bilangan ganjil");

var nl = 53;
if (nl >= 85) console.log(nl + " Grade A");
else if (nl >= 70 && nl < 85) console.log(nl + " Grade B");
else if (nl >= 55 && nl < 70) console.log(nl + " Grade C");
else if (nl >= 40 && nl < 55) console.log(nl + " Grade D");
else console.log(nl + " Grade E");

var total = 750000;
var ndisc = "discount10%";
var dic = 0;

switch (ndisc) {
  case "discount10%":
    if (total >= 500000) dic = 10;
    else if (total >= 30000) dic = 5;
    else dic = 2.5;
    break;
  case "discountharbobnas":
    if (total >= 250000) dic = 15;
    break;
}

total = total - (total * dic) / 100;

console.log("total yang harus dibayar adalah Rp. " + total);
