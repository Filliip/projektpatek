const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const reset = document.getElementById("reset");
const upgrade = document.getElementById("upgrade");
const autoclickerUpgrade = document.getElementById("autoclicker");

let numberOfCookies = 0;
let cookieIncrease = 1;
let clickUpgradePrice = 50;
let autoclickerInterval;
let autoclickerCookieIncreaseNumber = 0;
let autoclickerUpgradePrice = 100;

cookie.onclick = () => {
    numberOfCookies += cookieIncrease;
counter.innerText = ( "BALLS "+ Math.round(numberOfCookies));

}

reset.onclick = () => {
    numberOfCookies = 0;
    counter.innerText = ( "BALLS "+ 0);
}

upgrade.onclick = () =>{
    if(numberOfCookies >= clickUpgradePrice) {
        numberOfCookies -= clickUpgradePrice;
        cookieIncrease += 1;
        counter.innerText = ( "BALLS "+ Math.round(numberOfCookies));
        clickUpgradePrice *=1.2;
        upgrade.innerText = "upgrade: " + Math.round(clickUpgradePrice);
        
        
    }
}

autoclickerUpgrade.onclick = () => {
    if (numberOfCookies >= autoclickerUpgradePrice) {
        numberOfCookies -= autoclickerUpgradePrice;
        autoclickerUpgradePrice *=1.2;
        autoclicker.innerText = "autoclicker: " + Math.round(autoclickerUpgradePrice);
      counter.innerText = "BALLS:" + Math.round(numberOfCookies);

      autoclickerCookieIncreaseNumber++;
      clearInterval(autoclickerInterval);

      autoclickerInterval = setInterval(() => {
        numberOfCookies += autoclickerCookieIncreaseNumber;

        counter.innerText = "BALLS:" + Math.round(numberOfCookies);
      }, 1000);
    }
  };
