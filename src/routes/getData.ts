import * as express from 'express';
const getDataRouter = express.Router();

getDataRouter.get('/:token', async function (req, res) {

    try {
        const token = req.params.token;

        res.status(200).send("router.get działa; " + token)
    }
    catch (ex) {
        res.sendStatus(500);
        throw ex;
    }
});

export default getDataRouter;