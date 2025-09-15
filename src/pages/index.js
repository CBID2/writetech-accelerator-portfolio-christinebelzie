import React from "react";
import { useState } from "react";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import { BookOpen, Lightbulb, Handshake, Linkedin, Twitter, Github, Rocket, Send, MessageCircle } from "lucide-react";

// Chatbot responses
const chatbotResponses = {
  greeting: [
    "Hi! I'm Christine's portfolio assistant. I can help you learn about her technical writing work!",
    "Hello! I'm here to help you explore Christine's technical writing portfolio. What would you like to know?",
    "Welcome! I can answer questions about Christine's documentation projects and writing expertise."
  ],
  portfolio: [
    "I'd love to show you! Christine's portfolio includes API documentation, automation workflows, AI documentation projects, and modern docs tooling. Which area interests you most?",
    "Her portfolio showcases modern documentation practices including docs-as-code workflows, OpenAPI specifications, and automated quality assurance tools."
  ],
  experience: [
    "Christine specializes in turning complex technical concepts into clear, user-friendly documentation. She has experience with API docs, developer tools, and documentation automation.",
    "She's skilled in modern documentation tools like Docusaurus, Vale, Spectral, and GitHub Actions for automated workflows."
  ],
  projects: [
    "Key projects include: 📚 Documentation tooling with Docusaurus, 🔧 API documentation for Chimoney, 🤖 AI-powered documentation, and ⚡ Automated quality workflows.",
    "You can explore her API documentation project, automation workflows, or AI documentation work. Each shows different aspects of modern technical writing."
  ],
  contact: [
    "You can connect with Christine on LinkedIn at linkedin.com/in/christinebelzie or check out her GitHub at github.com/CBID2",
    "Find Christine on LinkedIn for professional inquiries or explore her code on GitHub!"
  ],
  default: [
    "That's a great question! You can explore Christine's full portfolio using the buttons below, or ask me about her projects, experience, or how to get in touch.",
    "I can help you learn about Christine's technical writing projects, her experience with documentation tools, or how to contact her. What interests you most?",
    "Try asking about her portfolio, projects, experience, or contact information!"
  ]
};

// Action buttons that appear after bot responses
const actionButtons = [
  { text: "🚀 Explore Portfolio", link: "/docs/intro" },
  { text: "🤖 AI Documentation", link: "/docs/ai-documentation/intro" },
  { text: "📚 API Documentation", link: "/docs/api-documentation" },
  { text: "📄 Resume", link: "/resume" }
];

function getResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return chatbotResponses.greeting[Math.floor(Math.random() * chatbotResponses.greeting.length)];
  }
  if (lowerMessage.includes('portfolio') || lowerMessage.includes('work') || lowerMessage.includes('show me')) {
    return chatbotResponses.portfolio[Math.floor(Math.random() * chatbotResponses.portfolio.length)];
  }
  if (lowerMessage.includes('experience') || lowerMessage.includes('skills') || lowerMessage.includes('expertise')) {
    return chatbotResponses.experience[Math.floor(Math.random() * chatbotResponses.experience.length)];
  }
  if (lowerMessage.includes('project') || lowerMessage.includes('documentation') || lowerMessage.includes('api')) {
    return chatbotResponses.projects[Math.floor(Math.random() * chatbotResponses.projects.length)];
  }
  if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('connect')) {
    return chatbotResponses.contact[Math.floor(Math.random() * chatbotResponses.contact.length)];
  }
  
  return chatbotResponses.default[Math.floor(Math.random() * chatbotResponses.default.length)];
}

export default function Home() {
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Show me what you've got in technical writing." },
    { type: 'user', text: "Hi! Tell me about your portfolio." },
    { type: 'bot', text: "I'd love to show you! Christine's portfolio includes API documentation, automation workflows, AI documentation projects, and modern docs tooling. Which area interests you most?", showButtons: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getResponse(userMessage);
      setMessages(prev => [...prev, { type: 'bot', text: botResponse, showButtons: true }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          
          {/* Floating Rocket Icon */}
          <div className={styles.heroIcon}>
            🚀
          </div>
          
          {/* Main Portfolio Card with Red Border */}
          <div className={styles.heroCard}>
            {/* Chatbot Interface */}
            <div className={styles.chatbot}>
              <div className={styles.chatHeader}>
                <MessageCircle size={20} />
                <span>Portfolio Assistant</span>
              </div>
              
              <div className={styles.chatMessages}>
                {messages.map((message, index) => (
                  <div key={index} className={`${styles.message} ${styles[message.type]}`}>
                    <div className={styles.messageContent}>
                      {message.text}
                    </div>
                  </div>
                ))}
                {messages.length > 0 && messages[messages.length - 1].type === 'bot' && messages[messages.length - 1].showButtons && (
                  <div className={styles.actionButtonsContainer}>
                    {actionButtons.map((button, btnIndex) => (
                      <Link 
                        key={btnIndex}
                        to={button.link} 
                        className={styles.actionButton}
                      >
                        {button.text}
                      </Link>
                    ))}
                  </div>
                )}
                {isTyping && (
                  <div className={`${styles.message} ${styles.bot}`}>
                    <div className={styles.messageContent}>
                      <div className={styles.typingIndicator}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className={styles.chatInput}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Christine's work..."
                  className={styles.messageInput}
                />
                <button 
                  onClick={handleSendMessage}
                  className={styles.sendButton}
                  disabled={!inputValue.trim()}
                >
                  <Send size={16} />
                </button>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className={styles.values}>
        <div className={styles.valueCard}>
          <div className={styles.featureIcon} style={{backgroundColor: '#f0f9ff'}}>
            <BookOpen className={styles.icon} color="#0ea5e9" />
          </div>
          <h3>Bridge complexity with clarity</h3>
          <p>
            Whether you're tackling satellite tech, or other complex concepts, I deliver documentation that's 
            easy to follow and thoughtfully structured.
          </p>
        </div>
        
        <div className={styles.valueCard}>
          <div className={styles.featureIcon} style={{backgroundColor: '#fffbeb'}}>
            <Lightbulb className={styles.icon} color="#f59e0b" />
          </div>
          <h3>Write with intent and impact</h3>
          <p>
            From technical tutorials to informative articles, my writing always starts with "Who am I helping, 
            and what do they need?"
          </p>
        </div>
        
        <div className={styles.valueCard}>
          <div className={styles.featureIcon} style={{backgroundColor: '#f0fdf4'}}>
            <Handshake className={styles.icon} color="#22c55e" />
          </div>
          <h3>User-Centric Editing</h3>
          <p>
            I ensure documentation works for all users, whether that means simplifying jargon, adding 
            visuals, or sharing process notes to explain how solutions were crafted.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/christinebelzie" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} /> Twitter
            </a>
            <a href="https://github.com/CBID2" target="_blank" rel="noopener noreferrer">
              <Github size={20} /> GitHub
            </a>
          </div>
          <p className={styles.copyright}>
            © 2025 Built by Christine Belzie – WriteTech Accelerator Programme 2025.
          </p>
        </div>
      </footer>
    </main>
  );
}