
import { PageLayout } from "@/components/layout/PageLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Calendar, 
  Code, 
  Download, 
  ExternalLink, 
  Github, 
  Globe, 
  Link2, 
  Mail, 
  MapPin, 
  Share2, 
  Star, 
  Twitter 
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
  PieChart, 
  Pie, 
  Cell 
} from "recharts";
import { useParams } from "react-router-dom";

// Mock data
const activityData = [
  { name: "Sun", commits: 5 },
  { name: "Mon", commits: 12 },
  { name: "Tue", commits: 15 },
  { name: "Wed", commits: 18 },
  { name: "Thu", commits: 14 },
  { name: "Fri", commits: 10 },
  { name: "Sat", commits: 6 },
];

const languageData = [
  { name: "TypeScript", value: 45, color: "#3178c6" },
  { name: "JavaScript", value: 25, color: "#f7df1e" },
  { name: "Python", value: 15, color: "#3572A5" },
  { name: "Go", value: 10, color: "#00ADD8" },
  { name: "Other", value: 5, color: "#6e7781" },
];

const monthlyCommits = [
  { name: "Jan", commits: 65 },
  { name: "Feb", commits: 78 },
  { name: "Mar", commits: 123 },
  { name: "Apr", commits: 92 },
  { name: "May", commits: 135 },
  { name: "Jun", commits: 158 },
  { name: "Jul", commits: 142 },
  { name: "Aug", commits: 110 },
  { name: "Sep", commits: 160 },
  { name: "Oct", commits: 178 },
  { name: "Nov", commits: 146 },
  { name: "Dec", commits: 98 },
];

const skillBadges = [
  "React.js", "TypeScript", "JavaScript", "Node.js", 
  "Git", "GitHub Actions", "REST APIs", "GraphQL", 
  "Next.js", "Tailwind CSS", "Redux", "React Query",
  "Jest", "Cypress", "Docker", "AWS"
];

