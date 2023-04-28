const express = require('express');

const usersRouter = require('./routes/user');
const reactionsRouter = require('./routes/reaction');
const eventsRouter = require('./routes/event');


const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Allow CORS requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.use('/api/users', usersRouter);
app.use('/api/reactions', reactionsRouter);
app.use('/api/events', eventsRouter);
  

app.get('/', (req, res) => { 
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

