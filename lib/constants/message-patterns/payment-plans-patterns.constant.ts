import { Pattern } from '../../classes/pattern.class';

const paymentPlansPattern = new Pattern('payment-plans');

const PAYMENT_PLANS_PATTERNS = {
  CREATE: paymentPlansPattern.generate('create'),
  DELETE: paymentPlansPattern.generate('delete'),
  GET_ALL: paymentPlansPattern.generate('getAll'),
  GET_BY_ID: paymentPlansPattern.generate('getById'),
  ARCHIVE: paymentPlansPattern.generate('archive'),
  UPDATE: paymentPlansPattern.generate('update'),
  UPDATE_STATUS: paymentPlansPattern.generate('status'),
  ADD: paymentPlansPattern.generate('add'),
  REMOVE: paymentPlansPattern.generate('remove'),
};

export default PAYMENT_PLANS_PATTERNS;
