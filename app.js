/* =============================================================
   CONFIGURAÇÃO
   ============================================================= */
const CONFIG = {
  nomeDele: "Lucas",
  nomeDela: "Júlia",
  whatsappDele: "5522997793222", // (22) 99779-3222
};

/* =============================================================
   DADOS — restaurantes (TripAdvisor + fontes em cardapios.js)
   ============================================================= */
const FOTO = (p) => `https://dynamic-media-cdn.tripadvisor.com/media/photo-o/${p}?w=1000&h=-1&s=1`;
const TA = "https://www.tripadvisor.com.br/";

const RESTAURANTES = {
  gigi: {
    estimativa: "R$ 190–230", estimativaObs: "entrada, 2 pratos e 1 sobremesa",
    nome: "Empório Gigi Prado",
    tipo: "Brasileira · empório · cervejas",
    local: "Mury",
    endereco: "Av. Manoel Carneiro de Menezes, 3471 — Mury",
    nota: "5,0", avaliacoes: 228, preco: "$$–$$$",
    horario: "Sáb 11h–19h · jantar 19h–21h só com reserva",
    tel: "(22) 99233-9210",
    fotos: [FOTO("23/1e/48/43/o-emporio.jpg"), FOTO("28/b6/8c/cd/caption.jpg")],
    porque: "Nota máxima, clima de empório de serra, almoço sem pressa com uma cerveja gelada.",
    ta: TA + "Restaurant_Review-g303501-d24001318-Reviews-Emporio_Gigi_Prado-Nova_Friburgo_State_of_Rio_de_Janeiro.html",
  },
  mariquinha: {
    estimativa: "R$ 120–140", estimativaObs: "rodízio R$ 59–70 por pessoa",
    nome: "Dona Mariquinha",
    tipo: "Rodízio de comida caseira · desde 1952",
    local: "Centro",
    endereco: "R. Monsenhor Miranda, 110 — Hotel Maringá",
    nota: "4,5", avaliacoes: 511, preco: "$$–$$$",
    horario: "Ter a Dom, 11h45–15h",
    tel: "(22) 2522-2309",
    fotos: [FOTO("12/d3/2f/ec/rodizio-de-caldos-e-sopas.jpg"), FOTO("12/b5/0d/03/estaremos-funcionando.jpg")],
    porque: "Um clássico de Friburgo: rodízio de comida de vó, com pastelzinho e bolinho de baroa.",
    ta: TA + "Search?q=Dona%20Mariquinha%20Nova%20Friburgo",
  },
  crescente: {
    estimativa: "R$ 380–450", estimativaObs: "entrada, 2 pratos e 1 sobremesa",
    nome: "Crescente Gastronomia",
    tipo: "Alta gastronomia · brasileira e internacional",
    local: "Centro",
    endereco: "R. General Osório, 21",
    nota: "4,8", avaliacoes: 524, preco: "$$$$",
    horario: "Sáb 12h–17h e 19h–22h · Seg 12h–16h",
    tel: "(22) 2523-4616",
    fotos: [FOTO("08/dd/8b/8c/crescente-gastronomia.jpg"), FOTO("19/6c/b5/cf/crescente-gastronomia.jpg")],
    porque: "O jantar mais especial da cidade. Casa de família desde 1990, menu autoral e carta de vinhos.",
    ta: TA + "Restaurant_Review-g303501-d2424518-Reviews-Crescente_Gastronomia-Nova_Friburgo_State_of_Rio_de_Janeiro.html",
  },
  astral: {
    estimativa: "R$ 260–320", estimativaObs: "couvert, 2 pratos e 1 sobremesa (preços de 2024 corrigidos)",
    nome: "Astral Gastronomia",
    tipo: "Italiana · francesa · contemporânea",
    local: "Mury",
    endereco: "Av. Walter Machado Thedin, 4956 — Mury",
    nota: "5,0", avaliacoes: 676, preco: "$$–$$$",
    horario: "Sáb 12h–22h · Dom 12h–17h",
    tel: "(22) 99928-4300",
    fotos: [FOTO("29/2e/0a/e6/entrada-iluminada-a-noite.jpg"), FOTO("2d/0d/a5/d0/caption.jpg")],
    porque: "O mais bem avaliado de Friburgo: 676 avaliações e nota perfeita. Massas feitas na casa.",
    ta: TA + "Restaurant_Review-g303501-d20098074-Reviews-Astral_Gastronomia-Nova_Friburgo_State_of_Rio_de_Janeiro.html",
  },
  anexo: {
    estimativa: "R$ 250–350", estimativaObs: "estimativa: pratos principais acima de R$ 80",
    nome: "Anexo Gastrô",
    tipo: "Toque italiano · carnes · drinks autorais",
    local: "Cônego",
    endereco: "R. Deolinda Thurler, 18 — Cônego",
    nota: "4,9", avaliacoes: 232, preco: "$$–$$$",
    horario: "Sáb 12h15–16h e 19h–22h30",
    tel: "(22) 98160-8922",
    fotos: [FOTO("2a/cf/5c/c7/bar-maravilhoso-com-diversas.jpg"), FOTO("2a/cf/5c/c0/salmao-servido-com-pure.jpg")],
    porque: "Bar de drinks bonito, ambiente escuro e Beef Wellington. Clima de noite na cidade.",
    ta: TA + "Restaurant_Review-g303501-d26826236-Reviews-Anexo_Steakhouse-Nova_Friburgo_State_of_Rio_de_Janeiro.html",
  },
  spaghetti: {
    estimativa: "R$ 200–240", estimativaObs: "bruschetta e 2 massas",
    nome: "Spaghetti — Cozinha Italiana",
    tipo: "Italiana · massas frescas",
    local: "São Pedro da Serra",
    endereco: "R. Rodrigues Alves, 176 — São Pedro da Serra",
    nota: "4,9", avaliacoes: 399, preco: "$$–$$$",
    horario: "Dom 12h–17h",
    tel: "(22) 99949-0274",
    fotos: [FOTO("19/be/03/c5/nero-di-sepia.jpg"), FOTO("2f/9a/4b/23/caption.jpg")],
    porque: "Massa fresca no centrinho de São Pedro da Serra. Vale o passeio de carro pela serra.",
    ta: TA + "Restaurant_Review-g3842856-d12495056-Reviews-Spaghetti_Cozinha_Italiana-Sao_Pedro_da_Serra_Nova_Friburgo_State_of_Rio_de_Jan.html",
  },
  segredo: {
    estimativa: "R$ 250–350", estimativaObs: "pratos de R$ 90 a R$ 158",
    nome: "Segredo Cozinha Intimista",
    tipo: "Brasileira autoral · fusão",
    local: "São Pedro da Serra",
    endereco: "R. Rodrigues Alves — Espaço Ulyana, loja 2",
    nota: "4,9", avaliacoes: 228, preco: "$$–$$$",
    horario: "Dom 12h–16h",
    tel: "(22) 99748-7377",
    fotos: [FOTO("21/fa/ba/5c/venham-descobrir-esse.jpg"), FOTO("1b/46/95/63/foto-do-cliente-telma.jpg")],
    porque: "Poucas mesas, clima íntimo, feito para casal.",
    ta: TA + "Restaurant_Review-g3842856-d17838094-Reviews-Segredo_Cozinha_Intimista-Sao_Pedro_da_Serra_Nova_Friburgo_State_of_Rio_de_Jane.html",
  },
  parvati: {
    estimativa: "R$ 150–180", estimativaObs: "picanha para 2 e pastéis",
    nome: "Parvati de Lumiar",
    tipo: "Brasileira · carnes e peixes na brasa",
    local: "Lumiar",
    endereco: "R. Prof. Amâncio Mário de Azevedo, 11 — Lumiar",
    nota: "4,7", avaliacoes: 108, preco: "$$–$$$",
    horario: "Todos os dias a partir das 11h",
    tel: "(21) 98223-5315",
    fotos: [FOTO("29/f3/46/fc/picanha-na-brasa-com.jpg"), FOTO("2b/c8/95/10/fachada-noite.jpg")],
    porque: "Vista para o lago de Lumiar e picanha na brasa. Abre até na segunda de feriado.",
    ta: TA + "Restaurant_Review-g2510043-d25366811-Reviews-Parvati_De_Lumiar-Lumiar_Nova_Friburgo_State_of_Rio_de_Janeiro.html",
  },
};

