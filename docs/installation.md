# Installation

This guide will help you install and configure your first website with *Legs*.
This guide is for standalone installations. If you are deploying using Docker, please see [docs/deployment.md](docs/deployment.md).

## Requirements
1. [Node.js](https://nodejs.org/en/)
2. [Git](https://git-scm.com/)
3. A [PostgreSQL](https://www.postgresql.org/) database

## Installation
1. Clone the repository
    ```bash
    git clone https://github.com/RJMurg/Legs.git
    ```
2. Install dependencies
    ```bash
    npm install
    ```
3. Replace the placeholder data in [config/db.json](../config/db.json) with your database information