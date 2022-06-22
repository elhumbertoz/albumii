import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenedor-foto',
  templateUrl: './contenedor-foto.component.html',
  styleUrls: ['./contenedor-foto.component.css']
})
export class ContenedorFotoComponent implements OnInit {

  @Input() public avatar = '../../assets/images/avatars/avatar.webp';
  @Input() public title = '<<título>>';
  @Input() public subtitle = '<<subtitulo>>';
  @Input() public image = '../../assets/images/noimage.png';
  @Input() public text = '<<contenido>>';

  constructor() { }

  ngOnInit(): void {
  }

}
