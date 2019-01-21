const app = require('express')()
const cors = require('cors')

const restaurantRoutes = require('./api/restaurant/restaurantRoutes')
 

app.use(cors())

app.use('/restaurant', restaurantRoutes)

app.get('/a',(req,res)=>res.send(process.env.dbuser+"databse user"))

const server = app.listen(4000, () => console.info(`Example app listening on port 4000!`))
 
 
