const { FormModel } = require("../model");

//create Form
const CreateForm = async (Reqbody) => {
  return FormModel.create(Reqbody);
};
// Form list
const FormList = async (req, res) => {
  return FormModel.find();
};

//find  Category
const FindCategory = async (category) => {
  return FormModel.findOne({ category });
};
//find Id
const formId = async (formId) => {
  return FormModel.findById(formId);
};
//delete Form
const DeleteForm = async (formId) => {
  return FormModel.findByIdAndDelete(formId);
};

//module export
module.exports = {
  CreateForm,
  FormList,
  FindCategory,
  DeleteForm,
  formId,
};
