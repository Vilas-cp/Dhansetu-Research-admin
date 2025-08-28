const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function handleResponse(res) {

  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || "API error");
  }

  return res.json();
}

export async function apiGet(endpoint) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
     },
  });
  console.log(res);
  
  return handleResponse(res);
}

export async function apiPost(endpoint, body) {
 
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  return handleResponse(res);
}
