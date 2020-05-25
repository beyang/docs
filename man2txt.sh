#!/bin/bash
#
# Rough script to dump man pages as text files

cd $(dirname "${BASH_SOURCE[0]}")

MAN_FILES="$(ls /usr/share/man/man1 | grep '^[a-z-]*\.1\.gz$')"
OUT_DIR="docdump/man1"
for FILE in $MAN_FILES; do
    echo $FILE
    base="$(basename $FILE .1.gz)"
    # gunzip -c "/usr/share/man/man1/$FILE" | groff -mandoc -Tascii > "$OUT_DIR/$base.txt"
    man "$base" > "$OUT_DIR/$base.txt"
done

MAN_FILES="$(ls /usr/share/man/man8 | grep '^[a-z]*\.8\.gz$')"
OUT_DIR="docdump/man8"
for FILE in $MAN_FILES; do
    echo $FILE
    base="$(basename $FILE .8.gz)"
    # gunzip -c "/usr/share/man/man8/$FILE" | groff -mandoc -Tascii > "$OUT_DIR/$base.txt"
    man "$base" > "$OUT_DIR/$base.txt"
done
