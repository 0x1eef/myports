PORTNAME=	code-server
DISTVERSION=	4.102.2
CATEGORIES=	devel
MASTER_SITES= https://github.com/microsoft/vscode/archive/refs/tags/:vscode
DISTFILES= ${_VSCODE_VERSION}.tar.gz:vscode
DIST_SUBDIR=	code-server
_VSCODE_VERSION=1.102.2

BATCH=	1
MAINTAINER=	0x1eef@protonmail.com
COMMENT=	Maintainer's makefile for code-server

USE_GITHUB=	yes
GH_ACCOUNT=	coder
GH_PROJECT=	code-server
GH_TAGNAME=	v${DISTVERSION}

USES=		tar:tgz shebangfix python:3.0+
BUILD_DEPENDS=	npm-node22>0:www/npm-node22 rsync>0:net/rsync quilt>0:devel/quilt

post-patch:
	cd ${WRKSRC} && quilt push -a

post-extract:
	@${MKDIR} ${WRKSRC}/lib/vscode
	@${CP} -R ${WRKDIR}/vscode-${_VSCODE_VERSION}/ ${WRKSRC}/lib/vscode
	@${RM} -rf ${WRKDIR}/vscode-${_VSCODE_VERSION}

do-build:
	cd ${WRKSRC} && \
	  ELECTRON_SKIP_BINARY_DOWNLOAD=1 npm ci && \
	  npm run build && \
	  cd lib/vscode && ELECTRON_SKIP_BINARY_DOWNLOAD=1 npm ci && \
	  cd ../.. && VERSION=${DISTVERSION} npm run build:vscode && \
	  KEEP_MODULES=1 npm run release
	find ${WRKSRC} -type f -name '*.pyc' -delete
	cd ${WRKDIR} && \
	  tar -czf code-server-${DISTVERSION}.tgz ${PORTNAME}-${DISTVERSION}/release
	@${ECHO_MSG} "${WRKDIR}/code-server-${DISTVERSION}.tgz"

.include <bsd.port.mk>
