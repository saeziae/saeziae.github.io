#! /bin/sh
cp -r ../homepage/* ./
rm *.php
sed 's/fetchgraph/https:\/\/estela.moe\/fetchgraph/g' -i *.html
