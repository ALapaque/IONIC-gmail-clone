import {Directive, HostListener, Input, Renderer2} from '@angular/core';
import {SearchOverlayComponent} from '../../pages/mail/search-overlay/search-overlay.component';
import {DomController} from '@ionic/angular';

enum Direction {
  UP = 0,
  DOWN = 1
}

@Directive({
  selector: '[appHideHeader]'
})
export class HideHeaderDirective {
  @Input('appHideHeader') header: SearchOverlayComponent;
  private _saveY: number = 0;
  private _previousY: number = 0;
  private _direction: Direction = Direction.UP;
  private readonly _scrollDistance: number = 50;

  constructor(
    private _renderer: Renderer2,
    private _domController: DomController
  ) {
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    const scrollTop: number = $event.detail.scrollTop;
    let newDirection: Direction = Direction.DOWN;
    let newPosition: number = -scrollTop + this._previousY;

    if (this._saveY > $event.detail.currentY) {
      newDirection = Direction.UP;

    }

    if (newPosition < -this._scrollDistance) {
      newPosition = -this._scrollDistance;
    }

    let opacity = 1 - (newPosition / -this._scrollDistance);

    this._domController.write(() => {
      this._renderer.setStyle(this.header.searchContainer.nativeElement, 'top', newPosition);
      this._renderer.setStyle(this.header.searchContainer.nativeElement, 'opacity', opacity);
    });

    this._saveY = $event.detail.currentY;

    if (this._direction !== newDirection) {
      this._direction = newDirection;
      this._previousY = scrollTop;
    }
  }
}
