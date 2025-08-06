PORTNAME=	thelounge
DISTVERSION=	4.4.3
CATEGORIES=	devel
DIST_SUBDIR=	thelounge

BATCH=	1
MAINTAINER=	0x1eef@protonmail.com
COMMENT=	Maintainer's makefile for thelounge

USE_GITHUB=	yes
GH_ACCOUNT=	thelounge
GH_PROJECT=	thelounge
GH_TAGNAME=	v${DISTVERSION}

USES=		tar:tgz shebangfix
BUILD_DEPENDS=	yarn>0:www/yarn

do-build:
	cd ${WRKSRC} && \
		yarn install && \
		NODE_ENV=production yarn build && \
		cp LICENSE dist/LICENSE && \
	  	tar -czf ../thelounge-${DISTVERSION}.tgz node_modules/ public/ dist/ package.json index.js
	@${ECHO_MSG} "${WRKDIR}/thelounge-${DISTVERSION}.tgz"


.include <bsd.port.mk>
