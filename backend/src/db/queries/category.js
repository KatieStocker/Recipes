const db = require('../pool.js')
const query = require('./sqlQueries.js');

const categoryString = `${query.selectAllFrom} category`;
const whereParam = `${query.where} category.id = $1`

const getCategories = (req, res) => {
    db.query(`${categoryString}`, (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
};

const getCategoryById = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(`${categoryString} ${whereParam}`, [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getCategories,
    getCategoryById,
}