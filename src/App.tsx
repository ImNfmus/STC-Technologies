/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Bell, 
  HardDrive, 
  Settings, 
  Shield, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight,
  Clock,
  Award,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BRAND_NAME, 
  HEADLINES, 
  CTAS, 
  SERVICES, 
  TESTIMONIALS, 
  FAQS,
  PHONE_NUMBER,
  LOGO_URL,
  EMAIL_ADDRESS
} from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 overflow-hidden rounded-lg">
              <img src={LOGO_URL} alt="STC Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">{BRAND_NAME}</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#quote" 
              className="bg-white hover:bg-slate-200 text-slate-950 px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-white/10"
            >
              Get a Quote
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#quote"
                className="block w-full text-center bg-white text-slate-950 px-3 py-3 rounded-lg text-base font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold uppercase tracking-wider mb-6">
              <Zap className="w-3 h-3" />
              Professional Security Installation
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              {HEADLINES[0]}
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
              Professional Reolink installation, high-definition surveillance, and secure NVR systems with no cloud subscriptions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#quote" 
                className="bg-white hover:bg-slate-200 text-slate-950 px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-white/10 group"
              >
                {CTAS[0]}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={`tel:${PHONE_NUMBER}`} 
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-2 border border-slate-700"
              >
                <Phone className="w-5 h-5" />
                {PHONE_NUMBER}
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-white" />
                <span className="text-white font-bold text-sm">Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-white" />
                <span className="text-white font-bold text-sm">Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span className="text-white font-bold text-sm">Insured</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000" 
                alt="Security Camera Installation" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold">Live System Monitoring Active</span>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera': return <Camera className="w-8 h-8" />;
      case 'Bell': return <Bell className="w-8 h-8" />;
      case 'HardDrive': return <HardDrive className="w-8 h-8" />;
      case 'Settings': return <Settings className="w-8 h-8" />;
      default: return <Shield className="w-8 h-8" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-slate-400 font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">Comprehensive Security Solutions</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We provide end-to-end security services tailored to the unique needs of your property.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-white/50 transition-all group cursor-pointer"
            >
              <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {getIcon(service.icon)}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center text-slate-200 text-xs font-bold gap-1 group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal (Service Page Template Example) */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-800 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 bg-slate-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="text-white mb-6">
                    {getIcon(selectedService.icon)}
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{selectedService.title}</h2>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    {selectedService.description} Our professional installation ensures optimal coverage and seamless integration with your existing infrastructure.
                  </p>
                  
                  <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    Key Benefits
                  </h3>
                  <ul className="grid grid-cols-1 gap-3 mb-8">
                    {selectedService.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        {benefit}
                      </li>
                    ))}
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      Mobile App Integration
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      Professional Setup & Testing
                    </li>
                  </ul>

                  <a 
                    href="#quote" 
                    onClick={() => setSelectedService(null)}
                    className="inline-flex bg-white hover:bg-slate-200 text-slate-950 px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-white/10"
                  >
                    Request This Service
                  </a>
                </div>

                <div className="bg-slate-800 p-8 lg:p-12 flex flex-col justify-center border-l border-slate-800">
                  <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 mb-8">
                    <h4 className="text-white font-bold mb-4">What's Included?</h4>
                    <ul className="space-y-3 text-sm text-slate-400">
                      <li className="flex justify-between"><span>On-site Consultation</span> <span className="text-white">Free</span></li>
                      <li className="flex justify-between"><span>Hardware Installation</span> <span className="text-white">Included</span></li>
                      <li className="flex justify-between"><span>Network Configuration</span> <span className="text-white">Included</span></li>
                      <li className="flex justify-between"><span>Mobile App Setup</span> <span className="text-white">Included</span></li>
                      <li className="flex justify-between"><span>6-Month Warranty</span> <span className="text-white">Included</span></li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                      <Shield className="w-6 h-6 text-white" />
                      <div>
                        <div className="text-white text-sm font-bold">Secure Installation</div>
                        <div className="text-slate-500 text-xs">Industry-standard encryption</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                      <Clock className="w-6 h-6 text-white" />
                      <div>
                        <div className="text-white text-sm font-bold">Fast Turnaround</div>
                        <div className="text-slate-500 text-xs">Most installs in 1 day</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    { title: 'Expert Installation', desc: 'Certified technicians with years of field experience.', icon: <Award /> },
    { title: 'Same-Day Service', desc: 'Emergency repairs and urgent installs when you need them.', icon: <Clock /> },
    { title: 'Smart Integration', desc: 'Connect your security to your existing smart home ecosystem.', icon: <Zap /> },
    { title: 'Local Support', desc: 'Based right here, providing personalized service to our community.', icon: <MapPin /> },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Section Background Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <img src={LOGO_URL} alt="" className="w-full h-full object-contain" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-slate-400 font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              The Gold Standard in <br />
              <span className="text-slate-200">Modern Surveillance</span>
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              At STC Technologies, we don't just install cameras; we build peace of mind. Our systems are engineered for reliability, ease of use, and maximum protection.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg h-fit text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                    <p className="text-slate-400 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 flex items-center justify-center p-12">
              <img 
                src={LOGO_URL} 
                alt="STC Technologies Logo" 
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <img src={LOGO_URL} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <div className="text-4xl font-black text-slate-950 mb-1">3+</div>
                <div className="text-slate-600 font-medium text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-slate-400 font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative"
            >
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-slate-400 font-bold tracking-widest uppercase text-sm mb-4">FAQ</h2>
          <h3 className="text-4xl font-bold text-white mb-6">Common Questions</h3>
        </div>

        <div className="space-y-4">
          {FAQS.slice(0, 6).map((faq, index) => (
            <div 
              key={index} 
              className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-800/50 transition-colors"
              >
                <span className="text-white font-semibold">{faq.question}</span>
                <ChevronRight className={`w-5 h-5 text-white transition-transform ${activeIndex === index ? 'rotate-90' : ''}`} />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5 text-slate-400 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Security Cameras',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `New Quote Request from ${formData.name}`;
    const body = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Message: ${formData.message}
    `.trim();

    const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="quote" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-16 bg-white text-slate-950">
              <h3 className="text-4xl font-bold mb-6">Get Your Free Security Quote</h3>
              <p className="text-slate-600 text-lg mb-10">
                Ready to secure your property? Fill out the form and our experts will contact you within 24 hours for a free consultation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-sm">Call Us Directly</div>
                    <div className="text-xl font-bold">{PHONE_NUMBER}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-sm">Email Us</div>
                    <div className="text-xl font-bold">{EMAIL_ADDRESS}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-sm">Service Area</div>
                    <div className="text-xl font-bold">Serving South Mississippi & Surrounding Regions</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 lg:p-16">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Request Sent!</h4>
                  <p className="text-slate-400">
                    Your email client should have opened with your request. If not, please click the button below to try again.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-white underline hover:text-slate-200 transition-colors"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all" 
                        placeholder="(555) 000-0000" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all" 
                      placeholder="john@example.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Service Interested In</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
                    >
                      <option>Security Cameras</option>
                      <option>Video Doorbells</option>
                      <option>NVR Systems</option>
                      <option>Maintenance & Upgrades</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Message (Optional)</label>
                    <textarea 
                      name="message"
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all" 
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-white hover:bg-slate-200 text-slate-950 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-white/10"
                  >
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 overflow-hidden rounded-lg">
                <img src={LOGO_URL} alt="STC Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">{BRAND_NAME}</span>
            </div>
            <p className="text-slate-500 max-w-md leading-relaxed mb-4">
              Professional Reolink security installation services for homeowners and businesses. We provide secure, local storage solutions with no cloud subscriptions required.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-8">
              <MapPin className="w-4 h-4" />
              <span>Serving South Mississippi & Surrounding Regions</span>
            </div>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:text-white cursor-pointer transition-colors">
                <Shield className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:text-white cursor-pointer transition-colors">
                <Shield className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:text-white cursor-pointer transition-colors">
                <Shield className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-500 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-slate-500 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-slate-500 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-slate-500 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-white transition-colors">Security Cameras</a></li>
              <li><a href="#" className="text-slate-500 hover:text-white transition-colors">Video Doorbells</a></li>
              <li><a href="#" className="text-slate-500 hover:text-white transition-colors">NVR Systems</a></li>
              <li><a href="#" className="text-slate-500 hover:text-white transition-colors">Maintenance</a></li>
              <li><a href="#" className="text-slate-500 hover:text-white transition-colors">Smart Home</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-900 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-600">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-white/20">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      
      {/* Sticky Call Button for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <a 
          href={`tel:${PHONE_NUMBER}`} 
          className="bg-white text-slate-950 p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
