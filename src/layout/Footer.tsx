import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 py-4">
      <div className="flex justify-center space-x-6">
        <a href="#" className="hover:text-blue-400 transition-colors">
          <Github size={24} />
        </a>
        <a href="#" className="hover:text-blue-400 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="#" className="hover:text-blue-400 transition-colors">
          <Mail size={24} />
        </a>
      </div>
    </footer>
  );
};
