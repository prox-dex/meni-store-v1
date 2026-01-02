export async function getUsers() {
    const response = await fetch(`/api/users`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    if (!response.ok) {
        throw new Error(`Failed to fetch users : ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}