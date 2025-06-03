---
title: "Deploy Nuxt on AWS with Terraform and GitHub Actions"
date: 2025-05-3
slug: deploy-nuxt-on-aws-with-terraform-and-github-actions
description: ""
tags: ["AWS deployment", "Terraform DevOps", "GitHub Actions CI/CD", "Infrastructure as Code", "Nuxt"]
bannerImage: ""
---

Terraform, created by HashiCorp, is one of the leading tools for professionals such as DevOps Engineers, Cloud Architects, and System Administrators. Its goal is to provision and manage infrastructure in a declarative, automated, and idempotent way, allowing you to create, modify, or destroy resources across providers like AWS, Azure, GCP, and others.

To demonstrate Terraform, I developed a simple application using Nuxt, a framework based on Vue.js. The application is a static site, but it could easily serve as a Minimum Viable Product (MVP) for a production server demo or even a more robust and planned scenario.

### 1. CI with GitHub Actions
I used GitHub Actions to create a basic Continuous Integration (CI) pipeline. The workflow builds the Nuxt project, generates a tarball as an artifact, and makes it available as a downloadable release. I simplified this approach to simulate the containerization stage, where the Docker image build could be pushed to a registry like Docker Hub or Amazon ECR.

### 2. Terraform for Continuous Deployment
Terraform comes into play in the Continuous Deployment stage (in this case, executed manually for demonstration purposes). It provisions the necessary AWS infrastructure to host the application, automating the following steps:

⚬ Retrieves the latest available AMI on AWS.  
⚬ Sets up access using an SSH key pair.  
⚬ Creates and configures VPC, subnets, and Security Group rules.  
⚬ Launches an EC2 instance with service configuration (Nginx and Docker), storage (EBS), and tagging.  
⚬ Deploys the Nuxt.js application on a real AWS cloud infrastructure.

The server flow includes:

· The generated tarball contains the Nuxt build and a Dockerfile.  
· On the server, the tarball is extracted, the Docker image is built and executed.  
· A configuration file (`.conf`) is used by Nginx, which acts as a reverse proxy, redirecting traffic from port 3000 (Docker) to port 80 (web).

Watch until the end — with just a few Terraform commands, config files, and an SSH key pair, I deployed a web application in an automated way. Terraform’s idempotency is a key feature that allows modifying the current infrastructure state without recreating it from scratch. For example, I can add more security configurations or include new applications.

**Links:**  
- Code on GitHub: https://lnkd.in/dRN9V6WE  
- Nuxt: https://nuxt.com/  
- GitHub Actions: https://lnkd.in/dK4Gqnng  
- Terraform Registry | AWS Providers: https://lnkd.in/dUsyvJXA  
- AWS Free Tier: https://lnkd.in/dRsCcDYy  
- Fish Shell: https://fishshell.com/
