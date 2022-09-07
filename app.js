const express = require('express');
require("./conection");

//-----------------------Schema------------------------
const customer = require('./customer');
const product = require('./product');
const order = require('./order');
//----------------------mongodbconnection--------------
// const productdb = require('./productdb');
// const orderdb = require('./orderdb')

const app = express();

app.use(express.json());

// -----------------Customer-data insert new data-------------
app.post("/insert", async (req, resp) => {
    let data = new customer(req.body);
    console.log(req.body)
    const result = await data.save();
    resp.send(result);
});

//-----------------get data------------------
app.get("/fetch", async (req, resp) => {
    let data = await customer.find();
    resp.send(data);
})

//----------------delete data-------------------------
app.delete("/delete/:_id", async (req, resp) => {
    let data = await customer.deleteOne(req.params);
    resp.send(data);
})

//--------------update-------------------------------
app.put("/update/:_id",async (req, resp) => {
    console.log(req.params)
    let data = await customer.updateOne(
        req.params,
        {$set: req.body}
    );
    resp.send(data);
}) 

//------------------------------product--------------------------------

// -----------------insert new data-------------
app.post("/pinsert", async (req, resp) => {
    let data = new order(req.body);
    const result = await data.save();
    resp.send(result);
});

//-----------------get data------------------
app.get("/pfetch", async (req, resp) => {
    let data = await order.find();
    resp.send(data);
})

//----------------delete data-------------------------
app.delete("/pdelete/:_id", async (req, resp) => {
    let data = await order.deleteOne(req.params);
    resp.send(data);
})

//--------------update-------------------------------
app.put("/pupdate/:_id",async (req, resp) => {
    console.log(req.params)
    let data = await order.updateOne(
        req.params,
        {$set: req.body}
    );
    resp.send(data);
}) 


//---------------------------------------order------------------------------------------
// -----------------insert new data-------------


app.post("/oinsert", async (req, resp) => {

    
    let data = new order(req.body);
    console.log(req.body)
    const result = await data.save();
    resp.send(result);
});

//-----------------get data------------------
app.get("/ofetch", async (req, resp) => {
    let data = await order.find();
    resp.send(data);
})

//----------------delete data-------------------------
app.delete("/odelete/:_id", async (req, resp) => {
    let data = await order.deleteOne(req.params);
    resp.send(data);
})

//--------------update-------------------------------
app.put("/oupdate/:_id",async (req, resp) => {
    console.log(req.params)
    let data = await order.updateOne(
        req.params,
        {$set: req.body}
    );
    resp.send(data);
}) 


app.listen(8000, ()=>{
    console.log("Sever is now listening at port 8000");
})
