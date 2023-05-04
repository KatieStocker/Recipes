const db = require('../pool.js')
const query = require('./sqlQueries.js');

const categoryString = `${query.selectAllFrom} category_group`;
const whereParam = `${query.where} category_group.id = $1`

const getCategoryGroups = (req, res) => {
    db.query(`${categoryString}`, (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
};

const getCategoryGroupById = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(`${categoryString} ${whereParam}`, [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getCategoryGroups,
    getCategoryGroupById,
}