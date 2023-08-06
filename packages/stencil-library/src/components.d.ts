/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Color } from "./utils/constants/color";
export { Color } from "./utils/constants/color";
export namespace Components {
    interface ButtonComponent {
        "color": Color;
        "disabled": boolean;
        "href"?: string;
        "size": 'small' | 'medium' | 'large';
        "type": 'button' | 'submit' | 'reset';
        "variant": 'contained' | 'outlined' | 'text';
    }
    interface IconComponent {
    }
    interface InputComponent {
        /**
          * Input error state
         */
        "disabled": boolean;
        /**
          * Input error state
         */
        "error": boolean;
        /**
          * Input label
         */
        "label": string;
        /**
          * Input helper text
         */
        "message"?: string;
        /**
          * Input name
         */
        "name": string;
        /**
          * Input placeholder
         */
        "placeholder": string;
        /**
          * Input required
         */
        "required": boolean;
        /**
          * Input type
         */
        "type": string;
        /**
          * Input value
         */
        "value": string;
    }
    interface MenuComponent {
    }
    interface MenuItem {
        "clickHandler"?: (event: MouseEvent) => void;
        "disabled": boolean;
        "href"?: string;
    }
    interface MenuSection {
        /**
          * Section label
         */
        "label": string;
    }
    interface PaperComponent {
        "elevation": number;
    }
    interface TableBody {
    }
    interface TableCell {
        /**
          * Text align
         */
        "textalign": 'center' | 'left' | 'justify' | 'right';
        /**
          * Cell variant
         */
        "variant": 'body' | 'footer' | 'head';
    }
    interface TableComponent {
    }
    interface TableHead {
    }
    interface TableRow {
    }
    interface UserForm {
    }
}
export interface InputComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLInputComponentElement;
}
declare global {
    interface HTMLButtonComponentElement extends Components.ButtonComponent, HTMLStencilElement {
    }
    var HTMLButtonComponentElement: {
        prototype: HTMLButtonComponentElement;
        new (): HTMLButtonComponentElement;
    };
    interface HTMLIconComponentElement extends Components.IconComponent, HTMLStencilElement {
    }
    var HTMLIconComponentElement: {
        prototype: HTMLIconComponentElement;
        new (): HTMLIconComponentElement;
    };
    interface HTMLInputComponentElement extends Components.InputComponent, HTMLStencilElement {
    }
    var HTMLInputComponentElement: {
        prototype: HTMLInputComponentElement;
        new (): HTMLInputComponentElement;
    };
    interface HTMLMenuComponentElement extends Components.MenuComponent, HTMLStencilElement {
    }
    var HTMLMenuComponentElement: {
        prototype: HTMLMenuComponentElement;
        new (): HTMLMenuComponentElement;
    };
    interface HTMLMenuItemElement extends Components.MenuItem, HTMLStencilElement {
    }
    var HTMLMenuItemElement: {
        prototype: HTMLMenuItemElement;
        new (): HTMLMenuItemElement;
    };
    interface HTMLMenuSectionElement extends Components.MenuSection, HTMLStencilElement {
    }
    var HTMLMenuSectionElement: {
        prototype: HTMLMenuSectionElement;
        new (): HTMLMenuSectionElement;
    };
    interface HTMLPaperComponentElement extends Components.PaperComponent, HTMLStencilElement {
    }
    var HTMLPaperComponentElement: {
        prototype: HTMLPaperComponentElement;
        new (): HTMLPaperComponentElement;
    };
    interface HTMLTableBodyElement extends Components.TableBody, HTMLStencilElement {
    }
    var HTMLTableBodyElement: {
        prototype: HTMLTableBodyElement;
        new (): HTMLTableBodyElement;
    };
    interface HTMLTableCellElement extends Components.TableCell, HTMLStencilElement {
    }
    var HTMLTableCellElement: {
        prototype: HTMLTableCellElement;
        new (): HTMLTableCellElement;
    };
    interface HTMLTableComponentElement extends Components.TableComponent, HTMLStencilElement {
    }
    var HTMLTableComponentElement: {
        prototype: HTMLTableComponentElement;
        new (): HTMLTableComponentElement;
    };
    interface HTMLTableHeadElement extends Components.TableHead, HTMLStencilElement {
    }
    var HTMLTableHeadElement: {
        prototype: HTMLTableHeadElement;
        new (): HTMLTableHeadElement;
    };
    interface HTMLTableRowElement extends Components.TableRow, HTMLStencilElement {
    }
    var HTMLTableRowElement: {
        prototype: HTMLTableRowElement;
        new (): HTMLTableRowElement;
    };
    interface HTMLUserFormElement extends Components.UserForm, HTMLStencilElement {
    }
    var HTMLUserFormElement: {
        prototype: HTMLUserFormElement;
        new (): HTMLUserFormElement;
    };
    interface HTMLElementTagNameMap {
        "button-component": HTMLButtonComponentElement;
        "icon-component": HTMLIconComponentElement;
        "input-component": HTMLInputComponentElement;
        "menu-component": HTMLMenuComponentElement;
        "menu-item": HTMLMenuItemElement;
        "menu-section": HTMLMenuSectionElement;
        "paper-component": HTMLPaperComponentElement;
        "table-body": HTMLTableBodyElement;
        "table-cell": HTMLTableCellElement;
        "table-component": HTMLTableComponentElement;
        "table-head": HTMLTableHeadElement;
        "table-row": HTMLTableRowElement;
        "user-form": HTMLUserFormElement;
    }
}
declare namespace LocalJSX {
    interface ButtonComponent {
        "color"?: Color;
        "disabled"?: boolean;
        "href"?: string;
        "size"?: 'small' | 'medium' | 'large';
        "type"?: 'button' | 'submit' | 'reset';
        "variant"?: 'contained' | 'outlined' | 'text';
    }
    interface IconComponent {
    }
    interface InputComponent {
        /**
          * Input error state
         */
        "disabled"?: boolean;
        /**
          * Input error state
         */
        "error"?: boolean;
        /**
          * Input label
         */
        "label"?: string;
        /**
          * Input helper text
         */
        "message"?: string;
        /**
          * Input name
         */
        "name"?: string;
        /**
          * Input onChange
         */
        "onValueChanged"?: (event: InputComponentCustomEvent<string>) => void;
        /**
          * Input placeholder
         */
        "placeholder"?: string;
        /**
          * Input required
         */
        "required"?: boolean;
        /**
          * Input type
         */
        "type"?: string;
        /**
          * Input value
         */
        "value"?: string;
    }
    interface MenuComponent {
    }
    interface MenuItem {
        "clickHandler"?: (event: MouseEvent) => void;
        "disabled"?: boolean;
        "href"?: string;
    }
    interface MenuSection {
        /**
          * Section label
         */
        "label"?: string;
    }
    interface PaperComponent {
        "elevation"?: number;
    }
    interface TableBody {
    }
    interface TableCell {
        /**
          * Text align
         */
        "textalign"?: 'center' | 'left' | 'justify' | 'right';
        /**
          * Cell variant
         */
        "variant"?: 'body' | 'footer' | 'head';
    }
    interface TableComponent {
    }
    interface TableHead {
    }
    interface TableRow {
    }
    interface UserForm {
    }
    interface IntrinsicElements {
        "button-component": ButtonComponent;
        "icon-component": IconComponent;
        "input-component": InputComponent;
        "menu-component": MenuComponent;
        "menu-item": MenuItem;
        "menu-section": MenuSection;
        "paper-component": PaperComponent;
        "table-body": TableBody;
        "table-cell": TableCell;
        "table-component": TableComponent;
        "table-head": TableHead;
        "table-row": TableRow;
        "user-form": UserForm;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "button-component": LocalJSX.ButtonComponent & JSXBase.HTMLAttributes<HTMLButtonComponentElement>;
            "icon-component": LocalJSX.IconComponent & JSXBase.HTMLAttributes<HTMLIconComponentElement>;
            "input-component": LocalJSX.InputComponent & JSXBase.HTMLAttributes<HTMLInputComponentElement>;
            "menu-component": LocalJSX.MenuComponent & JSXBase.HTMLAttributes<HTMLMenuComponentElement>;
            "menu-item": LocalJSX.MenuItem & JSXBase.HTMLAttributes<HTMLMenuItemElement>;
            "menu-section": LocalJSX.MenuSection & JSXBase.HTMLAttributes<HTMLMenuSectionElement>;
            "paper-component": LocalJSX.PaperComponent & JSXBase.HTMLAttributes<HTMLPaperComponentElement>;
            "table-body": LocalJSX.TableBody & JSXBase.HTMLAttributes<HTMLTableBodyElement>;
            "table-cell": LocalJSX.TableCell & JSXBase.HTMLAttributes<HTMLTableCellElement>;
            "table-component": LocalJSX.TableComponent & JSXBase.HTMLAttributes<HTMLTableComponentElement>;
            "table-head": LocalJSX.TableHead & JSXBase.HTMLAttributes<HTMLTableHeadElement>;
            "table-row": LocalJSX.TableRow & JSXBase.HTMLAttributes<HTMLTableRowElement>;
            "user-form": LocalJSX.UserForm & JSXBase.HTMLAttributes<HTMLUserFormElement>;
        }
    }
}