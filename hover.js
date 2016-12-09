/**
 * Created by mihailharitonov on 08.12.16.
 */

$(document).ready(function () {
    $(".my_tech")
        .mouseover(function () {
            $(this).css({
                boxShadow: "0 0 30px rgba(0,0,0,0.5)",
                transition: "1s"

            });
        })
        .mouseleave(function () {
            $(this).css({
                boxShadow: "none"


            });
        });
    $(".open_modal").mouseover(function () {
            $(this).css({
                color: "#000",
                transition: "0.7s"

            });
            $(this).find("h2").css({
                color: "#B16C00",
                transition: "0.7s"});


        })
        .mouseleave(function () {
            $(this).css({
                color: "#6a6a6a"

            });
            $(this).find("h2").css({
                color: "#6a6a6a",
                transition: "0.7s"});
        });


});
