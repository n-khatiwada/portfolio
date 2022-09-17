
(function($)
{
    $.fn.Ticker = function(options)
    {
        var defaults = {

            // Time to display each news item. (integer, milliseconds)
            pause: 2000,

            // Time taken to fade in next news item. (integer, milliseconds)
            fadeIn: 200,

            // Time taken to fade out current news item. (integer, milliseconds)
            fadeOut: 000,

            // Pause between displaying each item when fading between items. (integer, milliseconds)
            delay: 000,

            // Next news item typed out one character at a time. If false item will fade in. (boolean)
            typewriter: true,

            // Time to type each character if using the typewriter effect (integer, milliseconds)
            speed: 8,

            // Character to use to mimic a computer cursor if using the typewriter effect (string|boolean)
            cursor: '_'
        };

        // Merge default options with user options
        var opts = $.extend({}, defaults, options);

        return $(this).each(function()
        {
            var list = $(this), typewriter = {}, interval;

            // Activate ticker and display first item
            list
                .addClass('ticker-active')
                .children(':first')
                .css('display', 'block');

            function changeItem()
            {
                var item = list.children(':first'),
                    next = item.next(),
                    copy = item.clone();

                clearTimeout(interval);

                // Append copy of current item to bottom of list
                // $(copy)
                //     .css('display', 'none')
                //     .appendTo(list);
                document.getElementById("eqn").innerHTML += item.html() +'<br>';

                // Fade current item out, remove from DOM then animate the next item
                item.fadeOut(opts.fadeOut, function()
                {
                    $(this).remove();

                    // Animate
                    if (opts.typewriter)
                    {
                        typewriter.string = next.html();

                        next
                            .text('')
                            .css('display', 'block');

                        typewriter.count = 0;
                        typewriter.timeout = setInterval(type, opts.speed);
                    }
                    else
                    {
                        next
                            .delay(opts.delay)
                            .fadeIn(opts.fadeIn, function ()
                            {
                                setTimeout(changeItem, opts.pause);
                            });
                    }
                });
            }

            function type()
            {
                typewriter.count++;
                if (list.find('li').length < 1)
                {
                    return;
                }
                var text =  typewriter.string.substring(0, typewriter.count);

                if (typewriter.count >= typewriter.string.length)
                {
                    clearInterval(typewriter.timeout);
                    setTimeout(changeItem, opts.pause);
                }
                else if (opts.cursor)
                {
                    text+= ' ' + opts.cursor;
                }

                list
                    .children(':first')
                    .html(text);
            }

            // Test there are more items to display then start ticker
            if (list.find('li').length > 1 )
            {
                interval = setTimeout(changeItem, opts.pause);
            }
        });
    };

    $('.ticker').Ticker();
})(jQuery);



// const readMoreBtn = document.querySelector('.read-more-btn');
//     const text = document.querySelector('.content')

//     readMoreBtn.addEventListener('click', (e)=>{
//         text.classList.toggle('show-more');
//         if(readMoreBtn.innerText === 'Read More'){
//             readMoreBtn.innerText = 'Read Less';
//         }
//         else{
//             readMoreBtn.innerText = 'Read More';
//         }
//     })

// set up text to print, each item in array is new line
// var aText = new Array(
//     `I'm Nitesh Khatiwada, and I study Physics at Jacobs University Bremen.`
//     );
//     var iSpeed = 100; // time delay of print out
//     var iIndex = 0; // start printing array at this posision
//     var iArrLength = aText[0].length; // the length of the text array
//     var iScrollAt = 20; // start scrolling up at this many lines
     
//     var iTextPos = 0; // initialise text position
//     var sContents = ''; // initialise contents variable
//     var iRow; // initialise current row
     
//     function typewriter()
//     {
//      sContents =  ' ';
//      iRow = Math.max(0, iIndex-iScrollAt);
//      var destination = document.getElementById("typedtext");
     
//      while ( iRow < iIndex ) {
//       sContents += aText[iRow++] + '<br />';
//      }
//      destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
//      if ( iTextPos++ == iArrLength ) {
//       iTextPos = 0;
//       iIndex++;
//       if ( iIndex != aText.length ) {
//        iArrLength = aText[iIndex].length;
//        setTimeout("typewriter()", 1000);
//       }
//      } else {
//       setTimeout("typewriter()", iSpeed);
//      }
//     }
//     typewriter();

const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const setClock = () => {
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;

	hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
	min.style.transform = `rotateZ(${mm}deg)`;
	sec.style.transform = `rotateZ(${ss}deg)`;
};

// first time
setClock();
// Update every 1000 ms
setInterval(setClock, 1000);

let currentTheme = "dark";
// currentTheme = localStorage.getItem("theme")
// 	? localStorage.getItem("theme")
// 	: null;
//Munna Ahmed proect
if (currentTheme) {
	document.documentElement.setAttribute("data-theme", currentTheme);
}
//Munna Ahmed proect

