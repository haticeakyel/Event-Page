import React, { useState } from 'react';
import pink from "./assets/pink.png"
import sener from "./assets/sener.png"
import yasemin from "./assets/yasemin.png"

function Events() {
  const [events, setEvents] = useState([
    {
      name: 'BKM Yaz Etkinlikleri: Zengin Mutfağı',
      description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir...',
      place:'Maximum UNIQ Hall',
      date: '2023-05-10',
      type:'Tiyatro',
      time: '14:00',
      src: sener
    },{
      name: 'Yasemin Sakallıoğlu',
      description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir...',
      place:'Maximum UNIQ Açık Hava',
      date: '2023-05-10',
      time: '14:00',
      type:'Stand-Up',
      src: yasemin
    },
    {
      name: 'Sinema Keyfi: Rifkin’s Festival',
      description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir...',
      place:'Maximum UNIQ Hall',
      date: '2023-05-10',
      type:'Sinema',
      time: '14:00',
      src: 'pink'
    },
    {
      name: 'BKM Yaz Etkinlikleri: Zengin Mutfağı',
      description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir...',
      place:'Maximum UNIQ Lounge',
      date: '2023-05-10',
      type:'Tiyatro',
      time: '14:00',
      src: sener
    },
    {
      name: 'Yasemin Sakallıoğlu',
      description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir...',
      place:'Maximum UNIQ Hall',
      date: '2023-05-10',
      type:'Stand-Up',
      time: '14:00',
      src: yasemin
    },
    {
      name: 'Sinema Keyfi: Rifkin’s Festival',
      description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir...',
      place:'Maximum UNIQ Box',
      date: '2023-05-10',
      type:'Sinema',
      time: '14:00',
      src: 'pink'
    },
    // Add more events here
  ]);

  return (
    <div>
      <ul>
        {events.map(event => (
          <li key={event.name}>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>{event.place}</p>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <img src={event.src}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Events;
