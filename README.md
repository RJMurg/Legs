# Legs
A custom multi-source Server-Side Renderer (SSR).

Legs is a personal project that I've designed specifically for my own needs. It is able to render multiple different sources and add any custom data to the final HTML.
Legs can also handle other services like Minecraft servers, sending a header to the server that, if running a custom plugin, will put any alerts into the MOTD and into the chat when players join, as well as customising the server icon.

## Features
- Support for multiple sources
- Simple configuration
- Site-based, and priority-based alerts in final HTML (e.g. Maintenance alerts, site-specific alerts, etc.)
- Calendar-specific alerts and data (e.g. Christmas theme, out-of-office, etc.)
- Support for standalone and Docker deployments

## Installation and Configuration
All documentation can be found in [docs](docs/).

## TO-DO
- [ ] Port defined either in a config file or via Command-line arguments