export default function Portfolio() {
  const { username } = useParams<{ username: string }>();

  return (
    <PageLayout>
      <div className="container py-8">
        {/* Profile Header */}
        <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-lg bg-gradient-to-r from-devscope-100 to-white p-6 dark:from-devscope-900/20 dark:to-devscope-900/5 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
              <AvatarImage 
                src="https://avatars.githubusercontent.com/u/1234567" 
                alt={username || "User"} 
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-muted-foreground">Senior Frontend Developer</p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-2 md:justify-start">
                <Badge variant="outline" className="gap-1 border-devscope-200">
                  <Github className="h-3 w-3" />
                  <span>JohnDoe</span>
                </Badge>
                <Badge variant="outline" className="gap-1 border-devscope-200">
                  <MapPin className="h-3 w-3" />
                  <span>San Francisco, CA</span>
                </Badge>
                <Badge variant="outline" className="gap-1 border-devscope-200">
                  <Mail className="h-3 w-3" />
                  <span>john@example.com</span>
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" className="gap-1">
              <Github className="h-3.5 w-3.5" />
              <span>Follow on GitHub</span>
            </Button>
            <Button size="sm" variant="outline" className="gap-1">
              <Share2 className="h-3.5 w-3.5" />
              <span>Share</span>
            </Button>
            <Button size="sm" variant="outline" className="gap-1">
              <Download className="h-3.5 w-3.5" />
              <span>Export</span>
            </Button>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="mb-6 grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="contributions">Contributions</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          
          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Bio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Senior Frontend Developer with 5+ years of experience specializing in React, TypeScript, and modern JavaScript frameworks. Passionate about creating responsive, accessible, and performant web applications. Currently working at TechFlow Inc., focusing on developer tools and productivity applications.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a href="#" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                      <Globe className="h-3 w-3" />
                      <span>johndoe.dev</span>
                    </a>
                    <a href="#" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                      <Twitter className="h-3 w-3" />
                      <span>@johndoe</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Star className="h-4 w-4 text-primary" />
                    Stats Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-primary/5 p-4 text-center">
                      <span className="text-2xl font-bold text-primary">1,284</span>
                      <p className="text-xs text-muted-foreground">Total Commits</p>
                    </div>
                    <div className="rounded-lg bg-primary/5 p-4 text-center">
                      <span className="text-2xl font-bold text-primary">38</span>
                      <p className="text-xs text-muted-foreground">Pull Requests</p>
                    </div>
                    <div className="rounded-lg bg-primary/5 p-4 text-center">
                      <span className="text-2xl font-bold text-primary">24</span>
                      <p className="text-xs text-muted-foreground">Repositories</p>
                    </div>
                    <div className="rounded-lg bg-primary/5 p-4 text-center">
                      <span className="text-2xl font-bold text-primary">842</span>
                      <p className="text-xs text-muted-foreground">Stars Received</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Calendar className="h-4 w-4 text-primary" />
                  Contribution Activity
                </CardTitle>
                <CardDescription>
                  Weekly contribution pattern
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={activityData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="commits" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Contributions Tab */}
          <TabsContent value="contributions" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    Languages
                  </CardTitle>
                  <CardDescription>
                    Distribution of programming languages
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={languageData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
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
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {languageData.map((lang) => (
                      <div key={lang.name} className="flex items-center gap-1">
                        <div 
                          className="h-3 w-3 rounded-full" 
                          style={{ backgroundColor: lang.color }}
                        ></div>
                        <span className="text-xs">{lang.name} ({lang.value}%)</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    Yearly Activity
                  </CardTitle>
                  <CardDescription>
                    Contribution trend over the past year
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyCommits}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="commits" 
                          stroke="#8b5cf6" 
                          strokeWidth={2} 
                          dot={{ r: 3 }}
                          activeDot={{ r: 5 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Top Projects
                </CardTitle>
                <CardDescription>
                  Most notable repositories and contributions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">awesome-project</h3>
                      <Badge variant="outline" className="gap-1">
                        <Star className="h-3 w-3" />
                        <span>234</span>
                      </Badge>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      A revolutionary open-source project for developers
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-chart-blue"></div>
                        <span className="text-xs">TypeScript</span>
                      </div>
                      <a 
                        href="#" 
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>View</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">data-visualizer</h3>
                      <Badge variant="outline" className="gap-1">
                        <Star className="h-3 w-3" />
                        <span>187</span>
                      </Badge>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Interactive data visualization library
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-chart-yellow"></div>
                        <span className="text-xs">JavaScript</span>
                      </div>
                      <a 
                        href="#" 
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>View</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">api-toolkit</h3>
                      <Badge variant="outline" className="gap-1">
                        <Star className="h-3 w-3" />
                        <span>145</span>
                      </Badge>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Simple toolkit for building RESTful APIs
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-chart-blue"></div>
                        <span className="text-xs">TypeScript</span>
                      </div>
                      <a 
                        href="#" 
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>View</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">ml-algorithms</h3>
                      <Badge variant="outline" className="gap-1">
                        <Star className="h-3 w-3" />
                        <span>112</span>
                      </Badge>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Implementation of common machine learning algorithms
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-chart-green"></div>
                        <span className="text-xs">Python</span>
                      </div>
                      <a 
                        href="#" 
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>View</span>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Code className="h-4 w-4 text-primary" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillBadges.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-chart-green"></div>
                      <span className="text-sm">Arctic Code Vault Contributor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-chart-green"></div>
                      <span className="text-sm">Pull Shark (100+ PRs merged)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-chart-green"></div>
                      <span className="text-sm">Galaxy Brain (50+ accepted answers)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-chart-green"></div>
                      <span className="text-sm">Top 5% contributor in TypeScript category</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-chart-blue"></div>
                      <div>
                        <span className="block text-sm">AWS Certified Developer</span>
                        <span className="text-xs text-muted-foreground">Amazon Web Services, 2023</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-chart-blue"></div>
                      <div>
                        <span className="block text-sm">Professional Frontend Developer</span>
                        <span className="text-xs text-muted-foreground">Meta, 2022</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-chart-blue"></div>
                      <div>
                        <span className="block text-sm">Advanced JavaScript</span>
                        <span className="text-xs text-muted-foreground">freeCodeCamp, 2021</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Portfolio Share Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-primary/5 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Public Portfolio URL</span>
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      <Link2 className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </Button>
                  </div>
                  <div className="rounded-md bg-background p-2">
                    <code className="break-all text-xs">
                      https://devscope.io/portfolio/johndoe
                    </code>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Download className="h-3.5 w-3.5" />
                    <span>Download as PDF</span>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Download className="h-3.5 w-3.5" />
                    <span>Export as Markdown</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
}
