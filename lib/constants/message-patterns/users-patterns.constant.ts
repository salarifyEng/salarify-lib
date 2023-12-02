import { Pattern } from '../../classes/pattern.class';

const usersPattern = new Pattern('users');

const USERS_PATTERNS = {
  CREATE: usersPattern.generate('create'),
  DELETE: usersPattern.generate('delete'),
  GET_ALL: usersPattern.generate('getAll'),
  GET_BY_ID: usersPattern.generate('getById'),
  GET_BY_EMAIL: usersPattern.generate('getByEmail'),
  UPDATE: usersPattern.generate('update'),
  VERIFY: usersPattern.generate('verify'),
};

export default USERS_PATTERNS;
