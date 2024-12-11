import { schema } from 'normalizr';

// Define user entity
const user = new schema.Entity('users');

// Define notification entity
const notification = new schema.Entity('notifications', {
  author: user,  // Linking a notification to a user
});

// Export schemas
export const notificationListSchema = [notification];
