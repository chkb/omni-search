import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
export interface OmniSearchConfig {
  id: string;
  values: Observable<string[]>;
  type: string;
  displayText: string;
  multiSelect: boolean;
  selected: boolean;
  selectedValues: string[];
}

@Component({
  selector: 'lib-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  myControl = new FormControl();
  time = new FormControl();
  filteredOptions: Observable<string[]>;
  ports: Observable<string[]>;
  operators: Observable<string[]>;
  daterange: Observable<string[]>;
  availableOptions: OmniSearchConfig[] = [];
  config: OmniSearchConfig[] = [
    {
      type: 'autocomplete',
      id: 'ports',
      displayText: 'Port',
      multiSelect: false,
      values: of(['ESALR', 'DEBRV', 'SINGP']),
      selected: false,
      selectedValues: []
    },
    {
      type: 'autocomplete',
      id: 'daterange',
      displayText: 'Date Range',
      multiSelect: false,
      values: of(['Next week', 'Next 2 weeks', 'Next 3 weeks', 'Next 4 weeks', 'Next 5 weeks']),
      selected: false,
      selectedValues: []
    },
    {
      type: 'autocomplete',
      id: 'operators',
      displayText: 'Operators',
      multiSelect: true,
      values: of(['MSK', 'SGL', 'MCC']),
      selected: false,
      selectedValues: []
    }
  ];

  ngOnInit() {
    this.setAvailableOptions();
  }

  setSubOption(configOption: OmniSearchConfig, selectedOption): void {
    this.config.map(option => {
      if (option.id === configOption.id) {
        if (configOption.multiSelect && selectedOption) {
          option.selectedValues.push(selectedOption);
        } else {
          option.selectedValues = selectedOption ? [selectedOption] : [];
        }
      }
    });
  }

  selectOption(option): void {
    this.config.map(configOption => configOption.id === option.id ? configOption.selected = true : null);
    this.setAvailableOptions();
  }

  remove(option): void {
    this.config.map(configOption => configOption.id === option.id ? configOption.selected = false : null);
    this.setSubOption(option, null);
    this.setAvailableOptions();
  }
  setAvailableOptions(): void {
    this.availableOptions = this.config.filter(option => !option.selected);
  }
}
