
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you cover both fundamental and technical aspects of the equity market, including Futures and Options?",
    answer: "Yes. Our program offers comprehensive coverage of the Indian equity market, including both fundamental and technical analysis. You'll learn how to evaluate companies, understand financial reports, analyze industry trends, and apply practical trading techniques. We also provide dedicated training in Futures and Options (F&O)—covering concepts like option Greeks, hedging strategies, option writing, and practical F&O trading setups to help you trade derivatives with confidence and precision."
  },
  {
    question: "How long does it take to see results from your program?",
    answer: "Typically, 2–3 months. Most learners begin to see noticeable improvements in their trading discipline, strategy, and consistency within the first few months of applying the concepts taught in our program."
  },
  {
    question: "Do you provide access to Meta accounts and training on Forex and Crypto?",
    answer: "Yes. We provide comprehensive training in Forex and Cryptocurrency trading. We'll also guide you on how to set up and use Meta accounts through platforms like FundingPips and Delta Exchange."
  },
  {
    question: "Do you offer certification?",
    answer: "Yes, we do. Upon completion, you'll receive a certification from AshwaQuant, and we'll also support you in preparing for and passing the NISM Research Analyst and Derivatives Analyst exams."
  },
  {
    question: "Do you assist with job placement in top equity firms?",
    answer: "Yes. We help create and enhance your professional profiles on platforms like LinkedIn and Naukri, prepare you for interviews, and guide you through the NISM exams to improve your chances of placement in reputed equity research and trading firms."
  },
  {
    question: "Do I need programming experience to use your algorithmic trading tools?",
    answer: "No. Our algorithmic trading systems are designed to be user-friendly. You don't need any prior coding experience—just a willingness to learn and execute."
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
