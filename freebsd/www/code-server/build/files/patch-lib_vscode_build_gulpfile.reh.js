--- lib/vscode/build/gulpfile.reh.js.orig	2025-07-20 05:05:07 UTC
+++ lib/vscode/build/gulpfile.reh.js
@@ -336,7 +336,7 @@ function packageTask(type, platform, arch, sourceFolde
 			// filter out unnecessary files, no source maps in server build
 			.pipe(filter(['**', '!**/package-lock.json', '!**/*.{js,css}.map']))
 			.pipe(util.cleanNodeModules(path.join(__dirname, '.moduleignore')))
-			.pipe(util.cleanNodeModules(path.join(__dirname, `.moduleignore.${process.platform}`)))
+			.pipe(util.cleanNodeModules(path.join(__dirname, `.moduleignore.linux`)))
 			.pipe(jsFilter)
 			.pipe(util.stripSourceMappingURL())
 			.pipe(jsFilter.restore);
