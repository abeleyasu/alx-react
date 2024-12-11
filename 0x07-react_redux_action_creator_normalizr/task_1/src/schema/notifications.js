import { schema, normalize } from 'normalizr';

// Define user schema
const user = new schema.Entity("users");

// Define message schema
const message = new schema.Entity("messages", {}, { idAttribute: 'guid' });

// Define notification schema
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
});

// Sample nested data to normalize
const data = {
  notifications: [
    {
      id: "5debd7642e815cd350407777",
      author: {
        id: "5debd764f8452ef92346c772",
        age: 25,
        email: "poole.sanders@holberton.nz",
        name: { first: "Poole", last: "Sanders" },
        picture: "http://placehold.it/32x32"
      },
      context: {
        guid: "3068c575-d619-40af-bf12-dece1ee18dd3",
        isRead: false,
        type: "default",
        value: "Cursus risus at ultrices mi."
      }
    },
    // More notifications...
  ]
};

// Normalize the data
const normalizedData = normalize(data, { notifications: [notification] });

// Export the normalized data
export default normalizedData;

