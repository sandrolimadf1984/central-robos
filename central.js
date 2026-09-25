// ==========================================
// CENTRAL DE AUTOMAÇÃO - CLTZINHO DIGITAL
// Criado por Sandro de Lima Pereira
// ==========================================

// Função que exibe exatamente o pop-up da imagem anexada
function mostrarAvisoManutencao() {
    // Remove qualquer modal duplicado se já existir na tela
    const modalAntigo = document.getElementById('cr-modal-bloqueio');
    if (modalAntigo) modalAntigo.remove();

    // Cria o container escurecido de fundo (overlay)
    const modal = document.createElement('div');
    modal.id = 'cr-modal-bloqueio';
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0, 0, 0, 0.75); z-index: 2147483647;
        display: flex; align-items: center; justify-content: center;
        font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    `;

    // Cria o card interno com o mesmo layout da imagem
    modal.innerHTML = `
        <div style="background: #181b22; border: 1px solid #2a2e39; border-radius: 16px; padding: 32px 28px; width: 380px; text-align: center; box-shadow: 0 12px 35px rgba(0,0,0,0.6); color: #ffffff;">
            
            <!-- Ícone de Cadeado -->
            <div style="margin-bottom: 20px; display: flex; justify-content: center;">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#cadeado-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <defs>
                        <linearGradient id="cadeado-grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="#ffcc00"/>
                            <stop offset="100%" stop-color="#ff8800"/>
                        </linearGradient>
                    </defs>
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="#ffaa00" fill-opacity="0.15"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    <circle cx="12" cy="16" r="1.5" fill="#ffaa00"></circle>
                </svg>
            </div>

            <!-- Título Principal -->
            <div style="font-size: 19px; font-weight: 700; color: #ffffff; margin-bottom: 12px; letter-spacing: -0.2px;">
                Central de Automação indisponível
            </div>

            <!-- Descrição Principal -->
            <div style="font-size: 14px; color: #b0b8c4; margin-bottom: 18px; line-height: 1.5;">
                A ferramenta está temporariamente fora do ar para manutenção.
            </div>

            <!-- Mensagem Secundária -->
            <div style="font-size: 12px; color: #6e7681; margin-bottom: 28px; line-height: 1.5;">
                Por enquanto, lance os códigos manualmente.<br>Avisaremos quando voltar.
            </div>

            <!-- Botão Entendi -->
            <button id="cr-btn-entendi" style="background: #2b6cb0; background: linear-gradient(180deg, #3182ce, #2b6cb0); color: #ffffff; border: none; border-radius: 10px; padding: 13px 0; font-weight: 600; cursor: pointer; font-size: 15px; width: 100%; box-shadow: 0 4px 12px rgba(49, 130, 206, 0.35); transition: background 0.2s;">
                Entendi
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    // Comportamento do botão: fecha e remove o aviso da tela imediatamente
    document.getElementById('cr-btn-entendi').onclick = () => {
        modal.remove();
    };

    // Opcional: fechar também ao clicar no fundo escuro
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}

// Objeto de robôs configurados para acionar exclusivamente o bloqueio
const robos = {
    "Affego": mostrarAvisoManutencao,
    "Amil": mostrarAvisoManutencao,
    "AssedfVidacard": mostrarAvisoManutencao,
    "Assefaz": mostrarAvisoManutencao,
    "BrbSaude": mostrarAvisoManutencao,
    "CamaraDeputados": mostrarAvisoManutencao
};

// Interceptação dinâmica global para garantir que qualquer outro robô cadastrado seja bloqueado da mesma forma
document.addEventListener("DOMContentLoaded", () => {
    if (typeof window.robos === 'object' && window.robos !== null) {
        Object.keys(window.robos).forEach(chave => {
            window.robos[chave] = mostrarAvisoManutencao;
        });
    }
});
