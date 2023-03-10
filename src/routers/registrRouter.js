import express from 'express';
import bcrypt from 'bcrypt';
import { Curer, Client } from '../../db/models';


const router = express.Router();

router.post('/signup', async (req, res) => {
    const { name, login, password, email, phone, status } = req.body;
    if (!(name && email && password && login && phone)) return res.sendStatus(400);
  
    try {
      const Base = (status === 'curer') ? Curer : Client;
      const [user, created] = await Base.findOrCreate({
        where: { email },
        defaults: { name, login, phone, password: await bcrypt.hash(password, 7)},
      });
  
      if (!created) return res.sendStatus(403);
  
      req.session.user = { id: user.id, username: user.name, status};
  
      return res.sendStatus(200);
    } catch (err) {
      return res.sendStatus(500);
    }
  });

  router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!(email && password)) return res.sendStatus(400);
  
    try {
      const userClient = await Client.findOne({ where: { email } });
      const userCurer = await Curer.findOne({ where: { email } });
      const user = userClient || userCurer;
      const status = (userClient) ? 'client' : 'curer';
      console.log(user, '    status',status);
      if (await bcrypt.compare(password, user.password)) {
        req.session.user = { id: user.id, username: user.name, status};
  
        return res.sendStatus(200);
      }
  
      return res.sendStatus(401);
    } catch (err) {
      return res.sendStatus(500);
    }
  });

  router.get('/logout', (req, res) => {
    req.session.destroy();
    res.clearCookie('user_sid').sendStatus(200);
  });

  export default router;