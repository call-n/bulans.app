import data from '../../../data/en_US/champion.json'

export default function handler(req, res) {

    const champion = data.data;

    res.status(200).json({ champion })
  }
  