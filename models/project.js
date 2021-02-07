const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  prj_name: { type: String, required: true },
  prj_stat: { type: String, required: true },
  prj_manager: { type: String, required: true },
  prj_ctr_val: { type: Number, required: true },
}, {
  timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;