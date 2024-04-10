const Joi  =require("joi");

//create Form
const CreateForm = {
    body :Joi.object().keys({
        category: Joi.string().valid('Entertainment', 'Technology', 'Sports', 'Business', 'Health', 'Science').required(),
        title: Joi.string().min(3).required(),
        blogger_name: Joi.string().min(3).required(),
        image: Joi.string().uri().required(),
        description: Joi.string().min(3).required()
        
    })
};

module.exports = {
    CreateForm
}