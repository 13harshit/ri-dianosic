'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Heart, Mail, Phone, MapPin, Star, ChevronRight, Calendar, Clock, Shield, Users, Award, Activity, Beaker, Microscope, Stethoscope, ChevronDown, ArrowRight, Menu, X } from 'lucide-react'
import {
  useScrollAnimation,
  useCounterAnimation,
  useTypewriter,
  useScrollAnimationRepeat,
  useStaggeredAnimation
} from '@/hooks/use-animations'
import { blogPosts } from '@/lib/blog-data'
import Link from 'next/link'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ]

  // Animation hooks for various elements
  const heroBadge = useScrollAnimation(0.2)
  const heroTitle = useScrollAnimation(0.2)
  const heroDescription = useScrollAnimation(0.2)
  const heroButtons = useScrollAnimation(0.2)
  const heroStats = useScrollAnimation(0.2)

  // Counter animations
  const patientsCount = useCounterAnimation(50000, 2000, 0, 500)
  const yearsCount = useCounterAnimation(15, 2000, 0, 600)
  const expertsCount = useCounterAnimation(100, 2000, 0, 700)
  const testsCount = useCounterAnimation(1000000, 2500, 0, 800)

  // Typewriter effect
  const heroTypewriter = useTypewriter('Excellence in Diagnostic Healthcare', 80, 500)

  // Parallax for hero image
  const heroParallax = useScrollAnimationRepeat(0.1)

  // About section animations
  const aboutBadge = useScrollAnimation(0.2)
  const aboutTitle = useScrollAnimation(0.2)
  const aboutDescription = useScrollAnimation(0.2)
  const aboutFeatures = useScrollAnimation(0.2)
  const aboutImage = useScrollAnimation(0.2)

  // Services section animations
  const servicesBadge = useScrollAnimation(0.1)
  const servicesTitle = useScrollAnimation(0.1)
  const servicesDescription = useScrollAnimation(0.1)
  const serviceCardDelays = useStaggeredAnimation(4, 150)

  // Testimonials animations
  const testimonialsBadge = useScrollAnimation(0.1)
  const testimonialsTitle = useScrollAnimation(0.1)
  const testimonialsDescription = useScrollAnimation(0.1)
  const testimonialDelays = useStaggeredAnimation(3, 150)

  // Blog animations
  const blogBadge = useScrollAnimation(0.1)
  const blogTitle = useScrollAnimation(0.1)
  const blogDescription = useScrollAnimation(0.1)
  const blogDelays = useStaggeredAnimation(3, 150)

  // Contact animations
  const contactBadge = useScrollAnimation(0.1)
  const contactTitle = useScrollAnimation(0.1)
  const contactDescription = useScrollAnimation(0.1)
  const contactInfo = useScrollAnimation(0.2)
  const contactForm = useScrollAnimation(0.2)

  // Footer animation
  const footerAnimation = useScrollAnimation(0.1)

  const services = [
    {
      icon: <Microscope className="w-8 h-8" />,
      title: 'Laboratory Services',
      description: 'Comprehensive diagnostic testing with state-of-the-art equipment and certified professionals',
      features: ['Blood Tests', 'Urine Analysis', 'Biochemistry', 'Hematology'],
      image: '/images/service-lab.png'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Radiology & Imaging',
      description: 'Advanced imaging services including X-Ray, CT Scan, MRI, and Ultrasound diagnostics',
      features: ['Digital X-Ray', 'CT Scan', 'MRI', 'Ultrasound'],
      image: '/images/service-imaging.png'
    },
    {
      icon: <Beaker className="w-8 h-8" />,
      title: 'Pathology Services',
      description: 'Expert pathological analysis and biopsy services with quick and accurate results',
      features: ['Biopsy Analysis', 'Histopathology', 'Cytopathology', 'Immunohistochemistry'],
      image: '/images/service-pathology.png'
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Health Checkups',
      description: 'Comprehensive health screening packages for preventive care and early detection',
      features: ['Full Body Checkup', 'Cardiac Screening', 'Diabetes Panel', 'Cancer Screening'],
      image: '/images/service-checkup.png'
    },
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Businesswoman',
      rating: 5,
      text: 'Ritu Diagnostic has been our family\'s trusted healthcare partner for years. Their accuracy and professionalism is unmatched.',
      avatar: 'PS'
    },
    {
      name: 'Rahul Verma',
      role: 'Software Engineer',
      rating: 5,
      text: 'Quick turnaround time and excellent customer service. The staff is very supportive and the reports are highly reliable.',
      avatar: 'RV'
    },
    {
      name: 'Anita Gupta',
      role: 'Teacher',
      rating: 5,
      text: 'I appreciate their attention to detail and the care they show to every patient. The health checkup packages are very reasonably priced.',
      avatar: 'AG'
    },
  ]



  const stats = [
    { icon: <Users />, label: 'Happy Patients', value: '50,000+' },
    { icon: <Award />, label: 'Years of Excellence', value: '15+' },
    { icon: <Shield />, label: 'Certified Experts', value: '100+' },
    { icon: <Activity />, label: 'Tests Performed', value: '1M+' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(navItems[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Navigation Header */}
      <header
        ref={heroBadge.ref}
        className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-500 ${heroBadge.isVisible ? 'animate-fade-in-down' : ''
          }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Animated Logo */}
            <div
              className={`flex items-center space-x-2 group cursor-pointer transition-all duration-300 ${heroBadge.isVisible ? 'animate-scale-in delay-100' : 'opacity-0'
                }`}
              onClick={() => scrollToSection('home')}
            >
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:animate-heartbeat shadow-lg group-hover:shadow-xl">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground transition-all duration-300 group-hover:text-primary">
                Ritu Diagnostic
              </span>
            </div>

            {/* Desktop Navigation with Animated Items */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 overflow-hidden ${activeSection === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/70 hover:text-foreground hover:bg-secondary'
                    } ${heroBadge.isVisible ? `animate-fade-in-up stagger-${index + 1}` : 'opacity-0'}`}
                >
                  {activeSection === item.id && (
                    <span className="absolute inset-0 bg-primary animate-pulse" />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Animated Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg hover:bg-secondary transition-all duration-300 ${heroBadge.isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 animate-spin-slow" />
              ) : (
                <Menu className="w-6 h-6 hover:animate-wiggle" />
              )}
            </button>
          </div>

          {/* Animated Mobile Menu */}
          {mobileMenuOpen && (
            <div
              className={`md:hidden pb-4 overflow-hidden transition-all duration-500 ${mobileMenuOpen ? 'animate-slide-down' : 'animate-slide-up'
                }`}
            >
              <div className="flex flex-col space-y-1">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-3 rounded-lg text-left text-sm font-medium transition-all duration-300 overflow-hidden hover:scale-105 ${activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground/70 hover:text-foreground hover:bg-secondary'
                      } animate-fade-in-right`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 animate-bounce" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section with Parallax and Floating Elements */}
        <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">


          {/* Floating Animated Blobs */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-morph opacity-50" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-morph opacity-30 delay-1000" />

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-3xl lg:max-w-none">
                {/* Animated Badge */}
                <Badge
                  ref={heroBadge.ref}
                  className={`mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg ${heroBadge.isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                >
                  <span className="inline-block animate-pulse">●</span> Trusted Healthcare Partner
                </Badge>

                {/* Animated Title with Typewriter Effect */}
                <h1
                  ref={heroTitle.ref}
                  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight ${heroTitle.isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'
                    }`}
                >
                  <span className="text-primary">{heroTypewriter}</span>
                </h1>

                {/* Animated Description */}
                <p
                  ref={heroDescription.ref}
                  className={`text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed ${heroDescription.isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'
                    }`}
                >
                  Experience world-class diagnostic services with cutting-edge technology and compassionate care. Your health is our priority at Ritu Diagnostic.
                </p>

                {/* Animated Buttons */}
                <div
                  ref={heroButtons.ref}
                  className={`flex flex-col sm:flex-row gap-4 ${heroButtons.isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'
                    }`}
                >
                  <Button
                    size="lg"
                    onClick={() => scrollToSection('contact')}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:animate-pulse-glow group"
                  >
                    Book Appointment
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToSection('services')}
                    className="text-base px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary group"
                  >
                    Explore Services
                    <ArrowRight className="ml-2 w-5 h-0 group-hover:w-5 group-hover:h-5 transition-all duration-300" />
                  </Button>
                </div>

                {/* Animated Stats with Counters */}
                <div
                  ref={heroStats.ref}
                  className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border ${heroStats.isVisible ? 'animate-fade-in-up delay-700' : 'opacity-0'
                    }`}
                >
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center md:text-left group transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-default"
                    >
                      <div className="flex items-center justify-center md:justify-start gap-2 text-primary mb-2 group-hover:animate-heartbeat">
                        {stat.icon}
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 transition-all duration-300 group-hover:text-primary">
                        {index === 0 && patientsCount.toLocaleString()}
                        {index === 1 && `${yearsCount}+`}
                        {index === 2 && `${expertsCount}+`}
                        {index === 3 && testsCount.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground group-hover:transition-all group-hover:duration-300 group-hover:text-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Image */}
              <div className="hidden lg:block relative animate-fade-in-right duration-1000">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="/images/bg.jpg?v=8"
                    alt="Ritu Diagnostic Center"
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary/50" />
          </div>
        </section>

        {/* About Us Section with Scroll Animations */}
        <section id="about" className="py-20 md:py-28 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Animated Badge */}
                <Badge
                  ref={aboutBadge.ref}
                  className={`mb-4 transition-all duration-300 hover:scale-110 ${aboutBadge.isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                  variant="secondary"
                >
                  About Us
                </Badge>

                {/* Animated Title */}
                <h2
                  ref={aboutTitle.ref}
                  className={`text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 ${aboutTitle.isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'
                    }`}
                >
                  Your Trusted{' '}
                  <span className="text-primary animate-pulse">Diagnostic</span> Partner
                </h2>

                {/* Animated Description */}
                <p
                  ref={aboutDescription.ref}
                  className={`text-lg text-muted-foreground mb-6 leading-relaxed ${aboutDescription.isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'
                    }`}
                >
                  At Ritu Diagnostic, we combine advanced medical technology with compassionate care to deliver accurate and timely diagnostic services. With over 15 years of experience, we have become the preferred choice for healthcare diagnostics.
                </p>
                <p
                  className={`text-muted-foreground mb-8 leading-relaxed ${aboutDescription.isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'
                    }`}
                >
                  Our team of certified professionals, state-of-the-art equipment, and commitment to quality ensure that you receive the best diagnostic care possible. We understand the importance of accurate results in your healthcare journey.
                </p>

                {/* Animated Feature Cards */}
                <div
                  ref={aboutFeatures.ref}
                  className={`space-y-4 ${aboutFeatures.isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'
                    }`}
                >
                  {[
                    { icon: Award, title: 'NABL Accredited', desc: 'Certified by National Accreditation Board' },
                    { icon: Shield, title: 'Quality Assurance', desc: 'Rigorous quality control measures ensure accuracy' },
                    { icon: Users, title: 'Expert Team', desc: 'Highly qualified and experienced professionals' },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-background hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                        <feature.icon className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1 transition-colors duration-300 group-hover:text-primary">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated Image */}
              <div
                ref={aboutImage.ref}
                className={`relative transition-all duration-1000 ${aboutImage.isVisible ? 'animate-fade-in-right delay-500' : 'opacity-0'
                  }`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="/images/about-team.png"
                    alt="Ritu Diagnostic Team"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl animate-float">
                  <div className="text-4xl font-bold mb-1 animate-pulse">15+</div>
                  <div className="text-sm opacity-90">Years of Service</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section with Staggered Animations */}
        <section id="services" className="py-20 md:py-28 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              {/* Animated Badge */}
              <Badge
                ref={servicesBadge.ref}
                className={`mb-4 transition-all duration-300 hover:scale-110 hover:animate-bounce ${servicesBadge.isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                variant="secondary"
              >
                Our Services
              </Badge>

              {/* Animated Title */}
              <h2
                ref={servicesTitle.ref}
                className={`text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 ${servicesTitle.isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'
                  }`}
              >
                Comprehensive{' '}
                <span className="text-primary animate-pulse">Diagnostic</span> Services
              </h2>

              {/* Animated Description */}
              <p
                ref={servicesDescription.ref}
                className={`text-lg text-muted-foreground ${servicesDescription.isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'
                  }`}
              >
                We offer a wide range of diagnostic services using the latest technology and methodologies to ensure accurate results.
              </p>
            </div>

            {/* Animated Service Cards with Staggered Delays */}
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-xl transition-all duration-500 border-border bg-card overflow-hidden animate-on-scroll ${hoveredCard === index ? 'scale-105 shadow-2xl' : ''
                    }`}
                  style={{
                    transitionDelay: `${serviceCardDelays[index]}ms`,
                    animation: `fade-in-up 0.8s ease-out ${serviceCardDelays[index]}ms forwards`
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="grid md:grid-cols-2">
                    <div className="p-6 md:p-8">
                      <div
                        className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 transition-all duration-500 ${hoveredCard === index ? 'scale-110 rotate-6 bg-primary text-primary-foreground' : 'group-hover:scale-110'
                          }`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed transition-all duration-300 group-hover:text-foreground">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-foreground/70 transition-all duration-300 hover:text-foreground hover:translate-x-2"
                          >
                            <ChevronRight
                              className={`w-4 h-4 text-primary mr-2 flex-shrink-0 transition-transform duration-300 ${hoveredCard === index ? 'translate-x-2' : ''
                                }`}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative h-48 md:h-auto overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hoveredCard === index ? 'scale-125 rotate-2' : 'group-hover:scale-105'
                          }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section with Scroll Animations */}
        <section id="testimonials" className="py-20 md:py-28 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              {/* Animated Badge */}
              <Badge
                ref={testimonialsBadge.ref}
                className={`mb-4 transition-all duration-300 hover:scale-110 ${testimonialsBadge.isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                variant="secondary"
              >
                Testimonials
              </Badge>

              {/* Animated Title */}
              <h2
                ref={testimonialsTitle.ref}
                className={`text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 ${testimonialsTitle.isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'
                  }`}
              >
                What Our{' '}
                <span className="text-primary animate-pulse">Patients</span> Say
              </h2>

              {/* Animated Description */}
              <p
                ref={testimonialsDescription.ref}
                className={`text-lg text-muted-foreground ${testimonialsDescription.isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'
                  }`}
              >
                Don't just take our word for it. Here's what our valued patients have to say about their experience.
              </p>
            </div>

            {/* Animated Testimonial Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-background border-border hover:shadow-lg transition-all duration-500 animate-on-scroll hover:-translate-y-2 group"
                  style={{
                    animation: `fade-in-up 0.8s ease-out ${testimonialDelays[index]}ms forwards`
                  }}
                >
                  <CardHeader className="relative">
                    {/* Animated Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-primary text-primary transition-all duration-300 hover:scale-125 hover:rotate-12"
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <CardTitle className="text-base transition-colors duration-300 group-hover:text-primary">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="text-sm">{testimonial.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed italic relative">
                      <span className="text-6xl text-primary/20 absolute -top-4 -left-2 font-serif">&ldquo;</span>
                      {testimonial.text}
                      <span className="text-6xl text-primary/20 absolute -bottom-8 -right-2 font-serif">&rdquo;</span>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section with Hover Animations */}
        <section id="blog" className="py-20 md:py-28 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              {/* Animated Badge */}
              <Badge
                ref={blogBadge.ref}
                className={`mb-4 transition-all duration-300 hover:scale-110 hover:animate-bounce ${blogBadge.isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                variant="secondary"
              >
                Blog
              </Badge>

              {/* Animated Title */}
              <h2
                ref={blogTitle.ref}
                className={`text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 ${blogTitle.isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'
                  }`}
              >
                Latest{' '}
                <span className="text-primary animate-pulse">Health</span> Insights
              </h2>

              {/* Animated Description */}
              <p
                ref={blogDescription.ref}
                className={`text-lg text-muted-foreground ${blogDescription.isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'
                  }`}
              >
                Stay informed with our latest health tips, educational articles, and medical insights.
              </p>
            </div>

            {/* Animated Blog Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-500 flex flex-col animate-on-scroll hover:-translate-y-4"
                  style={{
                    animation: `fade-in-up 0.8s ease-out ${blogDelays[index]}ms forwards`
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground transition-all duration-300 hover:scale-110 animate-pulse">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader className="flex-1">
                    <CardTitle className="text-lg mb-2 line-clamp-2 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-3 transition-all duration-300 group-hover:text-foreground">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 transition-all duration-300 hover:text-primary group-hover:translate-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1 transition-all duration-300 hover:text-primary group-hover:translate-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/blog/${post.id}`} className="w-full">
                      <Button variant="ghost" className="w-full group-hover:bg-primary/10 transition-all duration-300 hover:scale-105 group">
                        Read More
                        <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section with Form Animations */}
        <section id="contact" className="py-20 md:py-28 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              {/* Animated Badge */}
              <Badge
                ref={contactBadge.ref}
                className={`mb-4 transition-all duration-300 hover:scale-110 ${contactBadge.isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                variant="secondary"
              >
                Contact Us
              </Badge>

              {/* Animated Title */}
              <h2
                ref={contactTitle.ref}
                className={`text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 ${contactTitle.isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'
                  }`}
              >
                Get in{' '}
                <span className="text-primary animate-pulse">Touch</span>
              </h2>

              {/* Animated Description */}
              <p
                ref={contactDescription.ref}
                className={`text-lg text-muted-foreground ${contactDescription.isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'
                  }`}
              >
                Have questions or want to book an appointment? We're here to help you.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Animated Contact Info */}
              <div
                ref={contactInfo.ref}
                className={`space-y-8 ${contactInfo.isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
              >
                <Card className="bg-background border-border hover:shadow-lg transition-all duration-500 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-2xl transition-colors duration-300 hover:text-primary">
                      Contact Information
                    </CardTitle>
                    <CardDescription>Reach out to us through any of these channels</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      { icon: MapPin, title: 'Address', text: ['123 Healthcare Avenue, Medical District', 'New Delhi, 110001'] },
                      { icon: Phone, title: 'Phone', text: ['+91 11 2345 6789', '+91 9876 543 210'] },
                      { icon: Mail, title: 'Email', text: ['info@ritudiagnostic.com', 'support@ritudiagnostic.com'] },
                      { icon: Clock, title: 'Working Hours', text: ['Mon - Sat: 7:00 AM - 9:00 PM', 'Sunday: 8:00 AM - 2:00 PM'] },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 hover:translate-x-2 group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                          <item.icon className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1 transition-colors duration-300 group-hover:text-primary">
                            {item.title}
                          </h3>
                          {item.text.map((line, i) => (
                            <p key={i} className="text-muted-foreground">{line}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Animated Contact Form */}
              <div
                ref={contactForm.ref}
                className={`${contactForm.isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
              >
                <Card className="bg-background border-border hover:shadow-lg transition-all duration-500 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-2xl transition-colors duration-300 hover:text-primary">
                      Send us a Message
                    </CardTitle>
                    <CardDescription>
                      Fill out the form and we'll get back to you shortly
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary">
                            First Name
                          </label>
                          <Input
                            id="firstName"
                            placeholder="John"
                            className="bg-background border-border transition-all duration-300 hover:border-primary hover:shadow-md focus:scale-105"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary">
                            Last Name
                          </label>
                          <Input
                            id="lastName"
                            placeholder="Doe"
                            className="bg-background border-border transition-all duration-300 hover:border-primary hover:shadow-md focus:scale-105"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="bg-background border-border transition-all duration-300 hover:border-primary hover:shadow-md focus:scale-105"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="bg-background border-border transition-all duration-300 hover:border-primary hover:shadow-md focus:scale-105"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          placeholder="How can we help you?"
                          className="bg-background border-border transition-all duration-300 hover:border-primary hover:shadow-md focus:scale-105"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your query..."
                          rows={4}
                          className="bg-background border-border resize-none transition-all duration-300 hover:border-primary hover:shadow-md focus:scale-105"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                      >
                        Send Message
                        <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Animated Footer */}
      <footer
        ref={footerAnimation.ref}
        className={`bg-card border-t border-border transition-all duration-500 ${footerAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Animated Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4 group cursor-pointer transition-all duration-300">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:animate-heartbeat shadow-lg">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground transition-all duration-300 group-hover:text-primary">
                  Ritu Diagnostic
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-md transition-all duration-300 hover:text-foreground">
                Your trusted partner in diagnostic healthcare. We are committed to providing accurate, reliable, and timely diagnostic services with compassion and care.
              </p>
              <div className="flex gap-4">
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer hover:scale-110 hover:animate-bounce">
                    <Heart className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 transition-colors duration-300 hover:text-primary">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navItems.map((item, index) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm hover:translate-x-2"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Animated Services */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 transition-colors duration-300 hover:text-primary">
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm text-left hover:translate-x-2">
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground transition-all duration-300 hover:text-foreground">
              © 2024 Ritu Diagnostic. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-all duration-300 hover:scale-110 hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-all duration-300 hover:scale-110 hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
