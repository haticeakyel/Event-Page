import React, { useState } from 'react';
import pink from "./assets/pink.png"
import sener from "./assets/sener.png"
import yasemin from "./assets/yasemin.png"
import EventDetail from './EventDetail';

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
      date: '2023-05-7',
      time: '14:00',
      type:'Stand-Up',
      src: yasemin
    },
    {
      name: 'Sinema Keyfi: Rifkin’s Festival',
      description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir...',
      place:'Maximum UNIQ Hall',
      date: '2023-05-1',
      type:'Sinema',
      time: '14:00',
      src: pink
    },
    {
      name: 'BKM Yaz Etkinlikleri: Zengin Mutfağı',
      description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir...',
      place:'Maximum UNIQ Lounge',
      date: '2023-05-25',
      type:'Tiyatro',
      time: '14:00',
      src: sener
    },
    {
      name: 'Yasemin Sakallıoğlu',
      description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir...',
      place:'Maximum UNIQ Hall',
      date: '2023-05-2',
      type:'Stand-Up',
      time: '14:00',
      src: yasemin
    },
    {
      name: 'Sinema Keyfi: Rifkin’s Festival',
      description: '1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir...',
      place:'Maximum UNIQ Box',
      date: '2023-05-12',
      type:'Sinema',
      time: '14:00',
      src: pink
    },
  ]);

  return (
    <div>
    {events &&
      events.map((event, index) => {
        return (
          <div style={{ display: "contents" }} key={index}>
            <EventDetail event={event}/>
          </div>
        );
      })}
      
    </div>
  );
}
export default Events;
