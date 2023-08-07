import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAlmacen() {
    this.router.navigateByUrl('/almacen', { replaceUrl: true });
  }
  goToProductos() {
    this.router.navigateByUrl('/productos', { replaceUrl: true });
  }
  goToLugares() {
    this.router.navigateByUrl('/lugares', { replaceUrl: true });
  }
  exitApp() {
    this.router.navigateByUrl('/home').then(() => {
      window.location.reload();
    });
  }

}