/* Atividades sem restaurante (cinema, casa) */
const ATIVIDADES = {
  casa: {
    nome: "Tarde em casa",
    selo: "Casa",
    tipo: "Sofá, cobertor e zero compromisso",
    porque: "Cochilo depois do almoço, série e brigadeiro de panela.",
  },
  cadima: {
    nome: "Cinema no Cadima Shopping",
    selo: "Cinema",
    tipo: "Cine Show · Cadima Shopping",
    porque: "Pipoca grande e o filme que você escolher. A programação do feriado sai na quinta, 08/10.",
    mapa: "Cine Show Cadima Shopping, Nova Friburgo RJ",
    programacao: "https://cineshow.com.br/programacao",
  },
  friburgoShopping: {
    nome: "Cinema no Friburgo Shopping",
    selo: "Cinema",
    tipo: "Cine Show · Friburgo Shopping",
    porque: "A outra sala da cidade. Dá para escolher pelo horário e pelo filme. A programação sai na quinta, 08/10.",
    mapa: "Cine Show Friburgo Shopping, Nova Friburgo RJ",
    programacao: "https://cineshow.com.br/programacao",
  },
};

/* =============================================================
   ROTEIRO
   ============================================================= */
const DIAS = [
  {
    id: "dia-sab", dia: "Sábado", data: "10 de outubro",
    momentos: [
      { id: "sab-almoco", hora: "13h", titulo: "Almoço sem pressa", opcoes: ["gigi", "mariquinha"] },
      { id: "sab-tarde", hora: "16h", titulo: "Tarde", opcoes: ["casa", "cadima", "friburgoShopping"] },
      { id: "sab-jantar", hora: "20h", titulo: "O jantar especial", destaque: true, opcoes: ["crescente", "astral", "anexo"] },
    ],
  },
  {
    id: "dia-dom", dia: "Domingo", data: "11 de outubro",
    momentos: [
      { id: "dom-manha", hora: "10h", titulo: "Manhã em casa", fixo: "Sem despertador. Café da manhã na cama e nenhum plano até o almoço." },
      { id: "dom-almoco", hora: "13h", titulo: "Almoço de domingo", opcoes: ["astral", "spaghetti", "segredo", "parvati"], aviso: "O Astral fica em Friburgo. Spaghetti, Segredo e Parvati ficam na serra, uns 40 minutos de carro." },
      { id: "dom-tarde", hora: "16h", titulo: "Tarde", opcoes: ["casa", "cadima", "friburgoShopping"] },
      { id: "dom-noite", hora: "20h", titulo: "Noite em casa", fixo: "Pizza, filme escolhido por você e cobertor." },
    ],
  },
  {
    id: "dia-seg", dia: "Segunda", data: "12 de outubro · feriado",
    momentos: [
      { id: "seg-almoco", hora: "13h", titulo: "Almoço de despedida", opcoes: ["crescente", "parvati"], aviso: "É feriado, então vou ligar antes para confirmar que estão abertos." },
    ],
  },
];

