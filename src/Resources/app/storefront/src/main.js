import VanWittlaerExampleTwoPlugin from './van-wittlaer-example-two/van-wittlaer-example-two.plugin';

const PluginManager = window.PluginManager;
PluginManager.override('FormValidation', VanWittlaerExampleTwoPlugin, '[data-form-validation]');
