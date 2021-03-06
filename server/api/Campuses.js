const express = require('express');
const CampusRouter = express.Router();
const {Campus} = require('../db/models');

CampusRouter.param('id', (req, res, next, id) => {
  Campus.findById(id)
  .then(campus => {
    if (!campus) {
      const err = new Error('Nonexistent campus');
      err.status = 404;
      throw err;
    }
    else {
      req.campus = campus;
      next();
    }
  })
  .catch(next);
});

CampusRouter.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next);
});

CampusRouter.get('/:id', (req, res) => {
  res.json(req.campus)
});

CampusRouter.post('/', (req, res, next) => {
  Campus.create(req.body)
  .then(newCampus => res.json(newCampus))
  .catch(next);
});

CampusRouter.put('/:id', (req, res, next) => {
  req.campus.update(req.body)
  .then(updatedCampus => res.json(updatedCampus))
  .catch(next);
});

CampusRouter.delete('/:id', (req, res, next) => {
  req.campus.destroy()
  .then(() => res.send({Message: 'Destroyed successfully'}))
  .catch(next);
});

module.exports = CampusRouter;