/* Janela de cada tarde: a sessão tem que começar depois do almoço e
   acabar (filme + 20 min de trailers) antes do compromisso da noite. */
const JANELAS = {
  "sab-tarde": { data: "2026-10-10", de: "14:30", ate: "19:30", rotulo: "sábado, 10/10", motivo: "depois do almoço e a tempo do jantar das 20h" },
  "dom-tarde": { data: "2026-10-11", de: "15:00", ate: "20:00", rotulo: "domingo, 11/10", motivo: "depois do almoço e antes da noite em casa" },
};
const TRAILERS = 20;
let CINEMA = null; // cinema.json, atualizado pelo GitHub Actions a cada 3 horas

fetch("cinema.json", { cache: "no-store" })
  .then((r) => (r.ok ? r.json() : null))
  .then((d) => { CINEMA = d || { erro: true }; Object.keys(JANELAS).forEach(renderFilmes); })
  .catch(() => { CINEMA = { erro: true }; Object.keys(JANELAS).forEach(renderFilmes); });

/* =============================================================
   ESTADO (localStorage protegido)
   ============================================================= */
const CHAVE = "convite-feriado-2026";
function carregar() {
  try { return JSON.parse(localStorage.getItem(CHAVE)) || {}; } catch { return {}; }
}
function salvar() {
  try { localStorage.setItem(CHAVE, JSON.stringify(estado)); } catch { /* sem storage */ }
}
const estado = Object.assign({ assinado: false, escolhas: {}, sessoes: {} }, carregar());
estado.sessoes = estado.sessoes || {};

/* =============================================================
   UTILITÁRIOS
   ============================================================= */
const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const mapsQ = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const telLink = (t) => "tel:+55" + t.replace(/\D/g, "");
const brl = (n) => n.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const item = (k) => RESTAURANTES[k] || ATIVIDADES[k];

document.querySelectorAll('[data-nome="ele"]').forEach((el) => (el.textContent = CONFIG.nomeDele));
document.querySelectorAll('[data-nome="ela"]').forEach((el) => (el.textContent = CONFIG.nomeDela));

/* =============================================================
   ASSINATURA
   ============================================================= */
