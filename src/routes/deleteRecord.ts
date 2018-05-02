import * as express from 'express';
import mongoCrudService from '../services/mongoCRUD';
const deleteDataRouter = express.Router();

deleteDataRouter.delete('/:id', async (req, res) => {
    // console.log(req);
    try {
        const id :any = req.params.id;
        console.log("in routes/deleteRecord received `id` value is: ", id);
        if (id === undefined)
            throw new Error("in routes/deleteRecord received `id` value is undefined");

        await mongoCrudService.deleteById(id);
        res.status(200).send("router.delete działa. Usunięto: " + JSON.stringify(id));
    }
    catch (ex) {
        res.sendStatus(500).send("sth gone wrong while attempt to delete a record!");
        throw ex;
    }
});

export default deleteDataRouter;