import { Pattern } from '../../classes/pattern.class';

const notificationsPattern = new Pattern('notifications');

const NOTIFICATIONS_PATTERNS = {
  CREATE: notificationsPattern.generate('create'),
};

export default NOTIFICATIONS_PATTERNS;
