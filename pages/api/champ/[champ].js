
export default function handler(req, res) {
    const { champ } = req.query

    const data = require(`../../../data/en_US/champion/${champ}.json`)

    const champion = data;

    res.status(200).json({ champion })
  }
  