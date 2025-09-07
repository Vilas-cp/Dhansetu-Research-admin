const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function handleResponse(res) {

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
export async function apiDelete(endpoint, body) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "DELETE",
    credentials: "include",
    headers: { 
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true", 
    },
    body: body ? JSON.stringify(body) : undefined, 
  });

  return handleResponse(res);
}
export async function apiPut(endpoint, body) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "PUT",
    credentials: "include",
    headers: { 
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true", 
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  return handleResponse(res);
}
