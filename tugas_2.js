// tugas loop

// soal no 1
var n = 10;
var hasil = "";
for (var i = 1; i <= 10; i++) {
  if (n % i == 0) {
    hasil += i + ",";
  }
}
console.log(hasil);

//soal no 3

var nn = 5;
for (var i = 1; i <= nn; i++) {
  var p = "";
  for (x = 1; x <= i; x++) {
    if (x % 2 == 0) {
      p += "X";
    } else p += "#";
  }
  console.log(p);
}

//soal no 3

var mx = 5;
for (var i = 1; i <= 5; i++) {
  var hsl = "";
  for (var x = 1; x <= 5; x++) {
    if (i == 1 || i == mx) hsl += "#";
    else {
      if (x == 1 || x == mx) hsl += "#";
      else hsl += " ";
    }
  }
  console.log(hsl);
}
