import {Component, OnInit} from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {DecimalPipe} from '@angular/common';
import {BasketService} from "./basket/services/basket.service";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public reachedTheEnd: boolean = false;

  constructor(private decimalPipe: DecimalPipe,private _basketService:BasketService) {
  }

  ngOnInit() {
    this.initialiseBasket();
    this.UpdateProgressStatus();
  }

  private  initialiseBasket(){
    const basketId=localStorage.getItem('basket_id');
    if(basketId){
      this._basketService.getBasket(basketId).subscribe(
        ()=>{
          console.log('Basket Initialised')
        },(error)=>{
          console.log(error)
        }
      )
    }
  }
  private UpdateProgressStatus() {
    gsap.to('progress', {
      value: 100,
      scrollTrigger: {
        trigger: '.main',
        scrub: 0.3,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (options) => {
          if (options instanceof ScrollTrigger) {
            const value = Number(
              this.decimalPipe.transform(options.progress, '1.2-2')
            );
            this.reachedTheEnd = value > 0.93;
          }
        },
      },
    });
  }
}
