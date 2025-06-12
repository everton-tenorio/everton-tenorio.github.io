const a=`---
title: "Script Python para reajuste de aluguel com base no IPCA-12"
date: 2025-06-11
slug: script-python-para-reajuste-de-aluguel-com-base-no-ipca
description: ""
tags: ["python", "indice ipca", "script"]
bannerImage: "https://www.bloomberglinea.com.br/resizer/v2/JLP4H3CWM5DITNDFFRUZZZYP2U.jpeg?auth=0b587f55ed4ae4763da08043141c233326df20660013f7d03c657a9e79d30f93"
---

Aqui um script que faz o reajuste de valor do aluguel atualizando pela inflação. Usando o IPCA acumulado dos últimos 12 meses como base, decidi fazer em Python pra resolver isso.

O script faz uma requisição \`GET\` do IPCA acumulado direto da API pública do IBGE, traz o valor mais recente e a data de referência, aplico a fórmula de reajuste no valor atual do aluguel para chegar ao novo valor. Adicionei um tratamento de erros básico caso a API caia ou se algo errado for digitado, e formatei os valores em reais, com vírgula, pra ficar mais fácil de ler.

\`\`\`python
import requests

def buscar_ipca_12_meses():
    """
    Busca o IPCA acumulado dos últimos 12 meses na API do IBGE.
    Retorna o valor mais recente e a data de referência.
    """
    url = "https://servicodados.ibge.gov.br/api/v3/agregados/1737/periodos/-12/variaveis/2265?localidades=N1[all]"

    try:
        resposta = requests.get(url)
        resposta.raise_for_status()  # Lança exceção para códigos de erro HTTP

        dados = resposta.json()
        serie = dados[0]['resultados'][0]['series'][0]['serie']

        # Pega o mês mais recente (último item)
        datas = list(serie.keys())
        valores = list(serie.values())

        # O valor mais recente é o último da lista
        ipca_ultimo = float(valores[-1])
        ultima_data = datas[-1]

        # Formata a data de YYYYMM para MM/YYYY
        mes = ultima_data[4:6]
        ano = ultima_data[0:4]
        data_formatada = f"{mes}/{ano}"

        return ipca_ultimo, data_formatada

    except requests.exceptions.RequestException as e:
        raise Exception(f"Erro ao acessar a API do IBGE: {e}")
    except (KeyError, IndexError, ValueError) as e:
        raise Exception(f"Erro ao processar dados do IBGE: {e}")

def reajustar_aluguel(valor_atual, ipca_percentual):
    """
    Calcula o valor reajustado do aluguel com base no IPCA.
    """
    return round(valor_atual * (1 + ipca_percentual / 100), 2)

def formatar_valor_monetario(valor):
    """
    Formata um valor numérico para o formato monetário brasileiro.
    """
    return f"R$ {valor:.2f}".replace('.', ',')

def main():
    try:
        # Solicita o valor do aluguel e trata entrada
        valor_input = input("Digite o valor atual do aluguel (somente números): ")
        # Remove possíveis caracteres não numéricos
        valor_limpo = ''.join(char for char in valor_input if char.isdigit() or char == '.')

        # Tenta converter para float
        try:
            valor_aluguel = float(valor_limpo)
        except ValueError:
            print("Erro: Digite apenas números para o valor do aluguel.")
            return

        # Busca o IPCA e calcula o reajuste
        ipca, referencia = buscar_ipca_12_meses()
        novo_valor = reajustar_aluguel(valor_aluguel, ipca)

        # Exibe os resultados formatados
        print(f"\\nIPCA acumulado em 12 meses (referência: {referencia}): {ipca:.2f}%")
        print(f"Valor atual do aluguel: {formatar_valor_monetario(valor_aluguel)}")
        print(f"Valor reajustado do aluguel: {formatar_valor_monetario(novo_valor)}")
        print(f"Diferença: {formatar_valor_monetario(novo_valor - valor_aluguel)}")

    except Exception as e:
        print(f"Erro: {e}")

if __name__ == "__main__":
    main()
\`\`\`

Pronto, rápido e prático, quem sabe uma aplicação Flask ou algo assim no futuro. Pra quem precisar pode de repente modificar para fazer consultas por outros índices econômicos, como IGP-M ou evoluir para cenários de reajustes em lote ou integrar com plataformas de administração de contratos.`;export{a as default};
