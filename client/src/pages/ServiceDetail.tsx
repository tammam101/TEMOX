import { useRoute, Link } from "wouter";
import { servicesData } from "@/data/services";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function ServiceDetail() {
  const [match, params] = useRoute("/services/:slug");
  
  if (!match) return <NotFound />;

  const service = servicesData.find(s => s.slug === params.slug);
  
  if (!service) return <NotFound />;

  const Icon = service.icon;

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/#services" className="inline-flex items-center text-gray-400 hover:text-primary mb-8 transition-colors group">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
              <Icon className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
              {service.title}
            </h1>
          </div>

          <div className="glass p-8 md:p-12 rounded-2xl mb-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
              {service.fullDesc}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "24/7 Monitoring & Support",
                "Enterprise-Grade Security",
                "Scalable Architecture",
                "Expert Consultation"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-400">
                  <CheckCircle2 className="text-accent h-5 w-5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/10 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Ready to upgrade your {service.title}?
              </h3>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Get a custom quote tailored to your specific business needs. Our team is ready to deploy.
              </p>
              <Link href={`/contact?service=${service.slug}`} className="inline-block">
                <motion.div 
                  className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors cursor-pointer shadow-lg shadow-primary/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request This Service
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
