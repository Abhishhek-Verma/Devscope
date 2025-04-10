import { PageLayout } from "@/components/layout/PageLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ChartContainer } from "@/components/dashboard/ChartContainer";
import { RepoTable } from "@/components/dashboard/RepoTable";
import { 
  BarChart3,
  BookOpen,
  Code2,
  Github,
  GitMerge,
  GitPullRequestDraft,
  History,
  PieChart,
  Star
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line,
  PieChart as RePieChart,
  Pie,
  Cell
} from "recharts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

// Mock data for charts
const commitData = [
  { name: "Jan", commits: 65 },
  { name: "Feb", commits: 78 },
  { name: "Mar", commits: 123 },
  { name: "Apr", commits: 92 },
  { name: "May", commits: 135 },
  { name: "Jun", commits: 158 },
  { name: "Jul", commits: 142 },
];

const languageData = [
  { name: "TypeScript", value: 45, color: "#3178c6" },
  { name: "JavaScript", value: 25, color: "#f7df1e" },
  { name: "Python", value: 15, color: "#3572A5" },
  { name: "Go", value: 10, color: "#00ADD8" },
  { name: "Other", value: 5, color: "#6e7781" },
];

const repositories = [
  {
    name: "awesome-project",
    description: "A revolutionary open-source project for developers",
    stars: 234,
    contributions: 186,
    language: "TypeScript",
  },
  {
    name: "data-visualizer",
    description: "Interactive data visualization library",
    stars: 187,
    contributions: 132,
    language: "JavaScript",
  },
  {
    name: "api-toolkit",
    description: "Simple toolkit for building RESTful APIs",
    stars: 145,
    contributions: 89,
    language: "TypeScript",
  },
  {
    name: "ml-algorithms",
    description: "Implementation of common machine learning algorithms",
    stars: 112,
    contributions: 67,
    language: "Python",
  },
  {
    name: "microservice-template",
    description: "Template for Go-based microservices",
    stars: 78,
    contributions: 45,
    language: "Go",
  },
];

export default function Dashboard() {
  return (
    <PageLayout>
      <div className="container py-6">
        {/* Welcome Section */}
        <div className="mb-8 rounded-lg bg-gradient-to-r from-devscope-100 to-white p-6 dark:from-devscope-900/20 dark:to-devscope-900/5">
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14 border-4 border-white shadow-lg">
              <AvatarImage src="https://avatars.githubusercontent.com/u/1234567" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">Welcome back, John!</h1>
              <p className="text-sm text-muted-foreground">
                Here's what's happening with your GitHub activity
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Button size="sm" className="gap-1 text-xs">
              <Github className="h-3.5 w-3.5" />
              <span>Sync with GitHub</span>
            </Button>
            <Button size="sm" variant="outline" className="gap-1 text-xs">
              <GitPullRequestDraft className="h-3.5 w-3.5" />
              <span>Generate Report</span>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <StatsCard
            title="Total Commits"
            value="1,284"
            icon={Github}
            trend="up"
            trendValue="12% from last month"
          />
          <StatsCard
            title="Pull Requests"
            value="38"
            icon={GitMerge}
            trend="up"
            trendValue="8% from last month"
          />
          <StatsCard
            title="Repositories"
            value="24"
            icon={BookOpen}
            trend="neutral"
            trendValue="Same as last month"
          />
          <StatsCard
            title="Stars Received"
            value="842"
            icon={Star}
            trend="up"
            trendValue="18% from last month"
          />
        </div>

        {/* Charts Section */}
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartContainer
            title="Commit Activity"
            description="Number of commits over the last 7 months"
            action={
              <Button variant="ghost" size="sm" className="gap-1">
                <History className="h-3.5 w-3.5" />
                <span className="text-xs">History</span>
              </Button>
            }
          >
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={commitData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="commits" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartContainer>
          
          <ChartContainer
            title="Top Languages"
            description="Distribution of programming languages in your repositories"
            action={
              <Button variant="ghost" size="sm" className="gap-1">
                <Code2 className="h-3.5 w-3.5" />
                <span className="text-xs">Details</span>
              </Button>
            }
          >
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RePieChart>
                  <Pie
                    data={languageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {languageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value, name) => [`${value}%`, name]}
                    contentStyle={{ 
                      borderRadius: "8px",
                      background: "rgba(255, 255, 255, 0.8)",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
                    }}
                  />
                </RePieChart>
              </ResponsiveContainer>
            </div>
          </ChartContainer>
        </div>

        {/* Repository Table */}
        <RepoTable repositories={repositories} />
      </div>
    </PageLayout>
  );
}
