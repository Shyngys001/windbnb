let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    console.log(dark)
    if (dark == true) {
        toDark()
    }
});


function toggleColors() {
    const themeImage = document.querySelector('.theme');
    if (themeImage.src.includes('/dark.b04c358c.png')) {
      document.documentElement.style.setProperty("--white", "white");
      document.documentElement.style.setProperty("--black", "black");
      document.documentElement.style.setProperty("--red", "red");
      document.documentElement.style.setProperty("--grey", "$color-grey");
      document.documentElement.style.setProperty("--redd", "--redd");

      themeImage.src = '/light.758fd574.png';

    } else if (themeImage.src.includes('/light.758fd574.png')) {
      themeImage.src = '/dark.b04c358c.png';
      document.documentElement.style.setProperty("--white", "black");
      document.documentElement.style.setProperty("--black", "white");
      document.documentElement.style.setProperty("--red", "yellow");
      document.documentElement.style.setProperty("--grey", "white");
      document.documentElement.style.setProperty("--redd", "orange");
    }
  }

function toDark() {
    const themeImage = document.querySelector('.theme');
    themeImage.src = '/dark.b04c358c.png';
    document.documentElement.style.setProperty("--white", "black");
    document.documentElement.style.setProperty("--black", "white");
    document.documentElement.style.setProperty("--red", "yellow");
    document.documentElement.style.setProperty("--grey", "white");
    document.documentElement.style.setProperty("--redd", "orange");
}

  


const options = document.getElementById('options');
const close = document.getElementById('close');
const city = document.getElementById('city');
let count1 = document.getElementById('count1');
let count2 = document.getElementById('count2');
let count = document.getElementById('count');
let choose_city = document.getElementById('p');
let c = 0;
let c2 = 0;
let c1 = 0;
const minusButton2 = document.getElementById('minus2');
const plusButton2 = document.getElementById('plus2');
const countElement2 = document.getElementById('count2');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const countElement = document.getElementById('count1');
const show_city = document.getElementById('city_show1');
const show_count = document.getElementById('counter_show1');
const city_hide = document.getElementById('city_show');
const count_hide = document.getElementById('counter_show');
const city2 = document.getElementById('city2');
const countset = document.getElementById('countset');
const search = document.getElementById('searchbtn');

function show_cities(){
    show_city.style.visibility = 'visible';
}

function show_counts(){
    show_count.style.visibility = 'visible';
}

function hide_cities(){
    show_city.style.visibility = 'hidden';
}

function hide_counts(){
    show_count.style.visibility = 'hidden';
}

city_hide.addEventListener('click', function(){
    show_cities();
    hide_counts();
} );
count_hide.addEventListener('click', function(){
    show_counts();
    hide_cities();
} );



function bigbutton(){
    options.style.display = 'block';
    options.style.margin = '0 auto';
}

function closebutton(){
    options.style.display = 'none';
}


function incrementCount() {
  c1++;
  countElement.textContent = c1;
  c++;
  count.textContent = c;
  countset.textContent = count.textContent;

}

function decrementCount() {
  if (c1 > 0) {
      c1--;
      countElement.textContent = c1;
      c = c1;
      c += c2;
  }
  count.textContent = c;
  countset.textContent = count.textContent;

}




function increment2(){
  c2++;
  count2.textContent = c2;
  c++;
  count.textContent = c;
  countset.textContent = count.textContent;

}

function decrement2(){
  if(c2 > 0){
      c2--;
      count2.textContent = c2;
      c = c2;
      c += c1;
  }    
  count.textContent = c;
  countset.textContent = count.textContent;
}

    plusButton2.addEventListener('click', increment2);
    minusButton2.addEventListener('click', decrement2);

    minusButton.addEventListener('click', decrementCount);
    plusButton.addEventListener('click', incrementCount);



    const pElements = document.querySelectorAll('.fs p');

    function setCity(event) {
        const selectedPElement = event.target;
        const selectedPContent = selectedPElement.textContent;
        city.textContent = selectedPContent;
        city2.textContent = selectedPContent;
    }

    pElements.forEach((pElement) => {
        pElement.addEventListener('click', setCity);
    });

  

    
    function choose() {
      let selectedCity = city.textContent; // Get the first element of selectedPContent
      selectedCity = selectedCity.split(", ");      
      const cards = document.querySelectorAll('.cards');
      console.log(selectedCity);
      console.log(selectedCity[0]);
      console.log(selectedCity[1]);
    
      cards.forEach((card) => {
        const city = card.getAttribute("city");
        const country = card.getAttribute("country");

    
        if (city == selectedCity[0] && country == selectedCity[1]) {
          card.style.display = 'block';
          options.style.display = 'none';
        } else {
          card.style.display = 'none'; 
        }
      });
    options.style.display = 'none';


    }
    
    search.addEventListener('click', choose);


