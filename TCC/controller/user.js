const User = require('../models/User')
const bcrypt= require('bcrypt') // o bcrypt serve também para trabalhar com a criptografia de senhas.
const jwt = require('jsonwebtoken')

const getuser = async (req, res) =>{
    const id= req.params.id
 
    const user = await User.findById(id) 

    if(!user){
        return res.status(404).json({msg:'usuário não encontrado!'})    
    }
    res.status(200).json({user})

}

const getallusers = async (req, res) => {

    const users = await User.find({})
    res.status(200).json({users})
}

const loginuser = async (req,res)=>{
    const{email, password} = req.body

    //validações básicas
      if(!email){
        return res.status(422).json({msg: 'o email é obrigatório'})
    }

    if(!password){
        return res.status(422).json({msg: 'a senha é obrigatória'})
    }

    // Checking se o usuário existe
    const user = await User.findOne({email:email})
    
    if(!user){
        return res.status(422).json({msg: 'usuário não encontrado'}) //se colocar o mesmo e-mail que ja tem no banco, vai dar essa msg.
    }

    //cheking se as senhas batem
    const checkPassword= await bcrypt.compare(password, user.password)

    if(!checkPassword){
        return res.status(422).json({msg:'Senha inválida!'})
    }
   

// trabalhando com os tokens(JWT)
    try {
        const secret = process.env.SECRET // esse secret, ele vai ser a permissão do jwt, ele normalmente tem que ser uma hash, pois assim fica seguro nosso código.

        const token = jwt.sign({
            id:user._id
        },
        secret,
        )
        res.status(200).json({msg: 'Autenticação realizada com sucesso', token })
         // com o processo de validação feito, iremos após isso, colocar os tokens  para serem emitidos aos usuários que fizeram o login.  
         // após isso, teremos uma rota protegida, apenas para usuários que executaram o login.
         // essa rota, vai estar lá em cima do código, com o comentário de "rota privada", eventualmente iremos acrescentar uma pasta routes para deixarmos
         // nosso código mais organizado e simples.           
    } catch (err) {
        console.log(error)
        res.status(500).json({msg:  'Aconteceu um erro no servidor, tente novamente mais tarde.'})
    }
 }

//    //se nao tiver token, dá Acesso negado                                                   
//    if(!token){
//     return res.status(401).json({msg:" Acesso negado!"})
// }

// //validando o token
//     try {
//         const secret = process.env.SECRET
//         jwt.verify(token, secret)

//     next()
//     } catch (error) {
//         res.status(400).json({msg:"Token inválido!"})
// }


const registeruser = async(req,res) => {
    
    const{email, password, permissao} = req.body

    //validações
    if(!email){
        return res.status(422).json({msg: 'o email é obrigatório'})
    }

    if(!password){
        return res.status(422).json({msg: 'a senha é obrigatória'})
    }

    if(!permissao){
        return res.status(422).json({msg: 'você não possui uma permissão.'})
    }

    //checando se o usúario existe.

    const userExists = await User.findOne({email:email})
    
    if(userExists){
        return res.status(422).json({msg: 'Por favor, utilize outro e-mail!'}) //se colocar o mesmo e-mail que ja tem no banco, vai dar essa msg.
    }

    //criando senha
    const salt = await bcrypt.genSalt(12)  
    const passwordHash = await bcrypt.hash(password, salt)   // aqui é uma camada de segurança, ele pega o password dado pelo usuário, e faz a criptografia dele.

    // criando usuário
    const user = new User({           // parametros que irão para o banco de dados do usuário.
        email,
        password: passwordHash, // aqui, vai criar a criptografia do bcrypt, com a constante passwordHash criptografando a contante do password.
        permissao
    })

    //validando possiveis erros que podem dar na tentativa da inserção do banco de dados.
    try{
        await user.save()
        res.status(201).json({msg:'Usuário criado com sucesso!'})

    }catch(error){
        console.log(error)
        res.status(500).json({msg:'Aconteceu um erro no servidor'})
    }
}
   
const updateuser = async (req, res) =>{
    const {id: UserID} = req.params
    const singleuser = await User.findByIdAndUpdate({_id: UserID}, req.body, {
        new: true,
        runValidators: true
    })
    if(!singleuser){
        return res.status(500).send(`No User with id: ${UserID}`)
    }
    res.status(200).json({msg: 'Congratulations'})
}


const deleteuser = async (req, res) =>{
    const {id: UserID} = req.params
    const  singleuser = await User.findByIdAndDelete({_id: UserID})
    if(!singleuser){
        return res.status(500).send(`No User with id: ${UserID}`)
    }
    res.status(200).json({msg: 'Congratulations'})
}


module.exports = {
    updateuser,
    deleteuser,
    getuser,
    loginuser,
    registeruser,
    getallusers
}