---
title: "C de Claude"
date: 2025-10-27
slug: c-de-claude
description: ""
tags: ["C", "claude", "sockets", "threads", "devops"]
bannerImage: "https://i.ibb.co/5XkkqmhS/eocabavaiendoidae.png"
---
Aqui o primeiro texto que fiz sobre esse assunto: [Desenvolvendo um projeto em C para DevOps](https://dev.evttenorio.com/posts/c-papo-de-coach).

Esses últimos dias foram importantes para relembrar a sintaxe e todo o processo de compilar, executar, declarar os tipos e fazer alguns exercícios. Agora o objetivo é a teoria de um assunto que eu estudei muito por cima na época que precisei, **sockets.**

Fui pesquisar alguma coisa sobre isso no Youtube, tentei escolher um vídeo e logo pensei em fazer diferente: LLM.

Para mim a Claude é excelente em assuntos técnicos, então fui no prompt e mandei bala, o resultado foi muito interessante: recomendou livros com os capítulos específicos, estruturou o assunto, recomendou *4 man pages(`man 7 socket`, `man 2 bind`, `man 3 pthread_create` e `man pthread_detach`)* e sem exemplos de códigos. Coisa linda, né?

<center><img src="https://i.ibb.co/yFThpphp/man-socket.png" width=70%/></center>

Posteriormente vou criar as funções em código, implementar threads, e com base na resposta da Claude, entregar os seguintes critérios de avaliação:

- Servidor aceita 10+ clientes simultâneos
- Cada cliente recebe respostas independentemente
- Não pode vazar memória, zero memory leaks no Valgrind
- Debugging prático

Tudo organizado, agora é ler, testar e concluir, flw.