/*!
 * jQuery Final Countdown
 *
 * @author Pragmatic Mates, http://pragmaticmates.com
 * @version 1.1.1
 * @license GPL 2
 * @link https://github.com/PragmaticMates/jquery-final-countdown
 */

$('document').ready(function() {
     'use strict';
     
    $('.countdown').final_countdown({
         'start': 1362139200,
         'end': 136213920,
         'now': 1362139200        
     });
 });

(function ($) {
    var settings;
    var timer;

    var circleSeconds;

    var layerSeconds;

    var element;
    var callbackFunction;

    $.fn.final_countdown = function(options, callback) {
        element = $(this);        

        // Element is not visibile
        if ( ! element.is(':visible') ) {
            return;
        }

        var defaults = $.extend({
            start: 1362139200,
            end: 1362139220,
            now: 1362139200,
            selectors: {
                value_seconds: '.clock-seconds .val',
                canvas_seconds: 'canvas-seconds'
            },
            seconds: {
                borderColor: '#FFD500',
                borderWidth: '6'
            }
        }, options);

        settings = $.extend({}, defaults, options);

        if (settings.start === undefined) {
            settings.start = element.data('start');
        }

        if (settings.end === undefined) {
            settings.end = element.data('end');
        }

        if (settings.now === undefined) {
            settings.now = element.data('now');
        }

        if (element.data('border-color')) {
            settings.seconds.borderColor = settings.minutes.borderColor = settings.hours.borderColor = settings.days.borderColor = element.data('border-color');
        }

        if (settings.now < settings.start ) {
            settings.start = settings.now;
            settings.end = settings.now;
        }

        if (settings.now > settings.end) {
            settings.start = settings.now;
            settings.end = settings.now;
        }

        if (typeof callback == 'function') { // make sure the callback is a function
            callbackFunction = callback;
        }
        
        responsive();
        dispatchTimer();
        prepareCounters();
        startCounters();
    };

    function responsive() {
        $(window).load(updateCircles);

        $(window).on('redraw', function() {
            switched = false;
            updateCircles();
        });
        $(window).on('resize', updateCircles);
    }

    function updateCircles() {     
        layerSeconds.draw();
    }

    function convertToDeg(degree) {
        return (Math.PI/180)*degree - (Math.PI/180)*90
    }

    function dispatchTimer() {
        timer = {
            seconds: 60 - Math.floor(120 % 60 )
        }
    }

    function prepareCounters() {
        // Seconds
        var seconds_width = $('#' + settings.selectors.canvas_seconds).width()
        var secondsStage = new Kinetic.Stage({
            container: settings.selectors.canvas_seconds,
            width: seconds_width,
            height: seconds_width
        });

        circleSeconds = new Kinetic.Shape({
            drawFunc: function(context) {
                var seconds_width = $('#' + settings.selectors.canvas_seconds).width()
                var radius = seconds_width / 2 - settings.seconds.borderWidth / 2;
                var x = seconds_width / 2;
                var y = seconds_width / 2;

                context.beginPath();
                context.arc(x, y, radius, convertToDeg(0), convertToDeg(timer.seconds * 6));
                context.fillStrokeShape(this);

                $(settings.selectors.value_seconds).html(60 - timer.seconds);
            },
            stroke: settings.seconds.borderColor,
            strokeWidth: settings.seconds.borderWidth
        });

        layerSeconds = new Kinetic.Layer();
        layerSeconds.add(circleSeconds);
        secondsStage.add(layerSeconds);
    }

    function startCounters() {        
        var interval = setInterval( function() {                        
            if (timer.seconds > 59 ) {

                timer.seconds = 1;

            } 
            else {            
                timer.seconds++;
            }

            layerSeconds.draw();
        }, 333.33);
    }
})(jQuery);