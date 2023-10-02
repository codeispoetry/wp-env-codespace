PORT=80
OUTPUT_FILE="$(dirname "$(readlink -f "$0")")/../.wp-env.override.json"

cat <<EOF > $OUTPUT_FILE
{
    "config" : {
        "WP_HOME" : "https://${CODESPACE_NAME}-${PORT}${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}"
	}
}
EOF

npm install
composer install
npm run up
