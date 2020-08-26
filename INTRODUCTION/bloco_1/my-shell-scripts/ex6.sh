#!/bin/bash

 var2=$1

 if [ -f "$var2" ]
     then
         echo "$var2 é um arquivo comum"
 elif [ -d "$var2" ]
     then
         echo "$var2 é um diretório"
 else
     echo "$var2 é alguma coisa kkk"
 fi
 ls -l $var2