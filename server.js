const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));

app.use((request, response, next) => {
  response.redirect('/');
});

app.listen(app.get('port'), () => {
  console.log(`Generic Sensor app running on port ${app.get('port')}.`)
});