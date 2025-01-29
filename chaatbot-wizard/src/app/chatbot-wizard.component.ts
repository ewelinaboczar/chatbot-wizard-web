import { Component } from '@angular/core';
import { Intent } from './models/intent.model';

@Component({
    selector: 'cw-chatbot-wizard',
    templateUrl: './chatbot-wizard.component.html',
    styleUrl: './chatbot-wizard.component.scss'
})
export class ChatbotWizardComponent {
    selectedIntents: Intent[] = [];

    activeStep: number = 2;

    setActiveStep(step: number): void {
        this.activeStep = step;
    }

    onContinue(): void {
        this.activeStep++;
    }

    onBack(): void {
        this.activeStep--;
    }

    onIntendsSelectedChange(selectedItems: Intent[]): void {
        this.selectedIntents = selectedItems;
    }
}

