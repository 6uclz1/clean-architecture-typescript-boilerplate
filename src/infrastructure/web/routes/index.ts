import express from 'express';
import { CreateItemController } from '../controllers/CreateItemController';
import { GetItemController } from '../controllers/GetItemController';
// import { ListItemsController } from '../../../interfaces/controllers/ListItemsController';
// import { UpdateItemController } from '../../../interfaces/controllers/UpdateItemController';

export const router = express.Router();

// Controllers
const createItemController = new CreateItemController();
const getItemController = new GetItemController();
// const listItemsController = new ListItemsController();
// const updateItemController = new UpdateItemController();

// Routes
router.post('/items', createItemController.getRouter.bind(createItemController));
router.get('/items/:id', getItemController.getRouter.bind(getItemController));
// router.get('/items', listItemsController.handle.bind(listItemsController));
// router.put('/items/:id', updateItemController.handle.bind(updateItemController));
