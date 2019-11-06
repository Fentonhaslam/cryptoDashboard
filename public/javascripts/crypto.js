var Crypto = function() {
  this.bitcoinValue = 0;
};

Crypto.prototype = {
  saveValue: function(coin) {
    var url = "https://api.coingecko.com/api/v3/simple/";
    var coinID = "price?ids=" + coin;
    var currency = "&vs_currencies=usd";
    $.get(url + coinID + currency, function(data) {
      console.log(data[coin].usd);
      this.bitcoinValue = data[coin].usd;
      console.log(this.bitcoinValue);
    });
  }
};
