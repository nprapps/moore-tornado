Map {
  background-color: #666;
}

#pois {
//  marker-width: 30px;
//  marker-type: ellipse;
//  marker-allow-overlap: true;

  ::labels {
    text-name: [location];
    text-face-name: "Helvetica Neue Bold Italic";
    text-fill: #333;
    text-halo-fill: #fff;
    text-halo-radius: 2;
    text-opacity: .8;
    text-wrap-width: 30;
    text-character-spacing: 2;
    [zoom < 16]  { text-size: 11px; }
    [zoom < 14]  { text-size: 9px; }
    [zoom >= 16] { text-opacity: 0; }
  }
}

#damage {
  [zoom < 16] {
    line-width: 2;
    line-color: #D8472B;
    line-opacity: .8;
  }
}
#damage-zoomlens {
  [zoom >= 16] {
    line-width: 3;
    line-color: #D8472B;
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
    }
    [CLASS = 'A40'],
    [CLASS = 'A41'],
    [CLASS = 'A61'] {
      [zoom >= 15][zoom < 16] { 
        text-size: 11px;
        text-fill: #666;
        text-opacity: 1;
      }
    }
    [CLASS = 'A63'] {
      [zoom >= 15][zoom < 16] { 
        text-size: 10px;
        text-fill: #666;
        text-opacity: 1;
      }
    }
  }
}

#buildings {
  [is_in_path = true] {
    [zoom < 16] {
      polygon-fill: #D8472B;
      line-color: #D8472B;
      polygon-opacity: .7;
      line-opacity: 0;
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
  }
}

#parcels {
  [is_in_path = true] {
    [zoom < 16] {
      line-width: 1;
      line-color: #fff;
      line-opacity: .1;
      polygon-fill: #FBF1CD;
      polygon-opacity: .1;
    }
    [zoom >= 16] {
      polygon-opacity: 0;
    }
  }
}

/*
#damage-bg {
  [zoom < 16] {
    polygon-fill: #6C2315;
    polygon-opacity: .2;
  }
}
*/