#!/bin/bash

 loc=$1
 ext=$2

 data=$(date +%F)

 cd $loc

 for var6 in `ls *.$ext`
     do
         echo "Renomeando $var6 para ${data}-${var6}"
         mv $var6  ${data}-${var6}
     done