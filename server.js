const express=require("express"),cors=require("cors"),path=require("path");
const players=require("./data/players.json"), rankings=require("./data/rankings.json"), products=require("./data/products.json");
const app=express(),PORT=process.env.PORT||5000;
app.use(cors()); app.use(express.json()); app.use(express.static(path.join(__dirname,"../frontend")));
app.get("/api/players",(q,r)=>r.json(players));
app.get("/api/rankings",(q,r)=>r.json(rankings));
app.get("/api/products",(q,r)=>r.json(products));
app.listen(PORT,()=>console.log("CricketHub running on port "+PORT));