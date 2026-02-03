--- lib/vscode/build/lib/extensions.ts.orig	2025-11-27 20:00:13 UTC
+++ lib/vscode/build/lib/extensions.ts
@@ -438,7 +438,7 @@ function doPackageLocalExtensionsStream(forWeb: boolea
 		result = es.merge(
 			localExtensionsStream,
 			gulp.src(dependenciesSrc, { base: '.' })
 				.pipe(util2.cleanNodeModules(path.join(root, 'build', '.moduleignore')))
-				.pipe(util2.cleanNodeModules(path.join(root, 'build', `.moduleignore.${process.platform}`))));
+				.pipe(util2.cleanNodeModules(path.join(root, 'build', `.moduleignore.linux`))));
 	}
