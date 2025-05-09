Cypress.on('uncaught:exception', (err) => {
  if (
    err.message.includes('Script error.') ||
    err.message.includes('behtar is not a constructor') ||
    err.message.includes('net::ERR_EMPTY_RESPONSE')
  ) {
    return false;
  }

  return true;
});