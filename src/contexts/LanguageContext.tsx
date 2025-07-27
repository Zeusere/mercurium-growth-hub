import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.projects': 'Projects',
    'nav.course': 'Course',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Launch Profitable Apps',
    'hero.subtitle': 'Without Programming Knowledge',
    'hero.description': 'Learn our Vibe Coding methodology and create scalable apps that generate real profits. From idea to market in record time.',
    'hero.cta': 'Start Your Journey',
    'hero.watch': 'Watch Demo',
    
    // Projects
    'projects.title': 'Successful Apps We\'ve Built',
    'projects.subtitle': 'Real examples of profitable applications created with our methodology',
    
    // Course
    'course.title': 'Vibe Coding Course',
    'course.subtitle': 'The Revolutionary Method to Create Apps Without Programming',
    'course.description': 'Learn how to build and launch profitable apps in weeks, not years. Our proven methodology has helped hundreds of entrepreneurs turn their ideas into successful businesses.',
    'course.benefit1': 'Launch in 30 days',
    'course.benefit2': 'No coding required',
    'course.benefit3': 'Guaranteed profits',
    'course.feature1.title': 'Complete Methodology',
    'course.feature1.description': 'Step-by-step system from idea validation to market launch',
    'course.feature2.title': 'Real Tools',
    'course.feature2.description': 'Access to the same tools we use to build million-dollar apps',
    'course.feature3.title': 'Expert Support',
    'course.feature3.description': '24/7 support from our team of successful entrepreneurs',
    'course.feature4.title': 'Success Community',
    'course.feature4.description': 'Join a network of entrepreneurs creating profitable apps',
    'course.waitlist': 'Join the Waitlist',
    'course.spots': 'Only 47 spots remaining',
    'course.price': 'Launch price: $497',
    'course.email.placeholder': 'Enter your email',
    'course.email.success': 'Welcome to the waitlist! We\'ll contact you soon.',
    
    // Footer
    'footer.description': 'Creating profitable and scalable applications with innovative methodologies.',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.social': 'Follow Us',
    'footer.rights': 'All rights reserved.'
  },
  es: {
    // Header
    'nav.projects': 'Proyectos',
    'nav.course': 'Curso',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Lanza Apps Rentables',
    'hero.subtitle': 'Sin Saber Programar',
    'hero.description': 'Aprende nuestra metodología Vibe Coding y crea apps escalables que generen beneficios reales. De la idea al mercado en tiempo récord.',
    'hero.cta': 'Comienza Tu Viaje',
    'hero.watch': 'Ver Demo',
    
    // Projects
    'projects.title': 'Apps Exitosas que Hemos Creado',
    'projects.subtitle': 'Ejemplos reales de aplicaciones rentables creadas con nuestra metodología',
    
    // Course
    'course.title': 'Curso Vibe Coding',
    'course.subtitle': 'El Método Revolucionario para Crear Apps Sin Programar',
    'course.description': 'Aprende a construir y lanzar apps rentables en semanas, no años. Nuestra metodología probada ha ayudado a cientos de emprendedores a convertir sus ideas en negocios exitosos.',
    'course.benefit1': 'Lanza en 30 días',
    'course.benefit2': 'Sin programación',
    'course.benefit3': 'Beneficios garantizados',
    'course.feature1.title': 'Metodología Completa',
    'course.feature1.description': 'Sistema paso a paso desde validación de idea hasta lanzamiento al mercado',
    'course.feature2.title': 'Herramientas Reales',
    'course.feature2.description': 'Acceso a las mismas herramientas que usamos para construir apps millonarias',
    'course.feature3.title': 'Soporte Experto',
    'course.feature3.description': 'Soporte 24/7 de nuestro equipo de emprendedores exitosos',
    'course.feature4.title': 'Comunidad de Éxito',
    'course.feature4.description': 'Únete a una red de emprendedores creando apps rentables',
    'course.waitlist': 'Únete a la Lista de Espera',
    'course.spots': 'Solo quedan 47 plazas',
    'course.price': 'Precio de lanzamiento: $497',
    'course.email.placeholder': 'Ingresa tu email',
    'course.email.success': '¡Bienvenido a la lista de espera! Te contactaremos pronto.',
    
    // Footer
    'footer.description': 'Creando aplicaciones rentables y escalables con metodologías innovadoras.',
    'footer.links': 'Enlaces Rápidos',
    'footer.contact': 'Contacto',
    'footer.social': 'Síguenos',
    'footer.rights': 'Todos los derechos reservados.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};