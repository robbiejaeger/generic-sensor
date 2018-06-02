const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));

const requireHTTPS = (request, response, next) => {
  if (request.headers['x-forwarded-proto'] !== 'https') {
    return response.redirect('https://' + request.get('host') + request.url);
  }
  next();
};

if (process.env.NODE_ENV === 'production') { app.use(requireHTTPS); }

app.use((request, response, next) => {
  response.redirect('/');
});

app.listen(app.get('port'), () => {
  console.log(`Generic Sensor app running on port ${app.get('port')}.`);
});