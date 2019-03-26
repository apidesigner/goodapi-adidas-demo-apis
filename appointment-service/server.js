// See http://expressjs.com/en/starter/hello-world.html
var express = require('express')
var app = express()

var appointments = {
  "_links": {
    "self": {
      "href": "/appointments"
    },
    "create": {
      "href": "/appointments"
    }
  },
  "_embedded": {
    "order": [
      {
        "_links": {
          "self": {
            "href": "/appointments/1234"
          },
          "edit": {
            "href": "/appointments/1234"
          },
          "cancel": {
            "href": "/appointments/1234"
          }
        },
        "time": "2017-01-01T12:00:00Z",
        "name": "Zdenek Nemec"
      },
      {
        "_links": {
          "self": {
            "href": "/appointments/1235"
          },
          "edit": {
            "href": "/appointments/1235"
          },
          "cancel": {
            "href": "/appointments/1235"
          }
        },
        "time": "2017-01-01T13:00:00Z",
        "name": "Pradeep Narsing"
      }
    ]
  }
};

var appointment = {
  "_links": {
    "self": {
      "href": "/appointments/1234"
    },
    "edit": {
      "href": "/appointments/1234"
    },
    "cancel": {
      "href": "/appointments/1234"
    }
  },
  "time": "2017-01-01T12:00:00Z",
  "name": "Zdenek Nemec"
};

app.get('/appointments', function (req, res) {
  res.set('Content-Type', 'application/hal+json');
  res.status(200);
  res.send(appointments);
});

app.post('/appointments', function (req, res) {
  res.set('Content-Type', 'application/hal+json');
  res.status(201);
  res.send(appointment);
});

app.get('/appointments/:id', function (req, res) {
  res.set('Content-Type', 'application/hal+json');
  res.status(200);
  res.send(appointment);
});

app.patch('/appointments/:id', function (req, res) {
  res.set('Content-Type', 'application/hal+json');
  res.status(200);
  res.send(appointment);
});

app.delete('/appointments/:id', function (req, res) {
  res.status(204);
  res.send();
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Appointment Service up and running!')
});
