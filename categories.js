/**
 * Created by mihailharitonov on 08.12.16.
 */
    //Отображение по категориям -  показать все, безопасность, комфорт, мультимедиа
$(document).ready(function () {
    var a = 1;
    var b = 1;
    var c = 1;

    $("#security").click(function () {
        b = 1;
        c = 1;

        if (a == 1) {
            $(".my_tech").hide();
            $(".wi-fi, .camera, .control4").show(400);
            a++;
            return false;
        }
    });

    $("#comfort").click(function () {
        a = 1;
        c = 1;

        if (b == 1) {
            $(".my_tech").hide();
            $(".dimiruy").show(400);
            b++;
            return false;
        }

    });
    $("#multimedia").click(function () {
        a = 1;
        b = 1;

        if (c == 1) {
            $(".my_tech").hide();
            $(".sonos, .media-server, .manage-light").show(400);
            c++;
            return false;
        }
    });
    $("#show").click(function () {
        a = 1;
        b = 1;
        c = 1;
        $(".my_tech").show(400);

    });
});