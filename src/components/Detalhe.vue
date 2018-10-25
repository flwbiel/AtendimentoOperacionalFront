<template>
<div>
     <!-- Cabeça da pagina -->
        <header id="header">
            <a><img src="../assets/img/UOL-OK.png" id="logoUOL"> </a>   
            <img src="../assets/img/Homem2.png" id="logoMAN">      
            <a  v-on:click="sair()"> <h5 id="usuario">Logout</h5> </a>
        </header>

  <!-- Corpo da pagina -->




    <section id="corpo">
        <div id="bloco3">
            <div id="app" >
            <GChart 
            :id="variavel"
            class="tamanho"        
            type="ColumnChart"                     
            @ready="onChartReady"
            /> 
            </div>      
        <h1 v-on:click="voltar()" class="verDetalhe"> VOLTAR </h1>
        </div>

        <div id="nao">
            <div id="app" >
            <GChart  
            id="quinta"        
            type="ColumnChart"                     
            @ready="onChartReady"
            /> 
            <div id="app" >
            <GChart 
            id="dois"
            class="tamanho"        
            type="ColumnChart"                     
            @ready="onChartReady"
            /> 
            </div>     
            <div id="app" >
            <GChart 
            id="tres"
            class="tamanho"        
            type="ColumnChart"                     
            @ready="onChartReady"
            /> 
            </div>  
            </div>  
        </div>
    </section>
</div>
</template>

<!-- Área dos scripts -->
<script src="@\assets\scripts\detalhe.js">
