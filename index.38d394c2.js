function toggleColors() {
    const themeImage = document.querySelector('.theme');
    if (themeImage.src.includes('/dark.b04c358c.png')) {
      document.documentElement.style.setProperty("--white", "white");
      document.documentElement.style.setProperty("--black", "black");
      document.documentElement.style.setProperty("--red", "red");
      document.documentElement.style.setProperty("--grey", "$color-grey");
      themeImage.src = '/light.758fd574.png';

    } else if (themeImage.src.includes('/light.758fd574.png')) {
      themeImage.src = '/dark.b04c358c.png';
      document.documentElement.style.setProperty("--white", "black");
      document.documentElement.style.setProperty("--black", "white");
      document.documentElement.style.setProperty("--red", "yellow");
      document.documentElement.style.setProperty("--grey", "white");
    }
  }
