//create web server
const express = require('express');
const app = express();
const port = 3000;
//create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
//create a comment
app.post('/comments', (req, res) => {
    res.send('Comment created');
});
//read a comment
app.get('/comments/:id', (req, res) => {
    res.send('Comment with id: ' + req.params.id);
});
//update a comment
app.put('/comments/:id', (req, res) => {
    res.send('Comment updated');
});
//delete a comment
app.delete('/comments/:id', (req, res) => {
    res.send('Comment deleted');
});

