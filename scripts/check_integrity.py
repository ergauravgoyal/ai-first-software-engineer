import os
import subprocess
import sys

# Safety thresholds
MIN_FILE_SIZE_BYTES = 100  # Flag any documentation file under this size
SIZE_REDUCTION_THRESHOLD = 0.5  # Flag if a file size reduces by more than 50% vs HEAD

def get_git_file_size(filepath):
    """Gets the size of a file in the HEAD commit."""
    try:
        result = subprocess.run(
            ["git", "cat-file", "-s", f"HEAD:{filepath}"],
            capture_output=True,
            text=True,
            check=True
        )
        return int(result.stdout.strip())
    except subprocess.CalledProcessError:
        return 0  # File is likely new

def check_integrity():
    print("🔍 Starting Repository Integrity Check...")
    issues_found = []
    
    docs_dir = "docs"
    for root, dirs, files in os.walk(docs_dir):
        for file in files:
            if not file.endswith(".md"):
                continue
                
            filepath = os.path.join(root, file)
            # Use relative path for git commands
            rel_path = os.path.relpath(filepath, os.getcwd())
            
            # 1. Check current size
            current_size = os.path.getsize(filepath)
            
            # 2. Check Git HEAD size
            head_size = get_git_file_size(rel_path.replace("\\", "/"))
            
            # Rule A: Flag files that were significant but are now placeholders
            if head_size > 1000 and current_size < MIN_FILE_SIZE_BYTES:
                issues_found.append(f"CRITICAL: {rel_path} was {head_size} bytes but is now a placeholder ({current_size} bytes).")
            
            # Rule B: Flag massive size reductions
            elif head_size > 500 and current_size < (head_size * (1 - SIZE_REDUCTION_THRESHOLD)):
                issues_found.append(f"WARNING: {rel_path} dropped from {head_size} to {current_size} bytes (Potential data loss).")
                
            # Rule C: Empty files
            elif current_size == 0:
                issues_found.append(f"ERROR: {rel_path} is completely empty.")

    if issues_found:
        print("\n❌ INTEGRITY ISSUES DETECTED:")
        for issue in issues_found:
            print(f"  - {issue}")
        print("\nACTION REQUIRED: Please verify these files before committing/pushing.")
        sys.exit(1)
    else:
        print("\n✅ Integrity Check Passed! No data loss detected.")
        sys.exit(0)

if __name__ == "__main__":
    check_integrity()
