#!/bin/bash

read -p "Digite o caminho de um arquivo ou diretório:" var1
 if [ -f "$var1" ]
     then
         echo "$var1 é um arquivo comum"
 elif [ -d "$var1" ]
     then
         echo "$var1 é um diretório"
 else
     echo "$var1 é alguma coisa kkk"
 fi
 ls -l $var1