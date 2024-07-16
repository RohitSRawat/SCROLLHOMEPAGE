var limit = 250;






$(document).ready(function() {

    var parent = document.querySelectorAll('.digitrighside');

    Array.from(parent).forEach((x) => {
        Array(limit).fill('').forEach((_, index) => {
            var child = document.createElement('div');
            child.className = 'child-div';
            var translateZValue = 9 - index;
        
            // Apply styles
            child.style.transform = `translateZ(${translateZValue}px)`;
            
            x.appendChild(child);
        });
    
    
    
    })

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

        var finalhour = now.getHours() > 12 ? now.getHours() - 12 : hours;
var length = finalhour.toString().length == 1 ? `0${finalhour}`:finalhour

        $('.hours').text(length);
        $('.minutes').text(minutes);
        $('.ampm').text(ampm);

        // Update reflection
        
    }

    // Blinking effect for the colon
    function blinkColon() {
        $('.blink').animate({opacity: 0}, 500, 'swing', function() {
            $(this).animate({opacity: 1}, 500, 'swing', blinkColon);
        });
    }

    // Initial clock update
    updateClock();

    // Update the clock every second
    setInterval(updateClock, 1000);

    // Start the blinking effect
    blinkColon();
});

