var gulp = require("gulp");
var server = require("gulp-webserver");
var json = require("./src/data/data.json");
gulp.task("server", function() {
    gulp.src("src")
        .pipe(server({
            port: 8080,
            open: true,
            middleware: function(req, res, next) {
                if (req.url === "/api/list") {
                    res.writeHead(200, {
                        "Content-Type": "text/html;charset=utf-8"
                    });
                    res.end(JSON.stringify(json))
                }
                next()
            }
        }))
});