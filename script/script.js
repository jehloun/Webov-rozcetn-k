var mozajka = [
    adamQuick = {image:"url(images/adamQuickHigh.jpg)", logo:"url(images/adamQuickLogo960.png)"},
    allStar = {image:"url(images/allstarhigh.jpg)", logo:"url(images/allStarLogo1.png)"}
];


  function getSecundes() {
    var currentTime = new Date();
    var secundes = currentTime.getSeconds();
    return secundes;
}

  
$( ".mozajka .sloupec div" )
  .mouseenter(function() {
    var selector = $(this).children("a");
    selector = selector.children("div");
    selector.css("animation-duration","1s");
    selector.css("background-image",findPicture(selector.css('background-image'),"logo"));
    selector.addClass("flipOut");
    selector.removeClass("flipIn");  
  })
  
  .mouseleave(function() {
    var selector = $(this).children("a");
    selector = selector.children("div");
    selector.css("animation-duration","3s");
    selector.removeClass("flipOut");
    selector.addClass("flipIn");
    selector.css("background-image",findPicture(selector.css('background-image'),"image"));
  });
  
 $(function() {
    var clanekPozadi = $( ".mozajka .sloupec .obal div" );
    var pozadi;
    var objeveni = Math.floor((Math.random() * 5) + 1);
    
    
    for (i = 0; i < clanekPozadi.length; i++){
        pozadi = mozajka[i].image;
        objeveni = Math.floor((Math.random() * 7) + 1);
        $(clanekPozadi[i]).css("background-image",pozadi);
        $(clanekPozadi[i]).css("background-image",pozadi);
        $(clanekPozadi[i]).css("animation-duration",objeveni + "s");
        $(clanekPozadi[i]).addClass("zoomIn");
    }
    
    
 });

 
function findPicture(picture, strana) {
        for (i = 0; i < mozajka.length; i++){
            if (trimPicturePath(mozajka[i]["image"]) === trimPicturePath(picture)) {
            return mozajka[i]["logo"];  
            }
            
            if (trimPicturePath(mozajka[i]["logo"]) === trimPicturePath(picture)) {
            return mozajka[i]["image"];   
            }
            
    }
}

function trimPicturePath (picture) {
    var pic = picture.split('/').pop();
    pic = pic.split(".");
    return pic[0];
}
 

function getSecundes() {
    var currentTime = new Date();
    var secundes = currentTime.getSeconds();
    return secundes;
}
  
  