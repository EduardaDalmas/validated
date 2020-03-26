import * as Yup from 'yup';
import Card from '../models/Card';

class CardController {
  async index(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string()
        .min(4)
        .required(),
      content: Yup.string()
        .min(4)
        .required(),
    });

    const validate = await schema.isValid(req.body);

    if (!validate) {
      return res.status(400).json({ error: 'required fields.' });
    }

    const cards = await Card.findAll();

    return res.json(cards);
  }

  async show(req, res) {
    const { card } = req;
    return res.json(card);
  }

  async store(req, res) {
    const { title, content } = req.body;

    const nextId = await Card.nextId();

    const card = await Card.create({
      id: nextId,
      title,
      content,
    });

    res.json(card);
  }

  async update(req, res) {
    const { card } = req;
    const { title, content } = req.body;

    card.title = title;
    card.content = content;

    card.save();

    res.json(card);
  }

  async delete(req, res) {
    const { card } = req;

    card.destroy();

    const cards = await Card.findAll();

    res.json(cards);
  }
}

export default new CardController();