const canvas = $("#assinatura");
const ctx = canvas.getContext("2d");
const btnAssinar = $("#btn-assinar");
let desenhando = false;
let tracos = 0;
let ultimo = null;

function ajustarCanvas() {
  const r = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = r.width * dpr;
  canvas.height = r.height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#5B1F2E";
  tracos = 0;
  atualizarBotao();
}

function ponto(e) {
  const r = canvas.getBoundingClientRect();
  return { x: e.clientX - r.left, y: e.clientY - r.top, t: performance.now() };
}

canvas.addEventListener("pointerdown", (e) => {
  if (document.body.classList.contains("assinando")) return;
  desenhando = true;
  canvas.setPointerCapture(e.pointerId);
  ultimo = ponto(e);
  $("#assinatura-dica").classList.add("oculta");
});
canvas.addEventListener("pointermove", (e) => {
  if (!desenhando) return;
  const p = ponto(e);
  const dist = Math.hypot(p.x - ultimo.x, p.y - ultimo.y);
  const vel = dist / Math.max(1, p.t - ultimo.t);
  ctx.lineWidth = Math.max(1.2, 3.2 - vel * 1.4); // traço mais fino quando rápido, como caneta
  ctx.beginPath();
  ctx.moveTo(ultimo.x, ultimo.y);
  ctx.lineTo(p.x, p.y);
  ctx.stroke();
  tracos += dist;
  ultimo = p;
  atualizarBotao();
});
["pointerup", "pointercancel", "pointerleave"].forEach((ev) =>
  canvas.addEventListener(ev, () => (desenhando = false))
);

function atualizarBotao() {
  btnAssinar.disabled = tracos < 60;
}

$("#btn-limpar").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  tracos = 0;
  atualizarBotao();
  $("#assinatura-dica").classList.remove("oculta");
  $("#selo").classList.remove("carimbado");
});

btnAssinar.addEventListener("click", () => {
  document.body.classList.add("assinando");
  btnAssinar.disabled = true;
  $("#assinatura-area").classList.add("assinada");
  setTimeout(() => $("#selo").classList.add("carimbado"), 350);
  setTimeout(soltarCoracoes, 700);
  setTimeout(() => {
    estado.assinado = true;
    salvar();
    irPara("roteiro");
  }, 2200);
});

/* corações que sobem quando ela assina */
const CORACAO = '<svg viewBox="0 0 24 24"><path d="M12 21C5 15.5 2 12 2 8.2 2 5.3 4.3 3 7.1 3c1.9 0 3.7 1 4.9 2.6C13.2 4 15 3 16.9 3 19.7 3 22 5.3 22 8.2 22 12 19 15.5 12 21z"/></svg>';
function soltarCoracoes() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const box = $("#coracoes");
  for (let i = 0; i < 26; i++) {
    const c = document.createElement("span");
    c.className = "coracao";
    c.innerHTML = CORACAO;
    const tam = 12 + Math.random() * 22;
    c.style.cssText = `left:${Math.random() * 100}vw;width:${tam}px;height:${tam}px;` +
      `animation-delay:${Math.random() * 0.9}s;animation-duration:${2.2 + Math.random() * 1.6}s;` +
      `--deriva:${(Math.random() - 0.5) * 120}px;--giro:${(Math.random() - 0.5) * 60}deg;opacity:0`;
    box.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }
}

/* =============================================================
   NAVEGAÇÃO ENTRE TELAS
   ============================================================= */
function irPara(tela) {
  const contrato = $("#tela-contrato");
  const roteiro = $("#tela-roteiro");
  if (tela === "roteiro") {
    contrato.classList.add("saindo");
    setTimeout(() => {
      contrato.classList.remove("ativa", "saindo");
      roteiro.classList.add("ativa");
      window.scrollTo(0, 0);
      document.body.classList.remove("assinando");
      observarRevelacao();
    }, 600);
  } else {
    roteiro.classList.remove("ativa");
    contrato.classList.add("ativa");
    window.scrollTo(0, 0);
    requestAnimationFrame(ajustarCanvas);
  }
}

$("#btn-rever").addEventListener("click", () => {
  estado.assinado = false;
  salvar();
  $("#assinatura-area").classList.remove("assinada");
  $("#selo").classList.remove("carimbado");
  $("#assinatura-dica").classList.remove("oculta");
  irPara("contrato");
});

/* =============================================================
   CARTÕES
   ============================================================= */
function botaoEscolher(escolhido) {
  return `<button type="button" class="btn-escolher" aria-pressed="${escolhido}">${escolhido ? "Escolhido" : "Quero esse"}</button>`;
}

