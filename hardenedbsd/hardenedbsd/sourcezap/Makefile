PORTNAME=           sourcezap
PORTVERSION=        2.1.0
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
GL_COMMIT=	19d703aebac4c395d0c73e421df45a5e2f8ffa01

BATCH=          yes
NO_ARCH=        yes
NO_BUILD=	yes

do-install:
	${MAKE} -C ${WRKSRC} PREFIX=${STAGEDIR}${PREFIX} install

.include <bsd.port.mk>
