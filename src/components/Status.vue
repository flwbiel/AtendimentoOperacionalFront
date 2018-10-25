<template>

    <section id="tudo">


        <!-- Barra lateral -->
        <div id="barraLateral">
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>

            <img src="../assets/img/HOMEM.png" id="logoMAN2" v-on:click="gohome()">

            <span style="cursor:pointer" v-on:click="openNav()" id="wng" v-on:dblclick="closeNav()">
                <img src="../assets/img/warning.png" id="warning">
            </span>  

        </div>





        <!-- Seção dos cards -->
        <form>
        <select id="" name="Cliente">
            <option value="au">Cliente 1</option>
            <option value="ca">Cliente 2</option>
            <option value="usa">Cliente 3</option>
        </select>
        </form>
        <form>
        <select id="horario" name="Hora">
            <option value="au">Uma hora atrás</option>
            <option value="ca">Duas horas atrás</option>
            <option value="usa">Cinco horas atrás</option>
        </select>
        </form>

        <section id="corpo2"> 

            <!-- Cards -->    
            <div id="bloco2">
                <div id="app" >
                <GChart  
                id="dois"        
                type="ColumnChart"                     
                @ready="onChartReady"
                /> 
                </div> 
                <a v-on:click="dois()"><h1 class="ver"> VER MAIS </h1></a>  
            </div>
            
            <div id="bloco2">
                <div id="app" >
                <GChart  
                id="tres"        
                type="ColumnChart"                     
                @ready="onChartReady"
                /> 
                </div>  
                <a v-on:click="tres()"><h1 class="ver"> VER MAIS </h1></a>    
            </div>

            <div id="bloco2">
                <div id="app" >
                <GChart  
                id="quatro"        
                type="ColumnChart"                     
                @ready="onChartReady"
                /> 
                </div> 
                <a v-on:click="quatro()"><h1 class="ver"> VER MAIS </h1></a>  
            </div>

            <div id="nao">
                <div id="app" >
                <GChart  
                id="quinta"        
                type="ColumnChart"                     
                @ready="onChartReady"
                /> 
                </div>  
            </div>

        </section>

    </section>


</template>

<!-- Areá dos scripts -->
<script src="..\assets\scripts/status.js">
