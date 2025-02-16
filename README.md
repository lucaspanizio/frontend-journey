<h1 align="left">Frontend Journey</h1>
<p align="left">  
  Aplicação web em constante evolução, desenvolvida para exemplificar o uso de diversas tecnologias e padrões modernos no desenvolvimento frontend. Este projeto aborda conceitos fundamentais e avançados para criação de interfaces eficientes e bem estruturadas como:
</p>

|                                   |                                    |
| --------------------------------- | ---------------------------------- |
| Alias path                        | ESlint e Prettier                  |
| Namespace import                  | Atomic Design                      |
| Compound Pattern                  | State Managers (Context API, Redux, Zustand) |
| Schemas Yup                       | Code spliting (manual chunks)      |
| Deploy com Docker                 | Error Boundary                     |


<p align="center">
  <a href="#-pré-requisitos">☝ Pré-Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">⚡ Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-deploy">🚀 Deploy</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">📜 Licença</a>
  <br><br>

## ☝ Pré-Requisitos

É necessário instalar previamente o <a href="https://nodejs.org/en">Node.js</a> e o <a href="https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable">Yarn</a>.
</br></br>

## ⚡ Como executar

Clone este repositório em sua máquina

```bash
git clone https://github.com/lucaspanizio/frontend-journey.git
```

Acesse o diretório da aplicação

```bash
cd frontend-journey
```

Faça a instalação das dependências

```bash
yarn
```

Execute a aplicação em modo de desenvolvimento

```bash
yarn dev
```

Acesse http://localhost:4000 em seu navegador preferido.
<br><br>

## 🚀 Deploy

Na raiz do projeto, disponibilizei o script `deploy.sh`, que irá realizar o build da imagem e subir um container no Docker automaticamente. Caso o container já exista, o script foi preparado para substituí-lo com a nova imagem da aplicação.
Portanto, para realizar o deploy da aplicação no Docker, siga os seguintes passos:

_Obs.: para ter a aplicação em produção sem um servidor Linux, aconselho utilizar [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/pt-br/windows/wsl/install)_

<b>1.</b> No terminal de um ambiente Linux com Docker instalado, acesse o diretório da aplicação e execute o comando abaixo:

```bash
. deploy.sh
```

<b>2.</b> Consulte se o container está em execução com o seguinte comando:

```bash
docker ps
```

Se tudo correu bem você deve visualizar algo assim:

![image](https://github.com/user-attachments/assets/5785d278-c328-4775-9746-aac7e2a1528e)

Isso significa que o container foi criado e está em execução.

<b>3.</b> Acesse a aplicação em seu navegador preferido através da URL `http://ip_do_servidor:4000`.
No meu exemplo, acesso com localhost pois o Docker está instalado em minha própria máquina, mas se utilizou um servidor de fato, utilize o IP do mesmo.
</br></br>

## 📜 Licença

<p>Esse projeto está sob a <a href="https://github.com/lucaspanizio/frontend-journey/blob/main/LICENSE">licença MIT.<br>
<a href="https://github.com/lucaspanizio/frontend-journey/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

#### Desenvolvido por José Lucas Panizio 🖖

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lucaspanizio/)](https://www.linkedin.com/in/lucaspanizio/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-ff0000?style=flat-square&labelColor=ff0000&logo=gmail&logoColor=white&link=mailto:lucaspanizio@gmail.com)](mailto:lucaspanizio@gmail.com)
