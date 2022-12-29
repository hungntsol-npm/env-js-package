"use strict";

function isBrowserEnv() {
  return typeof window !== "undefined" && window._ENV_;
}

function env(key) {
  if (isBrowserEnv()) {
    return key.length && window._ENV_[key];
  }

  return key.length && process.env[key];
}

export default env;
