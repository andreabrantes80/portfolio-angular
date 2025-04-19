import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  handleWhatsAppClick(event: Event, phoneNumber: string, message: string) {
    event.preventDefault(); // Impede o comportamento padrão do link

    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(message);

    // Detectar se é um dispositivo móvel
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    // Construir as URLs
    const whatsappAppUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    const whatsappWebUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    if (isMobile) {
      // Tenta abrir o app WhatsApp diretamente em dispositivos móveis
      window.location.href = whatsappAppUrl;

      // Fallback: se o app não abrir em 1 segundo, redireciona para wa.me
      setTimeout(() => {
        if (document.hasFocus()) {
          window.location.href = whatsappWebUrl;
        }
      }, 1000);
    } else {
      // Em desktops, usa wa.me para abrir o WhatsApp Web
      window.location.href = whatsappWebUrl;
    }
  }
}
