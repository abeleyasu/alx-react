// task_5/dashboard/src/actions/notificationActionCreators.js
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

// Action creator for marking a notification as read
export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index
});

// Action creator for setting the notification filter
export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter
});
