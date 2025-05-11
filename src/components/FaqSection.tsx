
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need programming experience to learn algorithmic trading?",
    answer: "No, our program is designed for traders of all technical backgrounds. We provide user-friendly tools and platforms that allow you to implement algorithmic strategies without extensive programming knowledge. For those interested in coding, we also offer advanced modules."
  },
  {
    question: "How much capital do I need to start trading with your strategies?",
    answer: "Our strategies are scalable and can be implemented with various account sizes. We recommend starting with at least $5,000 for optimal results, but we have special modules for smaller accounts that focus on capital preservation and growth."
  },
  {
    question: "How long does it take to see results from your program?",
    answer: "Most of our students start seeing improvements in their trading within the first month. However, mastering algorithmic trading is a journey, and the most significant results typically come after 3-6 months of consistent application of our strategies."
  },
  {
    question: "What markets can I trade using your algorithmic strategies?",
    answer: "Our strategies are applicable across various markets including forex, stocks, futures, and cryptocurrencies. We provide specialized modules for each market to address their unique characteristics."
  },
  {
    question: "Is there ongoing support after I complete the program?",
    answer: "Absolutely! All our students receive lifetime access to our community forum where our instructors regularly provide updates and answer questions. We also offer premium ongoing mentorship options for traders who want continued guidance."
  },
  {
    question: "What if the strategies don't work for me?",
    answer: "We stand behind our education program with a 30-day money-back guarantee. If you follow our instructions and don't see improvement in your trading, we'll refund your investment. Additionally, our support team works closely with all students to ensure proper implementation."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-trading-gold">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our algorithmic trading program.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium text-lg py-6 hover:text-trading-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
