--- lib/vscode/build/lib/extensions.ts.orig	2025-09-27 07:35:37 UTC
+++ lib/vscode/build/lib/extensions.ts
@@ -450,7 +450,7 @@ function doPackageLocalExtensionsStream(forWeb: boolea
 			localExtensionsStream,
 			gulp.src(dependenciesSrc, { base: '.' })
 				.pipe(util2.cleanNodeModules(path.join(root, 'build', '.moduleignore')))
-				.pipe(util2.cleanNodeModules(path.join(root, 'build', `.moduleignore.${process.platform}`))));
+				.pipe(util2.cleanNodeModules(path.join(root, 'build', `.moduleignore.linux`))));
 	}
 
 	return (
