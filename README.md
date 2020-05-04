This repository contains a dump of documentation from various free and open-source programs.

## Licensing and attribution

All docs are in the `docdump` directory. Within the `docdump` directory, the documentation comes
from a variety of sources:

* The `man1` and `man8` directories were taken from the Ubuntu 18.04 man pages. These are available
  at the [Ubuntu Manpage Repository](http://manpages.ubuntu.com/manpages/bionic/). Man pages are
  licensed individually.
* The `builtin` directory contains documentation for Bash builtin commands generated with
  `${BUILTIN} --help` on Ubuntu 18.04. A copy of these is available at the [Ubuntu Manpage
  Repository](http://manpages.ubuntu.com/manpages/bionic/man7/bash-builtins.7.html).
* The `manual` directory contains documentation obtained from the `--help` option of OSS
  command-line programs. The documentation is typically distributed in the source code, which is
  linked to here.
  * `yarn` ([source](https://github.com/yarnpkg/yarn), [license](https://github.com/yarnpkg/yarn/blob/master/LICENSE))
  * `git` ([source](https://github.com/git/git), [license](https://github.com/git/git/blob/master/COPYING))
  * `docker` ([source](https://github.com/docker/docker-ce), [license](https://github.com/docker/docker-ce/blob/master/components/cli/LICENSE))
  * `psql` ([source](https://github.com/postgres/postgres/), [license](https://github.com/postgres/postgres/blob/master/COPYRIGHT))
  * `hash` ([source](https://github.com/freebsd/freebsd), [license](https://github.com/freebsd/freebsd/blob/master/COPYRIGHT))
