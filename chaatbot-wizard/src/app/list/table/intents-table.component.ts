import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from "@angular/core";
import { Intent } from "../../models/intent.model";
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'cw-intents-table',
    templateUrl: './intents-table.component.html',
    styleUrl: './intents-table.component.scss',
})
export class IntentsTableComponent implements OnChanges {
    @Input()
    intents: Intent[] = [];

    @Input()
    selectedIntents: Intent[] = [];

    @Input()
    maxIntents: number = 0;

    @Output()
    selectionChanged = new EventEmitter<Intent[]>();

    @Output()
    allIntentsSelectedChanged = new EventEmitter();

    tabledIntents = new MatTableDataSource<Intent>();

    displayedColumns: string[] = ['select', 'name', 'description', 'expressions'];


    ngOnChanges(changes: SimpleChanges): void {
        if (changes['intents']) {
            this.tabledIntents.data = this.intents;
        }
    }

    toggleSelection(intent: Intent): void {
        const index = this.selectedIntents.findIndex(selected => selected.id === intent.id);
        if (index > -1) {
            this.selectedIntents.splice(index, 1);
        } else {
            this.selectedIntents.push(intent);
        }
        this.selectionChanged.emit(this.selectedIntents);
    }

    toggleAllSelection(event: any): void {
        if (event.checked) {
            this.selectedIntents = [...this.intents];
            this.allIntentsSelectedChanged.emit();
        } else {
            this.selectedIntents = [];
            this.selectionChanged.emit(this.selectedIntents);
        }
    }

    isAllSelected(): boolean {
        return this.selectedIntents.length === this.maxIntents;
    }

    isSomeSelected(): boolean {
        return this.selectedIntents.length > 0 && this.selectedIntents.length < this.maxIntents;
    }

    isSelected(intent: Intent): boolean {
        return this.selectedIntents.some(selected => selected.id === intent.id);
    }
}