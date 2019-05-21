import {Component, Element, Method, Event, EventEmitter, Prop, Watch, h} from "@stencil/core";
import {ComponentInterface}                                              from "../component.interface";

@Component({
    tag:      'roc-checkbox-toggle',
    styleUrl: 'checkbox-toggle.scss',
    shadow:   true,
})
export class CheckboxToggle implements ComponentInterface {

    @Element()
    private el: HTMLElement;

    @Prop({mutable: true})
    public checked: boolean = null;

    @Prop({mutable: true})
    public disabled: boolean = null;

    @Prop()
    public color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' = 'primary';

    @Prop()
    public size: 'sm' | 'md' | 'lg' = 'md';

    @Event()
    public change: EventEmitter;

    private input: HTMLInputElement;

    public componentDidLoad(): void {
        this.input = this.el.querySelector('input[type="checkbox"]');

        this.checked       = null !== this.checked ? this.checked : this.input.checked;
        this.input.checked = this.checked;

        this.disabled       = null !== this.disabled ? this.disabled : this.input.disabled;
        this.input.disabled = this.disabled;

        this.input.addEventListener('change', () => {
            this.checked = this.input.checked;
        });
    }

    public render() {

        let classes      = `${this.color} ${this.size} ${this.disabled ? 'disabled' : ''} ${(this.checked ? 'checked' : 'unchecked')}`;
        let wrapperClass = `wrapper ${classes}`;
        let sliderClass  = `slider ${classes}`;

        return [
            <div class={wrapperClass} onClick={this.onClick.bind(this)}>
                <div class={sliderClass}>

                </div>

                <div class="hidden" hidden>
                    <slot/>
                </div>
            </div>
        ];
    }

    @Method()
    public async toggle(): Promise<void> {
        this.checked       = !this.checked;
        this.input.checked = this.checked;
    }

    @Method()
    public async check(): Promise<void> {
        this.checked       = true;
        this.input.checked = true;
    }

    @Method()
    public async uncheck(): Promise<void> {
        this.checked       = false;
        this.input.checked = false;
    }

    // @ts-ignore
    private async onClick(): void {
        if (this.disabled) {
            return;
        }

        await this.toggle();
    }

    @Watch('checked')
    // @ts-ignore
    private onChange(current: boolean, previous: boolean): void {
        if (current === previous) {
            return;
        }

        this.change.emit(current);
    }

    @Watch('disabled')
    // @ts-ignore
    private onToggleDisabled(current: boolean, previous: boolean): void {
        if (current === previous) {
            return;
        }

        this.input.disabled = this.disabled;
    }
}
