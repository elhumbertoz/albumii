import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  album = [
    {
      title: 'Abby jugando',
      subtitle: 'Agua, lodo y un día soleado',
      avatar: 'assets/images/avatars/Abby.jpeg',
      image: 'assets/images/AbbyJuganEnLaFinca2022.jpeg',
      text: 'Un día de paseo en la finca se convertió en un día de juego en el agua y el lodo que dejó la lluvia de la noche anterior.'
    },
    {
      title: 'Mara a 5100 msnm',
      subtitle: 'Escalando el volcán Chimborazo',
      avatar: 'assets/images/avatars/Mara.jpeg', 
      image: "assets/images/MaraChimborazo5100.jpeg",
      text: "Un día especial fue cuando escalamos el volcan Chimborazo, llegamos a 5,100 metros sobre el nivel del mar."
    },
    {
      title: 'Días de las madres',
      subtitle: 'El día más especial para mamá',
      avatar: 'assets/images/avatars/Noemi.jpeg', 
      image: "assets/images/NoemiDiasDeLasMadres.jpeg",
      text: "Noemí esta noche especial disfrutó de la música de mariachis, ademas todos festejamos a lo grande a la mejor madre y esposa."
    }
  ]

  
  
}
