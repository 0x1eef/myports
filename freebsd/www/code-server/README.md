## www/code-server

[code-server](https://github.com/coder/code-server) can run VS Code
in your browser, from anywhere. This project is a fork of 
[Rob4226/code-server-freebsd-port](https://github.com/Rob4226/code-server-freebsd-port)
and it has been updated to use a recent version of code-server.

## /etc/rc.conf variables

- **code_server_user**  Defaults to "nobody"
- **code_server_group** Defaults to "nobody"
- **code_server_config_file** *(filepath)*: Set to /var/code-server/nobody/config.yaml by default. Set to the full filepath of the config file.
- **code_server_user_data_dir** *(path)*: Set to /var/code-server/nobody/user-data by default. Set to the directory path to use for user data.
- **code_server_extensions_dir** *(path)*: Set to /var/code-server/nobody/extensions by default. Set to the directory path to use for extensions.
- **code_server_service_url** *(url)*: Set to https://open-vsx.org/vscode/gallery by default. Set to the service url of an extensions marketplace.
- **code_server_item_url** *(url)*: Set to https://open-vsx.org/vscode/item by default. Set to the item url of an extensions marketplace.


## Usage

Run from the CLI:

```sh
$user@localhost /usr/local/bin/code-server
```

Or run as a service via rc.d:

```sh
service code_server enable  # Enable at start up
service code_server start   # Start service
service code_server stop    # Stop service
service code_server restart # Restart service
service code_server status  # Status of service
```

> NOTE:
> The file permissions one has when using vscode from a web browser is dependant
> on the user/group you choose to run this service. It defaults to `nobody` for
> security reasons but you will probably want to specify a different user with
> the appropriate permissions for your use case in `/etc/rc.conf` like:



## Browser

`http://localhost:8080`

IP address, port, and more can be set in `config.yaml`
See `coder/code-server` repo for docs: https://github.com/coder/code-server


