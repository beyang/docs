#!/bin/bash
#
# Rough script to dump builtin help docs as text files

cd $(dirname "${BASH_SOURCE[0]}")

# Generate builtins
BUILTINS=(
'alias'
'bg'
# 'bind'
'break'
'builtin'
'caller'
'cd'
'command'
'compgen'
'complete'
'compopt'
'continue'
'declare'
'dirs'
'disown'
'echo'
'enable'
'eval'
'exec'
# 'exit'
'export'
'fc'
'fg'
'getopts'
'hash'
'help'
'history'
'jobs'
'kill'
'let'
# 'local'
'logout'
'mapfile'
'popd'
'printf'
'pushd'
'pwd'
'read'
'readarray'
'readonly'
'return'
'set'
'shift'
'shopt'
'source'
'test'
'times'
'trap'
'type'
'typeset'
'ulimit'
'umask'
'unalias'
'unset'
'wait'
)
OUT_DIR="docdump/builtin"
mkdir -p $OUT_DIR
for BUILTIN in ${BUILTINS[@]}; do
    echo $BUILTIN
    bash -c "$BUILTIN --help" > "$OUT_DIR/$BUILTIN.txt"
done
INTERACTIVE_BUILTINS=(
    'bind'
    'exit'
)
for BUILTIN in ${INTERACTIVE_BUILTINS[@]}; do
    echo $BUILTIN
    bash -i -c "$BUILTIN --help" > "$OUT_DIR/$BUILTIN.txt"
done
# TODO: local
