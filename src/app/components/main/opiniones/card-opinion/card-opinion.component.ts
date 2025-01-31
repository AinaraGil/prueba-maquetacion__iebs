import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-opinion',
    standalone: false,

    templateUrl: './card-opinion.component.html',
    styleUrl: './card-opinion.component.css',
})
export class CardOpinionComponent {
    @Input() text: string = '';
    @Input() photo: string = '';
    @Input() name: string = '';
    @Input() position: string = '';
}
