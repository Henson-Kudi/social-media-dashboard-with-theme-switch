var darkMode = document.querySelector(".mode");

var slider = document.querySelector('.slider')

var darkContent = document.querySelectorAll(".content");

var darkMain= document.querySelector(".main-container");

var darkHeader = document.querySelector(".header");

var darkH2 = document.querySelectorAll("h2");

var darkH3 = document.querySelectorAll("h3");


slider.addEventListener('click', function(){
    let darkSlider = slider.classList.toggle('dark-mode');

    if(darkSlider){
        darkContent.forEach(content =>{
            content.classList.add('dark-content');
        });

        slider.classList.add('dark-slider');

        darkMain.classList.add('dark-main');

        darkHeader.classList.add('dark-header');

        darkH3.forEach(h3 =>{
            h3.classList.add('dark-h3')
        });

        darkH2.forEach(h2 =>{
            h2.classList.add('dark-h2')
        });

        darkMode.classList.add('dark-mode');
        
    }else{
        darkContent.forEach(content =>{
            content.classList.remove('dark-content');
        });

        slider.classList.remove('dark-slider');

        darkMain.classList.remove('dark-main');

        darkHeader.classList.remove('dark-header');

        darkH3.forEach(h3 =>{
            h3.classList.remove('dark-h3')
        });

        darkH2.forEach(h2 =>{
            h2.classList.remove('dark-h2')
        });
        darkMode.classList.remove('dark-mode');
    }
    
});

