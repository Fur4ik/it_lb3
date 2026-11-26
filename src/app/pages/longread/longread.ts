import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-longread',
  styleUrl: './longread.scss',
  templateUrl: './longread.html',
})
export class Longread {
  protected readonly selectedNode = signal(0);

  protected readonly nodes = [
    {
      role: 'Субъект',
      label: 'Северный рубеж',
      description:
        'Субъект — игровая сущность, о которой сделано утверждение. У неё есть собственный URI.',
    },
    {
      role: 'Предикат',
      label: 'разработана',
      description: 'Предикат — свойство из словаря, которое связывает игру с её разработчиком.',
    },
    {
      role: 'Объект',
      label: 'Полярис',
      description:
        'Объект — студия-разработчик. Ссылка на её URI позволяет находить связанные сведения, например другие игры студии.',
    },
  ];
}
