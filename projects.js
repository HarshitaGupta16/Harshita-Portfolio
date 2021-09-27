const list = [
  {
    h1: "Stock Profit and Loss",
    date: "1 September, 2021",
    p: "A GUI app built in <strong>JavaScript, HTML, CSS </strong>in which you can enter the initial price of stock (the price at which you bought it), quantity  of stock and the current price of the stock, then it will calculate if there is profit, loss or no profit no loss for the user.",
    primaryLink: "https://hfft2.csb.app/",
    secondaryLink:
      "https://github.com/HarshitaGupta16/stock-profit-loss",
  },
  {
    h1: "Birthday Palindrome",
    date: "20 August, 2021",
    p: "This is a <strong>JavaScript, HTML, CSS </strong>based application where you can enter your birth date and the app will check if your birthday is a palindrome or not. Also calculate the nearest palindrome date.",
    primaryLink: "https://0814v.csb.app/",
    secondaryLink:
      "https://github.com/HarshitaGupta16/birthday-palindrome",
  },
  {
    h1: "Fun With Triangles",
    date: "12 August, 2021",
    p: "This is a <strong>ReactJS </strong>based application for kids in which they can learn triangle’s area formulae, learn about different types of triangles and their properties in a play way method. It also has some quizzes to play.",
    primaryLink: "https://g0do9.csb.app/",
    secondaryLink: "https://github.com/HarshitaGupta16/fun-with-triangles"
  },
  {
    h1: "Lucky By Birth Meter",
    date: "29 July, 2021",
    p: "A GUI app built with <strong>ReactJS, HTML, CSS</strong>. This app is hosted on codesandbox. You enter your date of birth and the lucky number as input. On this basis the app will print a message telling wheather the user is lucky or not. ",
    primaryLink: "https://sh9m6.csb.app/",
    secondaryLink: "https://github.com/HarshitaGupta16/lucky-by-birth-meter"
  },
  {
    h1: "Cash Counter",
    date: "23 July, 2021",
    p: "A GUI app built with <strong>ReactJS, HTML, CSS</strong>. This app is hosted on codesandbox. You enter the bill amount and the cash amount you will give to pay the bill. This will calculate and return the change that the customer will recieve with minimum number of notes. ",
    primaryLink: "https://oyisy.csb.app/",
    secondaryLink: "https://github.com/HarshitaGupta16/cash-counter"
  },
  {
    h1: "Pustak Bhawan",
    date: "7 July, 2021",
    p: "A GUI app built with <strong>ReactJS, HTML, CSS</strong>. This app is hosted on codesandbox. You can click on any book category you want search a book in. A list of books will be shown to the user in that selected category.",
    primaryLink: "https://kd98e.csb.app/",
    secondaryLink: "https://github.com/HarshitaGupta16/pustak-bhawan"
  },
  {
    h1: "Emoji Interpreter",
    date: "29 June, 2021",
    p: "A GUI app built with <strong>ReactJS, HTML, CSS</strong>. This app is hosted on codesandbox. You can give any emoji as input and the app will tell it's meaning.",
    primaryLink: "https://s1xod.csb.app/",
    secondaryLink: "https://github.com/HarshitaGupta16/emoji-interpreter"
  },
  {
    h1: "Ferb Latin Translator",
    date: "21 Sept 2021",
    p: "A GUI App built using <strong>Vanilla JS, HTML, CSS</strong>. Hosted on codesandbox. This app will translate any English sentence in Ferb Latin language.",
    primaryLink: "https://5fujj.csb.app/",
    secondaryLink: "https://github.com/HarshitaGupta16/english-to-ferb-latin-translator" 
  },
  {
    h1: "Banana Talk",
    date: "22 June, 2021",
    p: "A GUI app built with <strong>HTML, CSS, JavaScript</strong>. This app is hosted on codepen. You can give any English sentence as input and the app will convert it to Minion's Banana Language.",
    primaryLink: "https://3sgr9.csb.app/",
    secondaryLink: "https://github.com/HarshitaGupta16/banana-talk"
  },
  {
    h1: "Harshita Portfolio",
    date: "June, 2021",
    p: "This is my portfolio where I have showcased all my projects, blogs. Hi.. I am a aspiring web developer exploring this world of web development by making some projects, writing blogs. Go through the website to know more about my works!!",
    primaryLink: "https://harshitagupta.netlify.app/",
    secondaryLink: "https://github.com/HarshitaGupta16/Harshita-Portfolio"
  },
  {
    h1: "How good GK you have about India?",
    date: "June, 2021",
    p: "A CLI app built with <strong>NodeJS</strong>. You can send this to your friends and find out who has a good knowledge about India or want to test their knowledge.",
    primaryLink: "https://replit.com/@Harshita16/Neog-GK-Test-India-Game?embed=1&output=1",
    secondaryLink: "https://github.com/HarshitaGupta16/Neog-GK-Test-India-Game"
  },
  {
    h1: "How well do you know me?",
    date: "June, 2021",
    p: "A CLI app built with <strong>NodeJS</strong>. You can send this to your friends and find out who really knows you.",
    primaryLink: "https://replit.com/@Harshita16/question-answer-gameend-game?embed=1&output=1",
    secondaryLink: "https://github.com/HarshitaGupta16/Buddy-Meter"
  }
];

let orderedList = document.querySelector("ol");
let allProjectsList = "";

for (let item of list) {
  let project = 
  `<li class="list-beautify">
    <div class="container container-center margin-medium">
        <h1>${item["h1"]}</h1>
        <small>${item["date"]}</small>
        <p>${item["p"]}</p>
        <a class="link link-primary" href=${item["primaryLink"]}>Live Project</a>
        <a class="link link-secondary" target="_blank" href=${item["secondaryLink"]} >View Source Code</a>
    </div>
</li>`;
allProjectsList += project;
}

orderedList.innerHTML = allProjectsList;
