"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { BottomNav } from "@/components/BottomNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Copy, ExternalLink, Github } from "lucide-react";

export default function ProxyPage() {
  const [proxyUrl, setProxyUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [configString, setConfigString] = useState(
    JSON.stringify({
      upstream: "https://example.com",
      mode: "cloaked",
      prefix: "/service",
      requireAuth: false,
      decodeFirstRequest: true
    }, null, 2)
  );

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-14">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-auto p-4 pb-20 bg-background">
          <h1 className="text-2xl font-bold mb-2">Scramjet Proxy</h1>
          <p className="text-white/70 mb-6">Configure and manage your proxy server</p>

          <Tabs defaultValue="setup">
            <TabsList className="mb-4">
              <TabsTrigger value="setup">Setup</TabsTrigger>
              <TabsTrigger value="docs">Documentation</TabsTrigger>
              <TabsTrigger value="config">Configuration</TabsTrigger>
            </TabsList>

            <TabsContent value="setup">
              <Card>
                <CardHeader>
                  <CardTitle>Proxy Setup</CardTitle>
                  <CardDescription>Configure your Scramjet proxy instance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="proxy-url">Proxy URL</Label>
                      <div className="flex mt-1.5">
                        <Input
                          id="proxy-url"
                          placeholder="https://your-proxy-server.com"
                          value={proxyUrl}
                          onChange={(e) => setProxyUrl(e.target.value)}
                          className="flex-1"
                        />
                        <button
                          className="ml-2 px-4 bg-[var(--accent)] text-white rounded-md hover:bg-opacity-90"
                          onClick={() => {
                            alert(`Connected to proxy: ${proxyUrl || "No URL provided"}`);
                          }}
                        >
                          Connect
                        </button>
                      </div>
                      <p className="text-sm text-white/60 mt-2">
                        Enter the URL of your deployed Scramjet proxy server
                      </p>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-lg font-medium mb-3">Quick Deploy Options</h3>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <a
                          href="https://github.com/MercuryWorkshop/scramjet"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 p-3 border border-border rounded-md hover:bg-foreground/10 transition-colors"
                        >
                          <Github size={18} />
                          <span>GitHub Repository</span>
                          <ExternalLink size={14} className="ml-1" />
                        </a>

                        <button
                          className="flex items-center justify-center gap-2 p-3 border border-border rounded-md hover:bg-foreground/10 transition-colors"
                          onClick={() => {
                            alert("This would deploy to Vercel in a real implementation");
                          }}
                        >
                          <img src="https://ext.same-assets.com/4041918963/2563901416.svg" alt="Vercel" className="w-4 h-4" />
                          <span>Deploy to Vercel</span>
                        </button>

                        <button
                          className="flex items-center justify-center gap-2 p-3 border border-border rounded-md hover:bg-foreground/10 transition-colors"
                          onClick={() => {
                            alert("This would deploy to Netlify in a real implementation");
                          }}
                        >
                          <img src="https://ext.same-assets.com/4041918963/3783633550.svg" alt="Netlify" className="w-4 h-4" />
                          <span>Deploy to Netlify</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="docs">
              <Card>
                <CardHeader>
                  <CardTitle>Scramjet Documentation</CardTitle>
                  <CardDescription>Learn how to use and deploy Scramjet</CardDescription>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none">
                  <h3>What is Scramjet?</h3>
                  <p>
                    Scramjet is a powerful proxy server that allows you to bypass network
                    restrictions and access content securely. It's designed to be fast,
                    lightweight, and easy to deploy on various platforms.
                  </p>

                  <h3>Features</h3>
                  <ul>
                    <li>Multiple proxy modes (bare, cloaked, etc.)</li>
                    <li>URL rewriting and path handling</li>
                    <li>Authentication options</li>
                    <li>Optimized for edge runtimes</li>
                    <li>Easy deployment on Vercel, Netlify, and other platforms</li>
                  </ul>

                  <h3>Getting Started</h3>
                  <p>
                    To get started with Scramjet, you can clone the repository from GitHub
                    and deploy it using one of the quick deploy options. Alternatively,
                    you can set up a custom deployment by following the setup instructions.
                  </p>

                  <div className="bg-foreground/10 p-4 rounded-md not-prose">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-mono">Clone the repository</span>
                      <button
                        onClick={() => copyToClipboard("git clone https://github.com/MercuryWorkshop/scramjet.git")}
                        className="flex items-center text-white/70 hover:text-white"
                      >
                        {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                      </button>
                    </div>
                    <code className="text-sm">git clone https://github.com/MercuryWorkshop/scramjet.git</code>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Configuration Options</CardTitle>
                  <CardDescription>Common configuration patterns for Scramjet</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Basic Configuration</h3>
                      <div className="bg-foreground/10 p-4 rounded-md">
                        <pre className="text-sm overflow-x-auto">
                          {JSON.stringify({
                            upstream: "https://example.com",
                            mode: "cloaked",
                            prefix: "/service"
                          }, null, 2)}
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">With Authentication</h3>
                      <div className="bg-foreground/10 p-4 rounded-md">
                        <pre className="text-sm overflow-x-auto">
                          {JSON.stringify({
                            upstream: "https://example.com",
                            mode: "cloaked",
                            prefix: "/service",
                            requireAuth: true,
                            users: [
                              { username: "admin", password: "securepassword" }
                            ]
                          }, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="config">
              <Card>
                <CardHeader>
                  <CardTitle>Proxy Configuration</CardTitle>
                  <CardDescription>Edit your proxy configuration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="config-editor">Configuration JSON</Label>
                      <div className="mt-1.5 relative">
                        <textarea
                          id="config-editor"
                          value={configString}
                          onChange={(e) => setConfigString(e.target.value)}
                          className="w-full h-80 rounded-md bg-foreground/10 border border-border p-4 font-mono text-sm resize-none focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                        />
                        <button
                          onClick={() => copyToClipboard(configString)}
                          className="absolute top-2 right-2 p-2 rounded-md hover:bg-foreground/20 text-white/70 hover:text-white"
                          title="Copy to clipboard"
                        >
                          {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 mt-4">
                      <button
                        className="px-4 py-2 border border-border rounded-md hover:bg-foreground/10"
                        onClick={() => {
                          try {
                            const parsed = JSON.parse(configString);
                            setConfigString(JSON.stringify(parsed, null, 2));
                            alert("Configuration validated successfully");
                          } catch (e) {
                            alert(`Invalid JSON: ${e}`);
                          }
                        }}
                      >
                        Validate
                      </button>
                      <button
                        className="px-4 py-2 bg-[var(--accent)] text-white rounded-md hover:bg-opacity-90"
                        onClick={() => {
                          try {
                            JSON.parse(configString);
                            alert("Configuration applied successfully (demo only)");
                          } catch (e) {
                            alert(`Cannot apply: Invalid JSON: ${e}`);
                          }
                        }}
                      >
                        Apply Configuration
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Configure security options for your proxy</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="cors-origin">CORS Origin</Label>
                      <Input
                        id="cors-origin"
                        placeholder="*"
                        className="mt-1"
                      />
                      <p className="text-sm text-white/60 mt-1">
                        Set allowed origins for CORS (comma separated, * for all)
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="rate-limit">Rate Limit (requests per minute)</Label>
                      <Input
                        id="rate-limit"
                        type="number"
                        placeholder="60"
                        className="mt-1"
                      />
                      <p className="text-sm text-white/60 mt-1">
                        Set a rate limit to prevent abuse (0 to disable)
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Label>Access Restrictions</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <button className="flex items-center justify-between p-3 border border-border rounded-md hover:bg-foreground/10 transition-colors">
                        <span>IP Allowlist</span>
                        <span className="text-sm text-white/60">Not Configured</span>
                      </button>

                      <button className="flex items-center justify-between p-3 border border-border rounded-md hover:bg-foreground/10 transition-colors">
                        <span>User Authentication</span>
                        <span className="text-sm text-white/60">Not Enabled</span>
                      </button>

                      <button className="flex items-center justify-between p-3 border border-border rounded-md hover:bg-foreground/10 transition-colors">
                        <span>Request Logging</span>
                        <span className="text-sm text-white/60">Disabled</span>
                      </button>

                      <button className="flex items-center justify-between p-3 border border-border rounded-md hover:bg-foreground/10 transition-colors">
                        <span>Content Filtering</span>
                        <span className="text-sm text-white/60">Not Configured</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
