# Script to preview the MkDocs site locally using a virtual environment
# This will start a local server with live-reloading enabled.

VENV_DIR=".venv"

echo "🚀 Preparing local MkDocs preview..."

# Check if virtual environment exists
if [ ! -d "$VENV_DIR" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv "$VENV_DIR"
fi

# Activate virtual environment
source "$VENV_DIR/bin/activate"

# Check if mkdocs is installed inside venv
if ! command -v mkdocs &> /dev/null
then
    echo "📥 Installing dependencies inside virtual environment..."
    pip install --upgrade pip
    pip install mkdocs mkdocs-material
fi

echo "📍 Access your site at: http://127.0.0.1:8000"
echo "Press Ctrl+C to stop the server (and 'deactivate' to exit the venv)."

mkdocs serve
