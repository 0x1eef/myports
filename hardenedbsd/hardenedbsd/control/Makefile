PORTNAME=           control
PORTVERSION=        0.3.5
DISTVERSIONPREFIX=  v
CATEGORIES=         hardenedbsd

MAINTAINER=     0x1eef@protonmail.com
COMMENT=        An alternative implementation of hbsdcontrol(8)
WWW=            https://github.com/0x1eef/control
LICENSE=        BSD0CLAUSE
LICENSE_FILE=   ${WRKSRC}/LICENSE

USES=           go:modules
GO_PKGNAME=     control
GO_MODULE=      github.com/0x1eef/control

GH_ACCOUNT=     0x1eef
GH_PROJECT=     control

DISTFILES=      ${DISTVERSIONFULL}${EXTRACT_SUFX}
MASTER_SITES=   https://github.com/${GH_ACCOUNT}/${GH_PROJECT}/archive/refs/tags/

WRKSRC=         ${WRKDIR}/${GH_PROJECT}-${PORTVERSION}

GO_MOD_DIST=    github

GO_TARGET=      ./cmd/control/
GO_ENV+=        GOMAXPROCS=1
GO_ENV+=        GOPROXY=direct
PLIST_FILES=    bin/control share/man/man8/control.8.gz

do-install:
	@${ECHO_MSG} "===> Running project's own make install in ${GO_WRKSRC}"
	@(cd ${GO_WRKSRC}; \
		${SETENVI} ${MAKE_ENV} ${GO_ENV} ${MAKE_CMD} install PREFIX=${STAGEDIR}${PREFIX})

.include <bsd.port.mk>