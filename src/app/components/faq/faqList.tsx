import AccordionItem from './accordionItem';
import './faqList.css';

const faqData = [
  {
    title: "What is Netflix?",
    content: "--"
  },
  {
    title: "How much does Netflix cost?",
    content: "--"
  },
  {
    title: "Where can I watch?",
    content: "--"
  },
  {
    title: "How do I cancel?",
    content: "--"
  },
  {
    title: "What can I watch on Netflix?",
    content: "--"
  },
  {
    title: "Is Netflix good for kids?",
    content: "--"
  }
];

export default function FaqList() {
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={index}
            title={faq.title}
            content={faq.content}
          />
        ))}
      </div>
    </div>
  );
}