import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Front-end Júnior',
        p:'BB - Banco do Brasil- Present',
      },
      text:'<p>Atualmente, atuo como desenvolvedor front-end júnior no Banco do Brasil, onde sou responsável por desenvolver e manter aplicações web utilizando Angular. Minha experiência inclui a implementação de interfaces de usuário responsivas, integração com APIs RESTful e otimização de desempenho. Estou sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades.</p>'
    },
    {
      summary: {
        strong: 'Suporte Técnico',
        p:'GDF - Controladoria Geral Governo do Distrito Federal - 2016',
      },
      text:'<p>Atuei como suporte técnico no GDF</p>'
    }

  ])

}
