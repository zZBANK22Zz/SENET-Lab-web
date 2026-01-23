import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  Send, 
  Mail, 
  MapPin, 
  Facebook, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  GraduationCap, 
  Microscope,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';

const OpportunityCard = ({ title, icon: Icon, requirements, benefits }) => (
  <div className="card-base p-8 group">
    <div className="w-14 h-14 bg-primary-soft rounded-2xl flex items-center justify-center text-primary-deep mb-6 group-hover:bg-gradient-official group-hover:text-white transition-all duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-text-main mb-6">{title}</h3>
    
    <div className="space-y-6">
      <div>
        <h4 className="text-xs font-bold text-primary-action uppercase tracking-widest mb-3">Requirements</h4>
        <ul className="space-y-2">
          {requirements.map((req, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
              <CheckCircle2 size={14} className="text-primary-action mt-0.5 flex-shrink-0" />
              {req}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-xs font-bold text-primary-action uppercase tracking-widest mb-3">Key Benefits</h4>
        <ul className="space-y-2">
          {benefits.map((ben, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-soft border border-primary-action mt-1.5 flex-shrink-0" />
              {ben}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border-light last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-primary-action transition-colors"
      >
        <span className="text-base font-bold text-text-main">{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-primary-action" /> : <ChevronDown size={20} className="text-text-muted" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-sm text-text-muted leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "general", message: "" });
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-bg-off">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-28 border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-soft text-primary-deep text-xs font-semibold mb-6 tracking-wide uppercase">
              <MessageSquare size={14} className="text-primary-action" />
              Join the Innovation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-8 tracking-tight">
              Let's <span className="text-gradient-official">Innovate Together</span>
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
              Whether you're a prospective student, a researcher, or a potential collaborator, 
              we'd love to hear from you. We are always looking for passionate minds to join our journey.
            </p>
          </div>
        </div>
      </section>

      {/* Research Opportunities track */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-main mb-4">Research Tracks</h2>
            <p className="text-text-muted">Find the right path for your academic and research goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <OpportunityCard 
              title="Undergraduate Research"
              icon={BookOpen}
              requirements={[
                "3rd or 4th-year student in Computing/Software Eng",
                "Minimum GPA of 3.00",
                "Strong interest in Software Engineering or Networks"
              ]}
              benefits={[
                "Hands-on experience with real-world research",
                "Mentorship from faculty and senior students",
                "Opportunities for publication and awards"
              ]}
            />
            <OpportunityCard 
              title="Graduate Studies"
              icon={GraduationCap}
              requirements={[
                "B.Eng or B.Sc in related fields",
                "Strong foundation in Computer Science",
                "Proactive and self-motivated research mindset"
              ]}
              benefits={[
                "Full or partial scholarship opportunities",
                "Dedicated lab workspace and computing resources",
                "Support for international conferences"
              ]}
            />
            <OpportunityCard 
              title="Post-Doc & Collaborations"
              icon={Microscope}
              requirements={[
                "Ph.D. in Software Engineering, Networking, or AI",
                "Proven track record of high-quality publications",
                "Passion for leading research initiatives"
              ]}
              benefits={[
                "Access to the lab's extensive network",
                "Collaborative environment with industry partners",
                "Opportunity to lead multi-disciplinary projects"
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information & Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-text-main mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-soft rounded-2xl flex items-center justify-center text-primary-action flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-text-main mb-1">Our Location</h4>
                      <p className="text-sm text-text-muted leading-relaxed">
                        College of Computing, Prince of Songkla University<br />
                        Phuket Campus 80, M.1 Vichitsongkram Road<br />
                        Kathu, Phuket 83120, Thailand
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-soft rounded-2xl flex items-center justify-center text-primary-action flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-text-main mb-1">Email Inquiry</h4>
                      <a href="mailto:senet@phuket.psu.ac.th" className="text-sm text-primary-action hover:underline font-medium">
                        senet@phuket.psu.ac.th
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-soft rounded-2xl flex items-center justify-center text-primary-action flex-shrink-0">
                      <Facebook size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-text-main mb-1">Facebook Profile</h4>
                      <a href="https://facebook.com/senet.lab" className="text-sm text-primary-action hover:underline font-medium text-blue-600 transition-colors">
                        SENET Research Lab
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Container */}
              <div className="card-base h-[300px] overflow-hidden group border border-border-light rounded-3xl">
                <iframe
                  title="College of Computing, PSU Phuket"
                  src="https://www.google.com/maps?q=College%20of%20Computing%2C%20Prince%20of%20Songkla%20University%2C%20Phuket%20Campus%2080%2C%20M.1%20Vichitsongkram%20Road%2C%20Kathu%2C%20Phuket%2083120&z=17&iwloc=near&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-base p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-text-main mb-8">Send Us a Message</h3>
              
              {submitted ? (
                <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="text-xl font-bold text-text-main mb-2">Message Sent Successfully!</h4>
                  <p className="text-text-muted">We'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-primary-action font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-text-muted uppercase tracking-widest mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl outline-none transition-all ${
                          errors.name ? 'border-red-300 bg-red-50' : 'border-border-light bg-bg-off focus:border-primary-action focus:ring-4 focus:ring-primary-soft'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-[10px] text-red-500 mt-1 font-bold italic">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-text-muted uppercase tracking-widest mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl outline-none transition-all ${
                          errors.email ? 'border-red-300 bg-red-50' : 'border-border-light bg-bg-off focus:border-primary-action focus:ring-4 focus:ring-primary-soft'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-[10px] text-red-500 mt-1 font-bold italic">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-text-muted uppercase tracking-widest mb-2">Inquiry Type</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border-light bg-bg-off rounded-xl outline-none focus:border-primary-action focus:ring-4 focus:ring-primary-soft"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="collaboration">Research Collaboration</option>
                      <option value="graduate">Graduate Admission</option>
                      <option value="undergraduate">Undergraduate Research</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-text-muted uppercase tracking-widest mb-2">Your Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl outline-none transition-all resize-none ${
                        errors.message ? 'border-red-300 bg-red-50' : 'border-border-light bg-bg-off focus:border-primary-action focus:ring-4 focus:ring-primary-soft'
                      }`}
                      placeholder="How can we help you?"
                    />
                    {errors.message && <p className="text-[10px] text-red-500 mt-1 font-bold italic">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-4 justify-center shadow-lg shadow-primary-deep/10"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={18} />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-bg-off">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-main mb-4">Frequently Asked Questions</h2>
            <p className="text-text-muted">Quick answers to common inquiries.</p>
          </div>

          <div className="space-y-2">
            <FAQItem 
              question="How can I join the lab as an undergraduate student?"
              answer="Undergraduate students are encouraged to contact our faculty members or visit our lab during office hours. We usually look for students in their 3rd or 4th year who have completed core computer science courses and show a strong interest in our research areas."
            />
            <FAQItem 
              question="Are there any scholarship opportunities for graduate students?"
              answer="Yes, PSU Phuket and the SENET Lab often have research assistant ships and scholarships for qualified Master's and Ph.D. students. These are usually tied to specific research projects funded by external agencies."
            />
            <FAQItem 
              question="Can I collaborate with the lab if I'm from industry?"
              answer="Absolutely. We welcome industry collaborations and often work on projects that bridge academic research with industrial needs. Contact us via the form above with your proposed collaboration areas."
            />
            <FAQItem 
              question="What is the response time for inquiries?"
              answer="We typically aim to respond to all inquiries within 2-3 business days. If your inquiry is urgent, please mention it in the subject line."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinUs;
