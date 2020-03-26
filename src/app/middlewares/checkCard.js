import Card from '../models/Card';

// eslint-disable-next-line consistent-return
export default async (req, res, next) => {
  const { id } = req.params;
  const card = await Card.findByPk(id);

  if (!card) {
    return res.json({ error: 'Card not found.' });
  }

  req.card = card;

  next();
};
