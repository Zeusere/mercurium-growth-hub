import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import mercuriumLogo from "@/assets/mercurium-logo.png";

const Header = () => {
  const { t } = useLanguage();
  
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={mercuriumLogo} 
              alt="Mercurium Logo" 
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Mercurium.ai
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.projects')}
            </a>
            <a href="#course" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.course')}
            </a>
            <LanguageSwitcher />
            <Button variant="outline" size="sm">
              {t('nav.contact')}
            </Button>
          </nav>
          
          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-2">
            <LanguageSwitcher />
            <Button variant="outline" size="sm">
              {t('nav.contact')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;