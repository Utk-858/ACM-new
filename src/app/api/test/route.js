// src/app/api/tempbackend/route.js

export async function GET(request) {
  return new Response(JSON.stringify({ message: "Backend is running" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
