## About

A collection of unofficial FreeBSD / HardenedBSD / OpenBSD ports.

## Ports

### FreeBSD

* [www/code-server](freebsd/www/code-server/) <br>
  Provides a pre-built release of [code-server](https://github.com/coder/code-server)
* [devel/ruby-shims](freebsd/devel/ruby-shims) <br>
  Brings the OpenBSD port of the same name to FreeBSD
* [lang/ruby32-std](freebsd/lang/ruby32-std) <br>
  Provides a standard installation of Ruby 3.2
* [lang/ruby33-std](freebsd/lang/ruby33-std) <br>
  Provides a standard installation of Ruby 3.3
* [mail/hydroxide](freebsd/mail/hydroxide) <br>
  A third-party, open-source ProtonMail bridge
* [sysutils/bones](freebsd/sysutils/bones) <br>
  Clone, pull, and install skeletons from a git repository

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
