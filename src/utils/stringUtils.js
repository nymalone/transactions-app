export const formatDate = (date) => {
  const transaactionDate = date.toLocaleDateString('pt-BR');
  return `${transaactionDate}`;
}

export const formatCpf = (cpf) => {
  const cpfValue = cpf
  if (cpfValue.length < 11) return cpfValue;
  return cpfValue.substr(0,11).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export const formatCardNumber = (cardNumber) => {
  const cardNumberValue = cardNumber;
  if (cardNumberValue.length < 16) return cardNumberValue;
  return cardNumberValue.substr(0,16).replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
}

export const formatExpireDate = (expireDate) => {
  const expireDateValue = expireDate;
  if (expireDateValue.length < 4) return expireDateValue;
  return expireDateValue.substr(0,4).replace(/(\d{2})(\d{2})/, "$1/$2");
}

export const formatCvv = (cvv) => {
  const cvvValue = cvv;
  return cvvValue.substr(0,3);
}
