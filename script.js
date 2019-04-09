"use strict"; 

(function() {  
    var data = [
        {
            id: "box1",
            title: "First box",
            content: "<p>Lorem ipsum dolor sit amet!</p>",
            categories: ["highlighted", "special-header", "important"]
        },
        {
            id: "box2",
            title: "Second box",
            content: "<p>Lorem ipsum dolor sit amet!</p>",
            categories: ["special-header", "important"]
        },
        {
            id: "box3",
            title: "Third box",
            content: "<p>Lorem ipsum dolor sit amet!</p>",
            categories: ["highlighted", "important"]
        },
        {
            id: "box4",
            title: "Fourth box",
            content: "<p>Lorem ipsum dolor sit amet!</p>",
            categories: ["highlighted"]
        },
        {
            id: "box5",
            title: "Fifth box",
            content: "<p>Lorem ipsum dolor sit amet!</p>",
            categories: []
        }
    ];
   

for (let i=0; i<data.length; i++) {
    console.log( data[i] );
}
var div = document.createElement("div");
var header = document.createElement("header");
var headerContent = document.createTextNode("title");
header.appendChild(headerContent);
div.append(header);
})();
