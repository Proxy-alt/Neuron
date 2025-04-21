import React, { useState } from "react";

export default function ScramjetProxyPage() {
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleProxy(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse("");
    try {
      const res = await fetch("/api/scramjet-proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      if (!res.ok) throw new Error("Failed to proxy (" + res.status + ")");
      const text = await res.text();
      setResponse(text);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="h-screen flex items-center justify-center bg-background">
      <form className="w-full max-w-lg p-6 rounded-lg shadow-md bg-white" onSubmit={handleProxy}>
        <h1 className="text-2xl mb-4">Scramjet Proxy</h1>
        <label className="block mb-2 text-sm font-medium">URL to Proxy:</label>
        <input
          className="w-full p-2 border rounded mb-4"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="https://example.com"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? "Loading..." : "Proxy"}
        </button>
        {error && <div className="text-red-600 mt-4">Error: {error}</div>}
        {response && (
          <div className="mt-4"><b>Response:</b><pre className="whitespace-pre-wrap bg-gray-100 p-2 mt-2 rounded">{response}</pre></div>
        )}
      </form>
    </main>
  );
}
