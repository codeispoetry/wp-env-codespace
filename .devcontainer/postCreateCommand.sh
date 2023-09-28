PORT=80

cat <<EOF > ../.wp-env.override.json
{
    "config" : {
        "WP_HOME" : "${CODESPACE_NAME}-${PORT}${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}"
	}
}
EOF

npm install
composer install
# npm run up



