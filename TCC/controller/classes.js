const getallclasses = (req, res) => {
    res.json({data: "Todas as aulas",})
}
const createclass = (req, res) =>{
    res.send("Criada com sucesso")
}

const getclass = (req, res) =>{
    res.json(req.body)
}

const updateclass = (req, res) =>{
    res.json(req.body)
}

const deleteclass = (req, res) =>{
    res.send("Deletado com sucesso")
}

module.exports = {
    getallclasses,
    createclass,
    getclass,
    updateclass,
    deleteclass
}