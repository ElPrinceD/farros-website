import React, { useState, useRef, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { menuItems } from '../data/menu';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "As-salamu alaykum! I'm Aisha, your AI assistant. I can help you place orders, answer questions about our menu, or assist with reservations. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Menu recommendations
    if (message.includes('recommend') || message.includes('suggest') || message.includes('popular')) {
      const popularItems = menuItems.filter(item => item.popular);
      const randomItem = popularItems[Math.floor(Math.random() * popularItems.length)];
      return `I recommend our ${randomItem.name} - it's one of our most popular dishes! It's £${randomItem.price} and features authentic Mediterranean flavors. Would you like me to add it to your cart?`;
    }
    
    // Order specific items
    if (message.includes('order') || message.includes('add to cart')) {
      const itemNames = menuItems.map(item => item.name.toLowerCase());
      const foundItem = itemNames.find(name => message.includes(name));
      
      if (foundItem) {
        const item = menuItems.find(menuItem => menuItem.name.toLowerCase() === foundItem);
        if (item) {
          addToCart(item.id);
          return `Great choice! I've added ${item.name} to your cart for £${item.price}. Is there anything else you'd like to order?`;
        }
      }
      
      return "I'd be happy to help you order! You can browse our menu or tell me what you're in the mood for, and I can recommend something delicious.";
    }
    
    // Price inquiries
    if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
      return "Our prices range from £6.99 for desserts to £28.99 for premium dishes. Most main courses are between £12-25. Would you like to know the price of a specific item?";
    }
    
    // Hours and location
    if (message.includes('hours') || message.includes('open') || message.includes('time')) {
      return "We're open for dining and takeaway. For current hours, please contact us at info@farros.co.uk or check our social media for updates!";
    }
    
    if (message.includes('location') || message.includes('address') || message.includes('where')) {
      return "We're located in Nottingham, UK. We're an alcohol-free family-friendly venue perfect for all occasions. Contact us at info@farros.co.uk for more details!";
    }
    
    // Reservations
    if (message.includes('reservation') || message.includes('book') || message.includes('table')) {
      return "For reservations and bookings, please contact us at info@farros.co.uk. We'd love to have you dine with us at our family-friendly venue!";
    }
    
    // Dietary requirements
    if (message.includes('vegetarian') || message.includes('vegan') || message.includes('dietary')) {
      return "We offer a variety of options including steak, peri-peri, Italian, and Mediterranean cuisine. We have vegetarian options and can accommodate most dietary requirements. Contact us at info@farros.co.uk for specific needs!";
    }
    
    // General help
    if (message.includes('help') || message.includes('menu') || message.includes('what')) {
      return "As-salamu alaykum! I can help you with:\n• Menu recommendations\n• Placing orders\n• Price information\n• Restaurant hours and location\n• Dietary requirements\n\nWhat would you like to know?";
    }
    
    // Default response
    return "As-salamu alaykum! I'm here to help! You can ask me about our menu, place orders, or get information about our restaurant. What would you like to know?";
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputText);
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button 
        className="ai-chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="Chat with Aisha"
      >
        <span className="chat-icon">💬</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chat-window">
          <div className="chat-header">
            <div className="chat-title">
              <span className="chat-avatar">🕌</span>
              <div>
                <h3>Aisha</h3>
                <p>Online • Ready to help</p>
              </div>
            </div>
            <button 
              className="chat-close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>
          
          <div className="chat-messages">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`message ${message.isUser ? 'user' : 'ai'}`}
              >
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message ai">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chat-input">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="chat-input-field"
            />
            <button 
              onClick={handleSendMessage}
              className="chat-send-btn"
              disabled={!inputText.trim()}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
