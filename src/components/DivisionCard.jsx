import { ArrowRight } from 'lucide-react';

export default function DivisionCard({ icon: Icon, title, description, revenue, href }) {
  return (
    <a
      href={href}
      className="group bg-white border border-gray-200 hover:border-gold-primary transition-all duration-300 p-8 rounded-sm hover:shadow-lg"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-navy-primary/5 rounded-sm group-hover:bg-gold-light transition-colors">
          <Icon className="w-8 h-8 text-navy-primary group-hover:text-gold-primary transition-colors" />
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gold-primary group-hover:translate-x-1 transition-all" />
      </div>
      
      <h3 className="text-xl font-semibold text-navy-primary mb-2 group-hover:text-gold-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>
      
      <div className="text-sm text-navy-secondary font-medium">
        Umsatz: {revenue}
      </div>
    </a>
  );
}
