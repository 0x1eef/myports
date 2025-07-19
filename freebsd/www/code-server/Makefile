PORTNAME=	code-server
DISTVERSION=	4.101.2
CATEGORIES=	www
MASTER_SITES= https://github.com/0x1eef/myports/releases/download/${PORTNAME}-${DISTVERSION}/:codeserver
DISTFILES=	code-server-${DISTVERSION}.tgz:codeserver
DIST_SUBDIR=	${PORTNAME}

MAINTAINER=	0x1eef@protonmail.com
COMMENT=	Run VS Code on any machine anywhere and access it in the browser

LICENSE=	MIT
LICENSE_FILE=	${WRKSRC}/release/LICENSE

LIB_DEPENDS= 	libinotify.so:devel/libinotify
RUN_DEPENDS=	npm-node22>0:www/npm-node22

NO_BUILD=	yes

USES= 		tar:tgz shebangfix python:3.0+
USE_RC_SUBR=	${PORTNAME}

post-patch:
	@${REINPLACE_CMD} -i '' 's|process.platform|"linux"|g' ${WRKSRC}/release/lib/vscode/out/vs/platform/terminal/node/ptyHostMain.js

do-install:
	${MKDIR} ${STAGEDIR}${DATADIR}
	${CP} -R ${WRKSRC}/release/* ${STAGEDIR}${DATADIR}
	${RLN} ${STAGEDIR}${DATADIR}/out/node/entry.js ${STAGEDIR}${PREFIX}/bin/${PORTNAME}

.include <bsd.port.mk>
