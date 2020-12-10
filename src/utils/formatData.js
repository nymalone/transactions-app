import {formatStatus} from './formatStatus';

export const formatData = (transaction) => ({
  id: transaction.id,
  name: transaction.credit_card_holder_name,
  cpf: transaction.buyer_document,
  cardNumber: transaction.credit_card_number,
  expireDate: transaction.credit_card_expiration_date,
  cvv: transaction.credit_card_cvv,
  date: (transaction.date ? new Date(transaction.date) : new Date()),
  status: formatStatus[transaction.status],
  value: transaction.amount,
});
