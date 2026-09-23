"""Baixa a programação do Cine Show de Nova Friburgo e grava cinema.json.

Roda sozinho no GitHub Actions (.github/workflows/cinema.yml) algumas vezes por dia.
Só usa a biblioteca padrão do Python.
"""
import html
import json
import re
import sys
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

CINEMAS = {
    "cadima": {"nome": "Cine Show · Cadima Shopping", "slug": "cadima-shopping"},
    "friburgoShopping": {"nome": "Cine Show · Friburgo Shopping", "slug": "friburgo-shopping"},
}
BASE = "https://cineshow.com.br"
SAIDA = Path(__file__).resolve().parent.parent / "cinema.json"


def baixar(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (convite-feriado)"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8", errors="replace")


def limpar(s):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", s or ""))).strip()


def achar(padrao, texto):
    m = re.search(padrao, texto, re.S)
    return limpar(m.group(1)) if m else ""


def absoluto(url):
    url = html.unescape(url or "")
    return url if url.startswith("http") else (BASE + url if url.startswith("/") else "")


def ler_cinema(slug):
    pagina = baixar(f"{BASE}/{slug}/programacao")
    dias = {}
    for bloco in pagina.split('<div class="filme">')[1:]:
        titulo = achar(r'<h2 class="theme-txt">(.*?)</h2>', bloco)
        if not titulo:
            continue
        filme = {
            "titulo": titulo,
            "classificacao": achar(r'<div class="classind">(.*?)</div>', bloco),
            "genero": achar(r"G[êe]nero:</strong>(.*?)</div>", bloco),
            "duracao": int(achar(r"Dura[çc][ãa]o:</strong>\s*(\d+)", bloco) or 0),
            "poster": absoluto(achar(r'<img src="([^"]+)"[^>]*class="poster"', bloco)),
        }
        # cada sala tem nome, áudio (DUB/LEG/NAC) e seus horários
        for sala_html in bloco.split('class="sala-filme"')[1:]:
            sala = achar(r'class="sala theme-txt">(.*?)</div>', sala_html)
            audio = achar(r'class="audio">(.*?)</div>', sala_html)
            links = {}
            for m in re.finditer(r'<a href="([^"]+)"[^>]*>\s*<div class="hor[^"]*">\s*(\d\d:\d\d)', sala_html):
                links[m.group(2)] = absoluto(m.group(1))
            for m in re.finditer(r"em (\d\d)/(\d\d)/(\d{4}) às (\d\d:\d\d) na (Sala \d+)", sala_html):
                d, mes, ano, hora, _ = m.groups()
                data = f"{ano}-{mes}-{d}"
                f = dias.setdefault(data, {}).setdefault(titulo, {**filme, "sessoes": []})
                # a página repete cada sala (versão celular e computador): ignora duplicadas
                if any(s["hora"] == hora and s["sala"] == sala for s in f["sessoes"]):
                    continue
                f["sessoes"].append({"hora": hora, "sala": sala, "audio": audio, "link": links.get(hora, "")})
    # organiza: filmes por nome, sessões por horário
    return {
        data: sorted(
            [{**f, "sessoes": sorted(f["sessoes"], key=lambda s: s["hora"])} for f in filmes.values()],
            key=lambda f: f["titulo"],
        )
        for data, filmes in sorted(dias.items())
    }


def main():
    saida = {"atualizado": datetime.now(timezone.utc).isoformat(timespec="minutes"), "cinemas": {}}
    anterior = json.loads(SAIDA.read_text(encoding="utf-8")) if SAIDA.exists() else {}
    for chave, info in CINEMAS.items():
        try:
            dias = ler_cinema(info["slug"])
        except Exception as e:  # site fora do ar: mantém o que já tinha
            print(f"{chave}: erro {e}", file=sys.stderr)
            dias = anterior.get("cinemas", {}).get(chave, {}).get("dias", {})
        saida["cinemas"][chave] = {
            "nome": info["nome"],
            "url": f"{BASE}/{info['slug']}/programacao",
            "dias": dias,
        }
        print(chave, {d: len(f) for d, f in dias.items()})
    # se nada mudou, mantém a data antiga para não gerar commit à toa
    if anterior.get("cinemas") == saida["cinemas"]:
        saida["atualizado"] = anterior.get("atualizado", saida["atualizado"])
    SAIDA.write_text(json.dumps(saida, ensure_ascii=False, indent=1), encoding="utf-8")


if __name__ == "__main__":
    main()
