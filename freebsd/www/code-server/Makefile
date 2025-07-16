PORTNAME=	code-server
DISTVERSION=	4.101.2
CATEGORIES=	www
MASTER_SITES= https://registry.npmjs.org/code-server/-/

MAINTAINER=	0x1eef@protonmail.com
COMMENT=	Run VS Code on any machine anywhere and access it in the browser

LICENSE=	MIT
LICENSE_FILE=	${WRKSRC}/LICENSE

BUILD_DEPENDS=  npm-node22>0:www/npm-node22 \
 				yarn-node22>0:www/yarn-node22 \
 				pkgconf>0:devel/pkgconf \
 				libsecret>0:security/libsecret \
 				libxkbfile>0:x11/libxkbfile \
 				libX11>0:x11/libX11 \
 				libinotify>0:devel/libinotify
LIB_DEPENDS= 	libinotify.so:devel/libinotify
RUN_DEPENDS=	npm-node22>0:www/npm-node22

USES= 		tar:tgz shebangfix python:3.0+
USE_RC_SUBR=	${PORTNAME}

WRKSRC=		${WRKDIR}/package

do-build:
	cd ${WRKSRC} && ${SETENV} ${MAKE_ENV} npm i --omit dev --unsafe-perm

pre-install:
	${RM} ${WRKSRC}/node_modules/pem/bin/test_build_openssl.sh
	${RM} ${WRKSRC}/lib/vscode/node_modules/vscode-sqlite3/Dockerfile
	${RM} ${WRKSRC}/lib/vscode/node_modules/vscode-sqlite3/tools/docker/architecture/linux-arm64/Dockerfile
	${RM} ${WRKSRC}/lib/vscode/node_modules/spdlog/deps/spdlog/format.sh
	${RM} ${WRKSRC}/lib/vscode/node_modules/spdlog/deps/spdlog/tests/install_libcxx.sh
	${RM} ${WRKSRC}/lib/vscode/node_modules/spdlog/deps/spdlog/bench/latency/compare.sh

do-install:
	${MKDIR} ${STAGEDIR}${DATADIR}
	${CP} -R ${WRKSRC}/* ${STAGEDIR}${DATADIR}
	${RLN} ${STAGEDIR}${DATADIR}/out/node/entry.js ${STAGEDIR}${PREFIX}/bin/${PORTNAME}

post-patch:
	@${REINPLACE_CMD} -e 's|process.platform|"linux"|g' ${WRKSRC}/lib/vscode/out/vs/platform/terminal/node/ptyHostMain.js

.include <bsd.port.mk>
