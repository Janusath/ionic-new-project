import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }
  back()
  {
    this.nav.navigateBack('home')
  }

 
}
