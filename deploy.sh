#!/bin/bash

export TAG=$(date +'%d%m%Y')

# Gera uma nova imagem sem utilizar cache
docker compose build --no-cache

# Sobe um container com a nova imagem. 
# Também substitui o container se já estiver em execução.
docker compose up -d --force-recreate
