const { skipPageHandler, limitHandler } = require("../../helpers");
const { recipes } = require("../../service");

const getMainPage = async (req, res) => {
	const { page = 1, limit = 4 } = req.query;

	const result = await recipes.getRecipesBySet(skipPageHandler(page, limit), limitHandler(limit));

	if (!result) {
		throw httpError(404, "Recipes not found!");
	}

	res.status(200).json({
		result,
	});
};

module.exports = getMainPage;
