// Supabase Configuration - REPLACE WITH YOUR OWN KEYS
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

// Initialize Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.addEventListener('DOMContentLoaded', async () => {
    const authPortal = document.getElementById('auth-portal');
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const avatar = document.getElementById('user-avatar');

    // Move auth portal into the header for better UX
    const headerInner = document.querySelector('.md-header__inner');
    if (headerInner && authPortal) {
        headerInner.appendChild(authPortal);
        authPortal.style.display = 'flex';
    }

    // Auth Listeners
    loginBtn.addEventListener('click', () => {
        supabase.auth.signInWithOAuth({ provider: 'github' });
    });

    logoutBtn.addEventListener('click', () => {
        supabase.auth.signOut();
    });

    // Handle Auth State Change
    supabase.auth.onAuthStateChange((event, session) => {
        if (session) {
            loginBtn.style.display = 'none';
            logoutBtn.style.display = 'block';
            avatar.src = session.user.user_metadata.avatar_url;
            avatar.style.display = 'block';
            loadProgress(session.user.id);
        } else {
            loginBtn.style.display = 'block';
            logoutBtn.style.display = 'none';
            avatar.style.display = 'none';
        }
    });

    // Logic to track checkboxes
    document.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            saveProgress();
        }
    });
});

async function saveProgress() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const progress = Array.from(checkboxes).map(cb => ({
        id: cb.id || cb.closest('li')?.textContent.trim().substring(0, 50), // Fallback ID
        checked: cb.checked
    }));

    await supabase
        .from('user_progress')
        .upsert({ 
            user_id: user.id, 
            page_path: window.location.pathname,
            state: progress 
        }, { onConflict: 'user_id, page_path' });
}

async function loadProgress(userId) {
    const { data, error } = await supabase
        .from('user_progress')
        .select('state')
        .eq('user_id', userId)
        .eq('page_path', window.location.pathname)
        .single();

    if (data && data.state) {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        data.state.forEach(savedItem => {
            const cb = Array.from(checkboxes).find(c => 
                (c.id === savedItem.id) || 
                (c.closest('li')?.textContent.trim().substring(0, 50) === savedItem.id)
            );
            if (cb) cb.checked = savedItem.checked;
        });
    }
}
