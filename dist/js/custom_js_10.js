var tpj = jQuery;

var revapi1;

if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider11"] = {
    once: RS_MODULES.modules["revslider11"] !== undefined ? RS_MODULES.modules["revslider11"].once : undefined,
    init: function () {
        window.revapi1 = window.revapi1 === undefined || window.revapi1 === null || window.revapi1.length === 0 ? document.getElementById("rev_slider_1_1") : window.revapi1;
        if (window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length == 0) {
            window.revapi1initTry = window.revapi1initTry === undefined ? 0 : window.revapi1initTry + 1;
            if (window.revapi1initTry < 20) requestAnimationFrame(function () {
                RS_MODULES.modules["revslider11"].init()
            });
            return;
        }
        window.revapi1 = jQuery(window.revapi1);
        if (window.revapi1.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_1_1");
            return;
        }
        revapi1.revolutionInit({
            revapi: "revapi1",
            DPR: "dpr",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1300,1100,900,500",
            gridheight: "700,700,700,800",
            lazyType: "smart",
            spinner: "spinner4",
            perspective: 600,
            perspectiveType: "local",
            editorheight: "700,700,700,800",
            responsiveLevels: "1240,1024,778,480",
            progressBar: {
                disableProgressBar: true
            },
            navigation: {
                mouseScrollNavigation: false,
                wheelCallDelay: 1000,
                onHoverStop: false,
                arrows: {
                    enable: true,
                    style: "uranus",
                    left: {
                        h_offset: 0
                    },
                    right: {
                        h_offset: 0
                    }
                },
                tabs: {
                    enable: true,
                    tmp: "<div class=\"tp-tab-title\">{{title}}</div><div class=\"tp-tab-desc\">{{description}}</div>",
                    style: "erinyen_copy95",
                    hide_onmobile: true,
                    hide_under: "992px",
                    h_align: "right",
                    v_align: "center",
                    h_offset: 50,
                    v_offset: 0,
                    direction: "vertical",
                    space: 5,
                    width: 280,
                    height: 30,
                    min_width: 280,
                    wrapper_padding: 0,
                    wrapper_color: "transparent",
                    span: true,
                    container: "layergrid"
                }
            },
            viewPort: {
                global: true,
                globalDist: "-200px",
                enable: false,
                visible_area: "20%"
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });

    }
} // End of RevInitScript

if (window.RS_MODULES.checkMinimal !== undefined) {
    window.RS_MODULES.checkMinimal();
};