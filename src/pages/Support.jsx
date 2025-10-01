import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, Package, CreditCard, RotateCcw } from 'lucide-react';

const Support = () => {
  const faqs = [
    {
      question: 'How do I track my order?',
      answer: 'You can track your order by logging into your account and visiting the "My Orders" section. You will also receive tracking information via email once your order is shipped.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 7-day return policy on most items. Products must be unused and in original packaging. Please contact our support team to initiate a return.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Currently, we only ship within India. We are working on expanding our services to international locations soon.',
    },
    {
      question: 'How long does delivery take?',
      answer: 'Standard delivery takes 3-7 business days. Express delivery is available in select cities and takes 1-2 business days.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept UPI, credit/debit cards, net banking, and popular digital wallets. All transactions are secured with industry-standard encryption.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Center</h1>
          <p className="text-xl text-muted-foreground">
            How can we help you today?
          </p>
        </div>

        {/* Quick Help Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-medium transition-all cursor-pointer">
            <CardContent className="pt-6">
              <Package className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold">Order Status</h3>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-medium transition-all cursor-pointer">
            <CardContent className="pt-6">
              <RotateCcw className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold">Returns</h3>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-medium transition-all cursor-pointer">
            <CardContent className="pt-6">
              <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold">Payments</h3>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-medium transition-all cursor-pointer">
            <CardContent className="pt-6">
              <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold">FAQs</h3>
            </CardContent>
          </Card>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Contact Support */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Still need help?</h3>
              <p className="text-muted-foreground mb-6">
                Our support team is here to assist you
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="text-primary hover:underline font-semibold">
                  Contact Support →
                </a>
                <span className="text-muted-foreground">|</span>
                <a href="tel:+918001234567" className="text-primary hover:underline font-semibold">
                  Call Us: 1800-123-4567
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;
