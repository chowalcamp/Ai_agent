'use client'
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './accordionItem.css';

interface AccordionItemProps {
  title: string;
  content: string;
}

export default function AccordionItem({ title, content }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button 
        className="accordion-header" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <Minus size={24} /> : <Plus size={24} />}
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="content-inner">
          {content}
        </div>
      </div>
    </div>
  );
}