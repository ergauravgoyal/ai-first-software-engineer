/**
 * Mermaid configuration for MkDocs Material
 * Synchronizes Mermaid theme with the site's color scheme
 */
const setMermaidTheme = () => {
    const scheme = document.body.getAttribute("data-md-color-scheme") || "default";
    const theme = (scheme === "slate") ? "dark" : "default";

    console.log(`[Mermaid] Detected scheme: ${scheme}, applying theme: ${theme}`);

    if (typeof mermaid !== "undefined") {
        mermaid.initialize({
            startOnLoad: false,
            theme: theme,
            securityLevel: 'loose',
            flowchart: { htmlLabels: true },
            themeVariables: {
                fontFamily: 'var(--md-text-font-family)',
            }
        });

        // Trigger a re-render of all mermaid elements
        if (typeof mermaid.run === 'function') {
            mermaid.run().then(() => {
                console.log("[Mermaid] Render complete");
            }).catch(err => {
                console.error("[Mermaid] Render failed:", err);
            });
        }
    }
};

// Toggle-aware observer
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "data-md-color-scheme") {
            setMermaidTheme();
        }
    });
});

window.addEventListener("load", () => {
    observer.observe(document.body, { attributes: true });
    setMermaidTheme();
});
