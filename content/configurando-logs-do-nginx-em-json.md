---
title: "Configurando Logs do Nginx em JSON"
date: 2025-09-23
slug: configurando-logs-do-nginx-em-json
description: ""
tags: ["nginx", "nginx logs", "nginx json logs", "elk stack", "grafana", "datadog", "observabilidade", "logging", "devops"]
bannerImage: "https://i.ibb.co/9mwJ1Gft/nginx-log.png"
---
Gerar logs do nginx em formato JSON facilita demais as análises e o monitoramento quando você integra com ferramentas como ELK, Grafana, Datadog, etc.

Pra configurar basta adicionar uma nova definição de `log_format` no arquivo de configuração do Nginx, `nginx.conf`.

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
