(() => {
    // ═══════════════════════════════════════════════════════════════════
    //  CENTRAL DE AUTOMAÇÃO — BLOQUEADA TEMPORARIAMENTE
    //
    //  Este arquivo substitui o central.js de verdade enquanto a
    //  ferramenta estiver fora do ar. Quem clicar no favorito Robôs vai
    //  ver apenas o recado abaixo, em qualquer convênio.
    //
    //  PARA MUDAR O RECADO: altere as três linhas logo abaixo.
    //  PARA LIBERAR DE NOVO: cole o conteúdo do central.js que funciona
    //  por cima deste arquivo, no GitHub. Volta na hora para todo mundo.
    // ═══════════════════════════════════════════════════════════════════

    const TITULO = 'Central de Automação indisponível';
    const RECADO = 'A ferramenta está temporariamente fora do ar para manutenção.';
    const RODAPE = 'Por enquanto, lance os códigos manualmente. Avisaremos quando voltar.';

    // Se o aviso já estiver na tela, não abre outro.
    if (document.getElementById('cr-bloqueio')) return;

    const caixa = document.createElement('div');
    caixa.id = 'cr-bloqueio';
    caixa.style.cssText = [
        'position:fixed',
        'top:50%',
        'left:50%',
        'transform:translate(-50%,-50%)',
        'z-index:2147483647',
        'width:360px',
        'max-width:92vw',
        'background:#1e2127',
        'color:#e9edf2',
        'font-family:system-ui,-apple-system,Segoe UI,Arial,sans-serif',
        'font-size:15px',
        'line-height:1.55',
        'padding:24px 22px 20px',
        'border-radius:14px',
        'border:1px solid #3a4150',
        'box-shadow:0 18px 50px rgba(0,0,0,.55)',
        'text-align:center'
    ].join(';');

    const icone = document.createElement('div');
    icone.textContent = '🔒';
    icone.style.cssText = 'font-size:38px;line-height:1;margin-bottom:12px;';

    const titulo = document.createElement('div');
    titulo.textContent = TITULO;
    titulo.style.cssText = 'font-size:18px;font-weight:600;margin-bottom:10px;';

    const recado = document.createElement('div');
    recado.textContent = RECADO;
    recado.style.cssText = 'margin-bottom:10px;';

    const rodape = document.createElement('div');
    rodape.textContent = RODAPE;
    rodape.style.cssText = 'font-size:13px;color:#939dad;margin-bottom:18px;';

    const botao = document.createElement('button');
    botao.textContent = 'Entendi';
    botao.style.cssText = [
        'width:100%',
        'padding:11px',
        'border:none',
        'border-radius:9px',
        'background:#2d7dff',
        'color:#fff',
        'font-size:15px',
        'font-weight:600',
        'cursor:pointer'
    ].join(';');
    botao.onclick = () => { try { caixa.remove(); } catch (e) { } };

    caixa.appendChild(icone);
    caixa.appendChild(titulo);
    caixa.appendChild(recado);
    caixa.appendChild(rodape);
    caixa.appendChild(botao);

    try {
        (document.body || document.documentElement).appendChild(caixa);
    } catch (e) {
        alert(TITULO + '\n\n' + RECADO);
        return;
    }

    // Some sozinho depois de um tempo, para não ficar atrapalhando a tela
    // caso a pessoa não clique em nada.
    setTimeout(() => { try { caixa.remove(); } catch (e) { } }, 25000);

    try {
        console.warn('[Central de Automação] Ferramenta bloqueada temporariamente.');
    } catch (e) { }
})();
