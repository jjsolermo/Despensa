import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { Lugares } from '../share/lugares';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {

  show = false;
  descripcion = '';
  ubicacion = '';
  lugares: Lugares[] = [];
  constructor(private lugaresService: LugaresService) { }

  ngOnInit() {
    this.lugaresService.getLugares().subscribe((lugares) => {
      this.lugares = lugares;
      console.log(this.lugares);
    });
  }

  add() {
    if (this.descripcion.trim() === '' || this.ubicacion.trim() === '') {
      alert('Debes llenar todos los campos');
    } else {
      const lugar: Lugares = {
        descripcion: this.descripcion,
        ubicacion: this.ubicacion,
      };
      this.lugaresService.addlugares(lugar);
      this.descripcion = '';
      this.ubicacion = '';
      this.show = false;
    }
  }

  showAdd() {
    if (this.show) {
      this.show = false;
      return;
    }
    this.show = true;
  }

}
