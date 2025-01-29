import { Component, Input } from "@angular/core";
import { Intent } from "../models/intent.model";

@Component({
  selector: 'cw-intents-summary',
  templateUrl: './intents-summary.component.html',
  styleUrl: './intents-summary.component.scss'
})
export class IntentsSummaryComponent {
  @Input()
  selectedIntents: Intent[] = [];
}