function cekLooping() {

    event.preventDefault();
    var tampung = parseInt(document.getElementById('txtUlang').value);

    var i;
    var str = '';
    for (i=1 ; i<=tampung ; i++){
        for (var j=1;j<=i;j++){
          str = str+"*";
        }
        str = str+"<br>";
      }
    document.getElementById('hasil').innerHTML = str;
}