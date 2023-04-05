const Joi = require("joi");
const { categories } = require("../data");
const joiOwnRecipesSchema = Joi.object({
	category: Joi.string()
		.valid(...categories)
		.required(),
	title: Joi.string().min(2).max(48).required(),
	instructions: Joi.string().required(),
	description: Joi.string(),
	area: Joi.string(),
	thumb: Joi.string().required(),
	preview: Joi.string(),
	time: Joi.number().required(),
	imageURL: Joi.string(),
	ingredients: Joi.array().items({
		name: Joi.string().required(),
		image: Joi.string(),
		family: Joi.string().required(),
	}),
});

module.exports = {
	joiOwnRecipesSchema,
};