function cartaoRestaurante(chave, momento) {
  const r = RESTAURANTES[chave];
  const escolhido = estado.escolhas[momento.id] === chave;
  const temCardapio = typeof CARDAPIOS !== "undefined" && !!CARDAPIOS[chave];
  return `
  <article class="rest ${escolhido ? "escolhido" : ""}" data-momento="${momento.id}" data-rest="${chave}">
    <div class="rest-fotos">
      ${r.fotos.map((f, i) => `<img src="${f}" alt="${esc(r.nome)}, foto ${i + 1}" loading="lazy" onerror="this.remove()">`).join("")}
      <span class="rest-local">${esc(r.local)}</span>
    </div>
    <div class="rest-corpo">
      <div class="rest-cabeca">
        <div>
          <h4>${esc(r.nome)}</h4>
          <p class="rest-tipo">${esc(r.tipo)}</p>
        </div>
        <div class="rest-nota" aria-label="Nota ${r.nota} de 5">
          <span class="num">${r.nota}</span>
          <small><span class="num">${r.avaliacoes}</span> aval.</small>
        </div>
      </div>
      <p class="rest-porque">${esc(r.porque)}</p>
      <dl class="rest-info">
        <div><dt>Para dois</dt><dd><strong class="num">${esc(r.estimativa)}</strong> <span class="est-obs">sem bebida · ${esc(r.estimativaObs)}</span></dd></div>
        <div><dt>Horário</dt><dd>${esc(r.horario)}</dd></div>
        <div><dt>Endereço</dt><dd>${esc(r.endereco)}</dd></div>
        <div><dt>Telefone</dt><dd><a href="${telLink(r.tel)}">${esc(r.tel)}</a></dd></div>
      </dl>
      ${temCardapio ? `<button type="button" class="btn-cardapio" data-cardapio="${chave}">Ver cardápio completo</button>` : ""}
      <div class="rest-acoes">
        <a href="${mapsQ(r.nome + ", " + r.endereco + ", Nova Friburgo RJ")}" target="_blank" rel="noopener" class="btn-link">Mapa</a>
        <a href="${r.ta}" target="_blank" rel="noopener" class="btn-link">Avaliações</a>
        ${botaoEscolher(escolhido)}
      </div>
    </div>
  </article>`;
}

function cartaoAtividade(chave, momento) {
  const a = ATIVIDADES[chave];
  const escolhido = estado.escolhas[momento.id] === chave;
  return `
  <article class="rest ativ ${escolhido ? "escolhido" : ""}" data-momento="${momento.id}" data-rest="${chave}">
    <div class="ativ-capa ${a.selo === "Cinema" ? "cinema" : "casa"}" aria-hidden="true">
      <span>${esc(a.selo)}</span>
    </div>
    <div class="rest-corpo">
      <h4>${esc(a.nome)}</h4>
      <p class="rest-tipo">${esc(a.tipo)}</p>
      <p class="rest-porque">${esc(a.porque)}</p>
      <div class="rest-acoes">
        ${a.mapa ? `<a href="${mapsQ(a.mapa)}" target="_blank" rel="noopener" class="btn-link">Mapa</a>` : ""}
        ${a.programacao ? `<a href="${a.programacao}" target="_blank" rel="noopener" class="btn-link">Programação</a>` : ""}
        ${botaoEscolher(escolhido)}
      </div>
    </div>
  </article>`;
}

function renderRoteiro() {
  $("#roteiro").innerHTML = DIAS.map((d) => `
    <section class="dia revelar" id="${d.id}">
      <header class="dia-cabeca">
        <h2>${d.dia}</h2>
        <p>${d.data}</p>
      </header>
      <ol class="linha-tempo">
        ${d.momentos.map((m) => `
          <li class="momento ${m.destaque ? "destaque" : ""} ${m.fixo ? "fixo" : ""}">
            <div class="momento-hora num">${m.hora}</div>
            <div class="momento-corpo">
              <h3>${m.titulo}</h3>
              ${m.fixo ? `<p class="momento-fixo">${esc(m.fixo)}</p>` : `
                <p class="momento-instrucao">Escolha ${m.opcoes.length === 2 ? "uma das duas opções" : `uma das ${m.opcoes.length} opções`}.</p>
                ${m.aviso ? `<p class="momento-aviso">${esc(m.aviso)}</p>` : ""}
                <div class="opcoes">${m.opcoes.map((o) => (RESTAURANTES[o] ? cartaoRestaurante(o, m) : cartaoAtividade(o, m))).join("")}</div>
                ${JANELAS[m.id] ? `<div class="filmes" id="filmes-${m.id}" aria-live="polite" hidden></div>` : ""}
              `}
            </div>
          </li>`).join("")}
      </ol>
    </section>`).join("");
  Object.keys(JANELAS).forEach(renderFilmes);
  renderResumo();
}

