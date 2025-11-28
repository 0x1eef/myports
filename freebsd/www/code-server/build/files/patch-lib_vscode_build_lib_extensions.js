--- lib/vscode/build/lib/extensions.js.orig	2025-11-27 20:00:13 UTC
+++ lib/vscode/build/lib/extensions.js
@@ -426,7 +426,7 @@ function doPackageLocalExtensionsStream(forWeb, disabl
         const dependenciesSrc = productionDependencies.map(d => path_1.default.relative(root, d)).map(d => [`${d}/**`, `!${d}/**/{test,tests}/**`]).flat();
         result = event_stream_1.default.merge(localExtensionsStream, gulp_1.default.src(dependenciesSrc, { base: '.' })
             .pipe(util2.cleanNodeModules(path_1.default.join(root, 'build', '.moduleignore')))
-            .pipe(util2.cleanNodeModules(path_1.default.join(root, 'build', `.moduleignore.${process.platform}`))));
+            .pipe(util2.cleanNodeModules(path_1.default.join(root, 'build', `.moduleignore.linux`))));
     }
     return (result
         .pipe(util2.setExecutableBit(['**/*.sh'])));
@@ -618,4 +618,4 @@ async function buildExtensionMedia(isWatch, outputRoot
         outputRoot: outputRoot ? path_1.default.join(root, outputRoot, path_1.default.dirname(p)) : undefined
     })));
 }
-//# sourceMappingURL=extensions.js.map
\ No newline at end of file
+//# sourceMappingURL=extensions.js.map
