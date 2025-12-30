import { Terminal, Github, Mail, Instagram } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group cursor-pointer">
              <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                <Terminal className="h-6 w-6 text-primary" />
              </div>
              <span className="font-display font-bold text-2xl tracking-wider text-white">
                TEMOX
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Advanced IT & Cybersecurity solutions for the modern digital landscape. Secure, scalable, and future-ready.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/t.__x" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://github.com/tammam101" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:t.__x@tammam.online" className="text-gray-400 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services/cybersecurity-ethical-hacking" className="text-gray-400 hover:text-primary text-sm transition-colors">Cybersecurity</Link></li>
              <li><Link href="/services/networking-infrastructure" className="text-gray-400 hover:text-primary text-sm transition-colors">Networking</Link></li>
              <li><Link href="/services/software-development" className="text-gray-400 hover:text-primary text-sm transition-colors">Development</Link></li>
              <li><Link href="/services/cloud-server-solutions" className="text-gray-400 hover:text-primary text-sm transition-colors">Cloud Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary text-sm transition-colors">Contact</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-primary text-sm transition-colors">Careers</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">t.__x@tammam.online</li>
              <li className="text-gray-400 text-sm">+1 (555) 123-4567</li>
              <li className="text-gray-400 text-sm">123 Cyber Ave, Tech City</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 TEMOX. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2 md:mt-0">
            Designed for the future.
          </p>
        </div>
      </div>
    </footer>
  );
}
