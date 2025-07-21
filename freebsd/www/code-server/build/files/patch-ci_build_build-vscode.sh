--- ci/build/build-vscode.sh.orig	2025-07-19 19:25:30 UTC
+++ ci/build/build-vscode.sh
@@ -65,7 +65,7 @@ main() {
   #
   # This needs to be done before building as Code will read this file and embed
   # it into the client-side code.
-  git checkout product.json             # Reset in case the script exited early.
+  #git checkout product.json             # Reset in case the script exited early.
   cp product.json product.original.json # Since jq has no inline edit.
   jq --slurp '.[0] * .[1]' product.original.json <(
     cat << EOF
@@ -117,7 +117,7 @@ EOF
   # Reset so if you develop after building you will not be stuck with the wrong
   # commit (the dev client will use `oss-dev` but the dev server will still use
   # product.json which will have `stable-$commit`).
-  git checkout product.json
+  #git checkout product.json
 
   popd
 
