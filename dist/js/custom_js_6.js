window.crsl_init = function () {
    if (jQuery(window).width() < 768) {
        jQuery("#crsl_1, #crsl_1 .actual_slides").css("width", "700px");
    }
    if (jQuery(window).width() < 500) {
        jQuery("#crsl_1, #crsl_1 .actual_slides").css("width", "450px");
        var crsl_options = {
            $SlideWidth: 420,
            $AutoPlay: 1,
            $AutoPlaySteps: 1,
            $SlideDuration: 160,
            $SlideSpacing: 10,
            $Loop: 1,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $Steps: 1
            },
            $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$,
                $SpacingX: 16,
                $SpacingY: 16
            }
        };
    } else {
        var crsl_options = {
            $SlideWidth: 500,
            $AutoPlay: 1,
            $AutoPlaySteps: 1,
            $SlideDuration: 160,
            $SlideSpacing: 10,
            $Loop: 1,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $Steps: 1
            },
            $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$,
                $SpacingX: 16,
                $SpacingY: 16
            }
        };
    }

    var crsl_1_slider = new $JssorSlider$("crsl_1", crsl_options);

    /*#region responsive code begin*/
    var MAX_WIDTH = 1366;

    function ScaleSlider() {
        var containerElement = crsl_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;
        if (containerWidth) {
            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
            crsl_1_slider.$ScaleWidth(expectedWidth);
        } else {
            window.setTimeout(ScaleSlider, 30);
        }

    }
    ScaleSlider();
    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};