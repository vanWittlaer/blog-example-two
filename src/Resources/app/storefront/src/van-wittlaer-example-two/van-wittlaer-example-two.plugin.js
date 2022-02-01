import FormValidationPlugin from 'src/plugin/forms/form-validation.plugin';

export default class VanWittlaerExampleTwoPlugin extends FormValidationPlugin {
    static options = {
        ...super.options,

        w3wAttr: 'data-van-wittlaer-example-two-w3w',
        w3wTextAttr: 'data-van-wittlaer-example-two-w3w-message',
        w3wRegex: /^(\/{3}[a-zA-Z]+(\.[a-zA-Z]+){2})?$/i,
    }

    _registerEvents() {
        super._registerEvents();
        this._registerValidationListener(this.options.w3wAttr, this._onValidateW3w.bind(this), ['change']);
    }

    _onValidateW3w(event) {
        const field = event.target;
        const value = field.value.trim();
        const formText = field.nextElementSibling;

        if (this.options.w3wRegex.test(value)) {
            this._setFieldToValid(field, this.options.w3wAttr);
            if (formText && formText.hasAttribute(this.options.w3wTextAttr)) {
                formText.classList.add(this.options.hintCls);
            }
        } else {
            this._setFieldToInvalid(field, this.options.w3wAttr);
            if (formText && formText.hasAttribute(this.options.w3wTextAttr)) {
                formText.classList.remove(this.options.hintCls);
            }
        }

        this.$emitter.publish('onValidateW3w');
    }
}
