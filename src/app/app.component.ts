import { Component, OnInit } from '@angular/core';
import { DatanumService } from 'src/app/service/datanum.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Random';

  everyNumber:any;
  RandomNum:any;
  num:any;
  min=10000;
  max=100000;
  lastDigit:any;
  value:any;
  i:any;
  stop:any;
  RandomList:any=[];
  finalValue:any;
  data:any;
  status_start=false;
  status_back=false;
  beforestart=true;
  number = [];

  constructor(private datanum:DatanumService,){}

  ngOnInit(): void {
    this.PutRandom();
   setInterval(() => {
    this.everyNumber=this.PutRandom(); 
    this.GetRandom(this.everyNumber); //pass every random number
  }, 1000);//executed every one second
  
  }
  
  PutRandom(){

    this.RandomNum=Math.floor(Math.random() * (this.max - this.min + 1) + this.min); //min:1000 max:100000
    return this.RandomNum;
  }

  GetRandom(val:any){
    return this.num=val; //Get value and save inside new variable
  }

  StartPick(){
    this.status_start=true; //Start button disabled
    this.beforestart=false; //Hide Instruction 
    this.i=0;
    alert("We are trying to generate 5 digit number after 5 minutes");
     
        this.stop=setInterval(() =>{
          this.value = this.num; 
          this.lastDigit=this.value%10; //Get last digit every number
          this.RandomList.push(this.lastDigit); //Save all the number in array
          this.i++;
          console.log("This is ",this.i," minutes");
        
          if(this.i===5){  // if the i++ become 5 = 5 minutes
            clearInterval(this.stop); //stop the refreshing
            this.finalValue=parseInt(this.RandomList.join(''));//Make the array become number
            alert(this.finalValue); 
            this.passNumber(this.finalValue); 
            this.status_back=true; // Return button available after end of 5 minutes 
           }},60000); // 1000 = 1 second 
                  
    
  }

  passNumber(num:any)
  {
    var number = {numbers: num}; 
    this.datanum.savenumber(number).subscribe((response:any)=>{
      this.data=response; //Get response from API
      console.log(this.data);

     });
  }

  ResetAll()
  {
    this.status_back=false;
    this.status_start=false;
    this.beforestart=true;
    this.RandomList=[];
    this.finalValue='';
  }
}
