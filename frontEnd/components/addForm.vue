<template>
    <form class="add-form" action="">
            <div class="form-header">
                <h3>Adicionar filme</h3>
            </div>
            <div class="form-group">
                <small>Tipo:</small>
                <input type="text" class="form-input" placeholder="Filme, Série, Aula, Vídeo">
            </div>
            <div class="form-group">
                <small>Título popular:</small>
                <input type="text" class="form-input" placeholder="Titulo usado no lançamento">
            </div>
            <div class="form-group">
                <small>Título original:</small>
                <input type="text" class="form-input" placeholder="Titulo original, na língua original">
            </div>
            <div class="form-group">
                <small>Público:</small><br>
                <input type="checkbox" value="terms">  Acima de 18 anos
            </div>
            <div class="form-group">
                <small>Ano de lançamento:</small>
                <select class="form-select">
                    <option></option>
                    <option>2015</option>
                    <option>Ação</option>
                    <option>Aventura</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                </select>
            </div>
            <div class="form-group">
                <small>Duração:</small>
                <input type="time" class="form-input">
            </div>
            
            <div class="form-group">
                <small>Escolha três gêneros que mais se relacionam ao filme:</small>
                <select class="form-select">
                    <option></option>
                    <option>Comédia</option>
                    <option>Ação</option>
                    <option>Aventura</option>
                    <option>Terror</option>
                    <option>Suspense</option>
                    <option>Romance</option>
                </select>
                <select class="form-select">
                    <option></option>
                    <option>Comédia</option>
                    <option>Ação</option>
                    <option>Aventura</option>
                    <option>Terror</option>
                    <option>Suspense</option>
                    <option>Romance</option>
                </select>
                <select class="form-select">
                    <option></option>
                    <option>Comédia</option>
                    <option>Ação</option>
                    <option>Aventura</option>
                    <option>Terror</option>
                    <option>Suspense</option>
                    <option>Romance</option>
                </select>
            </div>
            <div class="form-group">
                <small>Classificação média:</small><br>
                <input type="text" maxlength="5" minlength="0"  class="form-input">
            </div>
            <div class="form-group">
                <small>Número de votos:</small><br>
                <input type="text"  class="form-input">
            </div>
            <div class="form-group">
                <button class="form-button" type="submit">Adicionar Filme</button>
            </div>
        </form>
</template>