PORTNAME=	code-server
DISTVERSION=	4.101.2
CATEGORIES=	www
MASTER_SITES= https://github.com/0x1eef/myports/releases/download/${PORTNAME}-${DISTVERSION}/:node_modules
DISTFILES=	vscode-node-modules-${DISTVERSION}${EXTRACT_SUFX}:node_modules \
		code-server-node-modules-${DISTVERSION}${EXTRACT_SUFX}:node_modules
DIST_SUBDIR=	${PORTNAME}

MAINTAINER=	0x1eef@protonmail.com
COMMENT=	Run VS Code on any machine anywhere and access it in the browser

LICENSE=	MIT
LICENSE_FILE=	${WRKSRC}/LICENSE

LIB_DEPENDS= 	libinotify.so:devel/libinotify
RUN_DEPENDS=	npm-node22>0:www/npm-node22
FETCH_DEPENDS=	git:devel/git

NO_BUILD= yes

USES= 		tar:tgz shebangfix python:3.0+
USE_RC_SUBR=	${PORTNAME}

USE_GITHUB=	yes
GH_ACCOUNT=	coder
GH_TAGNAME=	v${DISTVERSION}

post-fetch:
	[ -d ${_DISTDIR}/vscode ] || \
	git clone https://github.com/microsoft/vscode ${_DISTDIR}/vscode
	${RM} -r ${_DISTDIR}/vscode/.git

post-extract:
	@${CP} -Rf ${_DISTDIR}/vscode/ ${WRKSRC}/lib/vscode
	${RM} ${WRKSRC}/node_modules/pem/bin/test_build_openssl.sh
	${RM} ${WRKSRC}/lib/vscode/node_modules/vscode-sqlite3/Dockerfile
	${RM} ${WRKSRC}/lib/vscode/node_modules/vscode-sqlite3/tools/docker/architecture/linux-arm64/Dockerfile
	${RM} ${WRKSRC}/lib/vscode/node_modules/spdlog/deps/spdlog/format.sh
	${RM} ${WRKSRC}/lib/vscode/node_modules/spdlog/deps/spdlog/tests/install_libcxx.sh
	${RM} ${WRKSRC}/lib/vscode/node_modules/spdlog/deps/spdlog/bench/latency/compare.sh

post-patch:
	@${REINPLACE_CMD} -e 's|process.platform|"linux"|g' ${WRKSRC}/lib/vscode/out/vs/platform/terminal/node/ptyHostMain.js

do-install:
	${MKDIR} ${STAGEDIR}${DATADIR}
	${CP} -R ${WRKSRC}/* ${STAGEDIR}${DATADIR}
	${RLN} ${STAGEDIR}${DATADIR}/out/node/entry.js ${STAGEDIR}${PREFIX}/bin/${PORTNAME}

.include <bsd.port.mk>
