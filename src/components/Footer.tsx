import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import mercuriumLogo from "@/assets/mercurium-logo.png";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="py-12 border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src={mercuriumLogo} 
              alt="Mercurium Logo" 
              className="w-8 h-8"
            />
            <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
              Mercurium.ai
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-sm text-muted-foreground">
              {t('footer.description')}
            </span>
            <Button variant="ghost" size="sm">
              {t('footer.contact')}
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Mercurium.ai. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;