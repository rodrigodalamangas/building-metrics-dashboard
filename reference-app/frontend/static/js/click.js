$(document).ready(function () {

    // all custom jQuery will go here
    // http://backend.default.svc.cluster.local
    // http://trial.default.svc.cluster.local
    // http://127.0.0.1:5000
    // http://127.0.0.1:5003
    $("#firstbutton").click(function () {
        $.ajax({
            url: "http://127.0.0.1:30081",
            success: function (result) {
                $("#firstbutton").toggleClass("btn-primary:focus");
            },
        });
    });
    $("#secondbutton").click(function () {
        $.ajax({
            url: "http://127.0.0.1:30082",
            success: function (result) {
                $("#secondbutton").toggleClass("btn-primary:focus");
            }
        });
    });
});