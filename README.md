# AI-First Software Engineering Notebook

Welcome to my personal learning website! This repository serves as a structured knowledge base, a revision guide, and a public learning resource documenting my journey toward becoming a strong AI-first software engineer.

## 🚀 Purpose

1. **Personal Learning Notebook:** A place to capture raw, unstructured notes and consolidate ideas.
2. **Structured Knowledge Base:** Well-organized documentation categorizing core engineering topics.
3. **Revision Guide:** A quick-reference tool to review concepts before interviews or building projects.
4. **Public Resource:** A platform to share what I learn with other developers.

## 📂 Site Structure

The repository is modular and built to scale as I dive deeper into new technologies. My primary focus right now is **Python Backend Engineering**, but placeholder directories have been established for upcoming learning tracks.

- **Foundations:** `01-programming-foundations/`
- **Core Track:** `02-python-backend-engineering/`
- **Future Tracks:**
  - `03-nodejs-backend-engineering/`
  - `04-java-backend-engineering/`
  - `05-frontend-engineering/`
  - `06-frontend-system-design/`
- **Architecture & Systems:**
  - `07-databases-data-modeling/`
  - `08-low-level-design/`
  - `09-design-patterns/`
  - `10-high-level-system-design/`
  - `11-distributed-systems/`
- **Advanced Topics:**
  - `12-ai-for-software-engineering/`
  - `13-devops-and-deployment/`
  - `14-data-structures-algorithms/`
- **Real World Application:** `15-real-world-case-studies/`

## 🛠️ Built With

This documentation is written entirely in Markdown. It is designed to be hosted via GitHub Pages.

For the best reading experience, it is lightly pre-configured to be compatible with [MkDocs](https://www.mkdocs.org/). As the site grows, MkDocs can generate a clean, searchable static site out of these markdown files.

## 📝 How to Read/Contribute

Feel free to explore the `docs/` folder! Everything starts as a simple Markdown skeleton:

```markdown
# Topic Name

## Overview
...
## Key Concepts
...
## Examples
...
## Resources
...
```

As I study, these skeleton files will be updated with deep notes, code snippets, and reference links.

## ✅ Pre-commit Checks

This repo uses a shared pre-commit hook to validate documentation builds before commits.

Setup:

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/pre-commit install
```

Run checks manually:

```bash
.venv/bin/pre-commit run --all-files
```
