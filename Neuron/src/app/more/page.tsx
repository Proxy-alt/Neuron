"use client";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { BottomNav } from "@/components/BottomNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

export default function MorePage() {
  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-14">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-auto p-4 pb-20 bg-background">
          <h1 className="text-2xl font-bold mb-6">More</h1>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>About Sunset</CardTitle>
                <CardDescription>A sleek and customizable browser experience</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Sunset is a modern, feature-rich browser that focuses on customization and user experience.
                  With theme support, shortcuts, and proxy integration, Sunset provides a seamless and
                  personalized browsing experience.
                </p>
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://github.com/MercuryWorkshop/scramjet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-foreground/10 rounded-md hover:bg-foreground/20 transition-colors"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resources</CardTitle>
                <CardDescription>Helpful links and information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="p-4 border border-border rounded-md hover:bg-foreground/10 transition-colors"
                  >
                    <h3 className="font-medium mb-1">Documentation</h3>
                    <p className="text-sm text-white/60">
                      Learn how to use all the features of Sunset
                    </p>
                  </a>

                  <a
                    href="#"
                    className="p-4 border border-border rounded-md hover:bg-foreground/10 transition-colors"
                  >
                    <h3 className="font-medium mb-1">FAQ</h3>
                    <p className="text-sm text-white/60">
                      Frequently asked questions about Sunset
                    </p>
                  </a>

                  <a
                    href="#"
                    className="p-4 border border-border rounded-md hover:bg-foreground/10 transition-colors"
                  >
                    <h3 className="font-medium mb-1">Privacy Policy</h3>
                    <p className="text-sm text-white/60">
                      Information about how we protect your privacy
                    </p>
                  </a>

                  <a
                    href="#"
                    className="p-4 border border-border rounded-md hover:bg-foreground/10 transition-colors"
                  >
                    <h3 className="font-medium mb-1">Terms of Service</h3>
                    <p className="text-sm text-white/60">
                      Terms and conditions for using Sunset
                    </p>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Version</CardTitle>
                <CardDescription>Current build information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 border border-border rounded-md">
                  <div>
                    <h3 className="font-medium">Sunset Browser</h3>
                    <p className="text-sm text-white/60">Version 1.0.0</p>
                  </div>
                  <span className="px-3 py-1 bg-foreground/10 rounded-full text-xs">
                    Stable Release
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
