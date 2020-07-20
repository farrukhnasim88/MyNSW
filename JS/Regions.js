var Regions = {
    setup: function() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
        alert('hi there');
    },

    carousel: function() {
        var i;
        var myIndex = 0;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) { myIndex = 1 }
        x[myIndex - 1].style.display = "block";
        setTimeout(3000);
        alert('hi carousel');
    },
   SouthCoast: function(){
        $(document).ready(function () {
            
            $(".flip1").click(function () {
                $(".panel1").slideToggle("slow");
            });
        
        });
    },
    NorthCoast: function(){
        $(document).ready(function () {
            $(".flip2").click(function () {
                $(".panel2").slideToggle("slow");
            });
        });
    },
    Riverina: function(){
        $(document).ready(function () {
            $(".flip3").click(function () {
                $(".panel3").slideToggle("slow");
            });
        });
    },
    Hunter:function (){
        $(document).ready(function () {
            $(".flip4").click(function () {
                $(".panel4").slideToggle("slow");
            });
        });
    },
    Western: function(){
        $(document).ready(function () {
            $(".flip5").click(function () {
                $(".panel5").slideToggle("slow");
            });
        });
    },
    Murray: function(){
        $(document).ready(function () {
            $(".flip6").click(function () {
                $(".panel6").slideToggle("slow");
            });
        });
    },
    NorthernTablelands: function(){
        $(document).ready(function () {
            $(".flip7").click(function () {
                $(".panel7").slideToggle("slow");
            });
        });
    },
    CentralTablelands: function(){
        $(document).ready(function () {
            $(".flip8").click(function () {
                $(".panel8").slideToggle("slow");
            });
        });
    },



    

 
}