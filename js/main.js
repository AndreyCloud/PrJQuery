$(document).ready(function () {
    $('.small a').click(function (e) {
        if ($('.big img').attr('src') !== $(this).attr('href')) {
            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000);
        }
        e.preventDefault();
    });

    $('.button').click(function () {
        $('.gallery').slideToggle(500);
        if ($('.button').text() == '-') {
            $('.button').text('+');
        } else {
            $('.button').text('-');
        }
    });

    $('.small a img').click(function () {
        $('.small a img').fadeTo(100, 1).css({ 'outline': 'none' });
        $(this).fadeTo(400, 0.6).css({ 'outline': '1px dotted red' });
    });

    function cssShadow({
        font_size,
        offset_x,
        offset_y,
        blur,
        opacity,
        color,
        rgba
    }) {
        var cssStyles = offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' + rgba;
        $('h1').css('text-shadow', cssStyles);
        $('#result').val('\n  text_shadow: ' + offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' + rgba + '\n\n  font-size: ' + font_size + 'px');
    }
    cssShadow({
        font_size: 40,
        offset_x: 4,
        offset_y: -5,
        blur: 0,
        opacity: 1,
        rgba: 'rgba(163, 163, 163, 1)'
    });

    $(document).on('input change', 'input', function () {
        var font_size = $('#font_size').val();
        var offset_x = $('#offset_x').val();
        var offset_y = $('#offset_y').val();
        var blur = $('#blur').val();
        var opacity = $('#opacity').val();
        var color = $('input[type="color"]').val() + '';
        var red16 = color[1] + '' + color[2];
        var green16 = color[3] + '' + color[4];
        var blue16 = color[5] + '' + color[6];
        var red10 = parseInt(red16, 16);
        var green10 = parseInt(green16, 16);
        var blue10 = parseInt(blue16, 16);
        var rgba = 'rgba(' + red10 +', ' + green10 +', ' + blue10 +',' + opacity +' )';


        $('h1').css('fontSize', font_size + 'px');
        cssShadow({
            font_size: font_size,
            offset_x: offset_x,
            offset_y: offset_y,
            blur: blur,
            opacity: opacity,
            color: color,
            rgba: rgba
        });
    });
});