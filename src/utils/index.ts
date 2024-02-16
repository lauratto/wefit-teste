export const isValidCPF = (cpf: string): boolean => {
    cpf = cpf.replace(/\D/g, '');
  
    if (cpf.length !== 11) {
      return false;
    }
  
    let sum = 0;
    let remainder = 0;
  
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }
  
    remainder = (sum * 10) % 11;
  
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
  
    if (remainder !== parseInt(cpf.charAt(9))) {
      return false;
    }
  
    sum = 0;
  
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }
  
    remainder = (sum * 10) % 11;
  
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
  
    if (remainder !== parseInt(cpf.charAt(10))) {
      return false;
    }
  
    return true;
  };
  
export const isValidCNPJ = (cnpj: string): boolean => {
    cnpj = cnpj.replace(/\D/g, '');
  
    if (cnpj.length !== 14) {
      return false;
    }
  
    const validateDigit = (cnpj: string, positions: number[]): boolean => {
      let sum = 0;
      let digit = 0;
  
      for (let i = 0; i < positions.length; i++) {
        sum += parseInt(cnpj.charAt(i)) * positions[i];
      }
  
      digit = sum % 11;
  
      if (digit < 2) {
        digit = 0;
      } else {
        digit = 11 - digit;
      }
  
      return digit === parseInt(cnpj.charAt(positions.length));
    };
  
    if (!validateDigit(cnpj, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2])) {
      return false;
    }
  
    if (!validateDigit(cnpj, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2])) {
      return false;
    }
  
    return true;
  };



  