
# Gemini Prompt Guideline (for IDE usage)

You are acting as a **senior software architect** helping structure a large documentation website.

I have a GitHub Pages site that serves as my personal learning platform:

https://ergauravgoyal.github.io/ai-first-software-engineer/

The purpose of this website is to document my journey toward becoming an **AI-first software engineer**.

The site will eventually contain **hundreds of pages**, so I want a **scalable documentation architecture** that stays organized even with **300+ pages**.

---

# Important Context

My learning follows a curriculum that includes:

- Programming Foundations
- Python Backend Engineering (current focus)
- Frontend Engineering (future)
- Frontend System Design (future)
- Databases and Data Modeling
- Low Level Design (LLD)
- Design Patterns
- Backend Architecture
- High Level System Design
- Distributed Systems
- AI for Software Engineering
- DevOps and Deployment
- Data Structures and Algorithms
- Real World System Case Studies

Currently I am studying the **Python Backend Engineering track**, so the Python section should be detailed.

The following sections should remain **placeholder sections for now**:

- Node.js Backend Engineering
- Java Backend Engineering
- Frontend Engineering
- Frontend System Design

---

# Task

Analyze my repository and documentation structure and help design a **scalable architecture** for the site.

You should:

1. Design a **clean documentation structure** that can scale to hundreds of pages.
2. Keep the **numbered learning path approach** already used in the site.
3. Ensure topics are **grouped conceptually**, not mixed randomly.
4. Avoid creating **too many top-level sections**.
5. Maintain compatibility with **GitHub Pages and Markdown documentation**.

---

# Proposed Top-Level Structure

01-programming-foundations
02-python-backend-engineering
03-frontend-engineering
04-databases
05-low-level-design
06-design-patterns
07-backend-architecture
08-frontend-system-design
09-system-design
10-distributed-systems
11-ai-for-software-engineering
12-devops
13-dsa
14-system-case-studies
15-engineering-notes

---

# Example Subfolder Structure

## Databases

databases/
    database-fundamentals.md
    indexing.md
    transactions.md

    orm/
        what-is-orm.md
        django-orm.md
        sqlalchemy.md
        entity-framework.md
        hibernate.md

---

## Python Backend Engineering

python-backend-engineering/
    python-fundamentals.md
    oop.md
    rest-apis.md
    django.md
    fastapi.md
    authentication.md
    testing.md
    async-programming.md
    deployment.md

---

## Frontend Engineering

frontend-engineering/
    html.md
    css.md
    javascript.md
    react.md
    state-management.md
    performance.md

---

# Placeholder Page Template

# Topic Name

## Overview
This page will contain notes and examples as I learn this topic.

## Key Concepts
(To be added)

## Examples
(To be added)

## Resources
(To be added)

---

# Output Requirements

Please generate:

1. An improved repository folder structure
2. Suggested Markdown file names
3. Refactoring recommendations
4. Navigation improvements
5. Suggestions to keep the documentation scalable

Important:

Do **NOT generate full content yet**.
Focus only on **architecture and placeholder pages**.

The final goal is a **clean, scalable learning website** that documents the full journey of becoming an AI-first software engineer.
