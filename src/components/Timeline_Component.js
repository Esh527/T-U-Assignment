import React from 'react';
import { Chrono } from 'react-chrono';
import moment from 'moment';
import './timeline.css';
import FooterComponent from './Footer_Component';

const TimelineComponent = () => {
  const events = [
    {
      title: 'Day 1 - Nov 14th 2023',
      cardTitle: 'Day-1 Pickup from JKIA Airport',
      cardSubtitle: 'Embark on your journey to Maasai Mara',
      cardDetailedText:
        'Our drivers would pick up from the JKIA airport at 7AM. You would board our 4*4 Landcruisers to embark on your journey to Maasai Mara. The road journey takes about 5 to 6 hours, but you would be amazed by the landscape enroute. You would first see the Nairobi national park on your left side. On a lucky day, you would also see a White Rhino grazing near the fence...',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://africageographic.com/wp-content/uploads/2022/10/Andrew-Macdonald-1024-2.jpg', // Replace with actual image URL
        },
      },
      date: moment('2023-11-14', 'YYYY-MM-DD'),
    },
    {
        title: '',
        cardTitle: '',
        cardSubtitle: '',
        cardDetailedText:
          'After one hour you would climb up to The Great Rift Valley. This is one priced attraction of Kenya.Formed a millions years back, this valley boasts beautiful lakes and escarpments, which providehavens for plentiful wildlife. The Great Rift Valley runs for 4,000 miles (6,400 kilometers), fromJordan in southwestern Asia to the coast of the Indian Ocean in central Mozambique. We suggestyou request your driver to stop when you are on top and enjoy the views of this Nature’s marvel.',
        media: {
          type: 'IMAGE',
          source: {
            url: 'https://images.on-this.website/news/11121_1624804997504b019760269.jpg', // Replace with actual image URL
          },
        },
        date: moment('2023-11-14', 'YYYY-MM-DD'),
      },
      {
        title: '',
        cardTitle: '',
        cardSubtitle: '',
        cardDetailedText:
          'This afternoon, our experienced Maasai guides/drivers would take you around the Talek and Topi plains area. There you would find a lot of ungulates, antelopes, zebras and also a huge pride of Lions. This pride is called the ‘Topi Pride’. Relax, sit back and enjoy God’s creations. You would be so excited to see the endless plains of Maasai Mara with its dwellers.',
        media: {
          type: 'IMAGE',
          source: {
            url: 'https://as1.ftcdn.net/v2/jpg/05/78/91/20/1000_F_578912065_xa0n8mCNHRaGd7OBKesVDxlonh6k9Z6R.jpg', // Replace with actual image URL
          },
        },
        date: moment('2023-11-14', 'YYYY-MM-DD'),
      },

      //Nov-15- Starts 

      {
        title: 'Day 2 - Nov 15th 2023',
        cardTitle: 'Day-2',
        cardSubtitle: '',
        cardDetailedText:
          'Wake up early. Freshen yourself and head to the restaurant for a hot cup of coffee or tea. The mornings are cold at Mara, so do wear your fleece jacket for the morning game drive. Breakfast would be packed for you. Explore the mornings at Mara. The Sunrise you witness at Mara is something which you would never get to witness anywhere in the World. Just pray that it does not rain!! Our guides would park the vehicle under a tree for you to have a bush breakfast. This is an out of the World experience...',
        media: {
          type: 'IMAGE',
          source: {
            url: 'https://www.glynedmunds.co.uk/img/gallery/Sunset-on-the-Masai-Mara.jpg', // Replace with actual image URL
          },
        },
        date: moment('2023-11-15', 'YYYY-MM-DD'),
      },


      {
        title: '',
        cardTitle: '',
        cardSubtitle: '',
        cardDetailedText:
          'Return to your camp around 11.30AM. Take a nice shower and some much needed rest. Lunch would be served from 12.30 Noon. Have a hot lunch and a short nap. The afternoon game drive would start at 3PM. Today our drivers would try and locate a leopard for you.',
        media: {
          type: 'IMAGE',
          source: {
            url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/11063370/medium.jpeg', // Replace with actual image URL
          },
        },
        date: moment('2023-11-15', 'YYYY-MM-DD'),
      },

      {
        title: '',
        cardTitle: '',
        cardSubtitle: '',
        cardDetailedText:
          'Do ask your driver to stop where ever you want to click pictures. Return to the camp post sunset and enjoy your evening at the camp fire with your group. Have dinner and retire early as you have a full day game drive tomorrow...',
        media: {
          type: 'IMAGE',
          source: {
            url: 'https://c4.wallpaperflare.com/wallpaper/227/370/434/leopard-sunset-leopard-photo-wallpaper-preview.jpg', // Replace with actual image URL
          },
        },
        date: moment('2023-11-15', 'YYYY-MM-DD'),
      },


       //Nov-16- Starts


       {
        title: 'Day 3 - Nov 16th 2023',
        cardTitle: 'Day-3',
        cardSubtitle: '',
        cardDetailedText:
          'Today is a very busy day for you at Mara. Wake up early, freshen yourself, have a hot beverage and jump into your designated vehicles. Today you would be going towards the border of Maasai Mara. You would be going for a full day game drive with packed breakfast and lunch. Sand river is the border for Maasai Mara and Tanzania...',
        media: {
          type: 'IMAGE',
          source: {
            url: 'https://media.www.kent.ac.uk/programmes/1657/1657.jpg', // Replace with actual image URL
          },
        },
        date: moment('2023-11-16', 'YYYY-MM-DD'),
      },

      {
        title: 'Day 4 - Nov 17th 2023',
        cardTitle: 'Day-4',
        cardSubtitle: '',
        cardDetailedText:
          'Wake up at leisure, have a nice and heavy breakfast while you discuss about your experience with your group. Board the designated Landcruisers to embark on the journey to Nairobi. You would be dropped at the JKIA airport. End of services.',
        media: {
          type: 'IMAGE',
          source: {
            url: 'https://as1.ftcdn.net/v2/jpg/06/04/77/90/1000_F_604779040_XRt8bdycDQE1gwrHGE1uErpGUU1orid4.jpg', // Replace with actual image URL
          },
        },
        date: moment('2023-11-17', 'YYYY-MM-DD'),
      },
  
   
  ];

  return (
    <div className="timeline-component">
      <h2 className="timeline-head">Itinerary Timeline</h2>
      <Chrono items={events} mode="VERTICAL" slideShow hideControls />
      <FooterComponent/>
    </div>
  );
};

export default TimelineComponent;
