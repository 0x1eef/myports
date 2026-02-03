--- lib/vscode/build/gulpfile.extensions.ts.orig	2025-11-27 20:00:13 UTC
+++ lib/vscode/build/gulpfile.extensions.ts
@@ -220,7 +220,7 @@ export const compileNonNativeExtensionsBuildTask = tas
  * @note this does not clean the directory ahead of it. See {@link cleanExtensionsBuildTask} for that.
  */
 export const compileNonNativeExtensionsBuildTask = task.define('compile-non-native-extensions-build', task.series(
-	bundleMarketplaceExtensionsBuildTask,
+//	bundleMarketplaceExtensionsBuildTask,
 	task.define('bundle-non-native-extensions-build', () => ext.packageNonNativeLocalExtensionsStream(false, false).pipe(gulp.dest('.build')))
 ));
 gulp.task(compileNonNativeExtensionsBuildTask);
@@ -248,7 +248,7 @@ const compileExtensionsBuildPullRequestTask = task.def
 
 const compileExtensionsBuildPullRequestTask = task.define('compile-extensions-build-pr', task.series(
 	cleanExtensionsBuildTask,
-	bundleMarketplaceExtensionsBuildTask,
+//	bundleMarketplaceExtensionsBuildTask,
 	task.define('bundle-extensions-build-pr', () => ext.packageAllLocalExtensionsStream(false, true).pipe(gulp.dest('.build'))),
 ));
 gulp.task(compileExtensionsBuildPullRequestTask);
