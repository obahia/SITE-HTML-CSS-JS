window.onload = function() {
    const principal = document.querySelector('.principal');
    principal.style.opacity = '0';
    
    const fadeIn = () => {
      let opacity = 0;
      const timer = setInterval(function() {
        if (opacity >= 1) {
          clearInterval(timer);
        }
        principal.style.opacity = opacity;
        opacity += 0.01;
      }, 10);
    };
  
    fadeIn();
  };
  