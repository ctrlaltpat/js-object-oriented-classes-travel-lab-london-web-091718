class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    // let refYear = new Date(year);
    // let diff = refYear.getFullYear() - this.startDate.getFullYear()
    // return diff;
    return new Date(year).getFullYear() - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    // console.log('b h', eastWest.indexOf(this.beginningLocation.horizontal))
    // console.log('e h', eastWest.indexOf(this.endingLocation.horizontal))
    
    let hDiff = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
    // console.log('hdiff', hDiff);
    let vDiff = Math.abs(parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical));
    // console.log('vdiff', vDiff);
    return hDiff + vDiff;
  }
  estimatedTime(peakTime = false) {
    if (peakTime) {
      return Math.round(this.blocksTravelled() / 2)
    } else {
      return Math.round(this.blocksTravelled() / 3)
    }
  }
}