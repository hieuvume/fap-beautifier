#!/bin/bash

# Define the extension directory
EXTENSION_DIR="$(pwd)/dist"

# Check if Chrome is installed in the default location for macOS
CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [ ! -f "$CHROME_PATH" ]; then
  echo "Error: Google Chrome not found at $CHROME_PATH"
  echo "Please install Chrome or update the script with the correct path"
  exit 1
fi

# Create a temporary Chrome profile for testing
PROFILE_DIR="/tmp/chrome-fap-beautifier-profile"

# Clean up any existing profile
if [ -d "$PROFILE_DIR" ]; then
  rm -rf "$PROFILE_DIR"
fi

mkdir -p "$PROFILE_DIR"

echo "Loading FAP Beautifier extension from $EXTENSION_DIR"
echo "Using temporary Chrome profile at $PROFILE_DIR"

# Launch Chrome with the extension loaded
"$CHROME_PATH" \
  --user-data-dir="$PROFILE_DIR" \
  --no-first-run \
  --no-default-browser-check \
  --load-extension="$EXTENSION_DIR" \
  --start-maximized \
  "https://fap.fpt.edu.vn" &

echo "Chrome launched with the FAP Beautifier extension loaded."
echo "Press Ctrl+C to exit this script (Chrome will continue running)."

# Wait for user to press Ctrl+C
trap "echo 'Script terminated. Chrome will continue running.'; exit 0" SIGINT SIGTERM
while true; do
  sleep 1
done 