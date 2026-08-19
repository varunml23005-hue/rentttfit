import { Injectable } from '@angular/core';
import { ChatOption } from '../models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {

  getReply(message: string): {
    text: string;
    options?: ChatOption[];
  } {

    const msg = message.toLowerCase().trim();


    // =========================================
    // MAIN MENU
    // =========================================

    if (
      msg === 'hi' ||
      msg === 'hello' ||
      msg === 'hey' ||
      msg === 'start'
    ) {

      return {

        text: `Hello! 👋 Welcome to RentFits.

I'd be happy to help you find the perfect outfit. 💕`,

        options: [

          {
            label: '👗 Browse Outfits',
            value: 'browse'
          },

          {
            label: '💰 Rental Prices',
            value: 'price'
          },

          {
            label: '📅 Check Availability',
            value: 'availability'
          },

          {
            label: '🛍️ Booking Help',
            value: 'booking'
          }

        ]

      };

    }


    // =========================================
    // BROWSE OUTFITS
    // =========================================

    if (
      msg === 'browse' ||
      msg.includes('browse outfits')
    ) {

      return {

        text: `Of course! 👗✨

What type of outfit are you looking for?`,

        options: [

          {
            label: '👗 Lehenga',
            value: 'lehenga'
          },

          {
            label: '🥻 Saree',
            value: 'saree'
          },

          {
            label: '🤵 Suit',
            value: 'suit'
          },

          {
            label: '✨ Dress / Gown',
            value: 'dress'
          }

        ]

      };

    }


    // =========================================
    // LEHENGA
    // =========================================

    if (
      msg === 'lehenga' ||
      msg.includes('lehenga') ||
      msg.includes('lengha') ||
      msg.includes('bridal')
    ) {

      return {

        text: `Beautiful choice! 👗💕

We have bridal, reception, engagement and party-wear lehengas available.

What occasion are you shopping for?`,

        options: [

          {
            label: '💍 Wedding',
            value: 'wedding'
          },

          {
            label: '✨ Reception',
            value: 'reception'
          },

          {
            label: '🎉 Engagement',
            value: 'engagement'
          },

          {
            label: '💃 Party',
            value: 'party'
          }

        ]

      };

    }


    // =========================================
    // SAREE
    // =========================================

    if (
      msg === 'saree' ||
      msg.includes('saree') ||
      msg.includes('sari')
    ) {

      return {

        text: `Beautiful! 🥻✨

We have designer sarees, silk sarees, party-wear sarees and wedding collections.

What occasion is the saree for?`,

        options: [

          {
            label: '💍 Wedding',
            value: 'wedding'
          },

          {
            label: '🎉 Party',
            value: 'party'
          },

          {
            label: '✨ Reception',
            value: 'reception'
          }

        ]

      };

    }


    // =========================================
    // SUIT
    // =========================================

    if (
      msg === 'suit' ||
      msg.includes('suit') ||
      msg.includes('sherwani')
    ) {

      return {

        text: `Absolutely! 🤵✨

We have stylish suits and ethnic collections available for weddings, receptions and formal occasions.

What type of event are you attending?`,

        options: [

          {
            label: '💍 Wedding',
            value: 'wedding'
          },

          {
            label: '✨ Reception',
            value: 'reception'
          },

          {
            label: '💼 Formal Event',
            value: 'formal'
          }

        ]

      };

    }


    // =========================================
    // DRESS
    // =========================================

    if (
      msg === 'dress' ||
      msg.includes('dress') ||
      msg.includes('gown')
    ) {

      return {

        text: `We have some beautiful options! ✨👗

Our collection includes gowns, party dresses and western wear.

What occasion are you shopping for?`,

        options: [

          {
            label: '💍 Wedding',
            value: 'wedding'
          },

          {
            label: '🎉 Party',
            value: 'party'
          },

          {
            label: '✨ Reception',
            value: 'reception'
          }

        ]

      };

    }


    // =========================================
    // OCCASIONS
    // =========================================

    if (
      msg === 'wedding' ||
      msg === 'reception' ||
      msg === 'engagement' ||
      msg === 'party' ||
      msg === 'formal'
    ) {

      return {

        text: `Perfect! 💕✨

Now let's find the right fit for you.

What size do you need?`,

        options: [

          {
            label: 'XS',
            value: 'XS'
          },

          {
            label: 'S',
            value: 'S'
          },

          {
            label: 'M',
            value: 'M'
          },

          {
            label: 'L',
            value: 'L'
          },

          {
            label: 'XL',
            value: 'XL'
          }

        ]

      };

    }


    // =========================================
    // SIZE
    // =========================================

    if (
      msg === 'xs' ||
      msg === 's' ||
      msg === 'm' ||
      msg === 'l' ||
      msg === 'xl'
    ) {

      return {

        text: `Great! 😊

We have options available in this size.

When do you need the outfit? 📅`,

        options: [

          {
            label: '📅 Check Availability',
            value: 'availability'
          },

          {
            label: '💰 View Rental Price',
            value: 'price'
          }

        ]

      };

    }


    // =========================================
    // PRICE
    // =========================================

    if (
      msg === 'price' ||
      msg.includes('price') ||
      msg.includes('cost') ||
      msg.includes('rent') ||
      msg.includes('rental')
    ) {

      return {

        text: `Our rental prices depend on the outfit and rental duration. 💰

Most collections start from around ₹999, with premium designer pieces available as well.

Would you like to browse outfits?`,

        options: [

          {
            label: '👗 Browse Outfits',
            value: 'browse'
          },

          {
            label: '📅 Check Availability',
            value: 'availability'
          }

        ]

      };

    }


    // =========================================
    // AVAILABILITY
    // =========================================

    if (
      msg === 'availability' ||
      msg.includes('available') ||
      msg.includes('availability')
    ) {

      return {

        text: `I'd be happy to check that for you. 😊

Please select when you need the outfit. 📅`,

        options: [

          {
            label: '📅 This Week',
            value: 'this week'
          },

          {
            label: '📅 Next Week',
            value: 'next week'
          },

          {
            label: '📅 Later',
            value: 'later'
          }

        ]

      };

    }


    // =========================================
    // AVAILABILITY DATES
    // =========================================

    if (
      msg === 'this week' ||
      msg === 'next week' ||
      msg === 'later'
    ) {

      return {

        text: `Great! 😊

We can help you check the collection for that period.

Would you like to continue with a rental booking?`,

        options: [

          {
            label: '🛍️ Start Booking',
            value: 'booking'
          },

          {
            label: '👗 Browse More Outfits',
            value: 'browse'
          }

        ]

      };

    }


    // =========================================
    // BOOKING
    // =========================================

    if (
      msg === 'booking' ||
      msg.includes('booking') ||
      msg.includes('book')
    ) {

      return {

        text: `Sure! 💕 Let's get your rental started.

I'll need a few details:

📅 Event date
👗 Outfit type
📏 Size
📍 Delivery location`,

        options: [

          {
            label: '👗 Choose Outfit',
            value: 'browse'
          },

          {
            label: '📅 Check Availability',
            value: 'availability'
          }

        ]

      };

    }


    // =========================================
    // DELIVERY
    // =========================================

    if (
      msg.includes('delivery') ||
      msg.includes('deliver')
    ) {

      return {

        text: `Yes! 🚚✨

We provide doorstep delivery in selected locations.

Please contact the shop to confirm delivery availability for your city.`,

        options: [

          {
            label: '👗 Browse Outfits',
            value: 'browse'
          },

          {
            label: '🛍️ Booking Help',
            value: 'booking'
          }

        ]

      };

    }


    // =========================================
    // RETURN
    // =========================================

    if (
      msg.includes('return') ||
      msg.includes('returning')
    ) {

      return {

        text: `No problem! 😊

The outfit needs to be returned within the agreed rental period.

The return date will be shown when your rental is confirmed.`

      };

    }


    // =========================================
    // THANK YOU
    // =========================================

    if (
      msg.includes('thank') ||
      msg.includes('thanks')
    ) {

      return {

        text: `You're most welcome! 😊💕

I'm always happy to help you find your perfect look.`,

        options: [

          {
            label: '👗 Browse Outfits',
            value: 'browse'
          },

          {
            label: '🛍️ Start Booking',
            value: 'booking'
          }

        ]

      };

    }


    // =========================================
    // GOODBYE
    // =========================================

    if (
      msg === 'bye' ||
      msg.includes('goodbye')
    ) {

      return {

        text: `Thank you for chatting with RentFits! 💕✨

Have a wonderful day, and we hope to help you find the perfect outfit soon!`

      };

    }


    // =========================================
    // DEFAULT
    // =========================================

    return {

      text: `I'd be happy to help you with that! 😊

What would you like to do?`,

      options: [

        {
          label: '👗 Browse Outfits',
          value: 'browse'
        },

        {
          label: '💰 Rental Prices',
          value: 'price'
        },

        {
          label: '📅 Check Availability',
          value: 'availability'
        },

        {
          label: '🛍️ Booking Help',
          value: 'booking'
        }

      ]

    };

  }

}