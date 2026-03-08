/**
 * Mermaid configuration for MkDocs Material
 * Synchronizes Mermaid theme with the site's color scheme (slate/default)
 */
const setMermaidTheme = () => {
    const scheme = document.body.getAttribute("data-md-color-scheme")
    const theme = scheme === "slate" ? "dark" : "default"
    
    if (typeof mermaid !== "undefined") {
        mermaid.initialize({ 
            startOnLoad: true,
            theme: theme,
            flowchart: { htmlLabels: true },
            sequence: { showSequenceNumbers: true },
            themeVariables: {
                // Ensuring text remains readable
                fontFamily: "var(--md-text-font-family)",
                primaryColor: "var(--md-primary-fg-color)",
                secondaryColor: "var(--md-accent-fg-color)",
            }
        })
    }
}

// Observe changes to the data-md-color-scheme attribute
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === "attributes" && mutation.attributeName === "data-md-color-scheme") {
            setMermaidTheme()
        }
    })
})

document.addEventListener("DOMContentLoaded", () => {
    observer.observe(document.body, { attributes: true })
    setMermaidTheme()
})
