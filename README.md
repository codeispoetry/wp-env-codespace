# GitHub Codespaces for WordPress with wp-env

## Installation
Click on "Create Codespace on main" and wait a couple of minutes.
You are done.

### Backgroud information
Codespace will launch a docker-container in the cloud for you and within that container, performs some actions, along these are
- npm install
- composer install
- npm run up

This will launch a docker-in-docker setup and makes use of [wp-env](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/).
## Usage

## Testing
Run 
```
npm test
```
See _package.json > scripts_ for details.