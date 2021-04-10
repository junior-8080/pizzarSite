// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const slides = document.querySelectorAll('.slide-item');
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next')

navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
})

// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  
  //Get all the data from the DOM needed for manipulations
  const image = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const information = document.getElementById("info");
  
  const previousBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  let currentValue = 0;
  
  window.addEventListener("DOMContentLoaded",function(){
    personDetails(currentValue);
  });
  
  function personDetails(personValue){
    const person = reviews[personValue];
    image.src = person.img;
    author.textContent = person.name;
    job.textContent = person.job;
    information.textContent = person.text;
  }
  
  //next person
  nextBtn.addEventListener("click",function(){
    currentValue++;
    if(currentValue > reviews.length - 1){
      currentValue = 0;
    }
    personDetails(currentValue);
  });
  
  previousBtn.addEventListener("click",function(){
    currentValue--;
    if(currentValue < 0){
      currentValue = reviews.length -1;
    }
    personDetails(currentValue);
  });
  
  randomBtn.addEventListener("click",function(){
    currentValue = randonNumber();
    if(currentValue < 0){
      currentValue = reviews.length -1;
    }
    if(currentValue > reviews.length -1){
      currentValue = 0;
    }
    personDetails(currentValue);
  })
  
  function randonNumber(){
    return Math.floor(Math.random() * reviews.length);
  }