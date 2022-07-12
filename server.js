const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8000

app.use(cors())

const tea = {
    "oolong": {
        "type":"black",
        "flavor":"hot",
        "waterTemp":200,
        "steepTimeSeconds":180,
        "caffeneited":true,
        "origin":"Yoh momma's house"
    },
    "green tea": {
        "type":"green tea",
        "flavor":"mint",
        "waterTemp":156,
        "steepTimeSeconds":210,
        "caffeneited":false,
        "origin":"Yoh auntie's house"
    },
    "chocolate": {
        "type":"cream",
        "flavor":"chocolate",
        "waterTemp":400,
        "steepTimeSeconds":700,
        "caffeneited":false,
        "origin":"Yoh momma's house"
    }
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/api/:name', (req, res) => {
    const teaName = req.params.name.toLowerCase()
    if(tea[teaName]){
        res.json(tea[teaName])
    }else {
        res.json(tea["chocolate"])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
