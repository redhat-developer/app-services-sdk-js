function getPort() {
  return parseInt(process.env.CUSTOM_PORT) || 8000;
}

function getFullHostname() {
  const port = getPort();
  const host = process.env.CUSTOM_HOST || "http://localhost";

  return `${host}:${port}`;
}

module.exports = { getFullHostname, getPort };
