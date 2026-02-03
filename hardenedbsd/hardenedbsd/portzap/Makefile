PORTNAME=           portzap
PORTVERSION=        2.2.0
DISTVERSIONPREFIX=  v
CATEGORIES=         hardenedbsd

MAINTAINER=     0x1eef@hardenedbsd.org
COMMENT=        Manages a local copy of the hardenedbsd ports tree
WWW=            https://git.hardenedbsd.org/0x1eef/portzap

LICENSE=        BSD0CLAUSE

RUN_DEPENDS=	rsync:net/rsync git:devel/git

USE_GITLAB=     yes
GL_SITE=	https://git.hardenedbsd.org
GL_ACCOUNT=     0x1eef
GL_PROJECT=	portzap
GL_COMMIT=	8de536f44d86dd2b22ba2c2b26b8dd0481bd3692

BATCH=          yes
NO_ARCH=        yes
NO_BUILD=	yes

do-install:
	${MAKE} -C ${WRKSRC} PREFIX=${STAGEDIR}${PREFIX} install

.include <bsd.port.mk>
