const Project = require('../models/project');

const project_index = (req, res) => {
    Project.find().sort({ createdAt: -1 })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(400).send(`There is an error in the server while loading projects`);
        });
}

const project_details = (req, res) => {
    const id = req.params.id;
    Project.findById(id)
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(400).send(`There is an error in the server while loading this project`);
        });
}

const project_create = (req, res) => {
    const project = new Project(req.body);
    project.save()
        .then(result => {
            res.status(201).send(`Project is added to the database`);
        })
        .catch(err => {
            res.status(400).send(`There is an error in the server while adding this project`);
        });
}

const project_delete = (req, res) => {
    const id = req.params.id;
    Project.findByIdAndDelete(id)
        .then(result => {
            res.status(200).send("Project is deleted successfully");
        })
        .catch(err => {
            res.status(400).send(`There is an error in the server while deleting this project`);
        });
}

module.exports = {
    project_index,
    project_details,
    project_create,
    project_delete
}
