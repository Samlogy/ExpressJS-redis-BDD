const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');

const UsersRouters = require('./routers/UserRouters');


const app = express();

app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
// methodOverride
app.use(methodOverride('_method'));

app.get('/', (req, res, next) => {
  res.render('search');
});

app.use('/user', UsersRouters);

// Set Port
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
