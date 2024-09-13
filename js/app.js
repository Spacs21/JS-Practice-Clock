const time = document.querySelector(".time")
const realdate = document.querySelector(".date")
function currentTime(){
    let date = new Date()
    let hour = date.getHours().toString().padStart(2, "0")
    let minute = date.getMinutes().toString().padStart(2, "0")
    let second = date.getSeconds().toString().padStart(2, "0")
    time.innerHTML = `${hour}:${minute}:${second}`
}

function getDate(){
    let date = new Date()
    let day = date.getDate().toString().padStart(2, "0")
    let month = (date.getMonth() + 1).toString().padStart(2, "0")
    let year = date.getFullYear()
    realdate.innerHTML = `${day}:${month}:${year}`
}

getDate()
setTimeout( function(){
    getDate()
}, 1000 * 60 * 60 * 24 ) 

setInterval(()=>{
    currentTime()
}, 1000)



let week = new Date().getDay()
function currentWeek(){
    let thisWeek = document.querySelector(".week")
    switch(week){
        case 1:
            thisWeek.innerHTML = "Dushanba"
            break;
        case 2:
            thisWeek.innerHTML = "Seshanba"
            break;
        case 3:
            thisWeek.innerHTML = "Chorshanba"
            break;
        case 4:
            thisWeek.innerHTML = "Payshanba"
            break;
        case 5:
            thisWeek.innerHTML = "Juma"
            break;
        case 6:
            thisWeek.innerHTML = "Shanba"
            break;
        case 7:
            thisWeek.innerHTML = "Yakshanba"
            break;
    }
}
currentWeek()

// har kuni ozgaradi
setTimeout( function(){
    currentWeek()
}, 1000 * 60 * 60 * 24 ) 


// knopkalar funksionali
const dateID = document.getElementById('date')
const dayID = document.getElementById('day')
const title = document.getElementById('dateTitle')
const timeID = document.getElementById('time')
const dateBtn = document.getElementById('sana')
const goBack = document.getElementById('back')
const nextPage = document.getElementById('hider')
const news = document.getElementById('news')

function showDate(){
    dateID.style.display = "block"
    dayID.style.display = "block"
    goBack.style.display = "block"

    title.style.display = "none"
    timeID.style.display = "none"
    dateBtn.style.display = "none"
    nextPage.style.display = "none"
    news.style.display = "none"
}

function showTime(){
    dateID.style.display = "none"
    dayID.style.display = "none"
    goBack.style.display = "none"

    title.style.display = "block"
    timeID.style.display = "block"
    dateBtn.style.display = "block"
    nextPage.style.display = "none"
    news.style.display = "none" 
}

function switchPage(){
    nextPage.style.display = "flex"

    title.style.display = "none"
    timeID.style.display = "none"
    dateBtn.style.display = "none"
    dateID.style.display = "none"
    dayID.style.display = "none"
    goBack.style.display = "none"
    news.style.display = "none"
}

function newsPage(){
    news.style.display = "flex"

    title.style.display = "none"
    timeID.style.display = "none"
    dateBtn.style.display = "none"
    dateID.style.display = "none"
    dayID.style.display = "none"
    goBack.style.display = "none"
    nextPage.style.display = "none"
}


// audio
const audio = document.getElementById('audio')
const playID = document.getElementById('play')
const pauseID = document.getElementById('pause')
audio.play()
function playAudio(){
    audio.play()
    audio.currentTime = 0;

    pauseID.style.display = "block"
    playID.style.display = "none"
}

function pauseAudio(){
    audio.pause()
    audio.currentTime = 0;

    pauseID.style.display = "none"
    playID.style.display = "block"
}


// codeWars
// Sana bugungi kunga to'g'ri kelishini tekshiruvchi funksiya
function isToday(date) {
    const today = new Date();
    return date.getFullYear() === today.getFullYear() &&
           date.getMonth() === today.getMonth() &&
           date.getDate() === today.getDate();
  }
  
  // "Hello World!" matnini konsolga chiqaruvchi funksiya
  class Solution {
    static main() {
      console.log("Hello World!");
    }
  }
  
  // Ismni qabul qilib, salomlashish matnini qaytaruvchi funksiya
  function greet(name) {
    return `Hello, ${name} how are you doing today?`;
  }
  
  // Berilgan yilning asrini aniqlovchi funksiya
  function getCentury(year) {
    return Math.ceil(year / 100);
  }
  
  // Raqamni teskari tartibda raqamlar massiviga aylantiruvchi funksiya
  function digitize(n) {
    return n.toString().split('').reverse().map(Number);
  }
  
  // Talabalarga blankalarni hisoblaydigan funksiya
  function calculateBlankPages(n, m) {
    if (n < 0 || m < 0) {
      return 0;
    }
    return n * m;
  }
  
  // Ikki so'zdan iborat ismni qisqa shaklga aylantiruvchi funksiya
  function abbrevName(name) {
    const [firstName, lastName] = name.split(' ');
    return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;
  }
  
  // Funksiyalarni konsolda tekshirish
  console.log(isToday(new Date())); // Hozirgi sana
  console.log(Solution.main()); // "Hello World!" matni
  console.log(greet('John Doe')); // Salomlashish matni
  console.log(getCentury(1705)); // 18-asr
  console.log(digitize(35231)); // [1, 3, 2, 5, 3]
  console.log(calculateBlankPages(5, 5)); // 25
  console.log(abbrevName('Sam Harris')); // S.H
  
