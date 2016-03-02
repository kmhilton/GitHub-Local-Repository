$( document ).ready(function() {
    var box = $(".box");

    box.on('click', function(event) {

        var el = $(this);

        $(this).animate({
            'margin-left': 900,       //use an object here, b/c you can add more and HAVE to put quotes on
            'background-color': 'red'
        }, 3000, 'easeInOutElastic', function onComplete() {   //property value b/c - makes it invalid with out ...or write it like
            el.css({                        // marginLeft and backgroundColor
                 'margin-left': 20,          // easings.net (easing) and jqueryui.com (color)
                 'background-color':'white'
            });
        });
      });
});
//so, "this" gets used a lot in event listeners and the actual element that triggers it is "this"

//alternative way to call jquery to run a function (this is exactly the same as 1-3)
//   $(function() {
//   });
