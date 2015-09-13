
app.get('/', function(req, res) {
    res.render('views/index', {
        drinks: drinks,
        tagline: tagline
    });
});
