--- lib/vscode/build/gulpfile.extensions.js.orig	2025-11-27 20:00:13 UTC
+++ lib/vscode/build/gulpfile.extensions.js
@@ -236,7 +236,7 @@ const compileNonNativeExtensionsBuildTask = task.defin
  * @note this does not clean the directory ahead of it. See {@link cleanExtensionsBuildTask} for that.
  */
 const compileNonNativeExtensionsBuildTask = task.define('compile-non-native-extensions-build', task.series(
-	bundleMarketplaceExtensionsBuildTask,
+//	bundleMarketplaceExtensionsBuildTask,
 	task.define('bundle-non-native-extensions-build', () => ext.packageNonNativeLocalExtensionsStream(false, false).pipe(gulp.dest('.build')))
 ));
 gulp.task(compileNonNativeExtensionsBuildTask);
@@ -268,7 +268,7 @@ const compileExtensionsBuildPullRequestTask = task.def
 
 const compileExtensionsBuildPullRequestTask = task.define('compile-extensions-build-pr', task.series(
 	cleanExtensionsBuildTask,
-	bundleMarketplaceExtensionsBuildTask,
+//	bundleMarketplaceExtensionsBuildTask,
 	task.define('bundle-extensions-build-pr', () => ext.packageAllLocalExtensionsStream(false, true).pipe(gulp.dest('.build'))),
 ));
 gulp.task(compileExtensionsBuildPullRequestTask);
