#!/bin/bash

fp="/home/huginn/Projetos/trybe-exercises/my-shell-scripts/ex4.sh"
if [ -e "$fp" ]
     then
         echo "O caminho $fp está habilitado!"
 fi
 if [ -w "$fp" ]
     then
         echo "Você tem permissão para editar $fp"
     else
         echo "Você não tem permissão para editar $fp"
 fi