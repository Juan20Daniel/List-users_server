const connection = require('../model/model');
const controller = {}

controller.lookUser = (req, res) => {
    const { type } = req.params;
    connection.query("SELECT * FROM users WHERE active = ?", [type], (err, rows) => {
        if(err) {
            res.status(500).json({error:err});
        } else {
            res.status(200).json({rows});
        }
    });
}

module.exports = controller;