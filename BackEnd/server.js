require('dotenv').config()
const app = require('./src/app')
const cors = require('cors');
const cookieParser = require('cookie-parser');


var corsOptions = {
    origin: process.env.FRONTENDURL,
    headers: ["Content-Type"],
    //credentials: true 
    methods: ['GET', 'POST', 'OPTIONS'],

};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(cookieParser());

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      
    next();
});
app.set('trust proxy', true);



const port=process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running${port}`);
})