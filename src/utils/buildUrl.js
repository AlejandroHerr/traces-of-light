export default (...parts) => {
  const OPENING_SLASH = /^\//;
  const CLOSING_SLASH = /\/$/;

  return parts.reduce((url, part) => `${url}/${part.replace(OPENING_SLASH, '')}`.replace(CLOSING_SLASH, ''));
};
