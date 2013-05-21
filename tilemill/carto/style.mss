Map {
  background-color: #fff;
}

#tornado {
  [SymbolID = 1] {
    line-width: 3;
    line-color: #c00;
    line-opacity: .3;
  }
}

#roads {
  line-color: #bababa;
  [zoom <= 12 ] {
    line-width: 0;
    [CLASS = 'A15'] { line-width: 2; }
  }
  [zoom > 12 ][zoom < 15 ] {
    line-width: 1;
    [CLASS = 'A15'] { line-width: 2; }
  }
  [zoom >= 15 ] {
    line-width: 1;
    [CLASS = 'A15'] { line-width: 3; }
  }
  
  ::labels {
    [zoom >= 15] { 
      text-name: [COMBINEDST];
      text-face-name: "Helvetica Neue Medium";
      text-fill: #333;
      text-placement: line;
      text-min-distance: 500;
      text-halo-fill: #fff;
      text-halo-radius: 2;
      text-avoid-edges: true;
      text-size: 12px;
   	}

    [CLASS = 'A15'] {
      text-name: [COMBINEDST];
      text-face-name: "Helvetica Neue Bold";
      text-fill: #333;
      text-placement: line;
      text-min-distance: 500;
      text-halo-fill: #fff;
      text-halo-radius: 2;
      text-avoid-edges: true;
      [zoom < 15]  { text-size: 10px; }
      [zoom >= 15] { text-size: 13px; }
    }
    [CLASS = 'A31'] {
      [zoom >= 15] { text-size: 13px; }
    }
    [CLASS = 'A40'],
    [CLASS = 'A41'],
    [CLASS = 'A61'] {
      [zoom >= 15] { 
        text-size: 11px;
        text-fill: #666;
      }
    }
    [CLASS = 'A63'] {
      [zoom >= 15] { 
        text-size: 10px;
        text-fill: #666;
      }
    }
  }
}

#buildings {
  polygon-fill: #e2e2e2;
  polygon-opacity: .8;
  line-width: .5;
  line-color: #ccc;
  [zoom < 15] { line-width: 0; }
  [is_in_path = 1] {
    polygon-fill: #ECA395;
    line-width: 0;
    [shape_area > 3000] {
      polygon-fill: #A23520;
    }
  }
}

#tornado-bg {
  [SymbolID = 1] {
  	polygon-fill: #ECA395;
  	polygon-opacity: .5;
  }
}

#parcels {
  polygon-fill: #e2e2e2;
  line-width: 1;
  line-color: #fff;
  [is_in_path = 1] {
  	polygon-fill: #c00;
  	polygon-opacity: .5;
  }
}