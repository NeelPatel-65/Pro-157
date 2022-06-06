    AFRAME.registerComponent("tour", {
        init: function () {
        this.placesContainer = this.el;
        this.createPoster()
        this.createCards()
        },
    
       
        
    createPoster:function(item){
            const entityEl=document.createElement("a-entity");
            entityEl.setAttribute("visible",true);
            entityEl.setAttribute("geometry",{
            primitive:"plane",
            width:20,
            height:28
            });
            entityEl.setAttribute("position",{x:0,y:5,z:0.1});
            entityEl.setAttribute("material",{src:item.url});
        },

        createCards: function () {
            const thumbNailsRef = [
              {
                id: "com1",
                title: "T",
                url: "./assets/thumbnails/taj_mahal.png",
              },
              {
                id: "budapest",
                title: "Budapest",
                url: "./assets/thumbnails/budapest.jpg",
              },
        
              {
                id: "eiffel-tower",
                title: "Eiffel Tower",
                url: "./assets/thumbnails/eiffel_tower.jpg",
              },
              {
                id: "new-york-city",
                title: "New York City",
                url: "./assets/thumbnails/new_york_city.png",
              },
            ];
                
            
    })

   