PORTNAME=           sourcezap
PORTVERSION=        2.0.1
DISTVERSIONPREFIX=  v
CATEGORIES=         hardenedbsd

MAINTAINER=     0x1eef@hardenedbsd.org
COMMENT=        Manages a local copy of the hardenedbsd source tree
WWW=            https://git.hardenedbsd.org/0x1eef/sourcezap

LICENSE=        BSD0CLAUSE

RUN_DEPENDS=	rsync:net/rsync git:devel/git

USE_GITLAB=     yes
GL_SITE=	https://git.hardenedbsd.org
GL_ACCOUNT=     0x1eef
GL_PROJECT=	sourcezap
GL_COMMIT=	d701be885248ed4ae5879b60632c86fd0e9216f6

BATCH=          yes
NO_ARCH=        yes
NO_BUILD=	yes

do-install:
	${MAKE} -C ${WRKSRC} PREFIX=${STAGEDIR}${PREFIX} install

.include <bsd.port.mk>
