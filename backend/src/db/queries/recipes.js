const getRecipes = (req, res, pool) => {
    pool.query('SELECT * FROM recipe', (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
};

const getRecipeById = (req, res, pool) => {
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM recipe WHERE id = $1', [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getRecipes,
    getRecipeById
}