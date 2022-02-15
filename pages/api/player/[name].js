import { names } from '../../../utils/fetchName';

export default function handler(req, res) {
    const { name } = req.query

    names(name)
    .then(data => res.status(200).json({ names: data }))
}