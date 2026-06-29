import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Trigger premium confetti burst
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#4f46e5', '#06b6d4', '#a855f7']
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Clear success notification after 5s
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-900">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="mt-2 h-1 w-12 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 dark:text-slate-600 max-w-xl mx-auto">
            Have a question or want to discuss opportunities? Send a message directly and I will respond as soon as possible.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Details (lg:col-span-5) */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <div className="glass-panel rounded-3xl p-8 h-full flex flex-col justify-between space-y-8 text-left">
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-900">Contact Information</h3>
                <p className="text-sm text-slate-400 dark:text-slate-600">
                  Feel free to contact me directly using the information below, or submit the contact form with your inquiry.
                </p>
              </div>

              {/* Detail Blocks */}
              <div className="space-y-6">
                
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="p-3.5 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-white/5">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email Me</p>
                    <a
                      href="mailto:anubhavpandey7080@gmail.com"
                      className="text-sm font-semibold text-slate-200 dark:text-slate-800 hover:text-indigo-400 dark:hover:text-indigo-650 transition-colors"
                    >
                      anubhavpandey7080@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="p-3.5 bg-cyan-500/10 text-cyan-400 rounded-2xl border border-white/5">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Call Me</p>
                    <a
                      href="tel:+917080881007"
                      className="text-sm font-semibold text-slate-200 dark:text-slate-800 hover:text-indigo-400 dark:hover:text-indigo-650 transition-colors"
                    >
                      +91 7080881007
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4">
                  <div className="p-3.5 bg-purple-500/10 text-purple-400 rounded-2xl border border-white/5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Location</p>
                    <span className="text-sm font-semibold text-slate-200 dark:text-slate-800">
                      Ayodhya / Mathura, UP, India
                    </span>
                  </div>
                </div>

              </div>

              <div className="text-[10px] text-slate-500 pt-6 border-t border-white/5 dark:border-black/5">
                © 2026 Anubhav Pandey. All rights reserved.
              </div>

            </div>
          </div>

          {/* Right Column: Form (lg:col-span-7) */}
          <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="200">
            <div className="glass-panel rounded-3xl p-6 md:p-8 text-left h-full flex flex-col justify-center">
              
              {submitSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center space-x-3 text-sm animate-fade-in-up">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Thank you! Your message has been submitted successfully. Confetti sent!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-400 dark:text-slate-600">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Anubhav Pandey"
                      className={`w-full px-4 py-3 rounded-xl bg-white/3 dark:bg-black/3 border ${
                        errors.name ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/8 dark:border-black/8 focus:border-indigo-500'
                      } text-sm text-slate-200 dark:text-slate-800 placeholder-slate-500 focus:outline-none transition-all duration-300`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 font-medium"><AlertCircle className="w-3.5 h-3.5" />{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-400 dark:text-slate-600">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="anubhav@gla.ac.in"
                      className={`w-full px-4 py-3 rounded-xl bg-white/3 dark:bg-black/3 border ${
                        errors.email ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/8 dark:border-black/8 focus:border-indigo-500'
                      } text-sm text-slate-200 dark:text-slate-800 placeholder-slate-500 focus:outline-none transition-all duration-300`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 font-medium"><AlertCircle className="w-3.5 h-3.5" />{errors.email}</p>
                    )}
                  </div>

                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-400 dark:text-slate-600">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Inquiry about software projects"
                    className={`w-full px-4 py-3 rounded-xl bg-white/3 dark:bg-black/3 border ${
                      errors.subject ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/8 dark:border-black/8 focus:border-indigo-500'
                    } text-sm text-slate-200 dark:text-slate-800 placeholder-slate-500 focus:outline-none transition-all duration-300`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 font-medium"><AlertCircle className="w-3.5 h-3.5" />{errors.subject}</p>
                  )}
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-400 dark:text-slate-600">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/3 dark:bg-black/3 border ${
                      errors.message ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/8 dark:border-black/8 focus:border-indigo-500'
                    } text-sm text-slate-200 dark:text-slate-800 placeholder-slate-500 focus:outline-none transition-all duration-300 resize-none`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 font-medium"><AlertCircle className="w-3.5 h-3.5" />{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold hover:from-indigo-700 hover:to-cyan-600 focus:outline-none hover:shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.02] disabled:scale-100 disabled:opacity-50 transition-all duration-300 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
