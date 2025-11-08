const e=`---
title: "Resolvendo problemas de geolocalização em Serverless Functions na Vercel"
date: 2025-11-09
slug: resolvendo-problemas-de-geolocalizacao-em-serverless-functions-na-vercel
description: ""
tags: ["vercel", "geo-blocking", "serveless functions"]
bannerImage: "https://i.ibb.co/fzS1w35j/geoblocking-vercel.png"
---

Ao desenvolver APIs que consomem conteúdo de plataformas de mídia, você pode encontrar uma inconsistência entre ambiente local e produção que não se enquadram nos problemas usuais (CORS, rate limiting, autenticação, etc.). A causa pode ser restrição geográfica de conteúdo.

Plataformas como YouTube, Spotify e serviços de streaming aplicam ***geo-blocking*** devido a contratos regionais de distribuição. Quando sua aplicação roda localmente (provavelmente IP residencial no Brasil), o conteúdo está disponível. Porém, quando deployada em serverless functions, a execução pode ocorrer em data centers de outras regiões onde esse conteúdo está bloqueado.

## Solução na Vercel

A Vercel permite especificar regiões de execução para suas functions. Adicione ao vercel.json:

\`\`\`json
{
  "functions": {
    "api/**/*.js": {
      "regions": ["gru1"]
    }
  }
}
\`\`\`

Onde \`gru1\` representa São Paulo. Outras opções incluem \`iad1\` (Washington) e \`cle1\` (Cleveland).

Outra alternativa é configurar por função:

\`\`\`json
export const config = {
  regions: ['gru1']
};
\`\`\`

Isso garante que as requisições originem-se da mesma região geográfica do seu ambiente de desenvolvimento, resolvendo bloqueios por geolocalização.`;export{e as default};
