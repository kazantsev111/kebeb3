import express from 'express';
import { Order, Curer, Client, Orderbuy } from '../../db/models';

const router = express.Router();

router.post('/:idorder', async (req, res) => {
  const id_order = req.params.idorder;
  const { id_client, adress } = req.body;

  if (!adress) return res.sendStatus(400);

  try {
    const orderBuy = await Orderbuy.create({
      id_client,
      adress,
      id_order,
      delivery: false,
    });
    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(500);
  }
});

router.put('/', async (req, res) => {
  console.log(req.body);
  try {
    const id_order = await Order.create(req.body);
    return res.status(200).json(id_order);
  } catch {
    return res.sendStatus(500);
  }
});

router.patch('/:id', async (req, res) => {
  console.log(req.body, req.params);
  try {

    const order = Orderbuy.update(
      { delivery: true},
      { where: { id_order: req.params.id } }
    )
    console.log(order);
    return res.status(200).json(order);
  } catch {
    return res.sendStatus(500);
  }
});

// console.log(id_order, adress, id_client);
// console.log(orders);
// const initState = { orders };

router.post('/', (req, res) => {});

export default router;
