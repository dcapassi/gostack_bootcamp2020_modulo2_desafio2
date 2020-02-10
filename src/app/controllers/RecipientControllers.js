import Recipient from '../models/Recipient';
import * as Yup from 'yup';

class RecipientController {
  async store(req, res) {
    //Input Validation
    const schema = Yup.object().shape({
      rua: Yup.string().required(),
      numero: Yup.number().required(),
      cidade: Yup.string().required(),
      estado: Yup.string().required(),
      cep: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { id, rua, numero, cidade, estado, cep } = await Recipient.create(
      req.body
    );
    return res.json({ id, rua, numero, cidade, estado, cep });
  }

  async update(req, res) {
    //Input Validation
    const schema = Yup.object().shape({
      rua: Yup.string(),
      numero: Yup.number(),
      cidade: Yup.string(),
      estado: Yup.string(),
      cep: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipientToBeUpdate = await Recipient.findByPk(req.params.id);
    if (recipientToBeUpdate) {
      const {
        rua,
        numero,
        cidade,
        estado,
        cep,
      } = await recipientToBeUpdate.update(req.body);
      return res.json({ rua, cidade, estado, cep });
    }
    return res.status(400).json({ error: 'Id does not exist' });
  }
}

export default new RecipientController();
