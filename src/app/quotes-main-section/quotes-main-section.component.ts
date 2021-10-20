import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuotesBlueprint } from 'src/models/quotes-blueprint';

@Component({
  selector: 'app-quotes-main-section',
  templateUrl: './quotes-main-section.component.html',
  styleUrls: ['./quotes-main-section.component.css']
})
export class QuotesMainSectionComponent implements OnInit {

  quotes: QuotesBlueprint[] = [
    
    new QuotesBlueprint(3, 'What is yours shall never pass you','Faith Muthoni', 'Leon Ndemo', new Date(2021,10,3), 34, 3),

    ];

    // let quoteIndex: number = this.quotes.findIndex(
    //   (quote) => quote.upVote === maxValue
    // );
    highVotes (){
      let maxValue: number = Math.max.apply(
      Math,
      this.quotes.map(function (quote) {
        return quote.likes;
        })
      );
      let quoteIndex: number = this.quotes.findIndex(
      (quote) => quote.likes === maxValue
        );
      }


     max = Math.max(...this.quotes.map(quote => quote.likes));
     maxValues = this.quotes.filter(quote => quote.likes == this.max);


  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote)
  }


   //Function to hide/show more quote details
   toggleDetails(index:number){
    this.quotes[index].showMoreQuoteDetails = !this.quotes[index].showMoreQuoteDetails;
  }


  removeQuote(deleteQuote:boolean, index:number){
    if(deleteQuote){
      let toDelete = confirm(`Are you sure you want to delete this quote by ${this.quotes[index].author}?`)
      if (toDelete){
      this.quotes.splice(index, 1)
    }
    }

  }

//upVote and downVote value and counter

  upVote(index:number){
      this.quotes[index].likes ++
      this.highVotes();



  }

  downVote(index:number){
    this.quotes[index].dislikes ++

  }


  constructor() { }

  ngOnInit(): void {


  }

}
