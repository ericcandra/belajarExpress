var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('home', { title: 'Express', layout:'main' });
const berita =[
    {
        judul: "berita 1",
        isi: "isi berita 1"
        
    },
    {
        judul: "berita 2",
        isi: "isi berita 2"
    }
];
res.render('home',{title: 'halaman home',berita, layout:'main'});
});


// route /about
router.get("/about", (req, res)=>{
    // res.sendFile(__dirname + "/about.html");
    res.render('about',{title: 'halaman about', layout:'main'});
});

module.exports = router;
