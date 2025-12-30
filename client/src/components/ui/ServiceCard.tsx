import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  slug: string;
  icon: LucideIcon;
  shortDesc: string;
}

export default function ServiceCard({ id, title, slug, icon: Icon, shortDesc }: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`}>
      <motion.div
        className="block h-full cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="glass-card h-full p-8 rounded-xl flex flex-col relative overflow-hidden group">
          {/* Glow Effect */}
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
          
          <div className="mb-6 p-4 bg-white/5 w-fit rounded-lg border border-white/10 group-hover:border-primary/50 transition-colors">
            <Icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
          </div>
          
          <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
            {shortDesc}
          </p>
          
          <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-primary transition-colors mt-auto">
            Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
