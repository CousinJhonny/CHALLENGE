import { Component } from '@angular/core';
import { Payment } from './models/Payment';
import { NgxCurrencyModule  } from "ngx-currency";
import { timer } from 'rxjs';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{

  totalA: number=0.00;
   



  
    public minimo =  new Date();

    
    
    public maximo = new Date();


  constructor()
  {
    this.totalA = this.sum(this.paymentArray);

    this.minimo =  this.addDays(this.minimo , -7 );

    this.selectedPayment.concept = "";
    this.selectedPayment.date = "";
    

  }

  addDays(date: Date, days: number) {
    date.setDate(date.getDate() + days);
    return date;
}

   sum(input){
             
           
               var total =  0;
               for(var i=0;i<input.length;i++)
                 {                  
                   if(isNaN(input[i].amount)){
                   continue;
                    }
                     total += Number(input[i].amount);
                  }
                return total;
   }
  

  public maskC =[ /^\d{1,4}\.\d{1,2}$/  ];

  
 
      paymentArray: Payment[]= [
      { id:1 ,concept: "Rent" , amount: 100.00, date: "2020-04-17"  },
      { id:2 ,concept: "Water" , amount: 70.50, date: "2020-04-17" },
      { id:3 ,concept: "Foot" , amount: 30.99, date: "2020-04-17" }
    
    ] ; 

    selectedPayment: Payment =  new Payment();


    AddEdit()
    {
     
      

      if( this.selectedPayment.concept == "" )
      {
        return false;
      }

      if(false == (this.selectedPayment.amount > 0) )
     {
       return false;
     }

     if(this.selectedPayment.date == "")
    {
      return   false;
    }

      if(this.selectedPayment.id == -1)
      {
        this.selectedPayment.id = this.paymentArray.length +1 ;
        this.paymentArray.push(this.selectedPayment);
      }
      this.selectedPayment =  new Payment();
      this.selectedPayment.concept ="";
      this.selectedPayment.date = "";
    

    }

    openEdit(payment: Payment)
    {

      

      this.selectedPayment = payment;
  
   

    }

    delete()
    {

        this.paymentArray = this.paymentArray.filter(x => x.id != this.selectedPayment.id );

        this.selectedPayment  =  new Payment();


    }


   
    

    
}

