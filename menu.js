/**
 * Created by mihailharitonov on 08.12.16.
 */

$(document).ready(function () {
    $(".categories li")
        .mouseover(function () {
            $(this).css({
                borderBottom: "1px solid #B16C00",
                color: "#000",
                transition: "1s"
            })
        })
        .mouseleave(function () {
            $(this).css({
                color: "gray",
                borderBottom: "none"
            })
        })
});
