const express = require('express')
const config = require('config')
const db = require('./models/index')
const corsMiddleware = require('./middlewares/cors.middleware')


/*const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path'); */


// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express()

app.get('/',(req,res) => res.send('INDEX'))

//app.use(corsMiddleware)
app.use(express.json({extended:true}))



app.use('/auth', require('./routes/auth.routes'))
app.use('/users', require('./routes/users.routes'))
app.use('/admin',require('./routes/admin.routes'))
app.use('/forums',require('./routes/forums.routes'))

//app.use('/api/auth', require('./routes/auth.routes.js'))

const PORT = config.get('port') || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`))