#!/bin/bash

var3=$1
 if [ -d "$var3" ]
     then
         num=`ls -l $var3 | wc -l`
         echo "O $var3 tem $num arquivos"
 else
    echo "O argumento $var3 não é um diretório"
 fi