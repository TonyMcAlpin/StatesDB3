const states = require('../model/states');

function verifyStates(req, res, next) {
    const stateParam = req.params.state;

    const stateCode = stateParam.toUpperCase();

    const isValidState = states.map(state => state.code).includes(stateCode);

    if(isValidState) {
        req.stateCode = stateCode;
        next();
    }else {
        res.status(400).json({ error: 'Invalid state abbrevation' });
    }
}

module.exports = verifyStates;
