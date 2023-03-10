import express from 'express';
import { Order, Curer, Orderbuy } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const Allorders = await Order.findAll({
      order: [['id', 'DESC']],
      include: Orderbuy,

    });
  } catch (err) {
    res.sendStatus(500)
  }

  const orders = Allorders.filter((el) => !el.Orderbuy);
  // console.log('-------------------',orders);
  try {

    const orderForSale = await Orderbuy.findAll({
      order: [['id', 'DESC']],
      include: Order,
    });
    // console.log(orderForSale);
  } catch (err) {
    res.sendStatus(500)
  }
  const initState = { orders };
  res.render('Layout', initState);
});

router.get('/registr', (req, res) => {
  res.render('Layout', {});
});

router.get('/signin', (req, res) => {
  res.render('Layout', {});
});

router.get('/lkcur/:id', async (req, res) => {
  try {
    const id_lkcurer = req.params.id;
    const curOrders = await Order.findAll({
      where: { id_curer: id_lkcurer },
      include: Orderbuy,
    });
  } catch (err) {
    res.sendStatus(500)
  }

  const initState = { curOrders };
  res.render('Layout', initState);
});

router.post('/', (req, res) => { });

export default router;
