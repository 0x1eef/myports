--- lib/vscode/build/gulpfile.extensions.js.orig	2025-07-19 22:00:06 UTC
+++ lib/vscode/build/gulpfile.extensions.js
@@ -247,7 +247,7 @@ const compileNonNativeExtensionsBuildTask = task.defin
  * @note this does not clean the directory ahead of it. See {@link cleanExtensionsBuildTask} for that.
  */
 const compileNonNativeExtensionsBuildTask = task.define('compile-non-native-extensions-build', task.series(
-	bundleMarketplaceExtensionsBuildTask,
+	// bundleMarketplaceExtensionsBuildTask,
 	task.define('bundle-non-native-extensions-build', () => ext.packageNonNativeLocalExtensionsStream().pipe(gulp.dest('.build')))
 ));
 gulp.task(compileNonNativeExtensionsBuildTask);
