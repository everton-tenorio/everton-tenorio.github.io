const n=`---
title: " Extracting Information from PDFs in Markdown Format with Mistral OCR "
date: 2025-03-06
slug:  extracting-information-from-pdfs-in-markdown-format-with-mistral-ocr
description: ""
tags: ["pdf", "llm", "mistral ocr", "python"]
bannerImage: "https://www.techzine.eu/wp-content/uploads/2024/09/Mistral-AI.jpg"
---

A few hours ago, Mistral.ai launched a multimodal model called Mistral OCR, an Optical Character Recognition (OCR) API that can transform any PDF into a text file, making it easier to ingest into AI models.

Being multimodal, it is possible to extract any information from PDFs, whether it's text or images, and output it in Markdown format. Access to obtain an API key is currently available for free at [https://console.mistral.ai/api-keys](https://console.mistral.ai/api-keys).

To demonstrate, I thought of a simple idea: querying the balance sheet of a company listed on the B3 (the Brazilian stock exchange). I chose Totvs:

![Totvs](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x3kxbq7m5i4flfjx82mh.png)

![Balanco Patrimonial Totvs](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m0jsknektnfogwp3xsxv.png)

## Let's move on to the code:

What needs to be done is access the [OCR Mistral API](https://docs.mistral.ai/api/#tag/ocr) to check what should be passed as a payload via POST.

\`\`\`python
import requests
!pip install environs
from environs import Env

env = Env()
env.read_env()
API_KEY = env("API_KEY")

URL = "https://api.mistral.ai/v1/ocr"

DOCUMENT_URL = "https://api.mziq.com/mzfilemanager/v2/d/d3be5d49-62e7-4def-a3e1-ab25ff09f153/47e88f32-4521-452c-0fbc-c378770b451c?origin=1"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

payload = {
    "model": "mistral-ocr-2503",
    "id": "mistral-ocr-latest",
    "document": { 
        "type": "document_url",
        "document_url": DOCUMENT_URL,
        "document_name": "balanco_patrominal_totvs.pdf",  
    }
}

response = requests.post(URL, json=payload, headers=headers)

if response.status_code == 200:
    result = response.json()
    print("OCR:")
    print(result)
else:
    print(f"Error {response.status_code}: {response.text}")


with open('markdown_file.md', '+w') as f:
  f.write(result.get('pages')[28].get('markdown'))
\`\`\`

Here is the result:

![ocr mistral](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iyn34w1bvb6ci5iv37k1.png)

The goal of obtaining information in Markdown aligns with what we're seeing regarding the growth of GenAI, as this type of formatting has been widely used to train various LLM models. Furthermore, Markdown provides flexibility for generating reports that can be viewed or even converted into other forms of documentation.

Companies and developers will likely use Mistral OCR with a RAG system (also known as Retrieval Augmented Generation) to use multimodal documents as input to an LLM. There are many potential use cases, don't you agree?`;export{n as default};
