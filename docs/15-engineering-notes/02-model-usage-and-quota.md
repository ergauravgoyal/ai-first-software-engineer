# Model Usage and Quota Guide

This page explains how to monitor and manage your AI model usage, especially while using the **Free Version** of Gemini/Google AI models.

## Tracking Your Quota

Since this is a static website, we cannot show a "live" meter here. However, you can track your real-time usage and quotas through the following official dashboards:

| Platform | Dashboard Link | What to check |
| --- | --- | --- |
| **Google AI Studio** | [https://aistudio.google.com/app/plan_coverage](https://aistudio.google.com/app/plan_coverage) | Check RPD (Requests Per Day) and Token limits. |
| **Google Cloud (Vertex AI)** | [Cloud Console Quotas](https://console.cloud.google.com/iam-admin/quotas) | Search for "Gemini" in the filter. |

---

## Free Tier Limits (Current Estimates)

The free tier for Gemini models typically follows these constraints:

### Gemini 1.5 Flash (Fastest)

- **RPM (Requests Per Minute)**: ~15
- **RPD (Requests Per Day)**: ~1,500
- **TPM (Tokens Per Minute)**: ~1 million

### Gemini 1.5 Pro (Most Intelligent)

- **RPM (Requests Per Minute)**: ~2
- **RPD (Requests Per Day)**: ~50
- **TPM (Tokens Per Minute)**: ~32,000

---

## Best Practices to Save Quota

Since you are "heavily investing time and resources," follow these tips to ensure you don't hit limits mid-session:

1. **Be Concise**: When asking for updates, only ask for what changed. Small prompts use fewer tokens.
2. **Context Management**: Occasionally clear your chat history if it gets too long, as long histories send more "Input Tokens" with every message.
3. **Automated Integrity Checks**: Use the included `scripts/check_integrity.py`. It prevents wasted tokens on fixing accidental data loss during restructuring.
4. **Agent.md Rules**: Follow the established rules in `AGENT.md` to ensure the AI doesn't perform redundant operations that drain your quota.

---

## How to check locally?

You can run this command in your terminal to see the status of your Git repository and ensure the AI isn't making too many unwanted changes:

```bash
git status
git diff --stat
```

If you notice a large number of changes you didn't ask for, it means tokens were wasted. Use our **Safety Protocols** in `AGENT.md` to prevent this.
