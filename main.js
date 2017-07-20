var count = 0;
$("document").ready(function () {
    function clicked() {
        $("#clickme").click(function () {
            count++;

        });

        $("#clickme").one("click", function () {
            setTimeout(function () {
                $("#result").append("<h2 id='res'>your score is :" + " " + count + " </h2>").fadeIn(2000).css("display", "block");
                $("#clickme").css("display", "none");
            }, 3000);
        });
    }



    $("#clickme").click(clicked());
    $("#reset").click(function () {
        count = 0;
        clicked();
        $("#clickme").fadeIn(7000).css("display", "block");

    });
    $("header").slideDown(4000);
    $("#clickme").fadeIn(7000).css("display", "block");
    $("#reset").fadeIn(7000).css("display", "block");
    $("#result").delay(1000).dblclick(function () {
        $("#result").slideUp(5000);
    });
});
