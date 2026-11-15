const NUMBER = '254719719178';
const MESSAGE = 'Hello Bubble Hearts School, I would like to ask about admission.';

export default function WhatsAppButton() {
  const href = `https://wa.me/${NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Bubble Hearts School on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true" fill="currentColor">
        <path d="M16 3C9 3 3.3 8.6 3.3 15.5c0 2.4.7 4.6 1.9 6.5L3 29l7.2-1.9c1.8 1 3.8 1.5 5.8 1.5 7 0 12.7-5.6 12.7-12.5S23 3 16 3zm0 22.9c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-4.3 1.1 1.2-4.1-.3-.4c-1.1-1.600-1.700-3.500-1.700-5.400C5.400 9.800 10.100 5.300 16 5.300s10.600 4.500 10.600 10.100S21.900 25.900 16 25.900zm5.800-7.600c-.3-.2-1.900-.9-2.200-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7.100c-.3-.2-1.400-.5-2.600-1.600-1-.9-1.600-1.900-1.800-2.200s0-.5.100-.6l.5-.6c.2-.2.200-.4.300-.6s0-.4 0-.6-.7-1.700-1-2.300c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.100-.9.400s-1.200 1.200-1.200 2.900 1.200 3.300 1.400 3.500c.2.200 2.400 3.700 5.900 5.100 3.500 1.400 3.500.9 4.100.9s2-.8 2.300-1.600.3-1.500.2-1.600-.3-.2-.6-.4z"/>
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
