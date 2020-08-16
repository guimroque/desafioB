var knex = require("../database/connection");

class movie{

    //função de adição de filmes
    async new(type, title, otitle, adult, startYear, runtime, g1, g2, g3, 
        averageRating, nVotes, endYear){
            
        try{//adicionando linha na tabela movie
            await knex.insert({type, title, otitle, adult, startYear, runtime, g1, g2, g3, 
                averageRating, nVotes, endYear}).table('movie')
        }catch(err){//tratamento de erro
            if(err.sqlState == 23000)//codigo de erro mysql para tipos de dados unicos ja existentes
            console.log('O filme já existe na base de dados')
        }
    }

    //função que lista todos os filmes
    async search(){
        try{
            var movies = await knex.select('*').table('movie');
            return movies
        }catch(err){
            console.send('operação falhou');
            return err
        }
    }
    //função de pesquisa
    //por id
    async moviesearchid(id){
        console.log(id)
        var result = await knex.select('*').from('movie').where({id:id});//buscando filme pelo parametro passado(id)
        if(result != undefined){//se a busca for diferente de undefined(encontrou algo)
            return result;//retorna ao controller o filme
        }else{//caso nao encontre
            return {status: false, err: 'Filme nao encontrado'}
        }
    }
    //por titulo
    async buscar(title){
        console.log('cheguei na busca')
        console.log(title)
        var result = await knex.select('*').from('movie').where({title:title});//buscando filme pelo parametro(title)
        if(result != undefined){
            return result;//retorna ao controller o titulo encontrado
        }else{
            return {status: false, err: 'Filme nao encontrado'}
        }
    }


}

module.exports = new movie();