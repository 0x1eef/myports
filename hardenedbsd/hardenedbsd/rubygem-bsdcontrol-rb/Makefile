PORTNAME=       bsdcontrol-rb
PORTVERSION=    0.3.0
CATEGORIES=     hardenedbsd rubygems
MASTER_SITES=   RG
DISTNAME=	bsdcontrol.rb-${PORTVERSION}

MAINTAINER=     0x1eef@protonmail.com
COMMENT=        Ruby bindings for libhbsdcontrol
WWW=            https://git.hardenedbsd.org/0x1eef/bsdcontrol.rb

LICENSE=        BSD0CLAUSE
LICENSE_FILE=   ${WRKSRC}/LICENSE

USES=           gem

post-install:
	rm -rf ${STAGEDIR}/${PREFIX}/${EXT_DIR}

.include <bsd.port.mk>
