// var no = 10;
// for (var i = 1; i <= no; i++) {
//   if (i % 2 == 0) console.log(i + " adalah bilangan Bulat");
//   else console.log(i + " adalah bilangan Ganjil");
// }

// var kt = "mandi lumpur";

// for (var i = 0; i < kt.length; i++) {
//   if (kt[i] != " ") console.log(kt[i]);
// }

// var syr = "sayur lodeh";
// var hasil = "";
// for (var i = 0; i < syr.length; i++) {
//   if (i % 2 === 0) hasil += syr[i].toUpperCase();
//   else hasil += syr[i];
// }
// console.log(hasil);

// var d = "xoxoxoxoxoxoxo";
// var x = 0;
// var o = 0;
// for (var i = 0; i < d.length; i++) {
//   if (d[i] == "x") x++;
//   else o++;
// }
// if (x != o) console.log(false);
// else console.log(true);

var d = 1;
var x = 0;

for (var i = 0; i < d; i++) {
  if (d%2 == 0) x++;
 
}
if (x >2) console.log(d+ " bukan bilangan prima");
else console.log(d+ " bilangan prima");
