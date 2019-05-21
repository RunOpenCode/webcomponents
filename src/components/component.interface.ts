export interface ComponentInterface {

    componentWillLoad?(): void | Promise<void>;

    componentDidLoad?(): void | Promise<void>;

    componentWillUpdate?(): void | Promise<void>;

    componentDidUpdate?(): void | Promise<void>;

    componentDidUnload?(): void | Promise<void>;

    render();
}
