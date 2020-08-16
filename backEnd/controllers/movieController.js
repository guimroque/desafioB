var movie = require('../models/movie');//importando funções do arquivo de alterações no BD

class movieController{//criando classe de funções que pode ser passada a rota
    async create(req, res){
        console.log('estou aqui')
        var {type, title, otitle, adult, startYear, runtime, g1, g2, g3, 
            averageRating, nVotes, endYear} = req.body;//pegando dados do formulário de cadastro de filme
        try{//passando estes dados a função que adiciona nova linha(filme) ao BD
            await movie.new(type, title, otitle, adult, startYear, runtime, g1, g2, g3, 
                averageRating, nVotes, endYear);//uso de funções assincrona para um funcionamento correto do codigo
                res.send(200)//retorna status de requisição atendida
                res.json(movie)//retorna pra solicitação um json com os dados do filme cadastrado
        }catch{//função de callback que retorna status de falha a requisição
            res.send(400);
        }
    }
    //função que lista todos os filmes
    async search(req, res){
        try{
            var movies = await movie.search()
            console.log('requisição feita com sucesso')
            res.sendStatus(200)
        }catch(err){//função de callback
            res.sendStatus(400)
            console.log('erro na requisição -'+err)
        }
    }
    //função que busca um filme no BD pelo id
    async moviesearchid(req, res){
        var id = parseInt(req.params.id)//pegando parametro recebido pela requisição
        try{
            var movies = await movie.moviesearchid(id);//usando a função de busca por id no arquivo models/movie.js, passando o id que deve ser buscado
            res.send(200)
            res.json(movies)

        }catch(err){
            res.send(400)
            console.log(err)
        }
    }

    async buscar(req, res){//buscando filme pelo nome recebido pelo formulario de pesquisa
        var title = req.body.title;//pegando titulo do formulario
        try{
            var movies = await movie.buscar(title);//chamando função de busca do titulo
            res.send(200)
            res.json(movies)//retorna titulo identificado

        }catch{
            res.send(400)//caso nao seja encontrado, retorna status de falha na requisição
        }
    }
}
//exportando funções para serem usadas junto das rotas.
module.exports = new movieController();