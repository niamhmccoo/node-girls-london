let express = require('express');
let app = express();

app.length("/", function (req, res) {

});

app.listen(3000, function() {
    console.log('Server is listeing on port 300. Ready to accept requets!');
});