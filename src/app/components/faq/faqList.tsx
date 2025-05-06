import AccordionItem from './accordionItem';
import './faqList.css';

const faqData = [
  {
    title: "What is PopAI??",
    content: "PopAI is an AI-powered video recommendation platform that uses blockchain technology to deliver personalized content and rewards."
  },
  {
    title: "How to use PopcornAI?",
    content: "Simply sign up, explore recommended videos, and start watching. You can also stake tokens to unlock extra perks."
  },
  {
    title: "What tokens does PopAI issue?",
    content: "PopAI issues the $POPAI token, which can be earned by participating in the platform and staked to receive passive rewards and special benefits."
  },
  {
    title: "How can I partner with PopAI?",
    content: "We’re always open to collaborations! Please reach out via our official partnership form on the website, and our team will get in touch with you."
  },
  {
    title: "How do I earn $POPAI tokens?",
    content: "Yes, $POPAI tokens can be traded on supported decentralized exchanges (DEXs), allowing you to manage your assets flexibly."
  },
  {
    title: "Is PopAI safe to use?",
    content: "Absolutely! PopAI prioritizes user security and transparency with blockchain-based operations and privacy protection."
  }
];

export default function FaqList() {
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions❓</h2>
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