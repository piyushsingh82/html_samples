let countDownDate = new Date("Mar 31, 2020 00:00:00").getTime();

console.log(countDownDate);

//updating count every second 

var count = setInterval(function(){
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
            
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        // Output the result in an element with id="demo"
        document.getElementById("Timerdemo").innerHTML = "<p class='timer'>"+days + "d " + hours + "h " + minutes + "m " + seconds + "s  </p>";
        console.log(distance);
        // If the count down is over, write some text 
         if (distance <= 0) {    
             clearInterval(x);   
             document.getElementById("Timerdemo").innerHTML = "EXPIRED";
            }
    }, 1000);
