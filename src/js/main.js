require.config({
    baseUrl: "js/app",
    paths: {
        "jquery": "../libs/jquery01",
        "headr": "../libs/handlebars-v4.0.11",
        "click": "click",
        "swiper": "../libs/swiper-4.1.6/js/swiper", //引入
        "iscroll": "../libs/iscroll各个版本/iscroll-probe", //引入
        "swp": "swp", //定义swiper
        "reload": "reload",
        "load": "load"
    }
});
require(["click", "swp", "load"], function(click, swp, load) {
    swp();
    load();
});