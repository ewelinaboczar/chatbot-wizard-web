import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Intent } from "../models/intent.model";
import { PageEvent } from '@angular/material/paginator';
import { IntentService } from "../core/services/intent.service";

@Component({
  selector: 'cw-intents-list',
  templateUrl: './intents-list.component.html',
  styleUrl: './intents-list.component.scss'
})
export class IntentsListComponent {
  @Input()
  selectedIntents: Intent[] = [];

  @Output()
  onIntendsSelectedChange = new EventEmitter<Intent[]>();

  intents: Intent[] = [];

  pagedIntents: Intent[] = [];

  currentPage: number = 0;

  pageSize: number = 4

  pageSizeOptions: number[] = [4, 8, 10, 20];

  maxIntents: number = 0;

  constructor(private intentService: IntentService) {
    this.intentService.getIntents().subscribe(data => {
      this.intents = data;
      this.maxIntents = this.intents.length;
      this.prepareIntents();
    })
   }

  ngOnInit(): void {
    
  }

  onSelectionChange(newSelectedIntents: Intent[]): void {
    this.selectedIntents = newSelectedIntents;
    this.onIntendsSelectedChange.emit(this.selectedIntents);
  }

  onAllIntentsSelectedChanged(): void {
    this.selectedIntents = this.intents;
    this.onIntendsSelectedChange.emit(this.selectedIntents);
  }

  handlePageEvent(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.prepareIntents();
  }

  private prepareIntents(): void {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.pagedIntents = [...this.intents.slice(start, end)];
  }
}