import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, DollarSign } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Coming Soon",
      description: "Revolutionary SaaS platform that achieved 10x growth in 6 months",
      metrics: {
        users: "50K+",
        revenue: "$500K",
        growth: "1000%"
      },
      tags: ["SaaS", "AI", "Growth"],
      status: "Live"
    },
    {
      title: "Project Alpha",
      description: "E-commerce marketplace that scaled to 7 figures",
      metrics: {
        users: "100K+",
        revenue: "$1.2M",
        growth: "800%"
      },
      tags: ["E-commerce", "Marketplace", "Mobile"],
      status: "Live"
    },
    {
      title: "Next Launch",
      description: "Fintech application disrupting traditional banking",
      metrics: {
        users: "25K+",
        revenue: "$300K",
        growth: "600%"
      },
      tags: ["Fintech", "Mobile", "API"],
      status: "Beta"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real apps, real results. See how our proven methodology transforms ideas into 
            profitable, scalable businesses that dominate their markets.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-primary/20 transition-all duration-300 bg-gradient-card border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={project.status === "Live" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div className="font-bold text-sm">{project.metrics.users}</div>
                    <div className="text-xs text-muted-foreground">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <DollarSign className="w-4 h-4 text-primary" />
                    </div>
                    <div className="font-bold text-sm">{project.metrics.revenue}</div>
                    <div className="text-xs text-muted-foreground">Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <div className="font-bold text-sm">{project.metrics.growth}</div>
                    <div className="text-xs text-muted-foreground">Growth</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see the detailed case studies and metrics?
          </p>
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;