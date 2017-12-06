const StudentRouter = require('express').Router();
const {Campus, Student} = require('../db/models');

StudentRouter.param('id', (req, res, next, id) => {
  Student.findById(id)
  .then(student => {
    if (!student) {
      let err = new Error('Unfound student! Blasphemy!')
      err.status = 404;
      throw err;
    }
    else {
      req.student = student;
      next();
    }
  })
  .catch(next);
});

StudentRouter.get('/', (req, res, next) => {
  Student.findAll({include: [Campus]})
  .then(students => res.json(students))
  .catch(next);
});

StudentRouter.get('/:id', (req, res) => {
  res.json(req.student);
});

StudentRouter.post('/', (req, res, next) => {
 // Campus.findOrCreate({name: req.body.campusName})
  Student.create(req.body)
  .then(newStudent => res.json(newStudent))
  .catch(next);
});

StudentRouter.put('/:id', (req, res, next) => {
  req.student.update(req.body)
  .then(updatedStudent => res.json(updatedStudent))
  .catch(next);
});

StudentRouter.delete('/:id', (req, res, next) => {
  req.student.destroy()
  .then(() => res.send({Message: 'Killed student off successfully!'}))
  .catch(next);
});

module.exports = StudentRouter;
