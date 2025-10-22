## About

A collection of unofficial FreeBSD / HardenedBSD / OpenBSD ports.

## Ports

### FreeBSD

* [www/code-server](freebsd/www/code-server/) <br>
  Provides a pre-built release of [code-server](https://github.com/coder/code-server)
* [www/thelounge](freebsd/www/thelounge/) <br>
  Provides a pre-built release of [thelounge.chat](https://thelounge.chat)
* [mail/hydroxide](freebsd/mail/hydroxide) <br>
  A third-party, open-source ProtonMail bridge

### HardenedBSD

* [hardenedbsd/hbcontrol](hardenedbsd/hardenedbsd/hbcontrol/) <br>
  An alternative to the hbsdcontrol(8) utility
* [hardenedbsd/portzap](hardenedbsd/hardenedbsd/portzap) <br>
  A utility that manages a local copy of the
  [HardenedBSD ports tree](https://git.hardenedbsd.org/hardenedbsd/ports)
* [hardenedbsd/sourcezap](hardenedbsd/hardenedbsd/sourcezap) <br>
  A utility that manages a local copy of the
  [HardenedBSD source tree](https://git.hardenedbsd.org/hardenedbsd/ports)
* [hardenedbsd/rubygem-bsdcontrol-rb](hardenedbsd/hardenedbsd/rubygem-bsdcontrol-rb/) <br>
  Ruby bindings for libhbsdcontrol(3)

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
