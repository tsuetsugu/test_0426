(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimMobile, {
        "loadScrollBars": function() {
            jQuery(".s-d4ca9010-51bc-4cba-b878-843d49e5f2db .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-d4ca9010-51bc-4cba-b878-843d49e5f2db #s-Panel_1").overscroll({ showThumbs:false, direction:'vertical' });
            jQuery(".s-5ea983a4-0164-4d8f-bf28-6875d7a80ec6 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-5ea983a4-0164-4d8f-bf28-6875d7a80ec6 #s-Panel_1").overscroll({ showThumbs:false, direction:'vertical' });
            jQuery(".s-e8a02a07-daf1-4af0-98eb-917448201a2e .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-069ef780-783f-4739-bed0-5ddb6a401160 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-abbf570d-8795-46c6-ac05-58f32e93e24e .ui-page").overscroll({ showThumbs:true, direction:'multi' });
            jQuery(".s-c065dbe8-df61-4c30-85f4-fa38affac0b7 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-c065dbe8-df61-4c30-85f4-fa38affac0b7 #s-Panel_1").overscroll({ showThumbs:false, direction:'vertical' });
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);