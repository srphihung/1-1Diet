export class BmiPage {
  height: number;
  weight: number;
  bmiValue: number;
  bmiMessage: string;
  isShown: boolean = false
  
  toggleShow() {
    this.isShown = ! this.isShown;
    }

  constructor() {
    this.height = 140
    this.weight = 50
    this.bmiMessage = "Overgewicht of neiging tot overgewicht. Nog geen verhoogd risico, maar de gevarenzone komt in beeld. Let op je voeding en ga meer bewegen."
    this.bmiValue = 25,5
  }

  calculateBMI () {
    //bmi logic
    if (this.weight > 0 && this.height > 0) {
      let finalBmi = this.weight / (this.height / 100 * this.height / 100);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
    }
  }
  
  // setBMIMessage will set the text message based on the value of BMI
  private setBMIMessage() {
    if (this.bmiValue < 18.5) {
      this.bmiMessage = "Je hebt ondergewicht. Dit kan schadelijk zijn voor je gezondheid. Probeer aan te komen door regelmatig te eten."
    //   document.getElementById('resultContainer').style.backgroundColor = '#F09923';
      this.isShown = false
    }
  
    if (this.bmiValue > 18.5 && this.bmiValue < 25) {
      this.bmiMessage = "Je hebt een gezond gewicht. Probeer je gewicht op peil te houden door gezonde voeding en voldoende beweging."
    //   document.getElementById('resultContainer').style.backgroundColor = '#30286B';
      this.isShown = true
    }
  
    if (this.bmiValue > 25 && this.bmiValue < 30) {
      this.bmiMessage = "Overgewicht of neiging tot overgewicht. Nog geen verhoogd risico, maar de gevarenzone komt in beeld. Let op je voeding en ga meer bewegen."
    //   document.getElementById('resultContainer').style.backgroundColor = '#F09923';
      this.isShown = true
    }
  
    if (this.bmiValue > 30) {
      this.bmiMessage = "Ernstig overgewicht (obesitas). Dit levert risico's op voor je gezondheid. The 1:1 Diet consulent kan je helpen bij het afvallen."
    //   document.getElementById('resultContainer').style.backgroundColor = '#D53947';
      this.isShown = true
    }
  }
}