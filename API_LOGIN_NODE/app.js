require('dotenv').config()
const express = require('express')
const bcrypt= require('bcrypt') // o bcrypt serve também para trabalhar com a criptografia de senhas.
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const app = express()

//configurando json response
app.use(express.json())

//Models
const User = require('./models/User')


//Open Route - rota publica
app.get('/', (req, res) => {
    res.status(200).json({msg: 'Bem vindo a API'})
})

//Rota privada, rota para usuários que fizeram o login, e receberam sua token de validação.
app.get("/user/:id",checkToken,  async (req, res)=>{ // a função checktoken ta aqui como segundo parametro, pois ele é um middleware que vai deixar a rota privada.

    const id= req.params.id
 
    //checando se o usuário existe
    const user = await User.findById(id, '-password') // aqui nao vai retornar a senha.

    if(!user){
        return res.status(404).json({msg:'usuário não encontrado!'})    
    }
    res.status(200).json({user})
})

    // tornando a rota privada. Aqui, vai checar o token do usuário, e ai vai permitir a entrada dele na rota.
    function checkToken(req, res, next){

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1] // o metódo split divide uma String em uma lista ordenada de substrings, coloca essas
                                                        // substrings em um array e retorna o array.  
    
     //se nao tiver token, dá Acessi negado                                                   
    if(!token){
        return res.status(401).json({msg:" Acesso negado!"})
    }

    //validando o token
    try {
        const secret = process.env.SECRET
        jwt.verify(token, secret)

        next()
    } catch (error) {
        res.status(400).json({msg:"Token inválido!"})
    }
}


//registrando um usúario
app.post('/auth/register', async(req,res) => {
    
    const{name, email, password, confirmPassword} = req.body

    //validações
    if(!name){
        return res.status(422).json({msg: 'o nome é obrigatório'})
    }

    if(!email){
        return res.status(422).json({msg: 'o email é obrigatório'})
    }

    if(!password){
        return res.status(422).json({msg: 'a senha é obrigatória'})
    }

    if(password !== confirmPassword){
        return res.status(422).json({msg: 'as senhas não conferem.'})
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
    const user = new User({  
        name,       // parametros que irão para o banco de dados do usuário.
        email,
        password: passwordHash, // aqui, vai criar a criptografia do bcrypt, com a constante passwordHash criptografando a contante do password.
    })

    //validando possiveis erros que podem dar na tentativa da inserção do banco de dados.
    try{
        await user.save()
        res.status(201).json({msg:'Usuário criado com sucesso!'})

    }catch(error){
        console.log(error)
        res.status(500).json({msg:'Aconteceu um erro no servidor'})
    }
})

//Logando usuário
app.post("/auth/login", async (req,res)=>{
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

} )


//crendenciais
const dbuser = process.env.DB_USER
const dbpassword= process.env.DB_PASS

//qnd for connectar isso em outro computador, tem q configurar certinho, pq tem as coisas do endereço IP e talz...
mongoose.connect(`mongodb+srv://${dbuser}:${dbpassword}@cluster0.pcdecpq.mongodb.net/?retryWrites=true&w=majority`).then(()=> {
    app.listen(3000)
    console.log('Conectou ao banco')
}).catch((err) => console.log(err))


