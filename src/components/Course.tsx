import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Rocket, Target, Clock, Trophy } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Course = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "🎉 ¡Estás en la lista de espera!",
        description: t('course.email.success'),
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: t('course.feature1.title'),
      description: t('course.feature1.description')
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: t('course.feature2.title'),
      description: t('course.feature2.description')
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: t('course.feature3.title'),
      description: t('course.feature3.description')
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: t('course.feature4.title'),
      description: t('course.feature4.description')
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
            🔥 Acceso Limitado - Oferta de Lanzamiento
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {t('course.title')}
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              {t('course.subtitle')}
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {t('course.description')}
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{t('course.benefit1')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Target className="w-4 h-4" />
              <span>{t('course.benefit2')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Trophy className="w-4 h-4" />
              <span>{t('course.benefit3')}</span>
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
            <CardTitle className="text-2xl mb-2">{t('course.waitlist')}</CardTitle>
            <CardDescription className="text-base">
              Sé uno de los primeros 100 estudiantes en acceder al curso Vibe Coding a precio especial de lanzamiento.
              <strong className="block text-foreground mt-2">¡Solo 100 plazas disponibles!</strong>
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder={t('course.email.placeholder')}
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
                  {isSubmitting ? "Uniéndome..." : "Asegurar Mi Plaza"}
                </Button>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Sin spam, nunca. Cancela cuando quieras.</span>
              </div>
            </form>
            
            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">{t('course.spots')}</div>
                  <div className="text-xs text-muted-foreground">Plazas Restantes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{t('course.price')}</div>
                  <div className="text-xs text-muted-foreground">Precio Lanzamiento</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">30</div>
                  <div className="text-xs text-muted-foreground">Días Desafío</div>
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