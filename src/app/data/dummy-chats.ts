import { Chat } from '../models/chat.model';

export const DUMMY_CHATS: Chat[] = [

  {
    id: 1,

    name: 'Sunita Verma',

    shop: "Sunita's Bridal House",

    city: 'Mumbai',

    avatar: 'avatars/user1.jpg',

    online: true,

    pinned: false,

    messages: [

      {
        id: 1,
        sender: 'owner',
        text: 'Namaste! Welcome to Sunita Bridal House.',
        time: '10:00 AM'
      },

      {
        id: 2,
        sender: 'user',
        text: 'Hi! I need a crimson bridal lehenga.',
        time: '10:02 AM',
        delivered: true,
        read: true
      },

      {
        id: 3,
        sender: 'owner',
        text: 'Sure! We have beautiful bridal collections.',
        time: '10:04 AM'
      }

    ]

  },


  {
    id: 2,

    name: 'Rahul Khanna',

    shop: 'The Suit Lounge',

    city: 'Delhi',

    avatar: 'avatars/user2.jpg',

    online: false,

    pinned: false,

    messages: [

      {
        id: 1,
        sender: 'owner',
        text: 'Hello! Looking for a suit?',
        time: '9:00 AM'
      }

    ]

  },


  {
    id: 3,

    name: 'Meera Iyer',

    shop: 'Meera Ethnic Studio',

    city: 'Bangalore',

    avatar: 'avatars/user3.jpg',

    online: true,

    pinned: false,

    messages: [

      {
        id: 1,
        sender: 'owner',
        text: 'Hi there!',
        time: '11:00 AM'
      }

    ]

  }

];