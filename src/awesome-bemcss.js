/*! AwesomeBemCSS by Irfan Maulana*/

/*
TABS
*/
function setActiveTab(target){
    var tabsActive = $(".tabs").find("[data-target='" + target + "']");

    $.each(tabsActive, function(i, el){
        if($(el).hasClass('tabs__item')){
            $(el).siblings().removeClass('tabs__item--active');
            $(el).addClass('tabs__item--active');
        }else if($(el).hasClass('tabs__itemv')){
            $(el).siblings().removeClass('tabs__itemv--active');
            $(el).addClass('tabs__itemv--active');
        }        
    }); 
    
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000);
}

function initTab(tabClass, tabActiveClass, otherTabActiveClass){
    var itemv = $('.' + tabClass);
    itemv.on('click', function(){
        var target = $(this).attr('data-target');
        setActiveTab(target);

        window.location.hash = target;
        return false;
    });
}

var initTabsEvent = (function(){

    initTab('tabs__item', 'tabs__item--active', 
            'tabs__itemv--active');

    initTab('tabs__itemv', 'tabs__itemv--active', 
            'tabs__item--active');

    var urlHash = window.location.hash;
    if (urlHash !== "") {
        setActiveTab(urlHash);
    }
})();

$(document).ready(function () {
	'use strict';   

	initTabsEvent;
});

$(window).load(function(){
    'use strict';    
});