import {Component, Method, Prop, h, Element} from '@stencil/core';
import {ComponentInterface}                  from "../component.interface";

@Component({
    tag:      'roc-dropdown',
    styleUrl: 'dropdown.scss',
    shadow:   true,
})
export class Dropdown implements ComponentInterface {

    @Prop({mutable: true})
    public visible: boolean = false;

    @Prop({mutable: true})
    public container: HTMLElement | string = null;

    @Element()
    private el: HTMLElement;

    private anchor: HTMLElement = null;

    public componentDidLoad(): void | Promise<void> {

        this.anchor = this.el.parentNode as HTMLElement;

        if (!this.container) {
            this.container = this.el.parentNode as HTMLElement;
        }

        if ('string' === typeof this.container) {
            this.container = document.querySelector(this.container) as HTMLElement;
        }

        this.container.appendChild(this.el);

        if (this.visible) {
            this.show();
        }
    }

    @Method()
    public async toggle(): Promise<void> {
        return this.visible ? this.hide() : this.show();
    }

    @Method()
    public async show(): Promise<void> {
        let rect               = this.anchor.getBoundingClientRect();
        let scrollLeft: number = window.pageXOffset || document.documentElement.scrollLeft;
        let scrollTop: number  = window.pageYOffset || document.documentElement.scrollTop;
        let top: number        = rect.top + scrollTop;
        let left: number       = rect.left + scrollLeft;

        this.el.style.top  = `${top + rect.height}px`;
        this.el.style.left = `${left}px`;

        this.visible = true;
    }

    @Method()
    public async hide(): Promise<void> {
        this.visible = false;
    }

    public render() {

        return [
            <div class={`dropdown ${this.visible ? 'visible' : 'hidden'}`}>
                <slot></slot>
            </div>
        ];
    }
}
