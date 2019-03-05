(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimMobile, {
        "loadScrollBars": function() {
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-37fce076-ba9c-49f7-a4cb-68af508ae98c .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Panel_1").overscroll({ showThumbs:false, direction:'vertical' });
            jQuery(".s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Panel_3").overscroll({ showThumbs:false, direction:'vertical' });
            jQuery(".s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Panel_6").overscroll({ showThumbs:false, direction:'vertical' });
            jQuery(".s-5db73ee8-8351-4fcc-a2bc-de3d88ca2277 #s-Panel_2").overscroll({ showThumbs:false, direction:'horizontal' });
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);