PORTNAME=	code-server
DISTVERSION=	4.101.2
CATEGORIES=	www
MASTER_SITES= https://github.com/0x1eef/myports/releases/download/${DISTNAME}/:node_modules
DISTFILES=	vscode-node-modules-${DISTVERSION}.tar.gz:node_modules \
		code-server-node-modules-${DISTVERSION}.tar.gz:node_modules
DIST_SUBDIR=	${PORTNAME}

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
FETCH_DEPENDS=	git:devel/git

USES= 		tar:tgz shebangfix python:3.0+
USE_RC_SUBR=	${PORTNAME}

USE_GITHUB=	yes
GH_ACCOUNT=	coder
GH_TAGNAME=	v${DISTVERSION}

post-fetch:
	@${MKDIR} ${WRKDIR}/work/${DISTNAME}
	git clone https://github.com/microsoft/vscode ${WRKSRC}/lib/vscode

post-extract:
	# Move node_modules to work directory
	cp -Rfv work/work/${PORTNAME}-${DISTVERSION}/ ${WRKSRC}/

	# Remove unnecessary files
	${RM} ${WRKSRC}/node_modules/pem/bin/test_build_openssl.sh
	${RM} ${WRKSRC}/lib/vscode/node_modules/vscode-sqlite3/Dockerfile
	${RM} ${WRKSRC}/lib/vscode/node_modules/vscode-sqlite3/tools/docker/architecture/linux-arm64/Dockerfile
	${RM} ${WRKSRC}/lib/vscode/node_modules/spdlog/deps/spdlog/format.sh
	${RM} ${WRKSRC}/lib/vscode/node_modules/spdlog/deps/spdlog/tests/install_libcxx.sh
	${RM} ${WRKSRC}/lib/vscode/node_modules/spdlog/deps/spdlog/bench/latency/compare.sh

post-patch:
	@${REINPLACE_CMD} -e 's|process.platform|"linux"|g' ${WRKSRC}/lib/vscode/out/vs/platform/terminal/node/ptyHostMain.js

.include <bsd.port.mk>
