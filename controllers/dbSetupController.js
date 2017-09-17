var Books = require('../models/bookModel');

module.exports = (app) => {
    console.log('Added APIs from dbSetupController... ');
    app.get('/setup/createMockData', function (req, res) {
        let books = [{
            name: 'The Stand',
            genre: 'Thriller',
            author: 'Stephen King'
        }, {
            name: 'Lord of the Flies',
            genre: 'Allegory',
            author: 'William Golding'
        }, {
            name: 'The Shining',
            genre: 'Horror',
            author: 'Stephen King'
        }, {
            name: 'A Thousand Splendid Suns',
            genre: 'Fiction',
            author: 'Khaled Hosseini'
        }, {
            name: 'The Name of the Wind',
            genre: 'Fiction',
            author: 'Patrick Rothfuss'
        }];

        Books.create(books, function(err, results) {
            if (err) throw err;
            res.send(results);
        });
    });
}