$("#roteiro").addEventListener("click", (e) => {
  const btnCard = e.target.closest(".btn-cardapio");
  if (btnCard) { abrirCardapio(btnCard.dataset.cardapio); return; }

  const ses = e.target.closest(".sessao");
  if (ses) {
    const { m, filme, hora, audio, sala, link } = ses.dataset;
    const atual = estado.sessoes[m];
    estado.sessoes[m] = atual && atual.filme === filme && atual.hora === hora ? undefined
      : { cinema: estado.escolhas[m], filme, hora, audio, sala, link };
    salvar();
    renderFilmes(m);
    renderResumo();
    return;
  }

  const btn = e.target.closest(".btn-escolher");
  if (!btn) return;
  const card = btn.closest(".rest");
  const { momento, rest } = card.dataset;
  estado.escolhas[momento] = estado.escolhas[momento] === rest ? undefined : rest;
  salvar();
  card.parentElement.querySelectorAll(".rest").forEach((c) => {
    const on = estado.escolhas[momento] === c.dataset.rest;
    c.classList.toggle("escolhido", on);
    const b = $(".btn-escolher", c);
    b.setAttribute("aria-pressed", on);
    b.textContent = on ? "Escolhido" : "Quero esse";
  });
  if (JANELAS[momento]) {
    if (estado.sessoes[momento] && estado.sessoes[momento].cinema !== estado.escolhas[momento]) estado.sessoes[momento] = undefined;
    salvar();
    renderFilmes(momento);
    const painel = document.getElementById("filmes-" + momento);
    if (painel && !painel.hidden) setTimeout(() => painel.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  }
  renderResumo();
});

/* =============================================================
   FILMES E HORÁRIOS
   ============================================================= */
const minutos = (h) => { const [a, b] = h.split(":").map(Number); return a * 60 + b; };
const horaDe = (min) => `${String(Math.floor(min / 60)).padStart(2, "0")}:${String(min % 60).padStart(2, "0")}`;
const AUDIO = { DUB: "Dublado", LEG: "Legendado", NAC: "Nacional" };

function renderFilmes(mId) {
  const box = document.getElementById("filmes-" + mId);
  if (!box) return;
  const escolha = estado.escolhas[mId];
  const ativ = ATIVIDADES[escolha];
  if (!ativ || !ativ.programacao) { box.innerHTML = ""; box.hidden = true; return; }
  box.hidden = false;
  const j = JANELAS[mId];
  const topo = `
    <header class="filmes-topo">
      <p class="eyebrow">Filmes que cabem na tarde</p>
      <h4>${esc(ativ.tipo)} · ${esc(j.rotulo)}</h4>
      <p class="filmes-sub">Só aparecem sessões que começam a partir das ${j.de} e terminam até as ${j.ate}, ${esc(j.motivo)}. Toque no horário para escolher.</p>
    </header>`;

  if (!CINEMA) { box.innerHTML = topo + `<p class="filmes-aviso">Carregando a programação…</p>`; return; }
  const cine = CINEMA.cinemas && CINEMA.cinemas[escolha];
  if (!cine) {
    box.innerHTML = topo + `<p class="filmes-aviso">Não consegui carregar a programação agora. <a href="${ativ.programacao}" target="_blank" rel="noopener">Ver no site do Cine Show</a>.</p>`;
    return;
  }

  const doDia = (cine.dias || {})[j.data] || [];
  const atualizado = CINEMA.atualizado ? new Date(CINEMA.atualizado).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }) : "";
  const rodape = `<p class="filmes-rodape">Programação do Cine Show, conferida a cada 3 horas${atualizado ? ` (última mudança em ${atualizado})` : ""}. <a href="${cine.url}" target="_blank" rel="noopener">Ver no site</a></p>`;
  const cabe = (f, s) => minutos(s.hora) >= minutos(j.de) && minutos(s.hora) + f.duracao + TRAILERS <= minutos(j.ate);

  // Programação da data ainda não saiu (só pré-venda): mostra o que está em cartaz agora
  if (doDia.length < 3) {
    const datas = Object.keys(cine.dias || {}).sort();
    const ref = datas.find((d) => cine.dias[d].length >= 3) || datas[0];
    const emCartaz = ref ? cine.dias[ref] : [];
    box.innerHTML = topo + `
      <p class="filmes-aviso">A programação de ${esc(j.rotulo)} ainda não saiu. O Cine Show publica a semana toda na quinta-feira anterior, dia 08/10. <strong>Esta lista se atualiza sozinha</strong>: é só voltar aqui depois.</p>
      ${doDia.length ? `<p class="filmes-sub">Já em pré-venda para ${esc(j.rotulo)}:</p>
      <ul class="filmes-lista">${doDia.map((f) => cartaoFilme(f, f.sessoes, mId, (s) => !cabe(f, s))).join("")}</ul>` : ""}
      ${emCartaz.length ? `<p class="filmes-sub">Em cartaz agora, para ir namorando:</p>
      <ul class="filmes-lista previa">${emCartaz.map((f) => cartaoFilme(f, [], mId)).join("")}</ul>` : ""}
      ${rodape}`;
    return;
  }

  const bons = doDia.map((f) => ({ f, s: f.sessoes.filter((s) => cabe(f, s)) })).filter((x) => x.s.length);
  box.innerHTML = topo +
    (bons.length
      ? `<ul class="filmes-lista">${bons.map((x) => cartaoFilme(x.f, x.s, mId)).join("")}</ul>`
      : `<p class="filmes-aviso">Nenhuma sessão desse cinema cabe entre o almoço e a noite. Tenta o outro cinema ou veja todos os horários abaixo.</p>`) +
    `<details class="filmes-todos"><summary>Ver todos os horários do dia</summary>
      <ul class="filmes-lista">${doDia.map((f) => cartaoFilme(f, f.sessoes, mId, (s) => !cabe(f, s))).join("")}</ul>
    </details>` + rodape;
}

