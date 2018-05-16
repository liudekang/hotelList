define(["jquery", "headr", "iscroll"], function($, Headlebars, IScroll) {
    var json = function() {
        $.ajax({
            url: "/api/list",
            dataType: "json",
            success: function(data) {
                console.log(data);
                loading(data);
            }
        });
    };
    var iscroll = new IScroll("section");

    function loading(obj) {
        var source = $("#list").html();
        var template = Headlebars.compile(source);
        var html = template(obj);
        $(".in").html(html);
        iscroll.refresh();
    }

    return json;
})