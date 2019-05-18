import {Component, OnInit, ViewChild} from '@angular/core';
import {ContentfulService} from '../contentful.service';
import {ArchivedDocuments} from './archiv.model';
import {MatPaginator, MatRadioChange, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-archiv',
  templateUrl: './archiv.component.html',
  styleUrls: ['./archiv.component.css']
})
export class ArchivComponent implements OnInit {
  displayedColumns: string[] = ['date', 'name', 'url'];
  dataSource = new MatTableDataSource<ArchivedDocuments>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isRadioButtonAllSelected: true;


  constructor(private contentfulService: ContentfulService) {
  }

  ngOnInit() {
    this.contentfulService.getArchivedDocuments().then(res => {
      this.dataSource.data = res;
    });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /*applyFilter(filterValue: string) {
    this.isRadioButtonAllSelected = true;
    this.filterDataSourceWith(filterValue.trim().toLowerCase());
  }*/

  radioChange(event: MatRadioChange) {
    this.filterDataSourceWith(event.value);
  }

  private filterDataSourceWith(filter: string) {
    console.log('filter with ' + filter);
    this.dataSource.filter = filter;
  }
}