function cartaoFilme(f, sessoes, mId, fora = () => false) {
  const sel = estado.sessoes[mId];
  const duracao = f.duracao ? ` · ${Math.floor(f.duracao / 60)}h${String(f.duracao % 60).padStart(2, "0")}` : "";
  const escolhidaAqui = sel && sel.filme === f.titulo && sessoes.some((s) => s.hora === sel.hora);
  return `
    <li class="filme">
      ${f.poster ? `<img class="filme-poster" src="${esc(f.poster)}" alt="Pôster de ${esc(f.titulo)}" loading="lazy">` : `<div class="filme-poster"></div>`}
      <div class="filme-info">
        <h5>${esc(f.titulo)}</h5>
        <p class="filme-meta">${f.classificacao ? `<span class="filme-classe">${esc(f.classificacao)}</span>` : ""}${esc(f.genero)}${duracao}</p>
        ${sessoes.length ? `<div class="sessoes">${sessoes.map((s) => {
          const on = sel && sel.filme === f.titulo && sel.hora === s.hora;
          const fim = f.duracao ? horaDe(minutos(s.hora) + f.duracao + TRAILERS) : "";
          return `<button type="button" class="sessao${on ? " on" : ""}${fora(s) ? " fora" : ""}" aria-pressed="${on}"
            data-m="${mId}" data-filme="${esc(f.titulo)}" data-hora="${s.hora}" data-audio="${esc(s.audio)}" data-sala="${esc(s.sala)}" data-link="${esc(s.link)}"
            title="${esc(s.sala)}${fim ? ` · termina por volta das ${fim}` : ""}"><strong class="num">${s.hora}</strong><small>${esc(AUDIO[s.audio] || s.audio)}</small></button>`;
        }).join("")}</div>` : ""}
        ${escolhidaAqui ? `<p class="sessao-escolhida">Sessão escolhida: ${esc(sel.hora)}, ${esc(AUDIO[sel.audio] || sel.audio)}, ${esc(sel.sala)}${sel.link ? ` · <a href="${esc(sel.link)}" target="_blank" rel="noopener">comprar ingressos</a>` : ""}</p>` : ""}
      </div>
    </li>`;
}

/* =============================================================
   CARDÁPIO (modal)
   ============================================================= */
const dlg = $("#cardapio");

