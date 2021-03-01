const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const featureSchema = new Schema({
  ftr_name: { type: String, required: false},
  ftr_desc: { type: String, required: false},
  ftr_group: { type: String, required: false},
  ftr_stat: { type: String, required: false},
}, {
  timestamps: true,
});


const projectSchema = new Schema({
  prj_name: { type: String, required: true },
  prj_stat: { type: String, required: true },
  prj_manager: { type: String, required: true },
  prj_ctr_val: { type: Number, required: true },
  prj_features: [featureSchema],
}, {
  timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);
const Feature = mongoose.model('Feature', featureSchema)

module.exports = {Project, Feature};