const { Project, Feature } = require('../models/project');

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
            res.status(400).send(err);
        });
}

const project_create = (req, res) => {
    const project = new Project(req.body);
    project.save()
        .then(result => {
            res.status(201).send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
}

const project_delete = (req, res) => {
    const id = req.params.id;
    Project.findByIdAndDelete(id)
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
}

const feature_add = (req, res) => {
    const id = req.params.id;
    const feature = new Feature(req.body);
    Project.findOneAndUpdate(
        {_id: id},
        {$push: {'prj_features': feature}}
    ).then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(400).send(err);
    });
}

const feature_get = (req, res) => {
    const id = req.params.id;
    Project.findById(id)
        .then(project => {
            res.status(200).send(project.prj_features);
        })
        .catch(err => {
            res.status(400).send(err);
        })
}


module.exports = {
    project_index,
    project_details,
    project_create,
    project_delete,

    feature_get,
    feature_add,
}
