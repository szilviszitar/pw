import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;

  onChangeLength(value: string) {
    const parsedValue = parseInt(value)
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onButtonClick() {
    //this.password = 'my password!';


    console.log(`
    A jelszó az alábbiakat tartalmazza:
    Tartalmaz betűt: ${this.includeLetters}
    Tartalmaz számot: ${this.includeNumbers}
    Tartalmaz szimbólumot: ${this.includeSymbols}
    
    `);

    const numbers= '1234567890';
    const letters= 'abcdefghijklmnopqrstuvwxyz';
    const symbols= '!%+=()@&#';

    let validChars= '';
    let generatedPassword ='';

    if(this.includeLetters){
      validChars += letters;
    }

    if(this.includeNumbers){
      validChars+=numbers;
    }

    if(this.includeSymbols){
      validChars+=symbols;
    }

    for (let i =0; i<this.length;i++){
      const index =Math.floor(Math.random()*validChars.length);
      generatedPassword +=validChars[index];

    }
    this.password=generatedPassword
  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbol() {
    this.includeSymbols = !this.includeSymbols;
  }


}

