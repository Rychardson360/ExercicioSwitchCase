function pegarDados(qualBotao){
	switch (qualBotao) {
        case 'Você é idoso?':{
        let div = document.getElementById("botaoSelecionado");
        div.classList.remove("quad");
        div.classList.add("lucas");
        document.getElementById("botaoSelecionado").innerHTML = "Fique em casa, peça para fazerem as compras para você!";
        break;
        }
        case 'Sofre de problemas respiratórios?':{
        let div = document.getElementById("botaoSelecionado");
        div.classList.remove("quad");
        div.classList.add("lucas");
        document.getElementById("botaoSelecionado").innerHTML = "Fique em casa, tome sol e faça exercícios leves!";
        break;
        }
        case 'É diabético?':{
        let div = document.getElementById("botaoSelecionado");
        div.classList.remove("quad");
        div.classList.add("lucas");
        document.getElementById("botaoSelecionado").innerHTML = "Fique em casa e cuide da sua saúde!";
        break;
        }
        case 'É saudável?':{
        let div = document.getElementById("botaoSelecionado");
        div.classList.remove("quad");
        div.classList.add("lucas");
        document.getElementById("botaoSelecionado").innerHTML = "Faça compras pelos mais idosos, mas use máscaras!";
        break;
        }
        default:
        document.getElementById("botaoSelecionado").innerHTML = "erro";
    }
}
let ident = "Desenvolvido por Lucas Rychardson 2º Ano Informática";
console.log(ident);
