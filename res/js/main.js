const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoclickerUpgrade = document.getElementById("autoclickerUpgrade");

let numberOfCookies = 0;
let cookieIncreaseNumber = 1;
let autoclickerCookieIncreaseNumber = 0;
let autoclickerInterval;
let clickUpgradePrice = 50;
cookie.onclick = () => {
  numberOfCookies += cookieIncreaseNumber;
  counter.innerText = "Šmoula:" + numberOfCookies;
};

clickUpgrade.onclick = () => {
  if (numberOfCookies >= 50) {
    //odecist cenu
    // numberOfCookies = numberOfCookies - 50;
    numberOfCookies -= clickUpgradePrice;
    clickUpgradePrice *=2;
    numberOfCookies -= 50;
    clickUpgrade.innerHTML = ´Buy click upgrade: $(clickUpgrade)
    //zvednout klikani o 1
    cookieIncreaseNumber++;
    counter.innerText = "Šmoula:" + numberOfCookies;
  }
};

autoclickerUpgrade.onclick = () => {
  if (numberOfCookies >= 100) {
    //odecteme cenu
    numberOfCookies -= 100;
    //zobrazime pocet susenek
    counter.innerText = "Šmoula:" + numberOfCookies;
    autoclickerCookieIncreaseNumber++;
    //zastavime interval
    clearInterval(autoclickerInterval);
    //spustime autoclicker
    autoclickerInterval = setInterval(() => {
      numberOfCookies += autoclickerCookieIncreaseNumber;
      counter.innerText = "Šmoula:" + numberOfCookies;
    }, 1000);
  }
};
