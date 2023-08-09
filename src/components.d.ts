/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CAlert {
        "alertDescription": string;
        "alertIcon": string;
        "alertTitle": string;
        "variant": string;
    }
    interface CAvatar {
        "alt": string;
        "size": string;
        "src": string;
        "text": string;
        "variant": string;
    }
    interface CBadge {
        "size": string;
        "type": string;
        "variant": string;
    }
    interface CButton {
        "appendIcon": string;
        "classIcon": string;
        "disabled": boolean;
        "prependIcon": string;
        "size": string;
        "variant": string;
    }
    interface CCard {
        "cardDescription": string;
        "cardFooter": string;
        "cardSubtitle": string;
        "cardTitle": string;
    }
    interface CCheckbox {
        "checked": boolean;
        "description": string;
        "disabled": boolean;
    }
    interface CIcon {
        "class": string;
        "color": string;
        "name": string;
        "size": string;
        "strokeWidth": string;
    }
    interface CInput {
        "disabled": boolean;
        "label": string;
        "max": string;
        "min": string;
        "placeholder": string;
        "readonly": boolean;
        "required": boolean;
        "step": string;
        "type": string;
        "value": string;
    }
    interface CLabel {
        "htmlFor": string;
    }
    interface CProvider {
    }
    interface CSlider {
        "disabled": boolean;
        "max": number;
        "min": number;
        "step": number;
        "value": number;
    }
    interface CSwitch {
        "checked": boolean;
        "disabled": boolean;
    }
}
declare global {
    interface HTMLCAlertElement extends Components.CAlert, HTMLStencilElement {
    }
    var HTMLCAlertElement: {
        prototype: HTMLCAlertElement;
        new (): HTMLCAlertElement;
    };
    interface HTMLCAvatarElement extends Components.CAvatar, HTMLStencilElement {
    }
    var HTMLCAvatarElement: {
        prototype: HTMLCAvatarElement;
        new (): HTMLCAvatarElement;
    };
    interface HTMLCBadgeElement extends Components.CBadge, HTMLStencilElement {
    }
    var HTMLCBadgeElement: {
        prototype: HTMLCBadgeElement;
        new (): HTMLCBadgeElement;
    };
    interface HTMLCButtonElement extends Components.CButton, HTMLStencilElement {
    }
    var HTMLCButtonElement: {
        prototype: HTMLCButtonElement;
        new (): HTMLCButtonElement;
    };
    interface HTMLCCardElement extends Components.CCard, HTMLStencilElement {
    }
    var HTMLCCardElement: {
        prototype: HTMLCCardElement;
        new (): HTMLCCardElement;
    };
    interface HTMLCCheckboxElement extends Components.CCheckbox, HTMLStencilElement {
    }
    var HTMLCCheckboxElement: {
        prototype: HTMLCCheckboxElement;
        new (): HTMLCCheckboxElement;
    };
    interface HTMLCIconElement extends Components.CIcon, HTMLStencilElement {
    }
    var HTMLCIconElement: {
        prototype: HTMLCIconElement;
        new (): HTMLCIconElement;
    };
    interface HTMLCInputElement extends Components.CInput, HTMLStencilElement {
    }
    var HTMLCInputElement: {
        prototype: HTMLCInputElement;
        new (): HTMLCInputElement;
    };
    interface HTMLCLabelElement extends Components.CLabel, HTMLStencilElement {
    }
    var HTMLCLabelElement: {
        prototype: HTMLCLabelElement;
        new (): HTMLCLabelElement;
    };
    interface HTMLCProviderElement extends Components.CProvider, HTMLStencilElement {
    }
    var HTMLCProviderElement: {
        prototype: HTMLCProviderElement;
        new (): HTMLCProviderElement;
    };
    interface HTMLCSliderElement extends Components.CSlider, HTMLStencilElement {
    }
    var HTMLCSliderElement: {
        prototype: HTMLCSliderElement;
        new (): HTMLCSliderElement;
    };
    interface HTMLCSwitchElement extends Components.CSwitch, HTMLStencilElement {
    }
    var HTMLCSwitchElement: {
        prototype: HTMLCSwitchElement;
        new (): HTMLCSwitchElement;
    };
    interface HTMLElementTagNameMap {
        "c-alert": HTMLCAlertElement;
        "c-avatar": HTMLCAvatarElement;
        "c-badge": HTMLCBadgeElement;
        "c-button": HTMLCButtonElement;
        "c-card": HTMLCCardElement;
        "c-checkbox": HTMLCCheckboxElement;
        "c-icon": HTMLCIconElement;
        "c-input": HTMLCInputElement;
        "c-label": HTMLCLabelElement;
        "c-provider": HTMLCProviderElement;
        "c-slider": HTMLCSliderElement;
        "c-switch": HTMLCSwitchElement;
    }
}
declare namespace LocalJSX {
    interface CAlert {
        "alertDescription"?: string;
        "alertIcon"?: string;
        "alertTitle"?: string;
        "variant"?: string;
    }
    interface CAvatar {
        "alt"?: string;
        "size"?: string;
        "src"?: string;
        "text"?: string;
        "variant"?: string;
    }
    interface CBadge {
        "size"?: string;
        "type"?: string;
        "variant"?: string;
    }
    interface CButton {
        "appendIcon"?: string;
        "classIcon"?: string;
        "disabled"?: boolean;
        "prependIcon"?: string;
        "size"?: string;
        "variant"?: string;
    }
    interface CCard {
        "cardDescription"?: string;
        "cardFooter"?: string;
        "cardSubtitle"?: string;
        "cardTitle"?: string;
    }
    interface CCheckbox {
        "checked"?: boolean;
        "description"?: string;
        "disabled"?: boolean;
    }
    interface CIcon {
        "class"?: string;
        "color"?: string;
        "name"?: string;
        "size"?: string;
        "strokeWidth"?: string;
    }
    interface CInput {
        "disabled"?: boolean;
        "label"?: string;
        "max"?: string;
        "min"?: string;
        "placeholder"?: string;
        "readonly"?: boolean;
        "required"?: boolean;
        "step"?: string;
        "type"?: string;
        "value"?: string;
    }
    interface CLabel {
        "htmlFor"?: string;
    }
    interface CProvider {
    }
    interface CSlider {
        "disabled"?: boolean;
        "max"?: number;
        "min"?: number;
        "step"?: number;
        "value"?: number;
    }
    interface CSwitch {
        "checked"?: boolean;
        "disabled"?: boolean;
    }
    interface IntrinsicElements {
        "c-alert": CAlert;
        "c-avatar": CAvatar;
        "c-badge": CBadge;
        "c-button": CButton;
        "c-card": CCard;
        "c-checkbox": CCheckbox;
        "c-icon": CIcon;
        "c-input": CInput;
        "c-label": CLabel;
        "c-provider": CProvider;
        "c-slider": CSlider;
        "c-switch": CSwitch;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "c-alert": LocalJSX.CAlert & JSXBase.HTMLAttributes<HTMLCAlertElement>;
            "c-avatar": LocalJSX.CAvatar & JSXBase.HTMLAttributes<HTMLCAvatarElement>;
            "c-badge": LocalJSX.CBadge & JSXBase.HTMLAttributes<HTMLCBadgeElement>;
            "c-button": LocalJSX.CButton & JSXBase.HTMLAttributes<HTMLCButtonElement>;
            "c-card": LocalJSX.CCard & JSXBase.HTMLAttributes<HTMLCCardElement>;
            "c-checkbox": LocalJSX.CCheckbox & JSXBase.HTMLAttributes<HTMLCCheckboxElement>;
            "c-icon": LocalJSX.CIcon & JSXBase.HTMLAttributes<HTMLCIconElement>;
            "c-input": LocalJSX.CInput & JSXBase.HTMLAttributes<HTMLCInputElement>;
            "c-label": LocalJSX.CLabel & JSXBase.HTMLAttributes<HTMLCLabelElement>;
            "c-provider": LocalJSX.CProvider & JSXBase.HTMLAttributes<HTMLCProviderElement>;
            "c-slider": LocalJSX.CSlider & JSXBase.HTMLAttributes<HTMLCSliderElement>;
            "c-switch": LocalJSX.CSwitch & JSXBase.HTMLAttributes<HTMLCSwitchElement>;
        }
    }
}
