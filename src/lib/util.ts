export function removePunctuation(s: string) {
  // eslint-disable-next-line no-useless-escape
  return s.replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g, '').replace(/\s{2,}/g, ' ');
}

export function convertRomanianSymbols(s: string) {
  const charTranslatation: { [key: string]: string } = {
    ă: 'a',
    â: 'a',
    î: 'i',
    ș: 's',
    ş: 's',
    ț: 't',
    Ă: 'A',
    Â: 'A',
    Î: 'I',
    Ș: 'S',
    Ş: 'S',
    Ț: 'T',
  };

  let result = s;

  for (const romanianChar in charTranslatation) {
    result = result.replace(new RegExp(`${romanianChar}`, 'g'), charTranslatation[romanianChar]);
  }

  return result;
}
