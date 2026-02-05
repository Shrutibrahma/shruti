import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "shrutibrahma@gmail.com",
      link: "mailto:shrutibrahma@gmail.com"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/shrutibrahma1",
      link: "https://github.com/shrutibrahma1"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/shrutibrahma",
      link: "https://linkedin.com/in/shrutibrahma"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-50/50 dark:to-purple-950/20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                Let's Work Together
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Have a project in mind or want to discuss the latest in AI? I'm always open to new opportunities and collaborations.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group p-4 rounded-xl bg-white/50 dark:bg-card/50 border border-transparent hover:border-purple-500/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-xs">
                      {info.label}
                    </p>
                    <p className="text-base font-semibold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white/80 dark:bg-card/30 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-white/10">
            <form className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-transparent border-gray-200 dark:border-white/10 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-transparent border-gray-200 dark:border-white/10 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    className="bg-transparent border-gray-200 dark:border-white/10 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    className="min-h-[150px] bg-transparent border-gray-200 dark:border-white/10 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none"
                  />
                </div>
              </div>

              <Button className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-xl group">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;