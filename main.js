window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
$(document).ready( function () {
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".fixed-top");
            var $header = $("#home");
            var $twosections = $('#whoiam').height() + $('#knowledge').height();
            $nav.toggleClass('scrolled', $(this).scrollTop() > $header.height());
            $('#home_btn').toggleClass('active', $(this).scrollTop() < $header.height());
            $('#whoiam_btn').toggleClass('active', $(this).scrollTop() > $('#whoiam').height() && $(this).scrollTop() < $twosections);
            $('#knowledge_btn').toggleClass('active', $(this).scrollTop() > $twosections);
        });
    });
    $('#down').on('click',function () {
        $("html").scrollTop(0);
        $('html, body').animate({
            scrollTop: $('#whoiam').offset().top
        }, 1000);
    });
    $('#home_btn').click(function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:$('#home').position().top}, 1000);
    });
    $('#whoiam_btn').click(function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:$('#whoiam').position().top}, 1000);
    });
    $('#knowledge_btn').click(function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:$('#knowledge').position().top}, 1000);
    });
});