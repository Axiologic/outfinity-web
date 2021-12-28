const {setConfig, getConfig} = WebCardinal.preload;
const { define } = WebCardinal.components;

function initializeWebCardinalConfig() {
  const config = getConfig();
  config.translations = false;
  return config;
}

const outFinityConfig = initializeWebCardinalConfig();

setConfig(outFinityConfig);

define('page-template', {shadow: true});

