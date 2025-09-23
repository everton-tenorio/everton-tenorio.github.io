---
title: "Configurando Logs do Nginx em JSON"
date: 2025-09-23
slug: configurando-logs-do-nginx-em-json
description: ""
tags: ["nginx", "nginx logs", "nginx json logs", "elk stack", "grafana", "datadog", "observabilidade", "logging", "devops"]
bannerImage: "https://i.ibb.co/9mwJ1Gft/nginx-log.png"
---
Gerar logs do nginx em formato JSON facilita demais as análises e o monitoramento quando você integra com ferramentas como ELK, Grafana, Datadog, etc.

Pra configurar basta adicionar no "http{}" uma nova definição de `log_format` no arquivo de configuração do Nginx, `nginx.conf`.

```nginx
log_format json_logs escape=json
  '{'
    '"time":"$time_iso8601",'
    '"remote_addr":"$remote_addr",'
    '"request":"$request",'
    '"status":$status,'
    '"body_bytes_sent":$body_bytes_sent,'
    '"request_time":$request_time,'
    '"http_referer":"$http_referer",'
    '"http_user_agent":"$http_user_agent"'
  '}';

access_log /var/log/nginx/access_json.log json_logs;
```

Depois disso, os acessos vão ser registrados nesse novo arquivo `/var/log/access_json.log` no formato JSON.

Assim, você consegue visualizar os logs de forma estruturada em ferramentas de análise, outras vantagens de usar JSON no log do Nginx:
- Integração mais fácil com sistemas de observabilidade.
- Padronização de logs entre diferentes serviços.
- Melhor desempenho nas consultas e dashboards.
- Menos trabalho de parsing por conta da chave-valor.

### Teste
Feito a configuração vamos subir um container com um arquivo do nginx local. E no final visualizar o log.

```bash
docker run -d --name nginx-json \
  -p 8080:80 \
  -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro \
  nginx:alpine

```

depois fazemos algumas requisições para verficiar o arquivo:

```bash
curl http://localhost:8080/
curl http://localhost:8080/test

```

e taí:
![teste nginx json logs](https://i.ibb.co/8gNMJDBs/teste.png)
