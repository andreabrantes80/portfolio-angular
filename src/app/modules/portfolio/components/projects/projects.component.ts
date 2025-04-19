import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/dev.png',
      alt: '',
      title: 'Desenvolvedor  Front End',
      width: '100px',
      height: '51px',
      description:
        'Atuo como desenvolvedor full stack, com experiência em Angular, Typescript, Html, Css e Node.js.',
      links: [
        {
          name: 'Sobre mim',
          href: 'https://www.linkedin.com/in/andre-melo-77451b83/',
        },
      ],
    },
    {
      src: 'assets/img/projects/suport.png',
      alt: '',
      title: 'Suporte Técnico',
      width: '100px',
      height: '51px',
      description: 'Atuei como Suporte Técnico, e atendimento aos usuários.',
      links: [
        {
          name: 'Sobre mim',
          href: 'https://www.linkedin.com/in/andre-melo-77451b83/',
        },
      ],
    },
    {
      src: 'assets/img/projects/wordpress.png',
      alt: '',
      title: 'Criação de Sites',
      width: '100px',
      height: '51px',
      description: 'Crio sites em Angular, Wordpress e Javascript.',
      links: [
        {
          name: 'Meus Projetos',
          href: 'https://www.kfmanutencoeseservicos.com.br/',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
