import { normalize } from 'normalizr';
import { notificationListSchema } from './notifications';

describe('Notification schema', () => {
  const sampleData = [
    {
      id: '1',
      message: 'New course available',
      author: { id: 'user1', name: 'John Doe' },
    },
    {
      id: '2',
      message: 'React is awesome!',
      author: { id: 'user2', name: 'Jane Smith' },
    },
  ];

  it('should normalize notification data correctly', () => {
    const normalizedData = normalize(sampleData, notificationListSchema);
    expect(normalizedData).toHaveProperty('entities');
    expect(normalizedData.entities).toHaveProperty('users');
    expect(normalizedData.entities).toHaveProperty('notifications');
    expect(normalizedData.result).toEqual(['1', '2']);
  });
});
