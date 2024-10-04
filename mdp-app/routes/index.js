var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/home", function(req, res, next) {
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

module.exports = router;
