(function() {

    function resizeHeader() {
        var $header = $('#header');
        $header.height(window.innerHeight);
    }

    function init() {
        $.material.init();
        resizeHeader();
        $(window).resize(resizeHeader);
        //$("#video-iframe").fitVids();
    }

    init();

})();
