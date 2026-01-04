PORTNAME=           ctrl
PORTVERSION=        3.0.0
DISTVERSIONPREFIX=  v
CATEGORIES=         hardenedbsd

MAINTAINER=     0x1eef@protonmail.com
COMMENT=        An alternative implementation of hbsdcontrol(8)
WWW=            https://git.hardenedbsd.org/0x1eef/ctrl
LICENSE=        BSD0CLAUSE
LICENSE_FILE=   ${WRKSRC}/LICENSE

USES=           go:modules
GO_PKGNAME=     ctrl

DISTFILES=      ctrl-v${PORTVERSION}.tar.gz
MASTER_SITES=   https://git.hardenedbsd.org/0x1eef/ctrl/-/archive/v${PORTVERSION}/

WRKSRC=         ${WRKDIR}/ctrl-v${PORTVERSION}

GO_MOD_DIST=    gitlab

GO_TARGET=      ./cmd/ctrl/
GO_ENV+=        GOMAXPROCS=1
GO_ENV+=        GOPROXY=direct
PLIST_FILES=    bin/ctrl share/man/man8/ctrl.8.gz

do-install:
	@${ECHO_MSG} "===> Running project's own make install in ${GO_WRKSRC}"
	@(cd ${GO_WRKSRC}; \
		${SETENVI} ${MAKE_ENV} ${GO_ENV} ${MAKE_CMD} install PREFIX=${STAGEDIR}${PREFIX})

.include <bsd.port.mk>
