import * as express from 'express';
import mongoCrudService from '../services/mongoCRUD';
const deleteDataRouter = express.Router();

deleteDataRouter.delete('/:id', async (req, res) => {
    const id: any = req.params.id;
    // console.log("incoming request on router.delete: ", req);
    if (id === "undefined") {
        res.status(404).send("there is no record with given _id");
        return; // TODO - nie reaguje, tj. nie przerywa funkckji i chrzani sie przez mongo
    }
    try {
        console.log("in routes/deleteRecord received `id` value is: ", id);

        const deletingResult = await mongoCrudService.deleteById(id);
        if (deletingResult === true)
            res.status(200).send("router.delete działa. Usunięto: " + JSON.stringify(id));
    }
    catch (ex) {
        res.sendStatus(500).send("sth gone wrong while attempt to delete a record!");
        console.log("deleteDataRouter.delete /:id has encountered error!", ex);
        // throw ex;
    }
});

export default deleteDataRouter;