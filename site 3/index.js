

function goTo(target) {
    window.location.href = target;
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnCursos');
    if (btn) btn.addEventListener('click', () => goTo('curso.html'));
});



function oi(target) {
    window.location.href = target;
}

document.addEventListener('DOMContentLoaded', () => {
    const bt = document.getElementById('prJe');
    if (bt) bt.addEventListener('click', () => oi('pxpagina.html'));
});


function sobre(target) {
    window.location.href = target;
}
document.addEventListener('DOMContentLoaded', () => {
    const sb = document.getElementById('sbr');
    if (sb) sb.addEventListener('click', () => sobre ('pr.html'));
});



