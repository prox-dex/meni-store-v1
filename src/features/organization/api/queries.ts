export async function getOrganizations() {
    const response = await fetch(`/api/organizations`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    if (!response.ok) {
        throw new Error(`Failed to fetch organizations : ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}