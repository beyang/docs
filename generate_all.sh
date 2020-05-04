#!/bin/bash

cd $(dirname "${BASH_SOURCE[0]}")

mkdir -p ./docdump/all

SOURCES=(builtin man1 man8 manual)
for SOURCE in ${SOURCES[@]}; do
    cp ./docdump/${SOURCE}/*.txt ./docdump/all/
done
