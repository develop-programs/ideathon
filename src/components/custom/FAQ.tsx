import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can participate in the Ideathon?",
    answer:
      "The Ideathon is open to all college students with innovative startup ideas. Teams of 2-4 members are allowed.",
  },
  {
    question: "How will the teams be selected?",
    answer:
      "The top 20 teams will be selected based on their initial idea submission and innovation potential.",
  },
  {
    question: "What should the pitch include?",
    answer:
      "Your 10-minute pitch should cover the problem, solution, market opportunity, business model, and implementation plan.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Yes, there is a nominal registration fee per team. Details will be provided during registration.",
  },
];

export default function FAQ() {
  return (
    <section className="py-12 bg-background/70">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-Cprimary to-Csecondary bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
