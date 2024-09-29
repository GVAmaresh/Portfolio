const leetcode_username = process.env.NEXT_PUBLIC_LEETCODE_USERNAME;
const leetcode_url = "https://leetcode-api-faisalshohag.vercel.app";

export const LEETCODE_DETAILS = async () => {
    const response = await fetch(`${leetcode_url}/${leetcode_username}`, {
        headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    return data; 
};
