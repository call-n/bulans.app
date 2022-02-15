import { rankedById, names } from '../../../utils/fetchName';

export default function handler(req, res) {
    const { name } = req.query

    names(name)
    .then(data => 
        rankedById(data.id)
            .then(data => res.status(200).json({ ranked: data }))
        )  
}