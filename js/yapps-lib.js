async function hash_sha256(str) {
    const uint8     = new TextEncoder().encode(str);
    const digest    = await crypto.subtle.digest('SHA-256', uint8);
    return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2,'0')).join('');
}
