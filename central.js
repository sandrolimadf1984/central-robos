(() => {
    // 1. Impede a abertura de múltiplos menus centrais
    if (document.getElementById('menu-central-robos')) return;

    // ── estilos globais do app ────────────────────────────────────
    if (!document.getElementById('estilo-central-robos')) {
        const est = document.createElement('style');
        est.id = 'estilo-central-robos';
        est.textContent =
            '#cr-lista::-webkit-scrollbar{width:8px;}' +
            '#cr-lista::-webkit-scrollbar-track{background:#0a1020;border-radius:4px;}' +
            '#cr-lista::-webkit-scrollbar-thumb{background:#2d7dff;border-radius:4px;}' +
            '#cr-txt-codigos::-webkit-scrollbar{width:8px;}' +
            '#cr-txt-codigos::-webkit-scrollbar-thumb{background:#2d7dff;border-radius:4px;}' +
            '#cr-txt-codigos::placeholder{color:#5b7ba6;text-align:center;padding-top:52px;font-size:13px;}' +
            '.cr-card:hover{border-color:#2d7dff !important;box-shadow:0 0 14px rgba(45,125,255,0.35);}' +
            '.cr-card:hover .cr-seta{background:#2d7dff;color:#fff;}' +
            '#cr-lista,#cr-home,#cr-janela{cursor:default;}' +
            '#cr-home::-webkit-scrollbar,#cr-janela::-webkit-scrollbar{width:8px;}' +
            '#cr-home::-webkit-scrollbar-track,#cr-janela::-webkit-scrollbar-track{background:#0a1020;}' +
            '#cr-home::-webkit-scrollbar-thumb,#cr-janela::-webkit-scrollbar-thumb{background:#2d7dff;border-radius:4px;}' +
            '.cr-rz{position:absolute;z-index:20;}' +
            '.cr-rz-n{top:0;left:9px;right:9px;height:9px;cursor:ns-resize;}' +
            '.cr-rz-s{bottom:0;left:9px;right:9px;height:9px;cursor:ns-resize;}' +
            '.cr-rz-w{left:0;top:9px;bottom:9px;width:9px;cursor:ew-resize;}' +
            '.cr-rz-e{right:0;top:9px;bottom:9px;width:9px;cursor:ew-resize;}' +
            '.cr-rz-nw{top:0;left:0;width:14px;height:14px;cursor:nwse-resize;z-index:21;}' +
            '.cr-rz-se{bottom:0;right:0;width:14px;height:14px;cursor:nwse-resize;z-index:21;}' +
            '.cr-rz-ne{top:0;right:0;width:14px;height:14px;cursor:nesw-resize;z-index:21;}' +
            '.cr-rz-sw{bottom:0;left:0;width:14px;height:14px;cursor:nesw-resize;z-index:21;}' +
            '.cr-rz:hover{background:rgba(45,125,255,0.30);border-radius:4px;}' +
            '.cr-arrasta{cursor:move;}';
        document.head.appendChild(est);
    }

    // ── casca do app ──────────────────────────────────────────────
    const menu = document.createElement('div');
    menu.id = 'menu-central-robos';
    menu.style.cssText = `
        position: fixed;
        top: 16px;
        left: 16px;
        width: 400px;
        background: linear-gradient(180deg, #0c1322 0%, #0a0f1c 100%);
        border: 1px solid #1d3557;
        border-radius: 16px;
        box-shadow: 0 0 0 1px rgba(45,125,255,0.25), 0 0 30px rgba(45,125,255,0.28), 0 18px 50px rgba(0,0,0,0.7);
        z-index: 2147483647;
        font-family: 'Segoe UI', system-ui, Arial, sans-serif;
        color: #dbe7ff;
        cursor: move;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        padding: 7px;
        box-sizing: border-box;
    `;

    // ── TELA 1: menu principal ────────────────────────────────────
    const telaHome = document.createElement('div');
    telaHome.id = 'cr-home';
    telaHome.style.cssText = 'position:relative;padding:8px 9px 6px 10px;flex:1;min-height:0;overflow-y:auto;cursor:default;border-radius:10px;';
    telaHome.innerHTML = `
        <div style="position:absolute;top:8px;right:14px;font-size:8.5px;letter-spacing:1px;color:#f5c518;text-shadow:0 0 6px rgba(245,197,24,0.45);font-weight:700;">CRIADO POR SANDRO DE LIMA PEREIRA</div>

        <div class="cr-arrasta" style="display:flex;align-items:center;gap:12px;margin-top:10px;">
            <div style="font-size:36px;line-height:1;filter:drop-shadow(0 0 8px rgba(77,195,255,0.6));">🤖</div>
            <div style="flex:1;">
                <div style="font-size:15px;font-weight:700;color:#e8f1ff;letter-spacing:2px;line-height:1.1;">CENTRAL DE</div>
                <div style="font-size:26px;font-weight:800;color:#4dc3ff;letter-spacing:2px;line-height:1.1;text-shadow:0 0 12px rgba(77,195,255,0.55);">AUTOMAÇÃO</div>
            </div>
            <div style="display:flex;align-items:center;gap:6px;background:#0e1a2e;border:1px solid #223a5e;border-radius:16px;padding:5px 12px;font-size:10px;font-weight:700;color:#cfe0ff;letter-spacing:1px;">
                <span style="width:8px;height:8px;border-radius:50%;background:#2ecc71;box-shadow:0 0 6px #2ecc71;"></span>ONLINE
            </div>
        </div>

        <div class="cr-arrasta" style="text-align:center;margin:6px 0 12px;font-size:12px;letter-spacing:3px;color:#9db4d8;font-weight:600;">
            <span style="color:#3d5a85;">—</span>&nbsp; <b style="color:#cfe0ff;">CLT</b>zinho&nbsp;<span style="letter-spacing:4px;">DIGITAL</span> &nbsp;<span style="color:#3d5a85;">—</span>
        </div>

        <div id="cr-aviso-slot"></div>

        <div style="display:flex;align-items:center;gap:12px;background:linear-gradient(135deg,#0d1f3a,#0b1830);border:1px solid #24559b;border-radius:12px;padding:14px 14px 14px 16px;margin-bottom:14px;background-image:repeating-linear-gradient(0deg,rgba(45,125,255,0.05) 0 1px,transparent 1px 22px),repeating-linear-gradient(90deg,rgba(45,125,255,0.05) 0 1px,transparent 1px 22px);">
            <div style="flex:1;min-width:0;">
                <div style="font-size:16px;font-weight:800;color:#eaf3ff;letter-spacing:1px;margin-bottom:4px;">BEM-VINDO!</div>
                <div style="font-size:11.5px;color:#8fa8cf;line-height:1.5;">Selecione o robô que deseja iniciar e automatize suas tarefas.</div>
            </div>
            <svg width="128" height="92" viewBox="0 0 130 92" fill="none" style="flex-shrink:0;filter:drop-shadow(0 0 6px rgba(77,195,255,0.5));">
                <g stroke="#4dc3ff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M80 26 L102 18 L124 26 L102 34 Z" fill="rgba(45,125,255,0.16)"/><path d="M80 26 L102 34 L102 51 L80 43 Z" fill="rgba(10,26,52,0.6)"/><path d="M102 34 L124 26 L124 43 L102 51 Z" fill="rgba(10,26,52,0.4)"/><ellipse cx="91" cy="38" rx="5.4" ry="6.4" fill="rgba(77,195,255,0.18)"/><ellipse cx="91" cy="38" rx="2.4" ry="3" stroke="#2ecc71"/><path d="M108 40 L118 36 M108 45 L118 41" stroke-width="1.1"/>
                    <path d="M40.8 10 L47.2 10 L46.6 30 L41.4 30 Z" fill="rgba(45,125,255,0.16)"/><path d="M42.9 6 L45.1 6 L45.1 10 L42.9 10 Z" fill="rgba(77,195,255,0.5)"/><path d="M41.4 30 L46.6 30 L45.4 42 L42.6 42 Z"/><path d="M42.6 42 L45.4 42 L44 50 Z" fill="rgba(77,195,255,0.35)"/>
                    <path d="M50.8 7 L57.2 7 L56.6 27 L51.4 27 Z" fill="rgba(45,125,255,0.16)"/><path d="M52.9 3 L55.1 3 L55.1 7 L52.9 7 Z" fill="rgba(77,195,255,0.5)"/><path d="M51.4 27 L56.6 27 L55.4 39 L52.6 39 Z"/><path d="M52.6 39 L55.4 39 L54 47 Z" fill="rgba(77,195,255,0.35)"/>
                    <path d="M60.8 11 L67.2 11 L66.6 31 L61.4 31 Z" fill="rgba(45,125,255,0.16)"/><path d="M62.9 7 L65.1 7 L65.1 11 L62.9 11 Z" fill="rgba(77,195,255,0.5)"/><path d="M61.4 31 L66.6 31 L65.4 43 L62.6 43 Z"/><path d="M62.6 43 L65.4 43 L64 51 Z" fill="rgba(77,195,255,0.35)"/>
                    <path d="M14 64 L54 48 L92 60 L52 76 Z" fill="rgba(45,125,255,0.13)"/><path d="M14 64 L52 76 L52 85 L14 73 Z" fill="rgba(12,30,60,0.55)"/><path d="M52 76 L92 60 L92 69 L52 85 Z" fill="rgba(12,30,60,0.35)"/>
                    <ellipse cx="22.1" cy="64.2" rx="2.1" ry="1.25"/>
                    <ellipse cx="28.8" cy="61.5" rx="2.1" ry="1.25"/>
                    <ellipse cx="35.4" cy="58.8" rx="2.1" ry="1.25"/>
                    <ellipse cx="42.1" cy="56.2" rx="2.1" ry="1.25"/>
                    <ellipse cx="48.8" cy="53.5" rx="2.1" ry="1.25"/>
                    <ellipse cx="55.4" cy="50.8" rx="2.1" ry="1.25"/>
                    <ellipse cx="31.6" cy="67.2" rx="2.1" ry="1.25"/>
                    <ellipse cx="38.2" cy="64.5" rx="2.1" ry="1.25"/>
                    <ellipse cx="44.9" cy="61.8" rx="2.1" ry="1.25"/>
                    <ellipse cx="51.6" cy="59.2" rx="2.1" ry="1.25"/>
                    <ellipse cx="58.2" cy="56.5" rx="2.1" ry="1.25"/>
                    <ellipse cx="64.9" cy="53.8" rx="2.1" ry="1.25"/>
                    <ellipse cx="41.1" cy="70.2" rx="2.1" ry="1.25"/>
                    <ellipse cx="47.8" cy="67.5" rx="2.1" ry="1.25"/>
                    <ellipse cx="54.4" cy="64.8" rx="2.1" ry="1.25"/>
                    <ellipse cx="61.1" cy="62.2" rx="2.1" ry="1.25"/>
                    <ellipse cx="67.8" cy="59.5" rx="2.1" ry="1.25"/>
                    <ellipse cx="74.4" cy="56.8" rx="2.1" ry="1.25"/>
                    <ellipse cx="50.6" cy="73.2" rx="2.1" ry="1.25"/>
                    <ellipse cx="57.2" cy="70.5" rx="2.1" ry="1.25"/>
                    <ellipse cx="63.9" cy="67.8" rx="2.1" ry="1.25"/>
                    <ellipse cx="70.6" cy="65.2" rx="2.1" ry="1.25"/>
                    <ellipse cx="77.2" cy="62.5" rx="2.1" ry="1.25"/>
                    <ellipse cx="83.9" cy="59.8" rx="2.1" ry="1.25"/>
                    <path d="M104 56 L104 72 Q104 78 108 78 Q112 78 112 72 L112 56" fill="rgba(45,125,255,0.13)"/><path d="M102.6 56 L113.4 56"/><path d="M105 70 Q108 73 111 70" stroke="#2ecc71"/><path d="M116 56 L116 72 Q116 78 120 78 Q124 78 124 72 L124 56" fill="rgba(45,125,255,0.13)"/><path d="M114.6 56 L125.4 56"/><path d="M117 70 Q120 73 123 70" stroke="#2ecc71"/>
                    <path d="M18 80 L34 80" stroke-width="1.2"/><path d="M40 82 L52 82" stroke-width="1.2"/><path d="M70 74 L78 71 L80 74 L72 77 Z" fill="rgba(77,195,255,0.2)"/>
                </g>
            </svg>
        </div>

        <div id="cr-lista" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;overflow-y:auto;padding-right:4px;"></div>

        <div style="display:flex;align-items:flex-start;justify-content:center;gap:56px;margin:16px 0 6px;">
            <div id="cr-fechar-app" style="text-align:center;cursor:pointer;">
                <div style="width:52px;height:52px;margin:0 auto;border-radius:50%;border:2px solid #b91f16;background:radial-gradient(circle at 35% 30%, #1c0d12, #12060a);display:flex;align-items:center;justify-content:center;font-size:22px;color:#ff5040;box-shadow:0 0 12px rgba(226,59,46,0.5);">✖</div>
                <div style="margin-top:6px;font-size:9.5px;font-weight:700;letter-spacing:1px;color:#e8f1ff;">FECHAR APP</div>
            </div>
            <div id="cr-marcador" style="text-align:center;cursor:pointer;">
                <div id="cr-marcador-icone" style="width:52px;height:52px;margin:0 auto;border-radius:50%;border:2px solid #17a2b8;background:radial-gradient(circle at 35% 30%, #0a1b26, #06121c);display:flex;align-items:center;justify-content:center;font-size:24px;color:#4dc3ff;box-shadow:0 0 12px rgba(23,162,184,0.5);transition:all .25s ease;">☐</div>
                <div id="cr-marcador-label" style="margin-top:6px;font-size:9.5px;font-weight:700;letter-spacing:.5px;color:#4dc3ff;">marcador de checkboxes</div>
            </div>
        </div>

        <div style="text-align:center;font-size:9.5px;color:#3d5a85;">Versão do Sistema 2.1.0</div>
    `;

    // ── TELA 2: janela de códigos (uma para todos os robôs) ───────
    const telaJanela = document.createElement('div');
    telaJanela.id = 'cr-janela';
    telaJanela.style.cssText = 'display:none;position:relative;padding:8px 9px 8px 10px;flex:1;min-height:0;overflow-y:auto;cursor:default;border-radius:10px;';
    telaJanela.innerHTML = `
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
            <div id="cr-voltar" style="width:34px;height:34px;border-radius:50%;background:#0e1a2e;border:1px solid #223a5e;display:flex;align-items:center;justify-content:center;font-size:16px;color:#cfe0ff;cursor:pointer;flex-shrink:0;">←</div>
            <div id="cr-j-icone" style="width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;background:linear-gradient(135deg,#2d7dff,#1a5bcc);box-shadow:0 0 12px rgba(45,125,255,0.5);">📝</div>
            <div style="flex:1;min-width:0;">
                <div id="cr-j-nome" style="font-size:16px;font-weight:800;color:#eaf3ff;letter-spacing:.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">CONVÊNIO</div>
                <div id="cr-j-desc" style="font-size:10.5px;color:#8fa8cf;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Automação</div>
            </div>
            <div id="cr-j-fechar" style="display:flex;align-items:center;gap:6px;background:#2a0f14;border:1px solid #b91f16;border-radius:16px;padding:6px 12px;font-size:10px;font-weight:800;color:#ff6b5e;letter-spacing:1px;cursor:pointer;flex-shrink:0;">✖ FECHAR</div>
        </div>

        <div style="background:#0c1830;border:1px solid #1e3a66;border-radius:14px;padding:14px;">
            <div style="font-size:13.5px;font-weight:800;color:#eaf3ff;letter-spacing:.5px;margin-bottom:4px;">📋 INSERIR CÓDIGOS DO CONVÊNIO</div>
            <div style="font-size:11px;color:#8fa8cf;margin-bottom:12px;">Cole abaixo a lista de códigos do convênio para iniciar a automação.</div>

            <div style="font-size:10px;font-weight:800;color:#4dc3ff;letter-spacing:1px;margin-bottom:6px;">📋 ÁREA PARA COLAR OS CÓDIGOS</div>
            <textarea id="cr-txt-codigos" placeholder="Clique aqui e cole os códigos do convênio" style="display:block;width:100%;min-height:150px;box-sizing:border-box;background:#0a1526;border:2px dashed #2d7dff;border-radius:12px;padding:12px;color:#cfe4ff;font-size:12.5px;font-family:Consolas,monospace;resize:vertical;outline:none;"></textarea>

            <div style="background:#0a1424;border:1px solid #1b3157;border-radius:10px;padding:10px 12px;margin-top:12px;">
                <div style="font-size:10.5px;font-weight:800;color:#4dc3ff;letter-spacing:1px;margin-bottom:5px;">💡 DICAS</div>
                <div style="font-size:10.5px;color:#9db4d8;line-height:1.7;">
                    <span style="color:#2ecc71;">✔</span> Você pode colar vários códigos de uma vez.<br>
                    <span style="color:#2ecc71;">✔</span> Certifique-se de que os códigos estejam corretos antes de iniciar.
                </div>
            </div>
        </div>

        <button id="cr-iniciar" style="display:block;width:100%;margin-top:14px;padding:14px;background:linear-gradient(180deg,#2d7dff,#1a5bcc);color:#fff;border:1px solid #4dc3ff;border-radius:12px;cursor:pointer;font-weight:800;font-size:14px;letter-spacing:1.5px;box-shadow:0 0 16px rgba(45,125,255,0.5);font-family:inherit;">🚀 INICIAR AUTOMAÇÃO</button>
        <button id="cr-limpar" style="display:block;width:100%;margin-top:8px;padding:11px;background:#0e1a2e;color:#9db4d8;border:1px solid #223a5e;border-radius:12px;cursor:pointer;font-weight:700;font-size:12px;letter-spacing:1.5px;font-family:inherit;">🕐 LIMPAR</button>
    `;

    menu.appendChild(telaHome);
    menu.appendChild(telaJanela);
    document.body.appendChild(menu);

    // ── ALÇAS DE REDIMENSIONAR (8 extremidades, igual janela do Chrome) ─
    const ALTURA_MIN = 200, LARGURA_MIN = 260;
    ['n','s','w','e','nw','ne','sw','se'].forEach(dir => {
        const alca = document.createElement('div');
        alca.className = 'cr-rz cr-rz-' + dir;
        alca.dataset.dir = dir;
        menu.appendChild(alca);
    });

    (() => {
        let dir = null, x0 = 0, y0 = 0, larg0 = 0, alt0 = 0, top0 = 0, esq0 = 0;

        const mover = ev => {
            if (!dir) return;
            const p = ev.touches ? ev.touches[0] : ev;
            const dx = p.clientX - x0, dy = p.clientY - y0;

            if (dir.includes('s')) {
                const h = Math.max(ALTURA_MIN, Math.min(alt0 + dy, window.innerHeight - top0 - 4));
                menu.style.height = h + 'px';
            }
            if (dir.includes('n')) {
                const h = Math.max(ALTURA_MIN, Math.min(alt0 - dy, top0 + alt0 - 4));
                menu.style.height = h + 'px';
                menu.style.top = (top0 + alt0 - h) + 'px';
            }
            if (dir.includes('e')) {
                const w = Math.max(LARGURA_MIN, Math.min(larg0 + dx, window.innerWidth - esq0 - 4));
                menu.style.width = w + 'px';
            }
            if (dir.includes('w')) {
                const w = Math.max(LARGURA_MIN, Math.min(larg0 - dx, esq0 + larg0 - 4));
                menu.style.width = w + 'px';
                menu.style.left = (esq0 + larg0 - w) + 'px';
            }
            ev.preventDefault();
        };

        const parar = () => {
            dir = null;
            document.body.style.userSelect = '';
            document.removeEventListener('mousemove', mover);
            document.removeEventListener('mouseup', parar);
            document.removeEventListener('touchmove', mover);
            document.removeEventListener('touchend', parar);
        };

        const iniciar = ev => {
            const alca = ev.target.closest('.cr-rz');
            if (!alca) return;
            const p = ev.touches ? ev.touches[0] : ev;
            const r = menu.getBoundingClientRect();
            menu.style.left = r.left + 'px';
            menu.style.top = r.top + 'px';
            menu.style.right = 'auto';
            menu.style.bottom = 'auto';
            dir = alca.dataset.dir;
            x0 = p.clientX; y0 = p.clientY;
            larg0 = r.width; alt0 = r.height; top0 = r.top; esq0 = r.left;
            document.body.style.userSelect = 'none';
            document.addEventListener('mousemove', mover);
            document.addEventListener('mouseup', parar);
            document.addEventListener('touchmove', mover, { passive: false });
            document.addEventListener('touchend', parar);
            ev.preventDefault();
            ev.stopPropagation();
        };

        menu.addEventListener('mousedown', iniciar, true);
        menu.addEventListener('touchstart', iniciar, { passive: false, capture: true });
    })();

    // ── ARRASTAR O PAINEL PELA TELA ───────────────────────────────
    (() => {
        let arrastando = false, dx = 0, dy = 0;
        const mover = ev => {
            if (!arrastando) return;
            const p = ev.touches ? ev.touches[0] : ev;
            const larg = menu.offsetWidth;
            let x = p.clientX - dx;
            let y = p.clientY - dy;
            x = Math.max(100 - larg, Math.min(x, window.innerWidth - 100));
            y = Math.max(0, Math.min(y, window.innerHeight - 50));
            menu.style.left = x + 'px';
            menu.style.top = y + 'px';
            ev.preventDefault();
        };
        const parar = () => {
            arrastando = false;
            document.body.style.userSelect = '';
            document.removeEventListener('mousemove', mover);
            document.removeEventListener('mouseup', parar);
            document.removeEventListener('touchmove', mover);
            document.removeEventListener('touchend', parar);
        };
        const iniciar = ev => {
            const alvo = ev.target;
            if (alvo.closest('button, textarea, input, select, a, .cr-card, .cr-rz, #cr-fechar-app, #cr-marcador, #cr-voltar, #cr-j-fechar, #cr-lista')) return;
            // clique em cima de barra de rolagem: deixa o navegador cuidar
            if (alvo.nodeType === 1 && (ev.offsetX > alvo.clientWidth || ev.offsetY > alvo.clientHeight)) return;
            const p = ev.touches ? ev.touches[0] : ev;
            const r = menu.getBoundingClientRect();
            menu.style.left = r.left + 'px';
            menu.style.top = r.top + 'px';
            menu.style.right = 'auto';
            menu.style.bottom = 'auto';
            dx = p.clientX - r.left;
            dy = p.clientY - r.top;
            arrastando = true;
            document.body.style.userSelect = 'none';
            document.addEventListener('mousemove', mover);
            document.addEventListener('mouseup', parar);
            document.addEventListener('touchmove', mover, { passive: false });
            document.addEventListener('touchend', parar);
            ev.preventDefault();
        };
        menu.addEventListener('mousedown', iniciar);
        menu.addEventListener('touchstart', iniciar, { passive: false });
    })();

    // ── MARCADOR DE CHECKBOXES ────────────────────────────────────
    document.getElementById('cr-marcador').onclick = () => {
        let marcados = 0;
        document.querySelectorAll('input[type=checkbox]').forEach(cb => {
            if (!cb.checked && !menu.contains(cb)) { cb.click(); marcados++; }
        });
        const ic = document.getElementById('cr-marcador-icone');
        const lb = document.getElementById('cr-marcador-label');
        ic.innerText = '☑';
        ic.style.color = '#2ecc71';
        ic.style.borderColor = '#2ecc71';
        ic.style.boxShadow = '0 0 16px rgba(46,204,113,0.7)';
        lb.innerText = marcados + ' marcados!';
        lb.style.color = '#2ecc71';
    };

    // ── FECHAR APP ────────────────────────────────────────────────
    document.getElementById('cr-fechar-app').onclick = () => menu.remove();

    // ── SISTEMA DE AVISOS DINÂMICOS ───────────────────────────────
    const linkDoAviso = "https://raw.githubusercontent.com/sandrolimadf1984/central-robos/main/aviso.txt";
    fetch(linkDoAviso + "?t=" + new Date().getTime())
        .then(response => { if (!response.ok) throw new Error('sem aviso'); return response.text(); })
        .then(texto => {
            if (texto.trim() !== "") {
                const avisoDiv = document.createElement('div');
                avisoDiv.style.cssText = `background:#2a2208;color:#ffd633;padding:10px 26px 10px 12px;border-radius:8px;margin-bottom:12px;font-size:11.5px;position:relative;border:1px solid #8a6d00;`;
                avisoDiv.innerHTML = `
                    <strong>⚠️ ATENÇÃO:</strong><br>
                    ${texto}
                    <button onclick="this.parentElement.remove()" style="position:absolute;top:4px;right:6px;background:transparent;border:none;color:#ffd633;font-weight:bold;cursor:pointer;font-size:14px;">✖</button>
                `;
                document.getElementById('cr-aviso-slot').appendChild(avisoDiv);
            }
        })
        .catch(erro => console.log("Sem avisos no momento."));

    const robos = {
        "PLANASSISTE MPU": () => {
            (function(){
                if(window.__rob)return;
                window.__rob=true;
                var u=window.location.href;
                document.body.innerHTML='';
                document.head.innerHTML='';
                var ui=document.createElement('div');
                ui.style='height:120px;background:#e9ecef;padding:10px;font-family:Arial;box-sizing:border-box;overflow:hidden;border-bottom:3px solid #0056b3;';
                ui.innerHTML='<h3 style="margin:0 0 5px 0;color:#333;">🤖 Robô Automático (Agrupamento Ativo)</h3><textarea id="rc" placeholder="Cole os códigos (8 dígitos...)" style="width:300px;height:70px;vertical-align:top;border:1px solid #ccc;padding:5px;"></textarea><button id="rb" style="height:70px;padding:0 20px;margin-left:10px;background:#28a745;color:white;font-weight:bold;border:none;border-radius:5px;cursor:pointer;vertical-align:top;font-size:14px;">INICIAR MÁQUINA</button><button id="rx" style="height:70px;padding:0 20px;margin-left:10px;background:#dc3545;color:white;font-weight:bold;border:none;border-radius:5px;cursor:pointer;vertical-align:top;font-size:14px;">PARAR E FECHAR</button><span id="rs" style="margin-left:15px;font-weight:bold;color:#333;font-size:16px;">Aguardando...</span>';
                document.body.appendChild(ui);
                var frm=document.createElement('iframe');
                frm.id='sf';frm.src=u;frm.style='width:100%;height:calc(100vh - 120px);border:none;';
                document.body.appendChild(frm);
                document.body.style.margin='0';
                document.body.style.overflow='hidden';
                var q=[],id=0,st='tabela',lp=null;
                
                document.getElementById('rx').onclick=function(){
                    clearInterval(lp);window.__rob=false;ui.remove();frm.style.height='100vh';
                };
                
                document.getElementById('rb').onclick=function(){
                    var v=document.getElementById('rc').value.match(/\b\d{8}\b/g);
                    if(!v)return alert('Nenhum código válido.');
                    var cts={};
                    for(var i=0;i<v.length;i++){cts[v[i]]=(cts[v[i]]||0)+1;}
                    q=[];
                    for(var k in cts){q.push({c:k,qty:cts[k]});}
                    id=0;st='tabela';
                    document.getElementById('rs').innerText='Processando '+q.length+' códigos únicos...';
                    this.disabled=true;document.getElementById('rc').disabled=true;
                    lp=setInterval(rl,1500);
                };
                
                function rl(){
                    var d,cw;
                    try{cw=document.getElementById('sf').contentWindow;d=cw.document;}catch(e){return;}
                    if(d.readyState!=='complete')return;
                    
                    if(id>=q.length){
                        clearInterval(lp);
                        document.getElementById('rs').innerText='✅ Concluído! O último código foi salvo e a tela finalizada.';
                        document.getElementById('rs').style.color='#28a745';
                        return;
                    }
                    
                    if(st==='tabela'){
                        var b=d.querySelector('#CODIGOTABELA_btn');
                        if(b){
                            if(!cw._hk){
                                var o=cw.window.open;
                                cw.window.open=function(a,x,c){
                                    var w=o.call(cw,a,x,c);
                                    var t=setInterval(function(){
                                        try{
                                            var l=null;
                                            var es=w.document.querySelectorAll('a');
                                            
                                            for(var i=0;i<es.length;i++){
                                                var txt=(es[i].innerText||'').toUpperCase();
                                                if(txt.includes('22 - PROCEDIMENTO') || txt === '22' || txt === '16' || txt.includes('PROCEDIMENTO')){
                                                    l=es[i];
                                                    break;
                                                }
                                            }
                                            
                                            if(!l){
                                                l=w.document.querySelector('#FormMain > div > div > div > div > div > div > div > div > div.div_grid > table > tbody > tr:nth-child(6) > td:nth-child(1) > a');
                                            }
                                            
                                            if(!l){
                                                for(var i=0;i<es.length;i++){
                                                    if((es[i].innerText||'').includes('TUSS')){
                                                        l=es[i];
                                                        break;
                                                    }
                                                }
                                            }
                                            
                                            if(l){
                                                l.click();
                                                clearInterval(t);
                                                st='preencher';
                                            }
                                        }catch(e){}},500);
                                    return w;
                                };
                                cw._hk=true;
                                b.click();
                                document.getElementById('rs').innerText='Aguardando a tabela TUSS...';
                            }
                        }else{
                            st='preencher';
                        }
                    }else if(st==='preencher'){
                        var f1=d.querySelector('#FormMain > table > tbody > tr:nth-child(1) > td:nth-child(4) > table > tbody > tr > td:nth-child(1) > input.frm_field_lkp');
                        var f2=d.querySelector('#FormMain > table > tbody > tr:nth-child(3) > td:nth-child(2) > table > tbody > tr > td:nth-child(1) > input.frm_field_lkp');
                        var fq=d.querySelector('#FormMain > table > tbody > tr:nth-child(2) > td:nth-child(2) > input');
                        var ult=(id===q.length-1);
                        var sb=ult?'body > table > tbody > tr:nth-child(1) > td > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td.StmMain > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td > div > div.act_box > div > div > div > div:nth-child(3) > a':'body > table > tbody > tr:nth-child(1) > td > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td.StmMain > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td > div > div.act_box > div > div > div > div:nth-child(2) > a > nobr';
                        var bt=d.querySelector(sb);
                        if(f1&&f2&&bt){
                            if(cw._wt)return;
                            document.getElementById('rs').innerText=ult?('⏳ Finalizando com: '+q[id].c+' (Qtd: '+q[id].qty+') - Último!'):('⏳ Inserindo: '+q[id].c+' (Qtd: '+q[id].qty+') - '+(id+1)+'/'+q.length);
                            f1.value='';f1.value=q[id].c;
                            f1.dispatchEvent(new Event('input',{bubbles:true}));f1.dispatchEvent(new Event('change',{bubbles:true}));
                            f2.value='';f2.value='Exames-Patologia Clínica';
                            f2.dispatchEvent(new Event('input',{bubbles:true}));f2.dispatchEvent(new Event('change',{bubbles:true}));
                            if(fq&&q[id].qty>1){
                                fq.value='';fq.value=q[id].qty;
                                fq.dispatchEvent(new Event('input',{bubbles:true}));fq.dispatchEvent(new Event('change',{bubbles:true}));
                            }
                            cw._wt=true;
                            setTimeout(function(){bt.click();id++;},800);
                        }else{
                            cw._wt=false;
                        }
                    }
                }
            })();
        },
        "PLENUM": () => {
            (function () {
                if (document.getElementById('painel-plenum')) return;
                const painel = document.createElement('div');
                painel.id = 'painel-plenum';
                painel.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    width: 300px;
                    background: #2c3e50;
                    color: #ecf0f1;
                    padding: 15px;
                    border-radius: 8px;
                    z-index: 2147483647;
                    font-family: Arial, sans-serif;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.5);
                    border: 2px solid #9b59b6;
                `;
                painel.innerHTML = `
                    <h3 style="margin: 0 0 10px 0; color: #9b59b6; text-align: center;">🤖 Lançador PLENUM</h3>
                    <textarea id="plenum-txt" style="width: 100%; height: 80px; margin-bottom: 10px; border-radius: 4px; padding: 5px; color: #000; box-sizing: border-box;" placeholder="Cole os códigos aqui..."></textarea>
                    <button id="plenum-btn" style="width: 100%; padding: 10px; background: #27ae60; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; margin-bottom: 5px;">▶ INICIAR (TURBO)</button>
                    <div id="plenum-status" style="font-size: 12px; color: #bdc3c7; text-align: center; margin-bottom: 5px;">Aguardando...</div>
                    <button id="plenum-fechar" style="width: 100%; padding: 8px; background: #c0392b; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">❌ FECHAR</button>
                `;
                document.body.appendChild(painel);

                const wait = ms => new Promise(r => setTimeout(r, ms));

                document.getElementById('plenum-fechar').onclick = () => painel.remove();

                document.getElementById('plenum-btn').onclick = async () => {
                    const txt = document.getElementById('plenum-txt').value;
                    let raw = txt.match(/\b\d{8}\b/g);
                    
                    if (!raw || raw.length === 0) {
                        alert("Nenhum código válido encontrado!");
                        return;
                    }

                    if (raw.length > 50) {
                        alert("⚠️ Limite de segurança ativado! Como você colou mais de 50 códigos, o sistema processará apenas os primeiros 50 itens para evitar travamentos.");
                        raw = raw.slice(0, 50);
                    }

                    document.getElementById('plenum-btn').disabled = true;
                    const status = document.getElementById('plenum-status');

                    const counts = {};
                    raw.forEach(x => counts[x] = (counts[x] || 0) + 1);
                    const unicos = [...new Set(raw)];
                    const order = unicos.filter(c => counts[c] === 1).concat(unicos.filter(c => counts[c] > 1));
                    const codigos = order.map(k => ({ cod: k, qtd: counts[k] }));

                    const setVal = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;

                    for (let i = 0; i < codigos.length; i++) {
                        let item = codigos[i];
                        status.innerText = `⚡ Processando ${i + 1}/${codigos.length}: ${item.cod} (Qtd: ${item.qtd})`;

                        let inptCod = document.querySelector('#codProc');
                        if (inptCod) {
                            inptCod.focus();
                            if (setVal) setVal.call(inptCod, item.cod);
                            else inptCod.value = item.cod;
                            
                            inptCod.dispatchEvent(new Event('input', { bubbles: true }));
                            inptCod.dispatchEvent(new Event('change', { bubbles: true }));
                            await wait(50); 
                        }

                        let btnAlteraQtd = document.querySelector('#formContainer > div:nth-child(2) > div:nth-child(2) > div.col-xs-2.col-md-2 > div > div > input.btn.btn-primary');
                        if (btnAlteraQtd) {
                            btnAlteraQtd.focus();
                            btnAlteraQtd.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
                            btnAlteraQtd.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
                            btnAlteraQtd.click();
                            await wait(300); 
                        }

                        let inptQtd = document.querySelector('#qtde');
                        if (inptQtd) {
                            inptQtd.focus();
                            if (setVal) setVal.call(inptQtd, item.qtd);
                            else inptQtd.value = item.qtd;
                            
                            inptQtd.dispatchEvent(new Event('input', { bubbles: true }));
                            inptQtd.dispatchEvent(new Event('change', { bubbles: true }));
                            await wait(50); 
                        }

                        let inptDesc = document.querySelector('#descProc');
                        if (inptDesc) {
                            inptDesc.focus();
                            inptDesc.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
                            inptDesc.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
                            inptDesc.click();
                            await wait(350); 
                        }

                        let btnIncluir = document.querySelector('#btnIncluiProc');
                        if (btnIncluir) {
                            btnIncluir.click();
                            await wait(400); 
                        }
                    }

                    status.innerText = "✅ Finalizado!";
                    document.getElementById('plenum-btn').disabled = false;
                    alert("Todos os códigos foram processados com sucesso no modo Turbo!");
                };
            })();
        },
        "TRE": () => {
            (async function () {
                const inputStr = prompt("Cole os códigos de 8 dígitos:");
                if (!inputStr) return;
                const rawCodes = inputStr.match(/\b\d{8}\b/g);
                if (!rawCodes || rawCodes.length === 0) {
                    alert("Nenhum código válido encontrado.");
                    return;
                }
                const codeCounts = {};
                for (const c of rawCodes) {
                    codeCounts[c] = (codeCounts[c] || 0) + 1;
                }
                const uniqueCodes = Object.keys(codeCounts);
                const delay = ms => new Promise(res => setTimeout(res, ms));
                for (let i = 0; i < uniqueCodes.length; i++) {
                    const code = uniqueCodes[i];
                    const count = codeCounts[code];
                    const inputField = document.querySelector('#principal > form > table:nth-child(15) > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=input]');
                    if (!inputField) {
                        alert("Campo não encontrado.");
                        return;
                    }
                    inputField.focus();
                    inputField.value = code;
                    inputField.dispatchEvent(new Event('input', { bubbles: true }));
                    inputField.dispatchEvent(new Event('change', { bubbles: true }));
                    inputField.blur();
                    inputField.dispatchEvent(new Event('focusout', { bubbles: true }));
                    document.body.click();
                    await delay(2000);
                    const radioBtn = document.querySelector('#procedimentosPesquisados > tbody > tr:nth-child(2) > td:nth-child(1) > input[type=radio]');
                    if (radioBtn) radioBtn.click();
                    await delay(500);
                    const qtdField = document.querySelector('#quantidadeProcedimento');
                    if (qtdField) {
                        qtdField.focus();
                        qtdField.value = count.toString();
                        qtdField.dispatchEvent(new Event('input', { bubbles: true }));
                        qtdField.dispatchEvent(new Event('change', { bubbles: true }));
                        qtdField.blur();
                    }
                    const addBtn = document.querySelector('#principal > form > table:nth-child(21) > tbody > tr:nth-child(7) > td > input:nth-child(1)');
                    if (addBtn) addBtn.click();
                    await delay(1500);
                    inputField.value = "";
                }
                alert("Concluído! Foram inseridos " + uniqueCodes.length + " códigos únicos (Total de itens contados: " + rawCodes.length + ").");
            })();
        },
        "MEDSENIOR/UN SEG": () => {
            (function () {
                var P = document.getElementById('painel-v60-27');
                if (P) P.remove();
                var painel = document.createElement('div');
                painel.id = 'painel-v60-27';
                painel.style.cssText = 'position:fixed;top:10px;right:10px;width:310px;background:#2d3436;color:#fff;padding:15px;z-index:2147483647;border:4px solid #d63031;border-radius:8px;font-family:Arial;box-shadow:0 0 20px #000;font-size:12px;';
                painel.innerHTML = '<h3 style="color:#fab1a0;margin:0 0 5px;">🏥 V60.29 NOME CHECK</h3><div id="countMed" style="font-size:11px;color:#aaa;margin-bottom:10px;">Únicos: 0 | Total: 0</div><textarea id="txtInput" style="width:100%;height:80px;color:#000;border-radius:4px;padding:5px;" placeholder="Cole os códigos..."></textarea><button id="btnRun" style="width:100%;padding:10px;margin-top:5px;background:#e17055;color:#fff;font-weight:bold;border:none;border-radius:4px;cursor:pointer;">INICIAR ▶</button><div id="statusLog" style="margin-top:10px;color:#fab1a0;font-weight:bold;text-align:center;">Pronto.</div><button id="btnPanic" style="width:100%;margin-top:15px;background:#d63031;border:2px solid #fff;border-radius:4px;color:#fff;padding:5px;cursor:pointer;font-weight:bold;">💣 DESTROÇAR TRAVAMENTO</button><button onclick="this.parentElement.remove()" style="width:100%;margin-top:5px;cursor:pointer;background:#636e72;border-radius:4px;border:none;color:#fff;padding:5px;">Fechar</button>';
                document.body.appendChild(painel);
                var log = msg => document.getElementById('statusLog').innerText = msg;
                document.getElementById('txtInput').addEventListener('input', function() {
                    var raw = this.value.match(/\b\d{8}\b/g) || [];
                    var unicos = [...new Set(raw)];
                    document.getElementById('countMed').innerText = 'Únicos: ' + unicos.length + ' | Total: ' + raw.length;
                });
                var winAlvo = null;
                function unlock() {
                    try {
                        document.body.style.cursor = 'default';
                        document.body.style.pointerEvents = 'auto';
                        var wins = [window, window.top];
                        if (winAlvo) wins.push(winAlvo);
                        wins.forEach(w => {
                            if (w.document) {
                                w.document.body.style.cursor = 'default';
                                w.document.body.style.pointerEvents = 'auto';
                                var list = w.document.querySelectorAll('.ui-widget-overlay,.blockUI,.modal-backdrop,.ui-dialog-mask');
                                list.forEach(e => e.remove());
                            }
                        });
                    } catch (e) {}
                }
                document.getElementById('btnPanic').onclick = unlock;
                function findBtn(w) {
                    try {
                        var b = w.document.getElementById('button2');
                        if (b) return { btn: b, win: w };
                        if (w.frames) {
                            for (var i = 0; i < w.frames.length; i++) {
                                var r = findBtn(w.frames[i]);
                                if (r) return r;
                            }
                        }
                    } catch (e) {}
                    return null;
                }
                document.getElementById('btnRun').onclick = function () {
                    var txt = document.getElementById('txtInput').value;
                    var raw = txt.match(/\b\d{8}\b/g);
                    if (!raw) return alert('Sem códigos!');
                    var counts = {};
                    raw.forEach(x => counts[x] = (counts[x] || 0) + 1);
                    var unicos = [...new Set(raw)];
                    var order = unicos.filter(c => counts[c] === 1).concat(unicos.filter(c => counts[c] > 1));
                    var codigos = order.map(k => ({ cod: k, qtd: counts[k] }));
                    var res = findBtn(window.top);
                    if (!res) return alert('Botão button2 sumiu!');
                    winAlvo = res.win;
                    document.getElementById('btnRun').disabled = true;
                    document.getElementById('txtInput').disabled = true;
                    log('Iniciando...');
                    var idx = 0;
                    function aguardarResp(cb) {
                        let t = 0;
                        let c = setInterval(() => {
                            let bl = false;
                            try {
                                if (winAlvo && winAlvo.document.querySelector('.blockUI, .ui-widget-overlay, .ajax-status')) bl = true;
                            } catch (e) {}
                            if (!bl) {
                                clearInterval(c);
                                cb();
                            } else {
                                t++;
                                if (t > 40) {
                                    clearInterval(c);
                                    unlock();
                                    cb();
                                }
                            }
                        }, 250);
                    }
                    function loop() {
                        if (idx >= codigos.length) {
                            unlock();
                            log('✅ FIM!');
                            document.getElementById('btnRun').disabled = false;
                            document.getElementById('txtInput').disabled = false;
                            return;
                        }
                        aguardarResp(function () {
                            var item = codigos[idx];
                            var code = item.cod;
                            var q = item.qtd;
                            log('▶ [' + (idx + 1) + '/' + codigos.length + '] ' + code + (q > 1 ? ' (Qtd: ' + q + ')' : ''));
                            res.btn.click();
                            var idField = 'item_medico_' + (idx + 1);
                            var idQtd = 'qtd_solicitada_' + (idx + 1);
                            var idNome = 'nome_item_proc_' + (idx + 1);
                            var tries = 0;
                            var timer = setInterval(function () {
                                var field = winAlvo.document.getElementById(idField);
                                if (field) {
                                    clearInterval(timer);
                                    field.focus();
                                    field.value = code;
                                    field.dispatchEvent(new Event('input', { bubbles: true }));
                                    field.dispatchEvent(new Event('change', { bubbles: true }));
                                    field.blur();
                                    var nomeTries = 0;
                                    var nomeCheck = setInterval(function () {
                                        var nomeField = winAlvo.document.getElementById(idNome);
                                        var val = nomeField ? (nomeField.value || nomeField.innerText || "") : "";
                                        if (val.trim().length > 2) {
                                            clearInterval(nomeCheck);
                                            processarQtd();
                                        } else {
                                            nomeTries++;
                                            if (nomeTries > 60) {
                                                clearInterval(nomeCheck);
                                                log('⚠️ Timeout Nome. Tentando avançar...');
                                                processarQtd();
                                            }
                                        }
                                    }, 250);
                                    function processarQtd() {
                                        if (q > 1) {
                                            var qTries = 0;
                                            var qCheck = setInterval(function () {
                                                var qField = winAlvo.document.getElementById(idQtd);
                                                if (qField) {
                                                    clearInterval(qCheck);
                                                    qField.focus();
                                                    qField.value = q;
                                                    qField.dispatchEvent(new Event('input', { bubbles: true }));
                                                    qField.dispatchEvent(new Event('change', { bubbles: true }));
                                                    qField.blur();
                                                    idx++;
                                                    setTimeout(loop, 100);
                                                } else {
                                                    qTries++;
                                                    if (qTries > 20) {
                                                        clearInterval(qCheck);
                                                        log('⚠️ Qtd falhou na linha ' + (idx + 1));
                                                        idx++;
                                                        setTimeout(loop, 100);
                                                    }
                                                }
                                            }, 250);
                                        } else {
                                            idx++;
                                            setTimeout(loop, 100);
                                        }
                                    }
                                } else {
                                    tries++;
                                    if (tries > 50) {
                                        clearInterval(timer);
                                        if (confirm('Campo ' + idField + ' não abriu. Pular?')) {
                                            idx++;
                                            loop();
                                        } else {
                                            log('Parado.');
                                            document.getElementById('btnRun').disabled = false;
                                            document.getElementById('txtInput').disabled = false;
                                        }
                                    }
                                }
                            }, 100);
                        });
                    }
                    loop();
                };
            })();
        },
        "TJDF": () => {
            (() => {
                if (document.getElementById('b403-painel-root')) return;
                let codigos = [];
                let idx = 0;
                let observer;
                let obsTabelaAtual = null;
                let executando = false;
                let pausado = false;
                let painel = null;
                let statusEl, contadorEl;
                const criarPainelEntrada = () => {
                    painel = document.createElement('div');
                    painel.id = 'b403-painel-root';
                    painel.style = 'position:fixed;bottom:20px;right:20px;z-index:999999;background:#1e1e1e;color:#f1f1f1;font-family:system-ui,Arial;padding:14px;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,.4);width:260px;';
                    painel.innerHTML = '<div style="font-weight:600;margin-bottom:8px;">⚙️ Automação de Códigos</div><textarea id="b403-input" placeholder="Cole os códigos (8 dígitos) aqui..." style="width:100%;height:80px;border-radius:6px;border:none;padding:6px;margin-bottom:8px;"></textarea><button id="b403-iniciar" style="width:100%;padding:8px;border:none;border-radius:8px;background:#2d7dff;color:#fff;cursor:pointer;">▶️ Iniciar</button>';
                    document.body.appendChild(painel);
                    painel.querySelector('#b403-iniciar').onclick = iniciarAutomacao;
                };
                const iniciarAutomacao = () => {
                    const texto = painel.querySelector('#b403-input').value || '';
                    const matches = texto.match(/\b\d{8}\b/g) || [];
                    if (!matches.length) {
                        alert('Nenhum código válido.');
                        return;
                    }
                    const contagem = {};
                    matches.forEach(m => { contagem[m] = (contagem[m] || 0) + 1; });
                    const unicos = [...new Set(matches)];
                    const order = unicos.filter(c => contagem[c] === 1).concat(unicos.filter(c => contagem[c] > 1));
                    codigos = order.map(k => ({ cod: k, qtd: contagem[k] }));
                    painel.innerHTML = '<div style="font-weight:600;margin-bottom:10px;">⚙️ Automação de Códigos</div><div id="b403-status">Status: iniciado</div><div id="b403-contador">0 / ' + codigos.length + '</div><div style="margin-top:10px;display:grid;grid-template-columns:1fr 1fr;gap:6px;"><button id="b403-pausar">⏸ Pausar</button><button id="b403-pular">⏭ Pular</button><button id="b403-encerrar" style="grid-column:1/3;">❌ Encerrar</button></div>';
                    statusEl = painel.querySelector('#b403-status');
                    contadorEl = painel.querySelector('#b403-contador');
                    painel.querySelector('#b403-pausar').onclick = togglePause;
                    painel.querySelector('#b403-pular').onclick = () => { executando = false; avancarProximo(); };
                    painel.querySelector('#b403-encerrar').onclick = finalizar;
                    observer = new MutationObserver(() => !pausado && executarProximo());
                    observer.observe(document.body, { childList: true, subtree: true });
                    executarProximo();
                };
                const setStatus = t => statusEl.textContent = 'Status: ' + t;
                const setContador = () => contadorEl.textContent = idx + ' / ' + codigos.length;
                const togglePause = () => {
                    pausado = !pausado;
                    setStatus(pausado ? 'pausado' : 'retomado');
                    if (!pausado) executarProximo();
                };
                const adicionarEventoEnterAoInput = () => {
                    const input = document.querySelector('#HandleTermo');
                    if (!input || input.dataset.enterAdded) return;
                    input.addEventListener('paste', () => {
                        setTimeout(() => {
                            input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13, which: 13, bubbles: true }));
                        }, 100);
                    });
                    input.dataset.enterAdded = '1';
                };
                const selecionarTabelaTJDF = () => {
                    setStatus('aguardando tabela');
                    obsTabelaAtual = new MutationObserver(() => {
                        const celula = document.querySelector('#result-body-table > tr.dataGridRow.ng-scope.kb-active > td:nth-child(2)');
                        if (celula) {
                            celula.click();
                            obsTabelaAtual.disconnect();
                            obsTabelaAtual = null;
                            verificarEPreencherQuantidade();
                        }
                    });
                    obsTabelaAtual.observe(document.body, { childList: true, subtree: true });
                };
                const verificarEPreencherQuantidade = () => {
                    const itemAtual = codigos[idx];
                    if (itemAtual.qtd > 1) {
                        setStatus('preenchendo qtd (' + itemAtual.qtd + ')');
                        let tentativas = 0;
                        const checarInput = setInterval(() => {
                            const seletor = '#stepDadosSolicitacaoForm > bc-guia-eventos-exibicao-termos-selecionados > div > div:nth-child(' + (idx + 1) + ') > div.form-group > div.size-1.no-rpadding > input';
                            const inputQtd = document.querySelector(seletor);
                            if (inputQtd) {
                                clearInterval(checarInput);
                                inputQtd.value = itemAtual.qtd;
                                inputQtd.dispatchEvent(new Event('input', { bubbles: true }));
                                inputQtd.dispatchEvent(new Event('change', { bubbles: true }));
                                avancarProximo();
                            } else {
                                tentativas++;
                                if (tentativas > 20) {
                                    clearInterval(checarInput);
                                    console.warn('Campo de quantidade não apareceu a tempo.');
                                    avancarProximo();
                                }
                            }
                        }, 500);
                    } else {
                        avancarProximo();
                    }
                };
                const avancarProximo = () => {
                    executando = false;
                    idx++;
                    executarProximo();
                };
                const executarProximo = () => {
                    if (pausado || executando) return;
                    if (idx >= codigos.length) {
                        finalizar();
                        return;
                    }
                    const c = document.querySelector('#HandleTermo');
                    if (!c) return;
                    executando = true;
                    setStatus('processando');
                    setContador();
                    adicionarEventoEnterAoInput();
                    const codigoAtual = codigos[idx].cod;
                    if (codigoAtual !== '40325024') {
                        selecionarTabelaTJDF();
                    }
                    c.focus();
                    c.value = codigoAtual;
                    c.dispatchEvent(new Event('paste', { bubbles: true }));
                    c.dispatchEvent(new Event('input', { bubbles: true }));
                    c.dispatchEvent(new Event('change', { bubbles: true }));
                    if (codigoAtual === '40325024') {
                        setTimeout(() => {
                            verificarEPreencherQuantidade();
                        }, 600);
                    }
                };
                const finalizar = () => {
                    pausado = true;
                    executando = false;
                    if (observer) observer.disconnect();
                    if (obsTabelaAtual) obsTabelaAtual.disconnect();
                    setStatus('finalizado');
                    document.querySelectorAll('.modal-backdrop').forEach(b => b.remove());
                    document.querySelectorAll('.modal').forEach(m => {
                        m.style.display = 'none';
                        m.classList.remove('in', 'show');
                        m.removeAttribute('aria-hidden');
                        m.removeAttribute('inert');
                    });
                    document.body.classList.remove('modal-open');
                    document.body.style.pointerEvents = 'auto';
                    document.body.style.overflow = 'auto';
                    try { document.activeElement.blur(); } catch (e) {}
                    const btnFechar = document.createElement('button');
                    btnFechar.textContent = '🧹 Fechar painel';
                    btnFechar.style = 'margin-top:10px;width:100%;padding:8px;border:none;border-radius:8px;background:#444;color:#fff;cursor:pointer;';
                    btnFechar.onclick = () => {
                        painel.remove();
                        painel = null;
                        document.body.style.pointerEvents = 'auto';
                        document.body.style.overflow = 'auto';
                    };
                    painel.appendChild(btnFechar);
                };
                criarPainelEntrada();
            })();
        },
        "PM/STJ": () => {
            (function () {
                if (window._b403) return;
                window._b403 = 1;
                let t = prompt("Cole os códigos de 8 dígitos:");
                if (!t) { window._b403 = 0; return; }
                let m = t.match(/\b\d{8}\b/g) || [];
                if (!m.length) { window._b403 = 0; return; }
                let counts = {};
                m.forEach(x => counts[x] = (counts[x] || 0) + 1);
                let unicos = [...new Set(m)];
                let order = unicos.filter(c => counts[c] === 1).concat(unicos.filter(c => counts[c] > 1));
                let a = order.map(k => ({ cod: k, qtd: counts[k] }));
                let i = 0;
                const run = () => {
                    if (i >= a.length) {
                        alert("Finalizado");
                        window._b403 = 0;
                        return;
                    }
                    let f = document.querySelector("#HandleTermo");
                    if (!f) { setTimeout(run, 50); return; }
                    let item = a[i], v = item.cod;
                    f.focus();
                    f.value = v;
                    f.dispatchEvent(new Event("input", { bubbles: true }));
                    f.dispatchEvent(new Event("change", { bubbles: true }));
                    f.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", keyCode: 13, which: 13, bubbles: true }));
                    let c = setInterval(() => {
                        if (f.value !== v) {
                            clearInterval(c);
                            if (item.qtd > 1) {
                                let tries = 0;
                                let qCheck = setInterval(() => {
                                    let inputs = document.querySelectorAll("#stepDadosSolicitacaoForm > bc-guia-eventos-exibicao-termos-selecionados > div > div.ng-scope > div.form-group > div.size-1.no-rpadding > input");
                                    let inputQtd = inputs[i];
                                    if (inputQtd) {
                                        clearInterval(qCheck);
                                        inputQtd.value = item.qtd;
                                        inputQtd.dispatchEvent(new Event("input", { bubbles: true }));
                                        inputQtd.dispatchEvent(new Event("change", { bubbles: true }));
                                        i++;
                                        run();
                                    } else {
                                        tries++;
                                        if (tries > 20) { clearInterval(qCheck); i++; run(); }
                                    }
                                }, 250);
                            } else {
                                i++;
                                run();
                            }
                        }
                    }, 50);
                };
                run();
            })();
        },
        "SULAMERICA": () => {
            (function () {
                const TEMPO = 150;
                var texto = prompt("MODO SONIC: Cole os códigos aqui:");
                if (!texto) return;
                var raw = texto.match(/\b\d{8}\b/g);
                if (!raw || raw.length === 0) return;
                var counts = {};
                raw.forEach(x => counts[x] = (counts[x] || 0) + 1);
                var unicos = [...new Set(raw)];
                var order = unicos.filter(c => counts[c] === 1).concat(unicos.filter(c => counts[c] > 1));
                var codigos = order.map(k => ({ cod: k, qtd: counts[k] }));
                var selInput = "#formValidaProcedimento > fieldset > div > div > div:nth-child(1) > input";
                var selBtn = "#btn-incluir-procedimento > span";
                var selQtd = "#tabelaSolicitaProcedimento > tbody > tr > td:nth-child(5) > input";
                async function run() {
                    for (let i = 0; i < codigos.length; i++) {
                        let item = codigos[i];
                        let inpt = document.querySelector(selInput);
                        let btn = document.querySelector(selBtn);
                        if (inpt && btn) {
                            inpt.value = item.cod;
                            inpt.dispatchEvent(new Event('input', { bubbles: true }));
                            inpt.dispatchEvent(new Event('change', { bubbles: true }));
                            btn.click();
                            await new Promise(r => setTimeout(r, TEMPO));
                            if (item.qtd > 1) {
                                await new Promise(r => setTimeout(r, 150));
                                let qInps = document.querySelectorAll(selQtd);
                                let qInpt = qInps[i] || qInps[qInps.length - 1];
                                if (qInpt) {
                                    qInpt.value = item.qtd;
                                    qInpt.dispatchEvent(new Event('input', { bubbles: true }));
                                    qInpt.dispatchEvent(new Event('change', { bubbles: true }));
                                }
                            }
                        }
                    }
                    alert("Sonic finalizado!");
                }
                run();
            })();
        },
        "TST": () => {
            (function () {
                var b = document.createElement("button");
                b.innerText = "⚖️ ROBÔ EQUILIBRADO (TUSS 16)";
                b.style = "position:fixed;top:10px;left:50%;transform:translateX(-50%);padding:15px;background:#008b8b;color:white;font-weight:bold;border:3px solid white;z-index:9999999;box-shadow:0 0 20px #000;cursor:pointer;border-radius:8px;font-family:monospace;font-size:14px;";
                b.onclick = function () {
                    var w = window.open("", "RoboSafe", "width=400,height=600");
                    var h = `<html><head><title>Robô Equilibrado</title><style>body{background:#111;color:#fff;font-family:sans-serif;padding:10px}textarea{width:100%;height:150px;background:#222;color:#0f0;border:1px solid #555;font-family:monospace}button{width:100%;padding:10px;margin-top:10px;cursor:pointer;font-weight:bold}.g{background:#0d0;color:#000}.r{background:#f33;color:#fff}#l{margin-top:10px;height:300px;overflow-y:auto;background:#000;border:1px solid #444;font-family:monospace;font-size:11px;padding:5px}</style></head><body><h3>⚖️ Robô TUSS (Estável)</h3><p>Cole a lista (8 dígitos):</p><textarea id="t"></textarea><button class="g" onclick="go()">▶ INICIAR</button><button class="r" onclick="stop()">⏹ PARAR</button><div id="l"></div> <script> var r=false,idx=0,lst=[],win=window.opener; function log(m){ var d=document.createElement("div"); d.innerText="["+new Date().toLocaleTimeString()+"] "+m; document.getElementById("l").prepend(d) } function stop(){r=false;log("PARADO.")} function go(){ var v=document.getElementById("t").value; var raw=v.match(/\\b\\d{8}\\b/g); if(!raw)return alert("Sem códigos!"); var counts={}; raw.forEach(x=>counts[x]=(counts[x]||0)+1); var unicos=[...new Set(raw)]; var order=unicos.filter(c=>counts[c]===1).concat(unicos.filter(c=>counts[c]>1)); lst=order.map(k=>({cod:k,qtd:counts[k]})); if(!win||win.closed)return alert("Janela principal fechada!"); r=true;idx=0;log("Iniciando "+lst.length+" itens...");loop() } async function waitEl(sel,timeout=5000){ var t=0; while(t<timeout){ if(!r)throw new Error("Parado"); var el=win.document.querySelector(sel); if(el&&el.offsetParent!==null)return el; await new Promise(x=>setTimeout(x,200)); t+=200 } throw new Error("Timeout: "+sel) } async function pause(ms){await new Promise(x=>setTimeout(x,ms))} async function loop(){ if(!r)return; if(idx>=lst.length){r=false;return alert("FIM!")} var item=lst[idx],c=item.cod,q=item.qtd; log("Item "+(idx+1)+": "+c+(q>1?" (Qtd: "+q+")":"")); try{ log("Aguardando botão..."); await waitEl("input[value='Adicionar Procedimento']",10000); await pause(500); var b1=win.document.querySelector("input[value='Adicionar Procedimento']")||win.document.querySelector("input[name='adicionarProcedimento']"); b1.click(); var fixo=await waitEl("#noreset_txCodTabela"); await pause(500); fixo.value="16"; fixo.dispatchEvent(new win.Event('change',{bubbles:true})); fixo.dispatchEvent(new win.Event('blur',{bubbles:true})); try{win.$(fixo).trigger('change')}catch(e){} var inp=await waitEl("#codItemProcedimento"); await pause(300); inp.value=c; inp.dispatchEvent(new win.Event('change',{bubbles:true})); inp.dispatchEvent(new win.Event('blur',{bubbles:true})); var qtd=win.document.getElementById("procedimento.numQtdSolicitada"); if(qtd){ qtd.value=q; qtd.dispatchEvent(new win.Event('input',{bubbles:true})); qtd.dispatchEvent(new win.Event('change',{bubbles:true})); } await pause(500); var b2=await waitEl(".ui-dialog-buttonpane button:nth-child(2)"); if(!b2.innerText.includes("Salvar")&&!b2.innerText.includes("Confirmar")){ var bs=win.document.querySelectorAll("button"); for(var b of bs)if(b.innerText.includes("Salvar"))b2=b } b2.click(); log("Salvo! Aguardando..."); idx++; await pause(1500); loop() }catch(e){ log("ERRO: "+e.message); r=false; alert("Erro: "+e.message) } } <\/script></body></html>`;
                    w.document.write(h);
                    this.remove()
                };
                document.body.appendChild(b);
            })();
        },
        "POSTAL": () => {
            (function () {
                var l = prompt("Cole os códigos de 8 dígitos:");
                if (!l) return;
                var raw = l.match(/\b\d{8}\b/g);
                if (!raw) return alert("Sem códigos!");
                var counts = {};
                raw.forEach(x => counts[x] = (counts[x] || 0) + 1);
                var unicos = [...new Set(raw)];
                var order = unicos.filter(c => counts[c] === 1).concat(unicos.filter(c => counts[c] > 1));
                var cods = order.map(k => ({ cod: k, qtd: counts[k] }));
                var W = window.open("", "RoboCtrl", "width=350,height=200,top=0,left=0");
                if (!W) return alert("ERRO: POPUP BLOQUEADO! Permita popups no navegador.");
                W.document.write("<body style='font-family:Arial;text-align:center;background:#eee'><h3>🤖 Robô Automático</h3><div id='msg' style='font-size:14px;margin:10px'>Iniciando...</div><button onclick='window.close()' style='padding:10px;background:red;color:white;border:none'>PARAR</button></body>");
                var s = W.document.createElement('script');
                s.textContent = `
                    var idx=0;
                    var lista=${JSON.stringify(cods)};
                    var mainWin=window.opener;
                    var selInp="#FormMain > table > tbody > tr:nth-child(1) > td.frm_cell_field > table > tbody > tr > td:nth-child(1) > input.frm_field_lkp_big";
                    var selQtd="#FormMain > table > tbody > tr:nth-child(3) > td:nth-child(4) > input";
                    var selBtn="body > table > tbody > tr:nth-child(1) > td > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td > div > div.act_box > div > div > div > div:nth-child(2) > a > nobr";
                    // NO BOTÃO DE FINALIZAR ADICIONADO AQUI
                    var selBtnFinalizar="body > table > tbody > tr:nth-child(1) > td > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td > div > div.act_box > div > div > div > div:nth-child(3) > a";
                    
                    setInterval(function(){
                        if(idx>=lista.length){
                            document.getElementById('msg').innerHTML="<b style='color:green'>FIM DO LOTE!</b>";
                            return;
                        }
                        try{
                            var doc=mainWin.document;
                            var inp=doc.querySelector(selInp);
                            if(inp&&inp.value==""){
                                var item=lista[idx];
                                var c=item.cod;
                                var q=item.qtd;
                                var ehUltimo = (idx === lista.length - 1); // VERIFICA SE É O ÚLTIMO
                                
                                document.getElementById('msg').innerText="Lançando: "+c+" ("+(idx+1)+"/"+lista.length+")"+(q>1?" Qtd: "+q:"");
                                inp.focus();
                                inp.value=c;
                                inp.dispatchEvent(new Event('input',{bubbles:true}));
                                inp.dispatchEvent(new Event('change',{bubbles:true}));
                                if(q>1){
                                    var qInp=doc.querySelector(selQtd);
                                    if(qInp){
                                        qInp.value=q;
                                        qInp.dispatchEvent(new Event('input',{bubbles:true}));
                                        qInp.dispatchEvent(new Event('change',{bubbles:true}));
                                    }
                                }
                                setTimeout(function(){
                                    // SE FOR O ÚLTIMO, PEGA O BOTÃO DE FINALIZAR. SE NÃO, PEGA O NORMAL.
                                    var btn = ehUltimo ? doc.querySelector(selBtnFinalizar) : doc.querySelector(selBtn);
                                    if(btn){
                                        btn.click();
                                        idx++;
                                        document.getElementById('msg').innerText = ehUltimo ? "Finalizando lote..." : "Salvando... aguarde.";
                                    }else{
                                        document.getElementById('msg').innerText="ERRO: Botão sumiu!";
                                    }
                                },800);
                            }
                        }catch(e){
                            document.getElementById('msg').innerText="Aguardando página...";
                        }
                    },1500);
                `;
                W.document.body.appendChild(s);
            })();
        },
        "AMIL": () => {
            (function () {
                var d = document.createElement('div');
                d.style.cssText = 'position:fixed;top:10px;right:10px;width:300px;background:#fff;border:3px solid #d63384;padding:10px;z-index:999999;font-family:Arial;box-shadow:0 0 15px rgba(0,0,0,0.5)';
                d.innerHTML = '<h3 style="margin:0;color:#d63384">Lançador Amil (Rápido)</h3><p style="font-size:12px;margin:5px 0">Cola > Checa rápido o nome > Salva.</p><textarea id="tc" style="width:100%;height:100px" placeholder="Cole os códigos de 8 dígitos..."></textarea><button id="bi" style="margin-top:5px;width:100%;padding:10px;background:#28a745;color:white;cursor:pointer;font-weight:bold;border:none">INICIAR</button><button onclick="this.parentElement.remove()" style="margin-top:5px;width:100%;cursor:pointer">FECHAR</button><div id="lg" style="font-size:11px;margin-top:5px;color:red;font-weight:bold"></div>';
                document.body.appendChild(d);
                
                document.getElementById('bi').onclick = async () => {
                    var t = document.getElementById('tc').value;
                    var raw = t.match(/\b\d{8}\b/g);
                    var log = document.getElementById('lg');
                    
                    if (!raw || raw.length == 0) {
                        alert('Nenhum código de 8 dígitos encontrado!');
                        return;
                    }
                    
                    document.getElementById('bi').disabled = true;
                    var counts = {};
                    raw.forEach(x => counts[x] = (counts[x] || 0) + 1);
                    var unicos = [...new Set(raw)];
                    var order = unicos.filter(c => counts[c] === 1).concat(unicos.filter(c => counts[c] > 1));
                    var l = order.map(k => ({ cod: k, qtd: counts[k] }));
                    
                    for (var i = 0; i < l.length; i++) {
                        var item = l[i];
                        var c = item.cod;
                        var q = item.qtd;
                        
                        var seletorInputAmil = '#inclusao-consulta-pedido > section > as-tipo-pedido-sadt > div.procedimentos-servicos.card-config > as-procedimento-servico > div > ul > li > as-procedimento-autocomplete > div > div > input';
                        
                        let nomeEncontrado = false;
                        let tentativasDeReinsercao = 0;
                        while (!nomeEncontrado) {
                            var inp = document.querySelector(seletorInputAmil);
                            if (!inp) { inp = document.querySelector('#inclusao-consulta-pedido input[type="text"]'); }
                            if (!inp) { alert('ERRO: Campo INPUT não encontrado!'); break; }
                            log.innerText = 'Processando: ' + c + ' (' + (i + 1) + '/' + l.length + ')' + (q > 1 ? ' Qtd: ' + q : '') + (tentativasDeReinsercao > 0 ? ` [Re-tentativa: ${tentativasDeReinsercao}]` : '');
                            inp.focus();
                            inp.value = '';
                            inp.dispatchEvent(new Event('input', { bubbles: true }));
                            await new Promise(r => setTimeout(r, 100));
                            inp.value = c;
                            inp.dispatchEvent(new Event('input', { bubbles: true }));
                            inp.dispatchEvent(new Event('change', { bubbles: true }));
                            var enterEvent = { bubbles: true, cancelable: true, key: 'Enter', code: 'Enter', keyCode: 13, which: 13, charCode: 13, view: window };
                            inp.dispatchEvent(new KeyboardEvent('keydown', enterEvent));
                            inp.dispatchEvent(new KeyboardEvent('keypress', enterEvent));
                            inp.dispatchEvent(new KeyboardEvent('keyup', enterEvent));
                            log.innerText = 'Aguardando o sistema preencher o nome do exame...';
                            await new Promise(resolve => {
                                let tentativasEspera = 0;
                                let check = setInterval(() => {
                                    let campoAtual = document.querySelector(seletorInputAmil) || document.querySelector('#inclusao-consulta-pedido input[type="text"]');
                                    
                                    if (campoAtual && campoAtual.value && campoAtual.value !== c && campoAtual.value.length > c.length) {
                                        clearInterval(check);
                                        nomeEncontrado = true;
                                        resolve();
                                    } else {
                                        tentativasEspera++;
                                        if (tentativasEspera > 100) {
                                             clearInterval(check);
                                            resolve();
                                         }
                                    }
                                }, 50);
                            });
                            if (!nomeEncontrado) {
                                tentativasDeReinsercao++;
                                log.innerText = `Limpando e re-inserindo código ${c}...`;
                                await new Promise(r => setTimeout(r, 500)); 
                            }
                        }
                        
                        log.innerText = 'Nome carregado! Processando: ' + c + ' (' + (i + 1) + '/' + l.length + ')' + (q > 1 ? ' Qtd: ' + q : '');
                        
                        if (q > 1) {
                            var qInp = document.querySelector('#quantidade-procedimento');
                            if (qInp) {
                                qInp.focus();
                                qInp.value = q;
                                qInp.dispatchEvent(new Event('input', { bubbles: true }));
                                qInp.dispatchEvent(new Event('change', { bubbles: true }));
                                await new Promise(r => setTimeout(r, 100));
                            }
                        }
                        
                        var btn = document.querySelector('#inclusao-consulta-pedido > section > as-tipo-pedido-sadt > div.procedimentos-servicos.card-config > as-procedimento-servico > div > div > button');
                        if (btn) { btn.click(); } else { log.innerText = 'Botão salvar não apareceu para ' + c; }
                        await new Promise(r => setTimeout(r, 400));
                    }
                    
                    document.getElementById('bi').disabled = false;
                    alert('Finalizado!');
                };
            })();
        },
        "INAS": () => {
            (async () => {
                if (document.getElementById('g-modal-inas')) return;
                const style = document.createElement('style');
                style.innerHTML = '.g-modal{position:fixed;top:20px;right:20px;width:300px;background:#fff;z-index:99999;box-shadow:0 10px 25px rgba(0,0,0,0.2);padding:15px;border-radius:8px;font-family:sans-serif;border-top:5px solid #2ecc71}.g-modal h3{margin:0 0 5px;font-size:16px;color:#333}.g-modal textarea{width:100%;height:100px;margin-bottom:5px;border:1px solid #ddd;border-radius:4px;padding:5px;box-sizing:border-box;font-size:12px;resize:none}.g-modal .count-tag{font-size:11px;color:#666;margin-bottom:10px;display:block}.g-modal button{width:100%;padding:10px;border:none;color:white;font-weight:700;border-radius:4px;cursor:pointer;margin-bottom:5px}.g-modal button:disabled{background:#ccc;cursor:not-allowed}';
                document.head.appendChild(style);
                
                const div = document.createElement('div');
                div.id = 'g-modal-inas';
                div.className = 'g-modal';
                div.innerHTML = `
                    <h3>🚀 Auto Preenchimento INAS</h3>
                    <span class="count-tag" id="g-count">Únicos: 0 | Total: 0</span>
                    <textarea id="g-codes" placeholder="Cole os códigos de 8 dígitos aqui..."></textarea>
                    <div style="display:flex; gap:5px;">
                        <button id="g-start" style="background:#2ecc71;">▶ Iniciar</button>
                        <button id="g-stop" style="background:#e74c3c; display:none;">⏹ Parar</button>
                    </div>
                    <button id="g-close" style="background:#7f8c8d;">❌ Fechar</button>
                    <div id="g-status" style="margin-top:10px;font-size:11px;color:#2ecc71;font-weight:bold"></div>
                `;
                document.body.appendChild(div);
                const btn = document.getElementById('g-start');
                const btnStop = document.getElementById('g-stop');
                const btnClose = document.getElementById('g-close');
                const status = document.getElementById('g-status');
                const txt = document.getElementById('g-codes');
                const countDisp = document.getElementById('g-count');
                let isRunning = false;
                
                btnClose.onclick = () => { isRunning = false; div.remove(); };
                btnStop.onclick = () => { 
                    isRunning = false; 
                    status.innerText = '🛑 Processo parado!'; 
                    btnStop.style.display = 'none'; 
                    btn.style.display = 'block'; 
                    btn.disabled = false; 
                    txt.disabled = false; 
                    setTimeout(() => div.remove(), 1500); 
                };
                
                const getCodes = () => {
                    const matches = [...txt.value.matchAll(/\b\d{8}\b/g)].map(m => m[0]);
                    const counts = {};
                    for (const code of matches) { counts[code] = (counts[code] || 0) + 1; }
                    const unicos = [...new Set(matches)];
                    const order = unicos.filter(c => counts[c] === 1).concat(unicos.filter(c => counts[c] > 1));
                    return order.map(code => ({ code, qty: counts[code] }));
                };
                
                txt.oninput = () => {
                    const codes = getCodes();
                    const total = codes.reduce((a, c) => a + c.qty, 0);
                    countDisp.innerText = `Únicos: ${codes.length} | Total: ${total}`;
                };
                
                btn.onclick = async () => {
                    let codes = getCodes();
                    if (!codes.length) return alert('Nenhum código encontrado!');
                    
                    isRunning = true;
                    btn.style.display = 'none';
                    btnStop.style.display = 'block';
                    txt.disabled = true;
                    const C = { ADD: 'Adicionar', TAB: '22 - Procedimentos e eventos em saúde' };
                    const wait = ms => new Promise(r => setTimeout(r, ms));
                    
                    const click = el => {
                        if (!el) return !1;
                        try {
                            el.scrollIntoView({ block: 'center' });
                            el.focus?.();
                            el.dispatchEvent(new MouseEvent('mousedown', { bubbles: !0 }));
                            el.dispatchEvent(new MouseEvent('mouseup', { bubbles: !0 }));
                            el.dispatchEvent(new MouseEvent('click', { bubbles: !0 }));
                            return !0;
                        } catch (e) { return !1; }
                    };
                    
                    const dom = r => {
                        let l = [];
                        r.querySelectorAll('*').forEach(x => {
                            l.push(x);
                            if (x.shadowRoot) l = l.concat(dom(x.shadowRoot));
                        });
                        return l;
                    };
                    
                    const getInput = () => {
                        const i = document.querySelectorAll('input[id^="react-select-"][id$="-input"]');
                        const v = Array.from(i).filter(e => e.getBoundingClientRect().width > 0);
                        return v.length ? v[v.length - 1] : null;
                    };
                    
                    const getLupa = ref => {
                        if (!ref) return null;
                        let f = ref.closest('form');
                        if (f) {
                            let s = f.querySelector('button[type="submit"]');
                            if (s) return s;
                            let bs = f.querySelectorAll('button');
                            for (let b of bs) if (b.querySelector('svg')) return b;
                        }
                        const vs = Array.from(document.querySelectorAll('svg')).reverse().find(s => s.getBoundingClientRect().width > 0 && s.closest('button'));
                        return vs ? vs.closest('button') : null;
                    };
                    
                    const getAdd = () => {
                        const es = Array.from(document.querySelectorAll('button,div[role="button"],span'));
                        return es.find(e => e.textContent && e.textContent.toLowerCase().trim() === C.ADD.toLowerCase().trim() && e.getBoundingClientRect().width > 0);
                    };
                    
                    const getCombo = () => {
                        const c = dom(document).filter(e => e.getAttribute?.('role') === 'combobox' && e.offsetParent);
                        return c.length < 17 ? c[c.length - 1] : c[16];
                    };
                    
                    const getTab = () => dom(document).find(e => e.textContent?.trim() === C.TAB && e.getBoundingClientRect().height > 0);
                    
                    const ensureTab = async () => {
                        let c = getCombo();
                        if (c) click(c);
                        for (let k = 0; k < 20; k++) {
                            if (!isRunning) return !1;
                            let o = getTab();
                            if (o) { click(o); return !0; }
                            await wait(30);
                        }
                        c = getCombo();
                        if (c) click(c);
                        for (let k = 0; k < 20; k++) {
                            if (!isRunning) return !1;
                            let o = getTab();
                            if (o) { click(o); return !0; }
                            await wait(30);
                        }
                        return !1;
                    };
                    
                    const fill = async (cod, qty) => {
                        const inp = getInput();
                        if (!inp) return !1;
                        click(inp);
                        await wait(100);
                        const s = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
                        s.call(inp, cod);
                        inp.dispatchEvent(new InputEvent('input', { bubbles: !0, inputType: 'insertFromPaste', data: cod }));
                        let menuCarregou = false;
                        for (let w = 0; w < 50; w++) {
                            if (!isRunning) return !1;
                            let opcoesDrop = document.querySelectorAll('[id^="react-select-"][id*="-option"]');
                            if (opcoesDrop.length > 0) {
                                let achou = Array.from(opcoesDrop).find(o => o.innerText.includes(cod));
                                if (achou) { menuCarregou = true; break; }
                            }
                            await wait(200);
                        }
                        if (!menuCarregou) { await wait(1000); } else { await wait(300); }
                        inp.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: !0 }));
                        await wait(300);
                        const lp = getLupa(inp);
                        if (lp) {
                            for (let q = 0; q < qty; q++) {
                                if (!isRunning) return !1;
                                click(lp);
                                await wait(250);
                            }
                        }
                        await wait(100);
                        const ad = getAdd() || document.querySelector('[class="button-add"]');
                        if (ad) click(ad);
                        return !0;
                    };
                    
                    const runProcess = async (list) => {
                        for (let i = 0; i < list.length; i++) {
                            if (!isRunning) return;
                            const item = list[i];
                            status.innerText = `⏳ Inserindo ${i + 1}/${list.length}: ${item.code} (Qtd: ${item.qty})`;
                            let ok = !1;
                            for (let t = 0; t < 3; t++) {
                                if (!isRunning) return;
                                if (await ensureTab()) { ok = !0; break; }
                                await wait(100);
                            }
                            if (ok) {
                                await wait(150);
                                await fill(item.code, item.qty);
                                await wait(1500);
                            }
                        }
                    };
                    await runProcess(codes);
                    
                    if (!isRunning) return;
                    status.innerText = '🔍 Conferindo tabela e quantidades...';
                    await wait(1000);
                    let allTables = Array.from(document.querySelectorAll('table'));
                    let table = allTables.find(t => (codes.length > 0 && t.innerText.includes(codes[0].code)) || t.offsetParent !== null);
                    let missing = [];
                    if (table) {
                        let rows = Array.from(table.querySelectorAll('tbody tr'));
                        for (let row of rows) {
                            if (!isRunning) return;
                            let txt = row.innerText;
                            let codeObj = codes.find(c => txt.includes(c.code));
                            
                            if (codeObj) {
                                let tds = Array.from(row.querySelectorAll('td'));
                                let nums = tds.map(td => td.innerText.trim()).filter(t => /^\d+$/.test(t) && t.length < 5);
                                let expectedQtyStr = codeObj.qty.toString();
                                if (nums.length > 0 && !nums.includes(expectedQtyStr)) {
                                    status.innerText = `🗑️ Qtd incorreta em ${codeObj.code}. Removendo para re-inserir...`;
                                    let trash = row.querySelector('td.last-column svg, td.last-column > div > div > div > svg, td:last-child svg');
                                    if (trash) {
                                        click(trash);
                                        await wait(1000); 
                                    }
                                }
                            }
                        }
                    }
                    if (!isRunning) return;
                    allTables = Array.from(document.querySelectorAll('table'));
                    table = allTables.find(t => (codes.length > 0 && t.innerText.includes(codes[0].code)) || t.offsetParent !== null);
                    let tableText = table ? table.innerText : '';
                    missing = codes.filter(c => !tableText.includes(c.code));
                    if (missing.length > 0) {
                        status.innerText = `⚠️ Inserindo ${missing.length} itens ausentes/corrigidos...`;
                        await wait(1000);
                        await runProcess(missing);
                    }
                    if (!isRunning) return;
                    status.innerText = '✅ Fim! Tudo conferido.';
                    await wait(2000);
                    
                    if (isRunning) div.remove();
                };
            })();
        },
        "TRF": () => {
            (function () {
                var l = prompt("Cole os códigos de 8 dígitos:");
                if (!l) return;
                var cods = l.match(/\b\d{8}\b/g);
                if (!cods) return alert("Nenhum código!");
                var counts = {};
                cods.forEach(function (c) {
                    counts[c] = (counts[c] || 0) + 1;
                });
                var unicos = [...new Set(cods)];
                var uniqueCods = unicos.filter(function (c) {
                    return counts[c] === 1;
                }).concat(unicos.filter(function (c) {
                    return counts[c] > 1;
                }));
                
                var W = window.open("", "RoboExames", "width=350,height=280");
                if (!W) return alert("ERRO: POPUP BLOQUEADO! Permita popups no navegador.");
                
                W.document.write("<body style='font-family:sans-serif;text-align:center;background:#f0f7ff;padding:20px'><h3>🤖 Robô TRF (Sincronizado)</h3><div id='msg' style='font-size:14px;color:#0056b3;font-weight:bold;'>Iniciando...</div><div id='status' style='font-size:12px;color:#666;margin-top:5px'></div><button onclick='window.close()' style='margin-top:15px;padding:8px;cursor:pointer;background:#ff4757;color:white;border:none;border-radius:5px;font-weight:bold;'>PARAR</button></body>");
                
                var s = W.document.createElement('script');
                s.textContent = `
                    var idx = 0;
                    var lista = ${JSON.stringify(uniqueCods)};
                    var qtds = ${JSON.stringify(counts)};
                    var msg = document.getElementById('msg');
                    var st = document.getElementById('status');
                    var selCod = "#FormMain > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr > td:nth-child(1) > input.frm_field_lkp";
                    var sel22 = "#FormMain > table > tbody > tr:nth-child(1) > td:nth-child(4) > table > tbody > tr > td:nth-child(1) > input.frm_field_lkp";
                    var selFrase = "#FormMain > table > tbody > tr:nth-child(2) > td:nth-child(4) > table > tbody > tr > td:nth-child(1) > input.frm_field_lkp";
                    var selQtd = "#FormMain > table > tbody > tr:nth-child(3) > td:nth-child(2) > input";
                    var selBtnSalvar = "body > table > tbody > tr:nth-child(1) > td > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td > div > div.act_box > div > div > div > div:nth-child(2) > a";
                    var selBtnFinalizar = "body > table > tbody > tr:nth-child(1) > td > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td > div > div.act_box > div > div > div > div:nth-child(3) > a";
                    var selErro = "#tsk_toolbar";
                    function proximoPasso() {
                        if(idx >= lista.length) {
                            msg.innerHTML = "<b style='color:green'>✅ TUDO FINALIZADO!</b>";
                            st.innerText = "";
                            return;
                        }
                        
                        try {
                            var doc = window.opener.document;
                            var inp = doc.querySelector(selCod);
                            var erro = doc.querySelector(selErro);
                            var ehUltimo = (idx === lista.length - 1);
                            
                            if (erro && erro.innerText.includes("Verifique")) {
                                msg.innerText = "⚠️ Corrigindo erro no " + lista[idx];
                                var f = doc.querySelector(selFrase);
                                if(f) {
                                    f.value = "Exame";
                                    f.dispatchEvent(new Event('input', {bubbles:true}));
                                    f.dispatchEvent(new Event('change', {bubbles:true}));
                                    
                                    erro.innerText = "AGUARDANDO SISTEMA...";
                                     
                                    setTimeout(function(){
                                        var btn = ehUltimo ? doc.querySelector(selBtnFinalizar) : doc.querySelector(selBtnSalvar);
                                        if(btn) btn.click();
                                        
                                        var checarVazio = setInterval(function() {
                                            try {
                                                var docAtual = window.opener.document;
                                                var inpAtual = docAtual.querySelector(selCod);
                                                
                                                if (ehUltimo || (inpAtual && inpAtual.value === "")) {
                                                    clearInterval(checarVazio);
                                                    idx++;
                                                    setTimeout(proximoPasso, 300); 
                                                }
                                            } catch(e) {}
                                        }, 250);
                                    }, 500);
                                }
                                return; 
                            }
                            
                            var codAtual = lista[idx];
                            var qtdAtual = qtds[codAtual];
                            
                            if (!inp || inp.value !== "") {
                                setTimeout(proximoPasso, 500);
                                return;
                            }
                            
                            msg.innerText = "🚀 Lançando: " + codAtual + " (" + qtdAtual + "x)";
                            st.innerText = (idx + 1) + " / " + lista.length;
                            inp.value = codAtual;
                            inp.dispatchEvent(new Event('input', {bubbles:true}));
                            inp.dispatchEvent(new Event('change', {bubbles:true}));
                            
                            var f22 = doc.querySelector(sel22);
                            if(f22) {
                                f22.value = "22";
                                f22.dispatchEvent(new Event('input', {bubbles:true}));
                                f22.dispatchEvent(new Event('change', {bubbles:true}));
                            }
                            
                            var fFrase = doc.querySelector(selFrase);
                            if(fFrase) {
                                fFrase.value = "Exames-Patologia Clínica";
                                fFrase.dispatchEvent(new Event('input', {bubbles:true}));
                                fFrase.dispatchEvent(new Event('change', {bubbles:true}));
                            }
                            
                            var inpQtd = doc.querySelector(selQtd);
                            if(inpQtd) {
                                inpQtd.value = qtdAtual;
                                inpQtd.dispatchEvent(new Event('input', {bubbles:true}));
                                inpQtd.dispatchEvent(new Event('change', {bubbles:true}));
                            }
                            
                            setTimeout(function(){
                                var btn = ehUltimo ? doc.querySelector(selBtnFinalizar) : doc.querySelector(selBtnSalvar);
                                if(btn) btn.click();
                                
                                var checarVazio = setInterval(function() {
                                    try {
                                        var docAtual = window.opener.document;
                                        var erroAtual = docAtual.querySelector(selErro);
                                        
                                        if (erroAtual && erroAtual.innerText.includes("Verifique")) {
                                            clearInterval(checarVazio);
                                            setTimeout(proximoPasso, 300);
                                            return;
                                        }
                                        
                                        var inpAtual = docAtual.querySelector(selCod);
                                        if (ehUltimo || (inpAtual && inpAtual.value === "")) {
                                            clearInterval(checarVazio);
                                            idx++;
                                            setTimeout(proximoPasso, 300); 
                                        }
                                    } catch(erroInterno) {}
                                }, 250);
                            }, 500);
                        } catch(e) {
                            setTimeout(proximoPasso, 1000);
                        }
                    }
                    
                    setTimeout(proximoPasso, 1000);
                `;
                W.document.body.appendChild(s);
            })();
        },
        "TRT": () => {
            (function () {
                if (document.getElementById('g-painel')) return;
                const d = document.createElement('div');
                d.id = 'g-painel';
                d.style.cssText = 'position:fixed;top:10px;right:10px;width:300px;background:#2d3436;color:#fff;padding:15px;z-index:999999;border-radius:8px;font-family:Arial;box-shadow:0 4px 10px rgba(0,0,0,0.5);border:3px solid #0984e3';
                d.innerHTML = `
                    <h3 style="margin:0 0 10px;color:#74b9ff">🤖 Inserir Códigos TRT</h3>
                    <textarea id="g-txt" style="width:100%;height:80px;color:#000;border-radius:4px;padding:5px;" placeholder="Cole os códigos aqui..."></textarea>
                    <button id="g-btn" style="width:100%;padding:10px;background:#0984e3;color:#fff;border:none;border-radius:5px;cursor:pointer;margin-top:5px;font-weight:bold">INICIAR ▶</button>
                    <div id="g-status" style="margin-top:10px;font-size:12px;color:#dfe6e9">Aguardando...</div>
                    <button onclick="this.parentElement.remove()" style="width:100%;padding:5px;margin-top:10px;background:#d63031;color:#fff;border:none;border-radius:5px;cursor:pointer;font-weight:bold;">❌ FECHAR</button>
                `;
                document.body.appendChild(d);
                
                const wait = ms => new Promise(r => setTimeout(r, ms));
                
                document.getElementById('g-btn').onclick = async () => {
                    const t = document.getElementById('g-txt').value;
                    let raw = t.match(/\b\d{8}\b/g) || [];
                    if (!raw.length) return alert('Nenhum código de 8 dígitos encontrado!');
                    
                    var counts = {};
                    raw.forEach(x => counts[x] = (counts[x] || 0) + 1);
                    var unicos = [...new Set(raw)];
                    var order = unicos.filter(c => counts[c] === 1).concat(unicos.filter(c => counts[c] > 1));
                    var codigos = order.map(k => ({ cod: k, qtd: counts[k] }));
                    const status = document.getElementById('g-status');
                    document.getElementById('g-btn').disabled = true;
                    const setVal = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
                    
                    for (let i = 0; i < codigos.length; i++) {
                        let item = codigos[i];
                        let c = item.cod;
                        let q = item.qtd;
                        
                        status.innerText = `Processando ${i + 1}/${codigos.length}: ${c} (Qtd: ${q})`;
                        
                        let inp = document.querySelector('#termoCodigoSolicitado');
                        if (inp) {
                            inp.focus();
                            setVal.call(inp, '');
                            inp.dispatchEvent(new Event('input', { bubbles: true }));
                            await wait(300);
                            setVal.call(inp, c);
                            inp.dispatchEvent(new Event('input', { bubbles: true }));
                            inp.dispatchEvent(new Event('change', { bubbles: true }));
                            await wait(500);
                        }
                        
                        if (q > 1) {
                            let inpQtd = document.querySelector('#termoQtdSolicitada');
                            if (inpQtd) {
                                inpQtd.focus();
                                setVal.call(inpQtd, q);
                                inpQtd.dispatchEvent(new Event('input', { bubbles: true }));
                                inpQtd.dispatchEvent(new Event('change', { bubbles: true }));
                                await wait(300);
                            }
                        }
                        let inpng = document.querySelector('#termoSolicitado > div > div > div.ng-input > input[type=text]');
                        if (inpng) {
                            inpng.click();
                            inpng.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
                            await wait(300);
                            inpng.click();
                            inpng.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
                            await wait(300);
                            inpng.click();
                            inpng.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
                            await wait(500);
                            inpng.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13, bubbles: true }));
                        }
                        
                        await wait(1000);
                        
                        let btn = document.querySelector('app-autorizacao-modal app-aut-honorarios fieldset main form section button');
                        if (btn) {
                            btn.click();
                        } else {
                            console.log('Botão adicionar não encontrado.');
                        }
                    }
                    status.innerText = '✅ Concluído!';
                    document.getElementById('g-btn').disabled = false;
                };
            })();
        },
        "AFFEGO": () => {
            (async function () {
                var l = prompt("Cole os códigos de 8 dígitos aqui:");
                if (!l) return;
                var raw = l.match(/\b\d{8}\b/g);
                if (!raw) return alert("Sem códigos!");
                var counts = {};
                raw.forEach(x => counts[x] = (counts[x] || 0) + 1);
                var unicos = [...new Set(raw)];
                var order = unicos.filter(c => counts[c] === 1).concat(unicos.filter(c => counts[c] > 1));
                
                const wait = ms => new Promise(r => setTimeout(r, ms));
                let idTela = 0; 
                for (let i = 0; i < order.length; i++) {
                    if (idTela === 5) {
                        idTela++; // Pula o campo 5
                    }
                    let cod = order[i];
                    let qtd = counts[cod];
                    let idCod = "#procedimento" + idTela;
                    let idDesc = "#desc_procedimento" + idTela;
                    let idQtd = "#quantidade" + idTela;
                    let inpt = document.querySelector(idCod);
                    
                    if (!inpt) {
                        let btnAdd = document.querySelector("#adicionaPROCEDIMENTO");
                        if (!btnAdd) {
                            let tags = Array.from(document.querySelectorAll('a, button, span, div'));
                            btnAdd = tags.find(e => e.textContent && e.textContent.includes('Adicionar Procedimento'));
                        }
                        
                        if (btnAdd) {
                            btnAdd.scrollIntoView({ block: 'center' });
                            btnAdd.click();
                            
                            // Espera agressiva (rápida)
                            for(let w = 0; w < 40; w++) {
                                 await wait(100);
                                inpt = document.querySelector(idCod);
                                if (inpt) break;
                            }
                            await wait(200); // tempo mínimo pro JS da tela plugar os eventos
                        }
                    }
                    if (inpt) {
                        inpt.scrollIntoView({ block: 'center' });
                        inpt.focus();
                        inpt.value = cod;
                        inpt.dispatchEvent(new Event('input', { bubbles: true }));
                        inpt.dispatchEvent(new Event('change', { bubbles: true }));
                        
                        inpt.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', keyCode: 9, bubbles: true }));
                        inpt.blur();
                        inpt.dispatchEvent(new Event('focusout', { bubbles: true }));
                        await wait(300); // Reduzido
                        // PREENCHE A QUANTIDADE SE FOR MAIOR QUE 1
                        if (qtd > 1) {
                            let fQtd = document.querySelector(idQtd);
                            if (fQtd) {
                                fQtd.focus();
                                fQtd.value = qtd;
                                fQtd.dispatchEvent(new Event('input', { bubbles: true }));
                                fQtd.dispatchEvent(new Event('change', { bubbles: true }));
                                await wait(100);
                            }
                        }
                        let desc = document.querySelector(idDesc); 
                        if(desc) {
                            desc.focus();
                            desc.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
                            desc.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
                            desc.click();
                            
                            // Polling rápido para o auto-complete
                            for(let t = 0; t < 40; t++) {
                                let txt = desc.value || desc.innerText || desc.textContent || "";
                                if(txt.trim() !== "") break;
                                 await wait(100);
                            }
                        }
                        
                        await wait(200); // Reduzido
                        // Clique preventivo para a próxima linha
                        if (idTela >= 4 && i < order.length - 1) {
                            let btnAdd = document.querySelector("#adicionaPROCEDIMENTO");
                            if (!btnAdd) {
                                let tags = Array.from(document.querySelectorAll('a, button, span, div'));
                                btnAdd = tags.find(e => e.textContent && e.textContent.includes('Adicionar Procedimento'));
                            }
                            if (btnAdd) {
                                btnAdd.click();
                                await wait(300); 
                            }
                        }
                        idTela++; 
                    } else {
                         alert("Erro: O campo " + idCod + " não apareceu. Parei aqui.");
                         break;
                    }
                }
                alert("Finalizado! Foram inseridos " + order.length + " códigos únicos na AFFEGO.");
            })();
        },
        "MPLAN_10_DIGITOS": () => {
        (function () {
            if (document.getElementById('g-painel-mplan10')) return;
            const d = document.createElement('div');
            d.id = 'g-painel-mplan10';
            d.style.cssText = 'position:fixed;top:10px;right:10px;width:300px;background:#2d3436;color:#fff;padding:15px;z-index:999999;border-radius:8px;font-family:Arial;box-shadow:0 4px 10px rgba(0,0,0,0.5);border:3px solid #e67e22'; // Borda laranja para diferenciar
            d.innerHTML = `
                <h3 style="margin:0 0 10px;color:#f39c12">🤖 Códigos de 10 Dígitos</h3>
                <p style="margin:0 0 10px;font-size:11px;color:#bdc3c7">Insira os códigos (Filtra apenas sequências de 10 números).</p>
                <textarea id="g-txt-mplan10" style="width:100%;height:80px;color:#000;border-radius:4px;padding:5px;" placeholder="Cole os códigos de 10 dígitos aqui..."></textarea>
                <button id="g-btn-mplan10" style="width:100%;padding:10px;background:#e67e22;color:#fff;border:none;border-radius:5px;cursor:pointer;margin-top:5px;font-weight:bold">INICIAR ▶</button>
                <div id="g-status-mplan10" style="margin-top:10px;font-size:12px;color:#dfe6e9">Aguardando...</div>
                <button onclick="this.parentElement.remove()" style="width:100%;padding:5px;margin-top:10px;background:#d63031;color:#fff;border:none;border-radius:5px;cursor:pointer;font-weight:bold;">❌ FECHAR</button>
            `;
            document.body.appendChild(d);
            const wait = ms => new Promise(r => setTimeout(r, ms));
            
            document.getElementById('g-btn-mplan10').onclick = async () => {
                const t = document.getElementById('g-txt-mplan10').value;
                
                // Regex ajustada: Captura termos que possuem EXATAMENTE 10 dígitos numéricos (\b\d{10}\b)
                let todosCods = t.match(/\b\d{10}\b/g) || [];
                if (!todosCods.length) return alert('Nenhum código de 10 dígitos foi encontrado no texto colado!');
                
                // Agrupa e conta as quantidades de códigos repetidos
                const contagem = {};
                todosCods.forEach(c => { contagem[c] = (contagem[c] || 0) + 1; });
                const itensUnicos = Object.keys(contagem).map(c => ({ codigo: c, qtd: contagem[c] }));
                
                const status = document.getElementById('g-status-mplan10');
                document.getElementById('g-btn-mplan10').disabled = true;
                const setVal = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
                
                for (let i = 0; i < itensUnicos.length; i++) {
                    let item = itensUnicos[i];
                    status.innerText = `Processando ${i + 1}/${itensUnicos.length}: ${item.codigo} (Qtd: ${item.qtd})`;
                    
                    // Captura todos os inputs de texto visíveis da página
                    let inputs = Array.from(document.querySelectorAll('input[type="text"]')).filter(el => {
                        return el.getBoundingClientRect().width > 0 && el.id !== 'g-txt-mplan10';
                    });
                    
                    // Identifica os inputs por palavras-chave ou por exclusão (baseado no layout da tela do Mplan)
                    let inpCodigo = inputs.find(el => el.placeholder.includes('Cód') || el.name.includes('cod') || el.id.includes('cod'));
                    if (!inpCodigo && inputs.length >= 2) {
                        inpCodigo = inputs[inputs.length - 4] || inputs[inputs.length - 3];
                    }
                    
                    let inpQtd = inputs.find(el => el.name.includes('qtd') || el.name.includes('quant') || el.id.includes('qtd') || el.id.includes('quant'));
                    if (!inpQtd && inputs.length >= 1) {
                        inpQtd = inputs[inputs.length - 1]; // Geralmente o último campo preenchível da linha é a quantidade
                    }
                    
                    // 1. Digita o Código do Procedimento
                    if (inpCodigo) {
                        inpCodigo.focus();
                        setVal.call(inpCodigo, '');
                        inpCodigo.dispatchEvent(new Event('input', { bubbles: true }));
                        await wait(200);
                        
                        setVal.call(inpCodigo, item.codigo);
                        inpCodigo.dispatchEvent(new Event('input', { bubbles: true }));
                        inpCodigo.dispatchEvent(new Event('change', { bubbles: true }));
                        inpCodigo.dispatchEvent(new Event('blur', { bubbles: true }));
                        
                        // Simula pressionar "Tab" para forçar o sistema a buscar a descrição do item
                        inpCodigo.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', keyCode: 9, bubbles: true }));
                        await wait(1500); // Pausa para o Ajax do site processar o código de 10 dígitos
                    }
                    
                    // 2. Digita a Quantidade Calculada
                    if (inpQtd) {
                        inpQtd.focus();
                        setVal.call(inpQtd, '');
                        inpQtd.dispatchEvent(new Event('input', { bubbles: true }));
                        await wait(200);
                        
                        setVal.call(inpQtd, item.qtd.toString());
                        inpQtd.dispatchEvent(new Event('input', { bubbles: true }));
                        inpQtd.dispatchEvent(new Event('change', { bubbles: true }));
                        await wait(400);
                    }
                    
                    // 3. Procura e Clica no Botão Verde de Adicionar (+)
                    let btn = document.querySelector('.fa-plus, .fa-plus-circle, button[class*="success" i]');
                    if (!btn) {
                        let elementos = Array.from(document.querySelectorAll('button, a, span, img')).filter(el => el.getBoundingClientRect().width > 0);
                        btn = elementos.find(el => el.innerHTML.includes('plus') || el.className.includes('add') || el.className.includes('plus'));
                    }
                    
                    if (btn) {
                        btn.click();
                        let icone = btn.querySelector('i');
                        if (icone) icone.click();
                    } else {
                        // Clique de emergência por proximidade visual ao input de quantidade
                        if (inpQtd && inpQtd.nextElementSibling) {
                            inpQtd.nextElementSibling.click();
                        }
                    }
                    
                    await wait(2000); // Tempo de espera para o sistema computar a linha na tabela
                }
                
                status.innerText = '✅ Concluído!';
                document.getElementById('g-btn-mplan10').disabled = false;
            };
        })();
    },
    };
    // ── FICHA DE CADA CONVÊNIO (ícone, cor, descrição, modo de entrega) ──
    const infoRobos = {
        "AFFEGO":           { icone: "🛠️", cor: "#378ADD", desc: "Automação para Fisco e Convênios Affego",        modo: "prompt" },
        "AMIL":             { icone: "🩺", cor: "#2ecc71", desc: "Automação para Rede Credenciada Amil",           modo: "painel", txt: "tc",            btn: "bi" },
        "INAS":             { icone: "🤝", cor: "#d9a520", desc: "Automação para Convênios Inas GDF",              modo: "painel", txt: "g-codes",       btn: "g-start" },
        "MEDSENIOR/UN SEG": { icone: "🏥", cor: "#27ae60", desc: "Automação para Planos de Saúde",                 modo: "painel", txt: "txtInput",      btn: "btnRun" },
        "MPLAN_10_DIGITOS": { icone: "🔟", cor: "#9b59b6", desc: "Automação para Convênios MPlan (10 dígitos)",    modo: "painel", txt: "g-txt-mplan10", btn: "g-btn-mplan10" },
        "PLANASSISTE MPU":  { icone: "📝", cor: "#2d7dff", desc: "Automação para Planilhas do MPU",                modo: "painel", txt: "rc",            btn: "rb" },
        "PLENUM":           { icone: "⚖️", cor: "#8e44ad", desc: "Automação para Convênios de Advocacia e Justiça",modo: "painel", txt: "plenum-txt",    btn: "plenum-btn" },
        "PM/STJ":           { icone: "🛡️", cor: "#5dade2", desc: "Automação para Segurança e Justiça Superior",    modo: "prompt" },
        "POSTAL":           { icone: "✉️", cor: "#d4ac0d", desc: "Automação para Logística Postal",                modo: "prompt" },
        "SULAMERICA":       { icone: "🌎", cor: "#e74c3c", desc: "Automação para Convênios Sulamerica",            modo: "prompt" },
        "TJDF":             { icone: "🏛️", cor: "#e67e22", desc: "Automação para Tribunal de Justiça do DF",       modo: "painel", txt: "b403-input",    btn: "b403-iniciar" },
        "TRE":              { icone: "🗳️", cor: "#7f9fc4", desc: "Automação para Tribunal Regional Eleitoral",     modo: "prompt" },
        "TRF":              { icone: "📖", cor: "#1d9e75", desc: "Automação para Tribunal Regional Federal",       modo: "prompt" },
        "TRT":              { icone: "🤝", cor: "#e67e22", desc: "Automação para Tribunal Regional do Trabalho",   modo: "painel", txt: "g-txt",         btn: "g-btn" },
        "TST":              { icone: "🔨", cor: "#e24b4a", desc: "Automação para Tribunal Superior do Trabalho",   modo: "tst" }
    };

    // ── PONTE: entrega os códigos colados para o robô escolhido ───
    const executarRobo = (nome, texto) => {
        const info = infoRobos[nome] || { modo: "prompt" };
        const func = robos[nome];
        if (!func) { alert("Robô não encontrado: " + nome); return; }

        if (info.modo === "prompt") {
            const promptOriginal = window.prompt;
            window.prompt = () => texto;
            try { func(); } finally { window.prompt = promptOriginal; }
            return;
        }

        if (info.modo === "tst") {
            let janelaCapturada = null;
            const openOriginal = window.open;
            window.open = function () {
                janelaCapturada = openOriginal.apply(window, arguments);
                return janelaCapturada;
            };
            try {
                func();
                const botoes = Array.from(document.querySelectorAll('button'))
                    .filter(b => (b.innerText || '').includes('ROBÔ EQUILIBRADO'));
                if (botoes.length) botoes[botoes.length - 1].click();
            } finally {
                window.open = openOriginal;
            }
            let tent = 0;
            const espera = setInterval(() => {
                try {
                    if (janelaCapturada && janelaCapturada.document && janelaCapturada.document.getElementById('t')) {
                        clearInterval(espera);
                        janelaCapturada.document.getElementById('t').value = texto;
                        janelaCapturada.go();
                        return;
                    }
                } catch (e) { }
                if (++tent > 40) clearInterval(espera);
            }, 200);
            return;
        }

        // modo "painel": roda o robô, espera o painel dele nascer, cola e clica em iniciar
        func();
        let tent = 0;
        const espera = setInterval(() => {
            const ta = document.getElementById(info.txt);
            const bt = document.getElementById(info.btn);
            if (ta && bt) {
                clearInterval(espera);
                ta.value = texto;
                ta.dispatchEvent(new Event('input', { bubbles: true }));
                ta.dispatchEvent(new Event('change', { bubbles: true }));
                setTimeout(() => bt.click(), 200);
            } else if (++tent > 50) {
                clearInterval(espera);
                alert('O painel do robô ' + nome + ' não abriu. Tente novamente.');
            }
        }, 150);
    };

    // ── NAVEGAÇÃO ENTRE AS DUAS TELAS ─────────────────────────────
    let roboAtual = null;
    const abrirJanelaCodigos = item => {
        roboAtual = item.chave;
        document.getElementById('cr-j-nome').innerText = item.rotulo;
        document.getElementById('cr-j-desc').innerText = item.desc;
        const ic = document.getElementById('cr-j-icone');
        ic.innerText = item.icone;
        ic.style.background = 'linear-gradient(135deg,' + item.cor + 'cc,' + item.cor + '66)';
        ic.style.boxShadow = '0 0 12px ' + item.cor + '80';
        document.getElementById('cr-txt-codigos').value = '';
        telaHome.style.display = 'none';
        telaJanela.style.display = 'block';
    };

    document.getElementById('cr-voltar').onclick = () => {
        telaJanela.style.display = 'none';
        telaHome.style.display = 'block';
    };
    document.getElementById('cr-j-fechar').onclick = () => menu.remove();
    document.getElementById('cr-limpar').onclick = () => {
        document.getElementById('cr-txt-codigos').value = '';
        document.getElementById('cr-txt-codigos').focus();
    };
    document.getElementById('cr-iniciar').onclick = () => {
        const texto = document.getElementById('cr-txt-codigos').value;
        if (!texto.trim()) {
            alert('Cole os códigos do convênio antes de iniciar!');
            return;
        }
        const nome = roboAtual;
        menu.remove();
        executarRobo(nome, texto);
    };

    // ── CARDS DOS CONVÊNIOS (ordem alfabética, nomes de exibição) ─
    // Medsenior e Unimed Seguros usam o mesmo autorizador; PM e STJ também.
    const EXIBICAO = [
        { rotulo: "Affego",            chave: "AFFEGO",           icone: "🛠️", cor: "#378ADD", desc: "Automação para Fisco e Convênios Affego" },
        { rotulo: "Amil",              chave: "AMIL",             icone: "🩺", cor: "#2ecc71", desc: "Automação para Rede Credenciada Amil" },
        { rotulo: "Inas GDF",          chave: "INAS",             icone: "🤝", cor: "#d9a520", desc: "Automação para Convênios Inas GDF" },
        { rotulo: "Medsenior",         chave: "MEDSENIOR/UN SEG", icone: "🏥", cor: "#27ae60", desc: "Automação para Convênio Medsenior" },
        { rotulo: "Planassiste MPU",   chave: "PLANASSISTE MPU",  icone: "📝", cor: "#2d7dff", desc: "Automação para Planilhas do MPU" },
        { rotulo: "Plenum",            chave: "PLENUM",           icone: "⚖️", cor: "#8e44ad", desc: "Automação para Convênios de Advocacia e Justiça" },
        { rotulo: "PM",                chave: "PM/STJ",           icone: "🛡️", cor: "#5dade2", desc: "Automação para Polícia Militar" },
        { rotulo: "Postal (Correios)", chave: "POSTAL",           icone: "✉️", cor: "#d4ac0d", desc: "Automação para Logística Postal" },
        { rotulo: "STJ",               chave: "PM/STJ",           icone: "🏛️", cor: "#4a90d9", desc: "Automação para Superior Tribunal de Justiça" },
        { rotulo: "Sul America",       chave: "SULAMERICA",       icone: "🌎", cor: "#e74c3c", desc: "Automação para Convênios SulAmérica" },
        { rotulo: "TJDF",              chave: "TJDF",             icone: "🏛️", cor: "#e67e22", desc: "Automação para Tribunal de Justiça do DF" },
        { rotulo: "TRE",               chave: "TRE",              icone: "🗳️", cor: "#7f9fc4", desc: "Automação para Tribunal Regional Eleitoral" },
        { rotulo: "TRF",               chave: "TRF",              icone: "📖", cor: "#1d9e75", desc: "Automação para Tribunal Regional Federal" },
        { rotulo: "TRT",               chave: "TRT",              icone: "🤝", cor: "#e67e22", desc: "Automação para Tribunal Regional do Trabalho" },
        { rotulo: "TST",               chave: "TST",              icone: "🔨", cor: "#e24b4a", desc: "Automação para Tribunal Superior do Trabalho" },
        { rotulo: "Unimed Seguros",    chave: "MEDSENIOR/UN SEG", icone: "💚", cor: "#16a085", desc: "Automação para Convênio Unimed Seguros" }
    ];
    const container = document.getElementById('cr-lista');
    for (const item of EXIBICAO) {
        const { rotulo, icone, cor, desc } = item;
        const card = document.createElement('div');
        card.className = 'cr-card';
        card.style.cssText = `
            position: relative;
            background: #10182b;
            border: 1px solid #1e2a44;
            border-radius: 12px;
            padding: 12px 12px 14px;
            cursor: pointer;
            transition: all .15s ease;
        `;
        card.innerHTML = `
            <div style="display:flex;align-items:flex-start;gap:9px;">
                <div style="width:38px;height:38px;border-radius:10px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:19px;background:linear-gradient(135deg,${cor}cc,${cor}55);box-shadow:0 0 10px ${cor}55;">${icone}</div>
                <div style="flex:1;min-width:0;">
                    <div style="font-size:12px;font-weight:800;color:#eaf3ff;line-height:1.25;word-break:break-word;">${rotulo}</div>
                    <div style="font-size:9.5px;color:#8fa8cf;line-height:1.4;margin-top:3px;">${desc}</div>
                </div>
                <div class="cr-seta" style="width:22px;height:22px;border-radius:50%;flex-shrink:0;background:#0e1a2e;border:1px solid #223a5e;display:flex;align-items:center;justify-content:center;font-size:11px;color:#cfe0ff;transition:all .15s ease;align-self:center;">›</div>
            </div>
            <div style="position:absolute;bottom:8px;left:14px;width:26px;height:3px;border-radius:2px;background:${cor};"></div>
        `;
        card.onclick = () => abrirJanelaCodigos(item);
        container.appendChild(card);
    }
})();
