## About

A collection of unofficial FreeBSD / HardenedBSD / OpenBSD ports.

## Ports

### FreeBSD

* [www/code-server](freebsd/www/code-server/) <br>
  Provides a pre-built release of [code-server](https://github.com/coder/code-server)
* [mail/hydroxide](freebsd/mail/hydroxide) <br>
  A third-party, open-source ProtonMail bridge

### HardenedBSD

* [hardenedbsd/portzap](hardenedbsd/hardenedbsd/portzap) <br>
  A utility that manages a local copy of the
  [hardenedbsd ports tree](https://git.hardenedbsd.org/hardenedbsd/ports)
* [hardenedbsd/sourcezap](hardenedbsd/hardenedbsd/sourcezap) <br>
  A utility that manages a local copy of the
  [hardenedbsd source tree](https://git.hardenedbsd.org/hardenedbsd/ports)

### OpenBSD

None so far.

## Install

The root directory includes a [Makefile](Makefile) that can install
the ports from this repository into /usr/ports. The install target
will replace ports that already exist in /usr/ports.

    root@localhost# make install

## Sources

* [github.com/@0x1eef](https://github.com/0x1eef/myports)
* [gitlab.com/@0x1eef](https://gitlab.com/0x1eef/myports)
* [git.hardenedbsd.org/@0x1eef](https://git.hardenedbsd.org/0x1eef/myports)
