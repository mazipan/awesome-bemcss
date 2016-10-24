/*! AwesomeBemCSS by Irfan Maulana*/

/*
TABS
*/
var initTabsEvent = (function(){
	var item = $('.tabs__item');

    item.on('click', function(){
        item.removeClass('tabs__item--active');
        $(this).addClass('tabs__item--active');
        window.location.hash = $(this).attr('data-target');
        
        return false;
    });
})();

$(document).ready(function () {
	'use strict';   

	initTabsEvent;
});

$(window).load(function(){
    'use strict';    
});