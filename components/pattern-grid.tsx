"use client"

import NavOne from "@/components/596-experiments/one/one"
import CircularNav from "@/components/596-experiments/two/two"
import IntegrationHub from "@/components/agency7-experiments/one/one"
import { CodeBlock } from '@/components/code-block'
import { DataTable } from "@/components/data-table"
import { Overlay } from "@/components/overlay"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "lucide-react"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"
import { TabsA } from "@/components/tabs"
const patterns = [
  {
    title: "Studio 596",
    link: "https://www.596.studio/experiments/one",
    description: "Animated Navigation",
    component: <NavOne />,
    filePath: "components/596-experiments/one/one.tsx",
    seo: "animated-navigation"
  },
  {
    title: "Studio 596",
    link: "https://www.596.studio/experiments/two",
    description: "AnimatedCircular Navigation",
    component: <CircularNav />,
    filePath: "components/596-experiments/two/two.tsx",
    seo: "animated-circular-navigation"
  },
  {
    title: "Agency 7",
    link: "https://agency7.ca/experiments/one",
    description: "Animated Keyboard",
    component: <IntegrationHub />,
    filePath: "components/agency7-experiments/one/one.tsx",
    seo: "animated-keyboard"
  },
  {
    title: "Overlay",
    description: "Show secondary elements and important messages in a layer on top of the page.",
    component: <Overlay />,
    filePath: "components/overlay.tsx",
    seo: "overlay"
  },
  {
    title: "Data Table",
    description: "Show collections with multiple attributes in a table to make the data easy to scan, analyze, and customize.",
    component: <DataTable />,
    filePath: "components/data-table.tsx",
    seo: "data-table"
  },
  {
    title: "Tabs",
    description: "Use tabs to alternate between views within the same context, not to navigate to different areas.",
    component: <TabsA />,
    filePath: "components/tabs.tsx",
    seo: "tabs"
  },
]

export function PatternGrid({ params }: { params: { p: string } }) {
  const [patternsWithCode, setPatternsWithCode] = React.useState<Array<{
    title: string;
    link?: string;
    description: string;
    component: React.JSX.Element;
    filePath?: string;
    code?: string;
    seo?: string;
  }>>([]);

  const [showCode, setShowCode] = React.useState<string | null>(null);

  const CodeStringFetcher = async (filePath: string) => {
    try {
      const response = await fetch('/api/codeConvert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filePath: filePath }),
      });

      if (!response.ok) {
        console.error('Error fetching code:', response.statusText);
        return null;
      }

      const code = await response.json();
      return code.code;
    } catch (error) {
      console.error('Failed to fetch code:', error);
      return null;
    }
  };

  React.useEffect(() => {
    const fetchCodes = async () => {
      const updatedPatterns = await Promise.all(
        patterns.map(async (pattern) => {
          if (pattern.filePath) {
            const code = await CodeStringFetcher(pattern.filePath);
            return { ...pattern, code };
          }
          return pattern;
        })
      );
      setPatternsWithCode(updatedPatterns);
    };

    fetchCodes();
  }, []);

  const router = useRouter()

  const openCode = (seo: string) => {
    console.log(seo);
    if (showCode === seo) {
      setShowCode(null); // Hide the code if it's already shown
    } else {
      router.push(`/p=${seo}`);
      setShowCode(seo); // Show the new code
    }
  }


  useEffect(() => {
    const query = window.location.pathname;
    console.log(query);
    const match = query.match(/p=([^&]+)/);
    console.log(match);
    if (match) {
      setShowCode(match[1]); // Set the showCode state to the value after 'p='
    }
  }, []);

  return (
    <div className="container py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {patternsWithCode.map((pattern, index) => (
          <Card className="" key={index}>
            <CardHeader>
              <CardTitle>
                {pattern.link ? (
                  <a
                    className="hover:underline text-blue-500 inline-flex items-center"
                    href={pattern.link}
                  >
                    {pattern.title}
                    <Link className="ml-2" />
                  </a>
                ) : (
                  pattern.title
                )}
              </CardTitle>
              <CardDescription>{pattern.description}</CardDescription>
            </CardHeader>
            <CardContent>{pattern.component}</CardContent>
            <CardContent >
              <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => openCode(pattern?.seo || '')}>Open Code</button>

              {showCode === pattern?.seo && (
                <div className="overflow-y-auto fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-3/4 h-[650px] rounded-md z-50 bg-black">
                  <button className="bg-white text-black p-2 rounded-md absolute top-5 right-5" onClick={() => openCode(pattern?.seo || '')}>Close Code</button>

                  <CodeBlock code={pattern.code || ''} />
                </div>

              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
