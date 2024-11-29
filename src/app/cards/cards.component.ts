import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
  imports:[CommonModule]
})
export class CardsComponent {

  testimonials = [
    {
      image: 'assets/JacobJones.jpg',
      name: 'Jacob Jones',
      feedback: 'As a budding startup, we sought a financial solution that was simple, secure, and scalable...'
    },
    
    {
      image: 'assets/TheresaWebb.jpg',
      name: 'Theresa Webb',
      feedback: 'Swift Revel empowers me to manage my business finances with confidence and ease...'
    },
    {
      image: 'assets/RonaldRichards.jpg',
      name: 'Ronald Richards',
      feedback: 'We needed a payment gateway that could handle our diverse customer base. Swift Revel offers a wide range of payment options, making it easy for our clients to pay'
    },
    {
      image: 'assets/CodyFisher.jpg',
      name: 'Cody Fisher',
      feedback: 'Since switching to swift revel, i finally have peace of mind regarding my business finances. with their secure platform, i trust my datas protection completely.'
    },

    {
      image: 'assets/MarvinMcKinney.jpg',
      name: 'Marvin McKinney',
      feedback: 'Since switching to Swift Revel, I finally have peace of mind regarding my business finances...'
    },
  ];

  get duplicatedTestimonials() {
    return [...this.testimonials, ...this.testimonials];
  }
  
  carouselAnimationDuration = '20s';
}
