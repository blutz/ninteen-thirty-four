# Ninteen-Thirty-Four

## Development

1. Install Docker locally.
2. Run `npm install` to install wp-env.
3. Run `npm start` to start up the Docker containers (or create them if they don't exist yet).
4. Run `npm run setup` to download the latest database snapshot from prod, install it, and configure local settings. (You must be able to connect to prod over ssh using a local key for this to work. If not, grab the files manually—see `state/_download.sh` for details about files/naming—then run `npm run setup:import` and `npm run setup:configure`.)
5. When you're done developing, run `npm run stop` to stop the Docker containers. To actually tear them down, run the appropriate wp-env command.

## Deployment

Deploy the `ninteen-thirty-four` folder to `wp-content/themes` on prod. This *only* syncs the theme itself: there's no content sync from dev to prod.
