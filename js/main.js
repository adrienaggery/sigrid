function centerBlock($elt){
    var winHeight = $(window).height();
    var eltHeight = $elt.height();

    var maxHeight = winHeight * 0.75;
    var top = (maxHeight > eltHeight) ? (winHeight - eltHeight) / 2 : (winHeight - maxHeight) / 2
    $elt.css({
        'max-height': maxHeight,
        'top': top
    });
}

$(document).ready(function(){
    $('body').removeClass('hidden');
});

$(window).load(function(){
    centerBlock($('.content'));
    $('.content').removeClass('hidden');
});

$(window).resize(function(){
    centerBlock($('.content'));
});
