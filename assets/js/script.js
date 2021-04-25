$(function() {


    $('.next').click(nextImage);
    $('.prev').click(prevImage);

    function nextImage() {

        var activeImg = $('.images img.active');
        var activeCircle = $('.nav i.active');

        activeImg.removeClass('active');
        activeCircle.removeClass('active');

        if (activeImg.next('img').length === 0) {
            $('.images img').first().addClass('active');
            $('.nav i').first().addClass('active');
        } else {
            activeImg.next('img').addClass('active');
            activeCircle.next('i').addClass('active');
        }

    }

    function prevImage() {

        var activeImg = $('.images img.active');
        var activeCircle = $('.nav i.active');

        activeImg.removeClass('active');
        activeCircle.removeClass('active');

        console.log(activeImg.prev('img'));

        if (activeImg.prev('img').length === 0) {
            $('.images img').last().addClass('active');
            $('.nav i').last().addClass('active');
        } else {
            activeImg.prev('img').addClass('active');
            activeCircle.prev('i').addClass('active');
        }



        $('.images img').each(function(index) {

            var nav = $('.nav');
            var active = "";
            if (index === 0) active = "active";
            var tag = '<i class="fas fa-circle ' + active + '"></i>';
            nav.append(tag);

        });

        $('.nav i').on('click', function() {

            var index = $(this).index();
            console.log('index: ' + index);
            $('.nav i.active').removeClass('active');
            $('.images img.active').removeClass('active');
            $('.images img').eq(index).addClass('active');
            $(this).addClass('active');

        });

    };
});