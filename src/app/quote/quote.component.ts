import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor() { }

  // It maintains quote Model
  quoteModel: Quote;
  // It maintains quote form display status. By default it will be false.
// tslint:disable-next-line: ban-types
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType = 'Save';

  quotes = [
// tslint:disable-next-line: max-line-length
    new Quote('Eating is self respect', 'Byusa G', 'User1', new Date(), 0, 0),
    new Quote('Trust yourself. You know more than you think you do.', 'Benjamin Spock', 'User2', new Date(), 0, 0),
  ];

  // Creates new quote when called
  onNew() {
    // Initiate new quote.
    this.quoteModel = new Quote('', '', '', new Date(), 0, 0);
    this.submitType = 'Save';
    // display quote entry section.
    this.showNew = true;
  }
  onSave() {
    if (this.submitType === 'Save') {
      // Push quote model object into quote list.
      this.quotes.push(this.quoteModel);
    }
    // Hide quote entry section.
    this.showNew = false;
  }

  // This method associate to Cancel Button.
  onCancel() {
    // Hide quote entry section.
    this.showNew = false;
  }
  delete(i) {
    this.quotes.splice(i, 1);
  }

  ngOnInit() {
  }

}
