const { categories } = require("../../helpers");
const { Recipe } = require("../../models");
const { recipes } = require("../../service");

const getMainPage = async (req, res) => {
	const { page = 1, limit = 2 } = req.query;

	const recipesSkip = (page - 1) * limit;
	const recipesLimit = Number(limit);

	const result = await recipes.getRecipesBySet(recipesSkip, recipesLimit);

	if (!result) {
		throw httpError(404, "Recipes not found!");
	}

	res.status(200).json({
		result,
	});
};

module.exports = getMainPage;
