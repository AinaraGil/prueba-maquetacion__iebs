import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-descuento',
    standalone: false,

    templateUrl: './card-descuento.component.html',
    styleUrl: './card-descuento.component.css',
})
export class CardDescuentoComponent {
    @Input() percentage: string = '';
    @Input() title: string = '';
    @Input() text: string = '';
}
