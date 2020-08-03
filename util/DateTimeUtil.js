class DateTimeUtil {
   dateAbbr(date) {
      if(!date) {
         return;
      }
      if(date.constructor === String) {
         date = parseInt(date);
      }
      switch(date) {
         case 1: return "Mo";
         case 2: return "Di";
         case 3: return "Mi";
         case 4: return "Do";
         case 5: return "Fr";
         case 6: return "Sa";
         case 7: return "So";
         default: return "Unbekannt";
      }
   }

   dateString(start, end) {
      return `${this.dateAbbr(start)} - ${this.dateAbbr(end)}`;
   }

   timeString(start, end) {
      if(start === end) return "ganztags";
      return `${start} - ${end}`;
   }
}

module.exports = new DateTimeUtil();
