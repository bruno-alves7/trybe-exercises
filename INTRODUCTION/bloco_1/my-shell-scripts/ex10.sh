#!/bin/bash

data=$(date +%F)

   for var5 in `ls *.jpg`
    do
       mv $var5 ${data}-${var5}
    done