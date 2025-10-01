import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: 'We will get back to you soon.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>
                <Button type="submit" className="w-full" variant="hero">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="bg-primary text-white p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">support@alphabeeta.com</p>
                  <p className="text-muted-foreground">sales@alphabeeta.com</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="bg-primary text-white p-3 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91 1800-123-4567</p>
                  <p className="text-muted-foreground">Mon-Sat: 9 AM - 7 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="bg-primary text-white p-3 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    123 Shopping Complex<br />
                    MG Road, Bangalore<br />
                    Karnataka 560001, India
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
