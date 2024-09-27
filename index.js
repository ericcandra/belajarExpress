const express = require("express")// impor modul express
const app = express() // inisialisasi express
const port = 3000 // port

app.set('view engine','ejs');


// route /
app.get("/home", (req, res)=>{
    // res.sendFile(__dirname + "/home.html");
    res.render('home',{title: 'halaman home'});
});

// route /about
app.get("/about", (req, res)=>{
    // res.sendFile(__dirname + "/about.html");
    res.render('about');
});

// route /contact
app.get("/contact", (req, res)=>{
    // res.sendFile(__dirname + "/contact.html");
    res.render('contact');
});

// route /mahasiswa
app.get("/mahasiswa",(req, res)=>{
    res.json({
        "status" : "Success",
        "message" : "Data Mahasiswa",
        "data" : [{npm: 2226240059, nama: "Eric Candra"},{npm: 222624010, nama: "Nabila"}]
    })
});

// app.get("/dosen",(req, res)=>{
//     res.json({
//         "status" : "Success",
//         "message" : "Data dosen",
//         "data" : [{Prodi: "Sistem Informasi",dosen:["Iis","Faris","Dafid"],
//         {Prodi: "Informatika",dosen: "Derry","Siska","Yohanes"]},
        
//     })
// });

// handle route yang tidak terdaftar 
app.use("/",(req, res)=>{
    res.send("<h1>404 not found</h1>");
});

// jalankan server
app.listen(port, ()=>{
    console.log(`server dapat diakses di http://localhost:${port}`);
});