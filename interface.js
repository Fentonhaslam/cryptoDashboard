$(document).ready(function() {
  function displayCrypto1(coin) {
    var url = "https://api.coingecko.com/api/v3/simple/";
    var coinID = "price?ids=" + coin;
    var currency = "&vs_currencies=usd";
    var link = url + coinID + currency;
    console.log(link);
    $.get(url + coinID + currency, function(data) {
      console.log(data);
      $("#crypto1").val(data);
    });
  }
  $("#choice1").change(function() {
    var coin = $("#choice1").val();
    console.log(coin);
    console.log(displayCrypto1(coin));
    displayCrypto1(coin);
  });
});
