--- lib/vscode/build/lib/extensions.ts.orig	2025-07-19 22:47:19 UTC
+++ lib/vscode/build/lib/extensions.ts
@@ -452,7 +452,7 @@ function doPackageLocalExtensionsStream(forWeb: boolea
 			localExtensionsStream,
 			gulp.src(dependenciesSrc, { base: '.' })
 				.pipe(util2.cleanNodeModules(path.join(root, 'build', '.moduleignore')))
-				.pipe(util2.cleanNodeModules(path.join(root, 'build', `.moduleignore.${process.platform}`))));
+				.pipe(util2.cleanNodeModules(path.join(root, 'build', `.moduleignore.linux`))));
 	}
 
 	return (
