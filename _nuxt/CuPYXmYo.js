const e=`---
title: "Criando secrets com openssl [PT-BR]"
date: 2025-06-9
slug: criando-secrets-com-openssl
description: ""
tags: ["openssl", "secrets", "bash"]
bannerImage: "https://130e178e8f8ba617604b-8aedd782b7d22cfe0d1146da69a52436.ssl.cf1.rackcdn.com/heartbleed-openssl-vulnerability-critical-anymore-showcase_image-6-a-20383.jpg"
---

Eu já sabia que era possível gerar valores aleatórios com openssl, mas uma resposta qualquer
de alguma llm me fez relembrar a possibilidade de utilizar o comando para senhas/segredos.

Então copie e cole na sua variável do .env ou em algum gerenciador, resultado de:

\`\`\`bash
$ openssl rand -hex 32
\`\`\`

O output deve ser algo assim:
\`2d2dae956b8c5333280585f817bf457d9f6d94b87b2261e6cc3250846a54e422\`

Pode ser também \`-base64\`. Combine isso com algum plano de rotação(ex.: a cada 6 meses) para gerenciar configurações antigas.
`;export{e as default};
