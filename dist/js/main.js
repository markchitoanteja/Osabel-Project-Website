jQuery(document).ready(function ($) {

    $('.apfl-gallery .mySlides img').each(function () {
        let str1 = $(this).attr('data-href');
        let data_id = $(this).attr('data-id');
        if (str1.indexOf('youtube') != -1) {

            $(this).parent('.mySlides').append('<span class="gallery__video-label" data-href="' + str1 + '" data-id="' + data_id + '">&#9658;</span>');

            // const videoId = getId(str1);
            // const iframeMarkup = '<iframe class="apfl-yt-frame" width="100%" height="100%" src="//www.youtube.com/embed/' + videoId + '?enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0" allowfullscreen></iframe>';
            // $(this).parent('.mySlides').append(iframeMarkup);
        }
    });

    // extract YT video ID
    function getId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11)
            ? match[2]
            : null;
    }

    // pause YT video on slide change
    $('.apfl-gallery .next, .apfl-gallery .prev, .imgcolumn').on('click', function () {
        $('.apfl-yt-frame').each(function () {
            $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        });
    });

    // Gallery popup/lightbox
    $('.apfl-gallery .mySlides img, .apfl-gallery .mySlides .gallery__video-label').on('click', function () {
        let pp_html = '<div class="apfl_full_pp"><span class="close_apfl_pp">X</span>';
        let pp_slide = '';
        const pp_curr_slide_id = $(this).attr('data-id');

        $('.apfl-gallery .mySlides img').each(function () {
            const full_src = $(this).attr('data-href');
            const pp_slide_id = $(this).attr('data-id');
            let current_slide = '';
            if (pp_curr_slide_id == pp_slide_id) {
                current_slide = 'current';
            }
            if (full_src.indexOf('youtube') != -1) {
                const videoId = getId(full_src);
                pp_slide = '<div id="' + pp_slide_id + '" class="afpl_pp_slide apfl_vid_container ' + current_slide + '"><iframe class="apfl-yt-frame" width="560" height="330" src="//www.youtube.com/embed/' + videoId + '?enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0" allowfullscreen></iframe></div>';
            } else {
                pp_slide = '<div id="' + pp_slide_id + '" class="afpl_pp_slide ' + current_slide + '"><img src="' + full_src + '"></div>';
            }
            pp_html += pp_slide;
        });
        pp_html += '<span id="pp_prev">&lsaquo;</span><span id="pp_next">&rsaquo;</span></div>';
        $('body').append(pp_html);
    });

    $('body').on('click', '.close_apfl_pp', function () {
        $('.apfl_full_pp').remove();
    });

    $('body').on('click', '#pp_prev', function () {
        pp_slideIndex = $('.afpl_pp_slide.current').attr('id');
        pp_slideIndex = parseInt(pp_slideIndex.replace("apfl_gal_img_", ""));
        pp_showSlides(pp_slideIndex += -1);
    });
    $('body').on('click', '#pp_next', function () {
        pp_slideIndex = $('.afpl_pp_slide.current').attr('id');
        pp_slideIndex = parseInt(pp_slideIndex.replace("apfl_gal_img_", ""));
        pp_showSlides(pp_slideIndex += 1);
    });

    // Gallery popup slider
    let pp_slideIndex = '';
    function pp_showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("afpl_pp_slide");
        var dots = document.getElementsByClassName("demo");
        if (n > slides.length) { pp_slideIndex = 1 }
        if (n < 1) { pp_slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            // slides[i].style.display = "none";
            slides[i].className = slides[i].className.replace(" current", "");
        }
        slides[pp_slideIndex - 1].className += " current";

    }



});