import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netflix-like-site';
  navbg:any;

  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop, 'scrolllength#')
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      this.navbg = {
        'background-color': 'rgba(0,0,0,0.8)'
      }
    }else{
      this.navbg = {
        'background-color': 'transparent'
      }
    }
  }
}
