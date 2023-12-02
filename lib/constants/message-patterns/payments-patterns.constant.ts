import { Pattern } from '../../classes/pattern.class';

const paymentsPattern = new Pattern('payments');

const PAYMENTS_PATTERNS = { CREATE: paymentsPattern.generate('create') };

export default PAYMENTS_PATTERNS;
