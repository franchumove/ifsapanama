import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "50765519061";
const DEFAULT_MESSAGE = "Hola IFSA PANAMÁ, quiero solicitar información sobre sus servicios.";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
}

export function WhatsAppButton({ message = DEFAULT_MESSAGE, className = "" }: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${className}`}
      aria-label="Contactar por WhatsApp"
      data-testid="button-whatsapp-floating"
    >
      <MessageCircle className="h-7 w-7 text-white fill-white" />
    </a>
  );
}

export function WhatsAppLink({ 
  message = DEFAULT_MESSAGE,
  children,
  className = ""
}: WhatsAppButtonProps & { children?: React.ReactNode }) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-testid="link-whatsapp"
    >
      {children}
    </a>
  );
}
