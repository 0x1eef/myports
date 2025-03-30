PORTNAME=           bones
PORTVERSION=        0.1.0
DISTVERSIONPREFIX=  v
CATEGORIES=         sysutils

MAINTAINER=     0x1eef@protonmail.com
COMMENT=        Clone, pull, and install skeletons from a git repository
WWW=            https://github.com/0x1eef/bones

LICENSE=        BSD0CLAUSE

RUN_DEPENDS=	doas:security/doas git:devel/git

USE_GITHUB=     yes
GH_ACCOUNT=     0x1eef
GH_PROJECT=	bones
GH_TAGNAME=	c380aee

BATCH=          yes
NO_ARCH=        yes
NO_BUILD=	yes

do-install:
	${MAKE} -C ${WRKSRC} PREFIX=${STAGEDIR}${PREFIX} install

.include <bsd.port.mk>
