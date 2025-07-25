import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
              Mercurium.ai
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-sm text-muted-foreground">
              Building the future, one app at a time
            </span>
            <Button variant="ghost" size="sm">
              Contact
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Mercurium.ai. All rights reserved. Built with passion and code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;