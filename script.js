let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent= "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity ="1";
    Array.from(nextWord.children).forEach((letter, i) => {
     letter.className = "letter behind";
     setTimeout(() => {
        letter.className = "letter in";
      },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0: currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000)

// SKILLS

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=> {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i=0; i< dots; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg" ></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i=0; i<percent; i++){
        pointsMarked[i].classList.add('marked');
    }

})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-items");
      } else {
        entry.target.classList.remove("show-items");
      }
    });
  });
  
  const scrollScale = document.querySelectorAll(".scroll-scale");
  scrollScale.forEach((el) => {
    observer.observe(el);
  });
  
  const scrollBottom = document.querySelectorAll(".scroll-bottom");
  scrollBottom.forEach((el) => {
    observer.observe(el);
  });
 
// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar  = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top< offset + height){
      navlinks.forEach.apply(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};


  