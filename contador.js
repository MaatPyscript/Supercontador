function contar() {
    var inic = document.getElementById('txti');
    var fim = document.getElementById('txtf');
    var passos = document.getElementById('txtpa');
    var resp = document.getElementById('resp');
    console.log('Qualquer coisa')
    if (inic.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!');
        resp.innerHTML = 'Impossível contar!'
    } else if (isNaN(Number(inic.value)) || isNaN(Number(fim.value)) || isNaN(Number(passos.value))) {
        window.alert('[ERRO] Valores inválidos!');
    } else {
        resp.innerHTML = 'Contando: ';
        var i = Number(inic.value);
        var f = Number(fim.value);
        var p = Number(passos.value);
        if (p <= 0) {
            alert('Passo Inválido! Considerando PASSO 1')
            //Contagem Crescente
            for(var c= i; c <= f; c +=p) {
                resp.innerHTML += `${c} \u{1F449}`
            } 
        } else {
            //Contagem Regressiva
            for(var c = i; c >= f; c -=p){
                resp.innerHTML += `${c} \u{1F449}`
            }
        }
        resp.innerHTML += `${c} \u{1F3C1}`
    }
}