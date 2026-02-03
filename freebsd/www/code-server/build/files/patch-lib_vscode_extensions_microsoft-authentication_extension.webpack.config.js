--- lib/vscode/extensions/microsoft-authentication/extension.webpack.config.js.orig	2026-02-03 06:51:58 UTC
+++ lib/vscode/extensions/microsoft-authentication/extension.webpack.config.js
@@ -15,7 +15,7 @@ let platformFolder;
 const linuxArches = ['x64'];
 
 let platformFolder;
-switch (process.platform) {
+switch ('linux') {
 	case 'win32':
 		platformFolder = 'windows';
 		break;
