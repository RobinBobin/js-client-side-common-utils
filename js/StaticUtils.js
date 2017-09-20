export default class StaticUtils {
   static colorNames = {
      aliceblue: 0xf0f8ff00,
      antiquewhite: 0xfaebd700,
      aqua: 0x00ffff00,
      aquamarine: 0x7fffd400,
      azure: 0xf0ffff00,
      beige: 0xf5f5dc00,
      bisque: 0xffe4c400,
      black: 0x00000000,
      blanchedalmond: 0xffebcd00,
      blue: 0x0000ff00,
      blueviolet: 0x8a2be200,
      brown: 0xa52a2a00,
      burlywood: 0xdeb88700,
      cadetblue: 0x5f9ea000,
      chartreuse: 0x7fff0000,
      chocolate: 0xd2691e00,
      coral: 0xff7f5000,
      cornflowerblue: 0x6495ed00,
      cornsilk: 0xfff8dc00,
      crimson: 0xdc143c00,
      cyan: 0x00ffff00,
      darkblue: 0x00008b00,
      darkcyan: 0x008b8b00,
      darkgoldenrod: 0xb8860b00,
      darkgray: 0xa9a9a900,
      darkgreen: 0x00640000,
      darkgrey: 0xa9a9a900,
      darkkhaki: 0xbdb76b00,
      darkmagenta: 0x8b008b00,
      darkolivegreen: 0x556b2f00,
      darkorange: 0xff8c0000,
      darkorchid: 0x9932cc00,
      darkred: 0x8b000000,
      darksalmon: 0xe9967a00,
      darkseagreen: 0x8fbc8f00,
      darkslateblue: 0x483d8b00,
      darkslategrey: 0x2f4f4f00,
      darkturquoise: 0x00ced100,
      darkviolet: 0x9400d300,
      deeppink: 0xff149300,
      deepskyblue: 0x00bfff00,
      dimgray: 0x69696900,
      dimgrey: 0x69696900,
      dodgerblue: 0x1e90ff00,
      firebrick: 0xb2222200,
      floralwhite: 0xfffaf000,
      forestgreen: 0x228b2200,
      fuchsia: 0xff00ff00,
      gainsboro: 0xdcdcdc00,
      ghostwhite: 0xf8f8ff00,
      gold: 0xffd70000,
      goldenrod: 0xdaa52000,
      gray: 0x80808000,
      green: 0x00800000,
      greenyellow: 0xadff2f00,
      grey: 0x80808000,
      honeydew: 0xf0fff000,
      hotpink: 0xff69b400,
      indianred: 0xcd5c5c00,
      indigo: 0x4b008200,
      ivory: 0xfffff000,
      khaki: 0xf0e68c00,
      lavender: 0xe6e6fa00,
      lavenderblush: 0xfff0f500,
      lawngreen: 0x7cfc0000,
      lemonchiffon: 0xfffacd00,
      lightblue: 0xadd8e600,
      lightcoral: 0xf0808000,
      lightcyan: 0xe0ffff00,
      lightgoldenrodyellow: 0xfafad200,
      lightgray: 0xd3d3d300,
      lightgreen: 0x90ee9000,
      lightgrey: 0xd3d3d300,
      lightpink: 0xffb6c100,
      lightsalmon: 0xffa07a00,
      lightseagreen: 0x20b2aa00,
      lightskyblue: 0x87cefa00,
      lightslategrey: 0x77889900,
      lightsteelblue: 0xb0c4de00,
      lightyellow: 0xffffe000,
      lime: 0x00ff0000,
      limegreen: 0x32cd3200,
      linen: 0xfaf0e600,
      magenta: 0xff00ff00,
      maroon: 0x80000000,
      mediumaquamarine: 0x66cdaa00,
      mediumblue: 0x0000cd00,
      mediumorchid: 0xba55d300,
      mediumpurple: 0x9370db00,
      mediumseagreen: 0x3cb37100,
      mediumslateblue: 0x7b68ee00,
      mediumspringgreen: 0x00fa9a00,
      mediumturquoise: 0x48d1cc00,
      mediumvioletred: 0xc7158500,
      midnightblue: 0x19197000,
      mintcream: 0xf5fffa00,
      mistyrose: 0xffe4e100,
      moccasin: 0xffe4b500,
      navajowhite: 0xffdead00,
      navy: 0x00008000,
      oldlace: 0xfdf5e600,
      olive: 0x80800000,
      olivedrab: 0x6b8e2300,
      orange: 0xffa50000,
      orangered: 0xff450000,
      orchid: 0xda70d600,
      palegoldenrod: 0xeee8aa00,
      palegreen: 0x98fb9800,
      paleturquoise: 0xafeeee00,
      palevioletred: 0xdb709300,
      papayawhip: 0xffefd500,
      peachpuff: 0xffdab900,
      peru: 0xcd853f00,
      pink: 0xffc0cb00,
      plum: 0xdda0dd00,
      powderblue: 0xb0e0e600,
      purple: 0x80008000,
      rebeccapurple: 0x66339900,
      red: 0xff000000,
      rosybrown: 0xbc8f8f00,
      royalblue: 0x4169e100,
      saddlebrown: 0x8b451300,
      salmon: 0xfa807200,
      sandybrown: 0xf4a46000,
      seagreen: 0x2e8b5700,
      seashell: 0xfff5ee00,
      sienna: 0xa0522d00,
      silver: 0xc0c0c000,
      skyblue: 0x87ceeb00,
      slateblue: 0x6a5acd00,
      slategray: 0x70809000,
      snow: 0xfffafa00,
      springgreen: 0x00ff7f00,
      steelblue: 0x4682b400,
      tan: 0xd2b48c00,
      teal: 0x00808000,
      thistle: 0xd8bfd800,
      tomato: 0xff634700,
      turquoise: 0x40e0d000,
      violet: 0xee82ee00,
      wheat: 0xf5deb300,
      white: 0xffffff00,
      whitesmoke: 0xf5f5f500,
      yellow: 0xffff0000,
      yellowgreen: 0x9acd3200
   };
   
   static round(value, decimals) {
      // https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
      // MarkG's answer.
      
      return decimals == undefined ? value : Number(Math.
         round(value + "e" + decimals) + "e-" + decimals);
   }
   
   static encodedUtf8ToByteArray(encoded) {
      const ar = [];
      
      for (let i = 0; i < encoded.length; i++) {
         ar.push(encoded.charCodeAt(i));
      }
      
      return ar;
   }
   
   static ensureBounds(value, min, max) {
      if (max < min) {
         throw new Error("'min' must not exceed 'max'");
      }
      
      return Math.max(Math.min(value, max), min);
   }
   
   static pushAndReturnElement(array, element) {
      array.push(element);
      
      return element;
   }
   
   static quoteIfString(value) {
      return value.constructor == String ? `"${value}"` : value;
   }
   
   static safeQuoteIfString(value, quoteIfString) {
      return quoteIfString ? StaticUtils.quoteIfString(value) : value;
   }
   
   static objectToArray(object) {
      return Object.keys(object).reduce((p, c) => {
         p.push(object[c]);
         
         return p;
      }, []);
   }
   
   static escapeRegExp(string) {
      // https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
   }
   
   static replaceAll(string, find, replace) {
      // https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript
      
      return string.replace(new RegExp(StaticUtils.escapeRegExp(find), 'g'), replace);
   }
   
   static deg2Rad(degrees) {
      return degrees * Math.PI / 180;
   }
   
   static color(color) {
      return typeof color == "string" ? StaticUtils.colorNames[color] : color;
   }
}
