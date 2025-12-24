import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! Welcome to CME AUTOS. How can I help you with your vehicle import needs today?',
      sender: 'support',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate support response
    setTimeout(() => {
      const supportMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getAutoResponse(newMessage),
        sender: 'support',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, supportMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getAutoResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('price') || message.includes('cost') || message.includes('quote')) {
      return 'I\'d be happy to help you with pricing information! Vehicle import costs vary based on the make, model, and specifications. Could you please tell me which vehicle you\'re interested in? You can also request a detailed quote through our contact form.';
    }
    
    if (message.includes('shipping') || message.includes('delivery') || message.includes('transport')) {
      return 'We offer comprehensive shipping services from China to Nigeria and other destinations. Shipping typically takes 3-4 weeks by sea. We handle all documentation and customs clearance. Would you like more details about our shipping process?';
    }
    
    if (message.includes('inspection') || message.includes('quality') || message.includes('condition')) {
      return 'All our vehicles undergo thorough quality inspections before shipping. We provide detailed inspection reports with photos and documentation. Our team ensures every vehicle meets international standards.';
    }
    
    if (message.includes('payment') || message.includes('financing')) {
      return 'We offer flexible payment options including bank transfers and installment plans. A 30% deposit is typically required to begin the import process, with the balance due before shipping. Would you like to discuss payment terms?';
    }
    
    if (message.includes('time') || message.includes('how long') || message.includes('duration')) {
      return 'The complete import process typically takes 4-6 weeks from order confirmation to delivery at your location. This includes vehicle procurement, inspection, documentation, shipping, and customs clearance.';
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return 'Hello! Thank you for contacting CME AUTOS. I\'m here to assist you with any questions about vehicle imports, pricing, or our services. What would you like to know?';
    }
    
    return 'Thank you for your message! For detailed assistance with vehicle imports, specifications, or custom requirements, I recommend speaking with one of our automotive specialists. You can contact us directly at +234 1 234 5678 or submit a detailed inquiry through our contact form.';
  };

  const quickReplies = [
    'Vehicle pricing information',
    'Shipping process details', 
    'Quality inspection reports',
    'Payment options',
    'Import timeline'
  ];

  const handleQuickReply = (reply: string) => {
    setNewMessage(reply);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-yellow-500 hover:bg-yellow-400 rounded-full flex items-center justify-center text-black shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          {isOpen ? (
            <i className="ri-close-line text-xl"></i>
          ) : (
            <i className="ri-customer-service-2-line text-xl"></i>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-yellow-500 text-black p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <i className="ri-customer-service-line text-yellow-500 text-sm"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">CME AUTOS Support</h3>
                  <p className="text-xs opacity-80">Online • Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-yellow-400 p-1 rounded transition-colors"
              >
                <i className="ri-close-line text-lg"></i>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-yellow-500 text-black'
                        : 'bg-white text-gray-800 shadow-sm'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-black/70' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 shadow-sm px-3 py-2 rounded-lg text-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 border-t bg-gray-50">
              <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-1">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-white text-gray-700 px-2 py-1 rounded-full border hover:bg-yellow-50 hover:border-yellow-500 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t bg-white rounded-b-lg">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                disabled={!newMessage.trim()}
                className="w-10 h-10 bg-yellow-500 hover:bg-yellow-400 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-lg flex items-center justify-center text-black transition-colors"
              >
                <i className="ri-send-plane-line text-sm"></i>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}