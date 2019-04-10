"use strict"; 

(function() {  
    var data = [
        {
            id: "box1",
            title: "First box",
            content: "Lorem ipsum dolor sit amet!1",
            categories: ["highlighted", "special-header", "important"]
        },
        {
            id: "box2",
            title: "Second box",
            content: "Lorem ipsum dolor sit amet!2",
            categories: ["special-header", "important"]
        },
        {
            id: "box3",
            title: "Third box",
            content: "Lorem ipsum dolor sit amet!3",
            categories: ["highlighted", "important"]
        },
        {
            id: "box4",
            title: "Fourth box",
            content: "Lorem ipsum dolor sit amet!4",
            categories: ["highlighted"]
        },
        {
            id: "box5",
            title: "Fifth box",
            content: "Lorem ipsum dolor sit amet!5",
            categories: [""]
        }
    ];
   

    for (let i = 0; i < data.length; i++) {
        
        var currentArrayElement = data[i]; 
        var header = document.createElement('header');
        var div = document.createElement('div');
        div.setAttribute('id', currentArrayElement.id);
        
        for (let j = 0; j < currentArrayElement.categories.length; j++) {   
            var currentCategories = currentArrayElement.categories[j];  
        
            console.log('1', currentCategories);
            div.setAttribute('class', currentCategories);
            
        }
    
        
        var headerContent = document.createTextNode(currentArrayElement.title);
    
        var p = document.createElement('p');
        p.innerHTML = currentArrayElement.content;
    
        header.appendChild(headerContent);
        div.appendChild(header);
        div.appendChild(p);
        document.body.appendChild(div);
    }

})();
//div.classList.add('highlighted');
        //div.setAttribute('class', currentCategories);
        //header.setAttribute('class', currentCategories);
        //zamiast join() -> przeleciec manualnie po calej tablicy `categories` i dla kazdego
        //jej elementu (czyli klasy) wykonac div.classList.add(klasa);
    
       
        //header.classList.add('special-header');

       