const areas = [
  "بيروت", "طرابلس", "صيدا", "صور", "زحلة", 
  "جبيل", "بعبدا", "النبطية", "بعلبك", 
  "عكار", "الهرمل", "الشوف", "البقاع الغربي", 
  "كسروان", "المتن"
];

// في قسم الـ HTML
<select id="customerArea" required>
  <option value="">-- اختر المنطقة --</option>
  ${areas.map(area => `<option value="${area}">${area}</option>`).join('')}
</select>