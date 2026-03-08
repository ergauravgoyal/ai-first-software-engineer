#!/bin/bash

# Script to preview the MkDocs site locally
# This will start a local server with live-reloading enabled.

echo "🚀 Starting local MkDocs preview..."
echo "📍 Access your site at: http://127.0.0.1:8000"
echo "Press Ctrl+C to stop the server."

# Check if mkdocs is installed
if ! command -v mkdocs &> /dev/null
then
    echo "❌ mkdocs could not be found. Installing dependencies..."
    pip install mkdocs mkdocs-material
fi

mkdocs serve
