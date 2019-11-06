$(document).ready(function() {
  var crypto = new Crypto();

  function displayCrypto1(coin) {
    var url = "https://api.coingecko.com/api/v3/simple/";
    var coinID = "price?ids=" + coin;
    var currency = "&vs_currencies=usd";
    $.get(url + coinID + currency, function(data) {
      //console.log(data[coin].usd);
      $("#crypto1").text(data[coin].usd);
    });
  }
  $("#choice1").change(function() {
    var coin = $("#choice1").val();
    //console.log(coin);
    //console.log(displayCrypto1(coin));
    displayCrypto1(coin);
  });

  function bitcoinValue(coin) {
    var url = "https://api.coingecko.com/api/v3/simple/";
    var coinID = "price?ids=" + coin;
    var currency = "&vs_currencies=usd";
    $.get(url + coinID + currency, function(data) {
      console.log(data[coin].usd);
      $("#bitcoin").text(data[coin].usd);
    });
  }
  function ethereumValue(coin) {
    var url = "https://api.coingecko.com/api/v3/simple/";
    var coinID = "price?ids=" + coin;
    var currency = "&vs_currencies=usd";
    $.get(url + coinID + currency, function(data) {
      console.log(data[coin].usd);
      $("#ethereum").text(data[coin].usd);
    });
  }
  function litecoinValue(coin) {
    var url = "https://api.coingecko.com/api/v3/simple/";
    var coinID = "price?ids=" + coin;
    var currency = "&vs_currencies=usd";
    $.get(url + coinID + currency, function(data) {
      console.log(data[coin].usd);
      $("#litecoin").text(data[coin].usd);
    });
  }
  function ripplecoinValue(coin) {
    var url = "https://api.coingecko.com/api/v3/simple/";
    var coinID = "price?ids=" + coin;
    var currency = "&vs_currencies=usd";
    $.get(url + coinID + currency, function(data) {
      console.log(data[coin].usd);
      $("#ripple").text(data[coin].usd);
    });
  }

  var bitcoinElement = $("#bitcoin")[0].getAttribute("value");
  var ethereumElement = $("#ethereum")[0].getAttribute("value");
  var litecoinElement = $("#litecoin")[0].getAttribute("value");
  var ripplecoinElement = $("#ripple")[0].getAttribute("value");
  bitcoinValue(bitcoinElement);
  ethereumValue(ethereumElement);
  litecoinValue(litecoinElement);
  ripplecoinValue(ripplecoinElement);
  //console.log(bitcoinCoin);

  function loadlink() {
    bitcoinValue(bitcoinElement);
    ethereumValue(ethereumElement);
    litecoinValue(litecoinElement);
    ripplecoinValue(ripplecoinElement);
  }
  setInterval(function() {
    loadlink();
  }, 60000);
});
