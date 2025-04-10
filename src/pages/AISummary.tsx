
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Download, RefreshCw, Share2 } from "lucide-react";
import { useState, useEffect } from "react";

const summaryText = `Based on your GitHub activity, you're showing consistent contributions with a preference for TypeScript and JavaScript. Your commit patterns show you're most active on weekdays, with peak productivity in the mornings. Your commit messages are generally descriptive and follow good practices.

Over the past 3 months, you've contributed to 12 repositories, with a focus on frontend frameworks and data visualization libraries. Your most significant contributions were to the 'awesome-project' repository, where you've fixed 7 bugs and implemented 3 new features.

Your code tends to be well-structured with appropriate comments. Areas for improvement include increasing test coverage and documentation. You've been consistently reviewing PRs, with an average response time of 6 hours.

Recommendation: Consider contributing to more open-source projects in the data visualization space, as your skills in this area are evident from your work on the 'data-visualizer' library.`;

export default function AISummary() {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [refreshCounter, setRefreshCounter] = useState(0);

  useEffect(() => {
    setIsTyping(true);
    setDisplayText("");
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < summaryText.length) {
        setDisplayText((prev) => prev + summaryText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 10);

    return () => clearInterval(typingInterval);
  }, [refreshCounter]);

  const handleRefresh = () => {
    setRefreshCounter(prev => prev + 1);
  };

  return (
    <PageLayout>
      <div className="container py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">AI Summary</h1>
              <p className="text-muted-foreground">
                Insights and analysis of your GitHub contributions
              </p>
            </div>
            <Button variant="outline" className="gap-2" onClick={handleRefresh}>
              <RefreshCw className="h-4 w-4" />
              <span>Refresh</span>
            </Button>
          </div>

          <Card className="mb-8 overflow-hidden">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 bg-primary/5 pb-4">
              <div>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Bot className="h-5 w-5 text-primary" />
                  <span>AI-Generated Summary</span>
                </CardTitle>
                <CardDescription>
                  Analysis based on your recent GitHub activity
                </CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="ghost" className="gap-1">
                  <Share2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Share</span>
                </Button>
                <Button size="sm" variant="ghost" className="gap-1">
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Export</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-50 to-white p-6 shadow-inner dark:from-slate-900/40 dark:to-slate-900/10">
                <div className="relative min-h-[300px] font-serif text-lg leading-relaxed">
                  {displayText}
                  {isTyping && (
                    <span className="ml-1 inline-block h-5 w-2 animate-pulse bg-primary"></span>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-primary/5 px-6 py-4">
              <p className="text-xs text-muted-foreground">
                Last updated: April 10, 2025 · Based on data from the past 90 days
              </p>
            </CardFooter>
          </Card>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="overflow-hidden">
              <CardHeader className="bg-primary/5 pb-2">
                <CardTitle className="text-base">Key Strengths</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-chart-green"></div>
                    <span>Consistent contribution patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-chart-green"></div>
                    <span>Strong TypeScript and JavaScript skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-chart-green"></div>
                    <span>Active in code reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-chart-green"></div>
                    <span>Well-structured code organization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-primary/5 pb-2">
                <CardTitle className="text-base">Growth Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-chart-blue"></div>
                    <span>Increase test coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-chart-blue"></div>
                    <span>Improve documentation practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-chart-blue"></div>
                    <span>Contribute to more open-source projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-chart-blue"></div>
                    <span>Explore more data visualization libraries</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
