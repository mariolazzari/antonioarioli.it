"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export const WhatsApp = () => (
  <FloatingWhatsApp
    phoneNumber="+39 328 036 5080"
    accountName="Antonio Arioli"
    avatar="/images/logo.png"
    statusMessage="Di solito rispondo nel giro di un'ora..."
    chatMessage="Buongiorno, posso esserti utile?"
    placeholder="Scrivi qui il tuo messaggio"
    allowClickAway
    allowEsc
    notification
  />
);
