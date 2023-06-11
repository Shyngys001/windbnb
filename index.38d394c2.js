function hideGuests() {
    document.getElementsByClassName("search")[0].style.width = "10%";
    var buttons = document.getElementsByClassName("buttons");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.width = "100%";
    }
  
    document.addEventListener("click", function(e) {
      var target = e.target;
      var isButton = false;
  
      while (target !== document.documentElement) {
        if (target.classList.contains("buttons")) {
          isButton = true;
          break4
        }
        target = target.parentNode;
      }
  
      if (!isButton) {
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].style.width = "30%";
        }

    document.getElementsByClassName("search")[0].style.width = "100%";
      }
    });
  
  }


  function toggleColors() {
    document.documentElement.style.setProperty("--white", "black");

    const themeImage = document.querySelector('.theme');
    if (themeImage.src.includes('dark.png')) {
      document.documentElement.style.setProperty("--white", "white");
      document.documentElement.style.setProperty("--black", "black");
      document.documentElement.style.setProperty("--red", "red");
      document.documentElement.style.setProperty("--grey", "$color-grey");
      themeImage.src = 'light.png';

    } else if (themeImage.src.includes('light.png')) {
      themeImage.src = 'dark.png';
      document.documentElement.style.setProperty("--white", "black");
      document.documentElement.style.setProperty("--black", "white");
      document.documentElement.style.setProperty("--red", "yellow");
      document.documentElement.style.setProperty("--grey", "white");
    }
}


