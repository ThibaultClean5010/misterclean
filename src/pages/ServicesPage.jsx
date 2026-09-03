import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {
  const detailedServices = [
    {
      id: 'after-builders',
      title: 'After-Builders Cleaning',
      slug: '/services/after-builders-cleaning',
      description: 'Post-construction cleaning requires specific expertise, safety protocols, and heavy-duty equipment. We partner with Adelaide construction firms to handle the complex removal of hazardous dust, paint splatters, and construction debris. Our comprehensive handover cleans ensure the property is immaculate and ready for immediate occupation or retail launch.',
      images: [
        'https://images.unsplash.com/photo-1699109076552-58db1cccae82',
        'https://images.unsplash.com/photo-1670134390902-fef9aed2f048'
      ],
      benefits: [
        'Safe and compliant debris removal',
        'Fine construction dust extraction',
        'Window, frame, and track detailing',
        'Hard floor scrubbing and sealing',
        'Final handover detailing'
      ]
    },
    {
      id: 'commercial',
      title: 'Commercial Cleaning',
      slug: '/services/commercial-cleaning',
      description: 'A clean office is fundamental to employee productivity and portraying a professional image to your clients. Our commercial cleaning programs are tailored to your operating hours and specific facility needs, ranging from daily janitorial services to weekly deep cleans for corporate offices across the Adelaide metro region.',
      images: [
        'https://images.unsplash.com/photo-1691522137720-1e456609b679',
        'https://images.unsplash.com/photo-1649665839727-f4e9cf1f2a82'
      ],
      benefits: [
        'Customized daily or weekly schedules',
        'Workstation and IT equipment sanitization',
        'Washroom deep cleaning and restocking',
        'Carpet vacuuming and spot removal',
        'Eco-friendly, low-odor products'
      ]
    },
    {
      id: 'hospital-clinic',
      title: 'Hospital & Clinic Cleaning',
      slug: '/services/hospital-clinic-cleaning',
      description: 'In the healthcare sector, hygiene is critical to patient safety. We provide specialized medical-grade cleaning services for clinics, dental practices, and medical centers, adhering strictly to clinical infection control standards. We utilize hospital-grade disinfectants and rigorous cross-contamination prevention protocols to ensure a sterile environment.',
      images: [
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
        'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b'
      ],
      benefits: [
        'Terminal cleaning and sanitization',
        'Hospital-grade disinfectant application',
        'Strict cross-contamination prevention',
        'Biohazard and clinical waste management',
        'TGA and health standard compliance'
      ]
    },
    {
      id: 'heavy-duty',
      title: 'Heavy-Duty Cleaning',
      slug: '/services/heavy-duty-cleaning',
      description: 'Warehouses, industrial sites, and manufacturing facilities face unique cleaning challenges. Our heavy-duty cleaning teams are equipped with industrial-grade machinery and safety certifications to manage large-scale spaces. We focus on hazard mitigation, machinery degreasing, and maintaining a safe environment for your workforce.',
      images: [
        'https://images.unsplash.com/photo-1604834794887-2e7d25c3ca15',
        'https://images.unsplash.com/photo-1691522137720-1e456609b679' 
      ],
      benefits: [
        'High-pressure washing systems',
        'Industrial floor sweeping and scrubbing',
        'High-reach cleaning and dusting',
        'Machinery and equipment degreasing',
        'Strict adherence to WHS protocols'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cleaning Services Adelaide | MisterClean</title>
        <meta name="description" content="Explore MisterClean's full range of professional cleaning services in Adelaide. Commercial, hospital/clinic, after-builders, and heavy-duty cleaning." />
      </Helmet>

      {/* Header */}
      <section className="py-20 bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Professional Cleaning Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Engineered for the demands of commercial operations. We deliver reliable, compliant, and immaculate results for businesses across Adelaide.
          </p>
        </div>
      </section>

      {/* Services Zig-Zag */}
      <section className="py-12">
        {detailedServices.map((service, index) => (
          <div key={service.id} className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={index % 2 !== 0 ? 'lg:col-start-2' : ''}
                >
                  <Link to={service.slug} className="hover:underline text-slate-900 hover:text-primary">
                    <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                  </Link>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold mb-4">Service Features</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-secondary shrink-0" />
                          <span className="text-foreground/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <Button asChild size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90">
                      <Link to={`/contact?service=${service.id}`}>
                        Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="h-12 px-8">
                      <Link to={service.slug}>
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </motion.div>

                {/* Images */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-2 gap-4 ${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}
                >
                  <div className="space-y-4 pt-12">
                    <img 
                      src={service.images[0]} 
                      alt={`${service.title} demonstration shot`} 
                      className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <img 
                      src={service.images[1]} 
                      alt={`Professional ${service.title.toLowerCase()} in progress`} 
                      className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                    />
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Bottom */}
      <section className="py-20 bg-primary/5 border-t border-primary/10 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Need a custom cleaning protocol?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We understand that every facility is unique. Contact our team to develop a bespoke cleaning schedule that aligns with your operational requirements.
          </p>
          <Button asChild size="lg" variant="outline" className="h-14 px-8 border-primary text-primary hover:bg-primary hover:text-white">
            <Link to="/contact">Speak with our Operations Team</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;