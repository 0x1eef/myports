PORTNAME=	thelounge
DISTVERSION=	4.4.3
CATEGORIES=	www
MASTER_SITES= https://github.com/0x1eef/myports/releases/download/${PORTNAME}/:thelounge
DISTFILES=	${PORTNAME}-${DISTVERSION}.tgz:thelounge
DIST_SUBDIR=	${PORTNAME}

MAINTAINER=	0x1eef@protonmail.com
COMMENT=	The self-hosted web IRC client

LICENSE=	MIT
LICENSE_FILE=	${WRKDIR}/dist/LICENSE

RUN_DEPENDS=	node>0:www/node
NO_BUILD=	yes
USES= 		tar:tgz shebangfix
SHEBANG_FILES= ${WRKSRC}/node_modules/node-gyp/gyp/pylib/gyp/__init__.py \
		${WRKSRC}/node_modules/node-gyp/gyp/pylib/gyp/flock_tool.py \
		${WRKSRC}/node_modules/node-gyp/gyp/pylib/gyp/easy_xml_test.py \
		${WRKSRC}/node_modules/node-gyp/gyp/pylib/gyp/mac_tool.py \
		${WRKSRC}/node_modules/node-gyp/gyp/pylib/gyp/input_test.py \
		${WRKSRC}/node_modules/node-gyp/gyp/pylib/gyp/win_tool.py \
		${WRKSRC}/node_modules/node-gyp/gyp/pylib/gyp/common_test.py \
		${WRKSRC}/node_modules/node-gyp/gyp/pylib/gyp/MSVSSettings_test.py \
		${WRKSRC}/node_modules/node-gyp/gyp/pylib/gyp/generator/msvs_test.py \
		${WRKSRC}/node_modules/node-gyp/gyp/gyp_main.py \
		${WRKSRC}/node_modules/node-gyp/gyp/tools/graphviz.py \
		${WRKSRC}/node_modules/node-gyp/gyp/tools/pretty_gyp.py \
		${WRKSRC}/node_modules/node-gyp/gyp/tools/pretty_sln.py \
		${WRKSRC}/node_modules/node-gyp/gyp/tools/pretty_vcproj.py \
		${WRKSRC}/node_modules/node-gyp/gyp/test_gyp.py \
		${WRKSRC}/node_modules/node-gyp/update-gyp.py

do-install:
	${MKDIR} ${STAGEDIR}${DATADIR}
	touch ${STAGEDIR}${DATADIR}/.thelounge_home
	${CP} -R ${WRKDIR}/dist ${STAGEDIR}${DATADIR}/
	${CP} -R ${WRKDIR}/public ${STAGEDIR}${DATADIR}/
	${CP} -R ${WRKDIR}/node_modules ${STAGEDIR}${DATADIR}/
	${CP} ${WRKDIR}/package.json ${STAGEDIR}${DATADIR}
	${CP} ${WRKDIR}/index.js ${STAGEDIR}${DATADIR}
	${INSTALL_SCRIPT} ${FILESDIR}/thelounge.in ${STAGEDIR}${PREFIX}/etc/rc.d/thelounge
	${RLN} ${STAGEDIR}${DATADIR}/index.js ${STAGEDIR}${PREFIX}/bin/${PORTNAME}

.include <bsd.port.mk>
