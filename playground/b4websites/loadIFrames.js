var oldSelected;

function loadIframe(iframeName, url, liSelector) {
  oldSelected = $('.active');

    $('.pagination li').removeClass('active');
    $(liSelector).addClass('active');
    var $iframe = $('#' + iframeName);
    if ( $iframe.length ) {
        $iframe.attr('src',url);
        return false;
    }
    return true;
}

$(document).ready(loadIframe('ifrm', 'blogen/index.html', '#blogenLi'));
