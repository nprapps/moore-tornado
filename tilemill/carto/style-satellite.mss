Map {
//  background-color: #647356;
}

#pois {
  ::labels {
    text-name: [location];
    text-face-name: "Helvetica Neue Bold Italic";
    text-fill: #fff;
    text-opacity: .9; 
    text-wrap-width: 40;
    text-character-spacing: 1;
    text-allow-overlap: true;
    [location = 'Briarwood Elementary School'] { text-dy: -5; }
    [location = 'Moore Medical Center'] { text-dy: -10; }
    [location = 'Riverlife Church of God'] { text-dy: 5; }
    
    [zoom < 16]  { 
      text-size: 10px; 
    }
    [zoom < 14],[zoom >= 16] { text-opacity: 0; }
  }
}

#damage {
  [name = 'EF0'][zoom < 16] {
    line-width: 2;
    line-color: #EFC637;
    line-opacity: .4;
  }
}
#damage-zoomlens {
  [name = 'EF0'][zoom >= 16] {
    line-width: 3;
    line-color: #EFC637;
    line-opacity: .8;
  }
}

#roads {
  [zoom < 16] {
    line-color: #fff;
    line-opacity: .5;
  }
  [zoom <= 12 ] {
    line-width: 0;
    [CLASS = 'A15'] { line-width: 2; }
  }
  [zoom > 12 ][zoom < 15 ] {
    line-width: 1;
    [CLASS = 'A15'] { line-width: 2; }
  }
  
  ::labels {
    text-name: [COMBINEDST];
    text-face-name: "Helvetica Neue Medium";
    text-fill: #333;
    text-placement: line;
    text-min-distance: 300;
    text-halo-fill: #fff;
    text-halo-radius: 2;
    text-avoid-edges: true;
    text-allow-overlap: false;
    text-size: 13px;
    text-character-spacing: 2;
    text-opacity: 0;

    [CLASS = 'A15'] {
      text-face-name: "Helvetica Neue Bold";
      [zoom < 16] { 
        text-size: 13px;
        text-opacity: 1;
      }
      [zoom < 15]  { 
        text-size: 10px;
      }
      [zoom >= 16] { text-opacity: 0; }
    }
    [CLASS = 'A31'] {
      [zoom >= 12] { 
        text-size: 9px;
        text-opacity: 1;
      }
      [zoom >= 13] { 
        text-size: 10px;
      }
      [zoom >= 15][zoom < 16] { 
        text-size: 12px;
      }
      [zoom >= 16] { text-opacity: 0; }
    }
    [CLASS = 'A40'],
    [CLASS = 'A41'],
    [CLASS = 'A61'] {
      [zoom >= 15][zoom < 16] { 
        text-size: 11px;
        text-fill: #666;
        text-opacity: 1;
      }
      [zoom >= 16] { text-opacity: 0; }
    }
    [CLASS = 'A63'] {
      [zoom >= 15][zoom < 16] { 
        text-size: 10px;
        text-fill: #666;
        text-opacity: 1;
      }
      [zoom >= 16] { text-opacity: 0; }
    }
  }
}

#buildings {
  [is_in_path = true] {
    [zoom < 16] {
      polygon-fill: #D8472B;
//      line-color: #D8472B;
      polygon-opacity: .9;
//      line-opacity: 0;
      [intensity = 'EF0'] { polygon-fill: #EFC637; }
      [intensity = 'EF2'] { polygon-fill: #EF973F; }
      [intensity = 'EF4'] { polygon-fill: #D8472B; }
    }
  }
}

#buildings-zoomlens {
  [is_in_path = true] {
    [zoom >= 16] {
      line-color: #fff;
      line-width: 1.5;
      line-opacity: .8;
      polygon-opacity: 0;
    }
    [zoom = 18]  { line-width: 2; }
    [zoom >= 19] { line-width: 2.5; }
  }
}

#parcels {
  [is_in_path = true] {
    polygon-opacity: 0;
  }
}

#damage-bg {
  [zoom < 16] {
    polygon-opacity: .2;
    [name = 'EF0'] { polygon-fill: #B39429; }
    [name = 'EF2'] { polygon-fill: #AA6A21; }
    [name = 'EF4'] { polygon-fill: #A23520; }
  }
}