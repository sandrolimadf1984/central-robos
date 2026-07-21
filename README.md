<div align="center">

# 🤖 Central de Automação — CLTzinho Digital

**Automação de lançamento de códigos de procedimentos em portais de autorização de convênios**

![Versão](https://img.shields.io/badge/vers%C3%A3o-2.1.0-2d7dff)
![Status](https://img.shields.io/badge/status-online-2ecc71)
![Uso](https://img.shields.io/badge/uso-interno%20%C2%B7%20Sabin%20Bras%C3%ADlia-f5c518)

*Cole os códigos uma vez. O robô digita por você.*

</div>

---

## 📌 O que é

A **Central de Automação** é uma ferramenta que roda direto no navegador (sem instalar nenhum programa) e automatiza o preenchimento de códigos de procedimentos nos portais de autorização dos convênios de saúde.

O trabalho que antes era feito digitando código por código, campo por campo, passa a ser feito assim: a pessoa **cola a lista inteira de códigos** numa caixinha, clica em **🚀 INICIAR AUTOMAÇÃO**, e o robô digita tudo no portal — incluindo as quantidades quando um código se repete na lista.

## ⚙️ Como funciona por dentro

A mágica está em um **bookmarklet**: um favorito do navegador que, em vez de abrir um site, executa um pequeno código. Esse código busca o arquivo `central.js` deste repositório e o executa na página do portal que estiver aberta.

```
Clique no favorito 🤖 Robôs
        │
        ▼
Busca o central.js mais recente deste repositório
        │
        ▼
Abre o painel da Central de Automação por cima do portal
        │
        ▼
Você escolhe o convênio → cola os códigos → o robô trabalha
```

A consequência mais importante desse desenho: **toda atualização feita no `central.js` chega automaticamente para todos os usuários** no próximo clique do favorito. Ninguém precisa reinstalar, baixar ou atualizar nada — a equipe inteira está sempre na versão mais recente.

## 🖥️ A interface

O painel abre por cima de qualquer portal e pode ser **arrastado para qualquer canto da tela**. Ele tem duas telas:

**Tela principal** — mostra os convênios disponíveis em cards, em ordem alfabética, cada um com seu ícone e descrição. No rodapé ficam o botão **FECHAR APP** e o **marcador de checkboxes** (veja abaixo).

**Janela de códigos** — ao clicar em um convênio, abre a janela de inserção: uma área tracejada para colar a lista de códigos, dicas rápidas, e os botões **🚀 INICIAR AUTOMAÇÃO** e **🕐 LIMPAR**. É a mesma janela para todos os convênios, então quem aprende a usar um, sabe usar todos.

## 🏥 Convênios suportados

| Convênio | Automação para |
|---|---|
| Affego | Fisco e Convênios Affego |
| Amil | Rede Credenciada Amil |
| Inas GDF | Convênios Inas GDF |
| Medsenior / UN SEG | Planos de Saúde |
| Planassiste MPU | Planilhas do MPU |
| Plenum | Convênios de Advocacia e Justiça |
| PM / STJ | Segurança e Justiça Superior |
| Postal (Correios) | Logística Postal |
| Sul America | Convênios SulAmérica |
| TJDF | Tribunal de Justiça do DF |
| TRE | Tribunal Regional Eleitoral |
| TRF | Tribunal Regional Federal |
| TRT | Tribunal Regional do Trabalho |
| TST | Tribunal Superior do Trabalho |

Cada robô conhece a estrutura do seu portal: sabe em qual campo digitar, quando aguardar o sistema responder, como preencher a quantidade quando um código se repete, e como salvar cada item antes de passar ao próximo.

## ✨ Funcionalidades

**Contagem automática de quantidades** — se o mesmo código aparece 3 vezes na lista colada, o robô lança o código uma vez com quantidade 3.

**☑️ Marcador de checkboxes** — um clique marca todas as caixinhas de seleção da página do portal de uma vez. O ícone fica verde e mostra quantas foram marcadas.

**Painel arrastável** — segure em qualquer área livre do painel e arraste para onde não atrapalhar a visão do portal.

**⚠️ Avisos dinâmicos** — o painel exibe mensagens publicadas no arquivo `aviso.txt` deste repositório. É o canal de comunicação com a equipe: "portal X instável hoje", "novo robô disponível", etc.

**Atualização invisível** — melhorias, correções e novos convênios entram em produção com um simples commit neste repositório.

## 🚀 Instalação (menos de 1 minuto)

### Opção A — Arrastando (mais fácil)

1. Acesse a página de instalação: **https://sandrolimadf1984.github.io/central-robos/**
2. Pressione `Ctrl + Shift + B` para exibir a barra de favoritos do Chrome
3. Arraste o botão azul **🤖 Robôs** para a barra de favoritos

### Opção B — Colando o código

1. Pressione `Ctrl + Shift + B` para exibir a barra de favoritos
2. Clique com o botão direito na barra → **Adicionar página...**
3. Em **Nome**, escreva `🤖 Robôs`
4. Em **URL**, cole:

```javascript
javascript:(function(){fetch('https://raw.githubusercontent.com/sandrolimadf1984/central-robos/main/central.js?v='+Date.now()).then(r=>{if(!r.ok)throw new Error('Erro ao carregar!');return r.text()}).then(c=>eval(c)).catch(e=>alert(e.message));})();
```

5. Salve. Pronto!

## 📖 Como usar no dia a dia

1. Abra o portal de autorização do convênio e faça login normalmente
2. Clique no favorito **🤖 Robôs** na barra
3. Clique no card do convênio desejado
4. Cole a lista de códigos na área tracejada
5. Clique em **🚀 INICIAR AUTOMAÇÃO** e acompanhe o robô trabalhar

> **Dica:** o favorito deve ser usado **dentro dos portais de autorização**. Em sites com bloqueios de segurança extras (como o Google), o painel não abre — isso é esperado.

## 📁 Estrutura do repositório

| Arquivo | Função |
|---|---|
| `central.js` | O coração do projeto: interface + todos os robôs de automação |
| `index.html` | Página de instalação (GitHub Pages) com o botão de arrastar |
| `aviso.txt` | Mensagens exibidas no painel de todos os usuários |
| `README.md` | Este documento |

## 🔧 Manutenção (para o mantenedor)

**Atualizar um robô ou a interface** — edite o `central.js` e faça commit. Todos recebem no próximo clique.

**Publicar um aviso para a equipe** — escreva a mensagem no `aviso.txt` e faça commit. Para remover o aviso, deixe o arquivo vazio.

**Adicionar um convênio novo** — inclua o robô no objeto `robos`, cadastre a ficha dele em `infoRobos` (ícone, cor, descrição e modo de entrada) e adicione o card na lista `EXIBICAO`.

## ⚠️ Uso e responsabilidade

Ferramenta desenvolvida para **uso interno** da equipe, com o objetivo de eliminar digitação repetitiva no lançamento de autorizações. Ela não burla nenhuma etapa dos portais — apenas digita, no lugar do usuário, os mesmos dados que ele digitaria manualmente, com sua própria sessão autenticada. A conferência dos códigos e das autorizações geradas continua sendo responsabilidade de quem opera.

## 👨‍💻 Créditos

**Sandro de Lima Pereira** — interface, novos recursos, distribuição e manutenção desta versão.

Projeto construído de forma colaborativa a partir da automação original criada por **André Fernandes**.

---

<div align="center">

*Feito com dedicação para facilitar o trabalho de quem autoriza. 🩵*

</div>
