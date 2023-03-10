import express from 'express';
import { Order, Curer, Orderbuy } from '../../db/models';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: { id_curer: 3 },
      order: [['title', 'DESC']],
    })
  } catch (err) {
    res.sendStatus(500)
  }
  console.log(orders);
});

router.put('/', async (req, res) => {
  try {
    const id_order = await Order.create(req.body);
    return res.status(200).json(id_order);
  } catch {
    return res.sendStatus(500);
  }
});

router.post('/', (req, res) => { });

export default router;
