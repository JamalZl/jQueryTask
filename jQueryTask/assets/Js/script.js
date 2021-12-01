$("#t1").click(function () {
    ($("#2")).slideUp();
    ($("#3")).slideUp();
    ($("#4")).slideUp();
    ($("#1")).slideToggle();
    ($("#t1")).css({
        'borderBottom': '0px'
    })

})
$("#t2").click(function () {
    ($("#1")).slideUp();
    ($("#3")).slideUp();
    ($("#4")).slideUp();
    ($("#2")).slideToggle();
    ($("#t2")).css({
        'borderBottom': '0px'
    })

})
$("#t3").click(function () {
    ($("#1")).slideUp();
    ($("#2")).slideUp();
    ($("#4")).slideUp();
    ($("#3")).slideToggle();
    ($("#t3")).css({
        'borderBottom': '0px'
    })
})
$("#t4").click(function () {
    ($("#1")).slideUp();
    ($("#2")).slideUp();
    ($("#3")).slideUp();
    ($("#4")).slideToggle();
    ($("#4")).css({
        'borderBottom': 'solid 1px grey'
    })

})