import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Rocket, Target, Clock, Trophy } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Course = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "🎉 You're on the waitlist!",
        description: "We'll notify you when the Vibe Coding course launches. Get ready to build your next million-dollar app!",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Vibe Coding Method",
      description: "Learn our proprietary rapid development framework that cuts build time by 80%"
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Launch in Days, Not Months",
      description: "From idea to profitable app in under 30 days using our proven systems"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Growth Hacking Secrets",
      description: "The exact strategies we use to achieve 10x user growth and viral adoption"
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "Monetization Blueprints",
      description: "Multiple revenue streams and pricing strategies that maximize profit from day one"
    }
  ];

  return (
    <section id="course" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            🔥 Limited Access - Early Bird
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Master
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Vibe Coding</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            The revolutionary course that teaches you to build, launch, and scale 
            profitable apps faster than ever imagined. Join the exclusive waitlist.
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>30-day challenge</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Target className="w-4 h-4" />
              <span>Real projects</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Trophy className="w-4 h-4" />
              <span>Profit guarantee</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-background/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Waitlist Form */}
        <Card className="max-w-2xl mx-auto bg-background/80 backdrop-blur-sm border-border/50 shadow-primary/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2">Join the Exclusive Waitlist</CardTitle>
            <CardDescription className="text-base">
              Be among the first 100 students to access the Vibe Coding course at a special launch price.
              <strong className="block text-foreground mt-2">Only 100 spots available!</strong>
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="shadow-primary whitespace-nowrap"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Secure My Spot"}
                </Button>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>No spam, ever. Unsubscribe anytime.</span>
              </div>
            </form>
            
            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">67</div>
                  <div className="text-xs text-muted-foreground">Spots Left</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">$497</div>
                  <div className="text-xs text-muted-foreground">Early Bird Price</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">30</div>
                  <div className="text-xs text-muted-foreground">Day Challenge</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Course;