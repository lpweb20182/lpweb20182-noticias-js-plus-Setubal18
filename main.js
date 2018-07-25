var noticias = [];

function atualizarLista(noticia) {
    var lista = document.getElementById('noticias-recentes-list');
    var li = document.createElement('li');
    li.setAttribute('id', 'noticia-' + noticia.id);
    li.setAttribute('class', 'noticia');
    li.innerHTML = '<p class="titulo" onclick="mostrarNoticia(' + noticia.id + ')">'
        + noticia.titulo
        + '</p>'
        + '<p class="conteudo">'
        + noticia.conteudo
        + '<br>'
        + '<small>'
        + noticia.nome
        + noticia.email
        + '<br>'
        + noticia.data
        + '</small>'
        + '<br>'
        + '<span>------------------</span>'
        + '<br>'
        + '<button onclick="ocultarNoticia(' + noticia.id + ')">Fechar</button>';
    +'</p>';
    lista.appendChild(li);
}

function salvar(form) {
    var titulo = document.getElementById('frm-titulo').value;
    var conteudo = document.getElementById('frm-conteudo').value;
    var data = new Date(document.getElementById('frm-data').value);
    var email = document.getElementById('frm-email').value;
    var nome = document.getElementById('frm-nome').value;
    var datahj = new Date();
    var noticia = {
        id: noticias.length,
        titulo: titulo,
        conteudo: conteudo,
        data: data,
        nome: nome,
        email:email
    };

    if (data <= datahj && data != '') {
       noticias.push(noticia);
       atualizarLista(noticia);
       form.reset();

    }

    else {
        alert("Ou você veio do futuro ou a data está errada !");
    }


}

function mostrarNoticia(id) {
        var li = document.getElementById('noticia-' + id);
        for (var i = 0; i < li.childNodes.length; i++) {
            var node = li.childNodes[i];
            if (node.getAttribute('class') == 'conteudo') {
                node.setAttribute('style', 'display:inline');
            }
        }

}

function ocultarNoticia(id) {
    var li = document.getElementById('noticia-' + id);
    for (var i = 0; i < li.childNodes.length; i++) {
        var node = li.childNodes[i];
        if (node.getAttribute('class') == 'conteudo') {
            node.setAttribute('style', 'display:none');
        }
    }
}
