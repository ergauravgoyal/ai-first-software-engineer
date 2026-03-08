// LocalProgress: Zero-Config progress tracking using browser LocalStorage
document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 LocalProgress Initialized");

    // Load progress on page load
    loadProgress();

    // Listen for checkbox changes
    document.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            saveProgress();
        }
    });
});

/**
 * Saves all checkbox states on the current page to LocalStorage
 */
function saveProgress() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const pageKey = `progress_${window.location.pathname}`;
    
    // Create a map of checkbox index/id to checked state
    const progress = Array.from(checkboxes).map((cb, index) => ({
        id: cb.id || `cb_${index}`, // Use ID or relative index
        checked: cb.checked,
        text: cb.closest('li')?.textContent.trim().substring(0, 30) // Context check
    }));

    localStorage.setItem(pageKey, JSON.stringify(progress));
    console.log(`💾 Progress saved for ${window.location.pathname}`);
}

/**
 * Loads saved progress for the current page
 */
function loadProgress() {
    const pageKey = `progress_${window.location.pathname}`;
    const savedData = localStorage.getItem(pageKey);

    if (savedData) {
        try {
            const progress = JSON.parse(savedData);
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            
            progress.forEach((savedItem, index) => {
                // Try to find checkbox by ID first, then by index as fallback
                const cb = (savedItem.id && document.getElementById(savedItem.id)) || checkboxes[index];
                
                if (cb && cb.type === 'checkbox') {
                    cb.checked = savedItem.checked;
                }
            });
            console.log(`✅ Progress restored for ${window.location.pathname}`);
        } catch (e) {
            console.error("❌ Error loading progress:", e);
        }
    }
}