function abrirCardapio(chave) {
  const r = RESTAURANTES[chave];
  const c = CARDAPIOS[chave];
  $("#cardapio-nome").textContent = r.nome;
  $("#cardapio-fonte").innerHTML = `Fonte: <a href="${c.fonteUrl}" target="_blank" rel="noopener">${esc(c.fonte)}</a> · ${esc(c.atualizado)}`;
  $("#cardapio-corpo").innerHTML = c.secoes.map((s) => `
    <section class="card-secao">
      <h3>${esc(s.titulo)}</h3>
      <ul>
        ${s.itens.map(([nome, desc, preco]) => `
          <li>
            <div class="card-linha">
              <span class="card-item">${esc(nome)}</span>
              <span class="card-pontos" aria-hidden="true"></span>
              <span class="card-preco num">${preco == null ? "<small>consultar</small>" : "R$ " + brl(preco)}</span>
            </div>
            ${desc ? `<p class="card-desc">${esc(desc)}</p>` : ""}
          </li>`).join("")}
      </ul>
    </section>`).join("") + (c.nota ? `<p class="card-nota">${esc(c.nota)}</p>` : "");
  $("#cardapio-corpo").scrollTop = 0;
  if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
  document.body.classList.add("modal-aberto");
}

function fecharCardapio() {
  if (typeof dlg.close === "function") dlg.close(); else dlg.removeAttribute("open");
}
dlg.addEventListener("close", () => document.body.classList.remove("modal-aberto"));
$("#cardapio-fechar").addEventListener("click", fecharCardapio);
dlg.addEventListener("click", (e) => { if (e.target === dlg) fecharCardapio(); }); // clique fora

/* =============================================================
   RESUMO + WHATSAPP
   ============================================================= */
function momentosComEscolha() {
  return DIAS.flatMap((d) => d.momentos.filter((m) => m.opcoes).map((m) => ({ ...m, dia: d.dia })));
}

function renderResumo() {
  const lista = momentosComEscolha();
  const feitas = lista.filter((m) => estado.escolhas[m.id]);
  $("#resumo-lista").innerHTML = lista.map((m) => {
    const r = item(estado.escolhas[m.id]);
    const ses = estado.sessoes[m.id];
    return `<li class="${r ? "ok" : ""}">
      <span class="resumo-quando">${m.dia} · <span class="num">${m.hora}</span></span>
      <span class="resumo-o-que">${r ? esc(r.nome) : "Ainda não escolhido"}${ses ? `<small>${esc(ses.filme)} · ${esc(ses.hora)}</small>` : ""}</span>
    </li>`;
  }).join("");

  const faltam = lista.length - feitas.length;
  $("#resumo-aviso").textContent = faltam
    ? `Falta${faltam > 1 ? "m" : ""} ${faltam} escolha${faltam > 1 ? "s" : ""}.`
    : "Tudo escolhido. Agora é comigo.";

  const texto = [
    `Assinei o contrato, ${CONFIG.nomeDele}. Minhas escolhas para o feriado:`,
    "",
    ...lista.map((m) => {
      const ses = estado.sessoes[m.id];
      const extra = ses ? ` — ${ses.filme}, sessão das ${ses.hora} (${AUDIO[ses.audio] || ses.audio}, ${ses.sala})` : "";
      return `• ${m.dia}, ${m.hora} (${m.titulo}): ${item(estado.escolhas[m.id])?.nome || "você escolhe"}${extra}`;
    }),
    "",
    `— ${CONFIG.nomeDela}`,
  ].join("\n");
  const btn = $("#btn-enviar");
  btn.href = `https://wa.me/${CONFIG.whatsappDele}?text=${encodeURIComponent(texto)}`;
  btn.classList.toggle("desativado", faltam > 0);
}

/* =============================================================
   ANIMAÇÃO DE ENTRADA AO ROLAR
   ============================================================= */
function observarRevelacao() {
  const io = new IntersectionObserver((entradas) => {
    entradas.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("visivel"); io.unobserve(en.target); }
    });
  }, { threshold: 0.05 });
  document.querySelectorAll(".revelar:not(.visivel)").forEach((el) => io.observe(el));
}

/* barra: dia ativo */
const links = [...document.querySelectorAll("#barra-dias a")];
const ioBarra = new IntersectionObserver((entradas) => {
  entradas.forEach((en) => {
    if (en.isIntersecting) links.forEach((a) => a.classList.toggle("atual", a.getAttribute("href") === "#" + en.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });

/* =============================================================
   INÍCIO
   ============================================================= */
renderRoteiro();
[...DIAS.map((d) => document.getElementById(d.id)), $("#resumo")].forEach((el) => ioBarra.observe(el));

if (estado.assinado) {
  $("#tela-contrato").classList.remove("ativa");
  $("#tela-roteiro").classList.add("ativa");
  observarRevelacao();
} else {
  requestAnimationFrame(ajustarCanvas);
}
window.addEventListener("resize", () => { if ($("#tela-contrato").classList.contains("ativa") && tracos === 0) ajustarCanvas(); });
