/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface RocCheckboxToggle {
    /**
    * Set toggle as checked.
    */
    'check': () => Promise<void>;
    /**
    * (optional) Default state of the underlining checkbox. If not provided, state from the checkbox will be used.
    */
    'checked': boolean;
    /**
    * Color of checkbox toggle.
    */
    'color': 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
    /**
    * (optional) Default disable state of the underlining checkbox. If not provided, disable state from the checkbox will be used.
    */
    'disabled': boolean;
    /**
    * Size of checkbox toggle.
    */
    'size': 'sm' | 'md' | 'lg';
    /**
    * Toggle checked state.
    */
    'toggle': () => Promise<void>;
    /**
    * Set toggle as unchecked.
    */
    'uncheck': () => Promise<void>;
  }
  interface RocDropdown {
    'container': HTMLElement | string;
    'hide': () => Promise<void>;
    'show': () => Promise<void>;
    'toggle': () => Promise<void>;
    'visible': boolean;
  }
}

declare namespace LocalJSX {
  interface RocCheckboxToggle extends JSXBase.HTMLAttributes {
    /**
    * (optional) Default state of the underlining checkbox. If not provided, state from the checkbox will be used.
    */
    'checked'?: boolean;
    /**
    * Color of checkbox toggle.
    */
    'color'?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
    /**
    * (optional) Default disable state of the underlining checkbox. If not provided, disable state from the checkbox will be used.
    */
    'disabled'?: boolean;
    /**
    * Notifies about value change with current value.
    */
    'onChange'?: (event: CustomEvent<boolean>) => void;
    /**
    * Size of checkbox toggle.
    */
    'size'?: 'sm' | 'md' | 'lg';
  }
  interface RocDropdown extends JSXBase.HTMLAttributes {
    'container'?: HTMLElement | string;
    'visible'?: boolean;
  }

  interface IntrinsicElements {
    'roc-checkbox-toggle': RocCheckboxToggle;
    'roc-dropdown': RocDropdown;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


declare global {



  interface HTMLRocCheckboxToggleElement extends Components.RocCheckboxToggle, HTMLStencilElement {}
  var HTMLRocCheckboxToggleElement: {
    prototype: HTMLRocCheckboxToggleElement;
    new (): HTMLRocCheckboxToggleElement;
  };

  interface HTMLRocDropdownElement extends Components.RocDropdown, HTMLStencilElement {}
  var HTMLRocDropdownElement: {
    prototype: HTMLRocDropdownElement;
    new (): HTMLRocDropdownElement;
  };

  interface HTMLElementTagNameMap {
    'roc-checkbox-toggle': HTMLRocCheckboxToggleElement;
    'roc-dropdown': HTMLRocDropdownElement;
  }

  interface ElementTagNameMap extends HTMLElementTagNameMap {}
}

