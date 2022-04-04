import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  searchTerm: string;

  @Output()
  search: EventEmitter<string> = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchTerm: '',
    });

    this.searchForm.get('searchTerm').valueChanges.subscribe((val) => {
      this.searchTerm = val;
    });
  }

  onSearch() {
    this.search.emit(this.searchTerm);
  }
}
