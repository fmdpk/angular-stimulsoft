import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var Stimulsoft: any;
import { isPlatformBrowser } from '@angular/common';

export const TableData = [
  {
    shamsiTodayDate: '1403/12/12',
    actDateFrom: '1403/12/03',
    actDateTo: null,
    accCode: null,
    accCodeTitle: null,
    zoneCode: null,
    actBranchCode: 0,
    actBranchTitle: null,
    foyDemoDetails: [
      {
        sort: 1,
        zoneCode: 1,
        actBranchCode: 18,
        actBranchTitle: 'تیمچه رضوی 18',
        accCode: '66',
        accCodeTitle: 'مبادلات ریالی',
        foyRowTypeCatCode: 'نقل از قبل',
        actDate: '2025-01-23T00:00:00',
        actDateStr: 'نقل از قبل',
        debt: 0,
        crdt: 12904948808941,
      },
      {
        sort: 1,
        zoneCode: 1,
        actBranchCode: 18,
        actBranchTitle: 'تیمچه رضوی 18',
        accCode: '77',
        accCodeTitle: 'سپهر ریالی ',
        foyRowTypeCatCode: 'نقل از قبل',
        actDate: '2025-01-23T00:00:00',
        actDateStr: 'نقل از قبل',
        debt: 0,
        crdt: 335942189238,
      },
      {
        sort: 1,
        zoneCode: 1,
        actBranchCode: 18,
        actBranchTitle: 'تیمچه رضوی 18',
        accCode: '78',
        accCodeTitle: 'سپهر ارزی ',
        foyRowTypeCatCode: 'نقل از قبل',
        actDate: '2025-01-23T00:00:00',
        actDateStr: 'نقل از قبل',
        debt: 80289343331064,
        crdt: 0,
      },
      {
        sort: 1,
        zoneCode: 1,
        actBranchCode: 18,
        actBranchTitle: 'تیمچه رضوی 18',
        accCode: '88',
        accCodeTitle: 'مبادلات ارزی',
        foyRowTypeCatCode: 'نقل از قبل',
        actDate: '2025-01-23T00:00:00',
        actDateStr: 'نقل از قبل',
        debt: 0,
        crdt: 57891946804,
      },
      {
        sort: 1,
        zoneCode: 1,
        actBranchCode: 108,
        actBranchTitle: 'مراغه 108',
        accCode: '66',
        accCodeTitle: 'مبادلات ریالی',
        foyRowTypeCatCode: 'نقل از قبل',
        actDate: '2025-01-23T00:00:00',
        actDateStr: 'نقل از قبل',
        debt: 62539190891,
        crdt: 0,
      },
    ],
  },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  viewerOptions: any;
  viewer: any;
  isBrowser: boolean = false;
  // data = {
  //   situationDemoDetails: [
  //     {
  //       id: 1,
  //       name: 'John Doe',
  //       age: 30,
  //       email: 'john.doe@example.com',
  //     },
  //     {
  //       id: 2,
  //       name: 'Jane Smith',
  //       age: 25,
  //       email: 'jane.smith@example.com',
  //     },
  //     {
  //       id: 3,
  //       name: 'Sam Brown',
  //       age: 22,
  //       email: 'sam.brown@example.com',
  //     },
  //   ],
  // };

  data = TableData;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // this.viewerOptions = {
    //   appearance: {
    //     themeName: 'Office2013LightGray',
    //   },
    //   toolbar: true,
    //   fullScreenMode: false,
    // };

    if (this.isBrowser) {
      const report = new Stimulsoft.Report.StiReport();
      report.loadFile('./../assets/reports/report.mrt');

      // this.http
      //   .get('./../assets/data/sample-data.json')
      //   .subscribe((data: any) => {

      //   });
      setTimeout(() => {
        // console.log(data);
        // const header = data.situationDemoDetails[0];
        // const report = new Stimulsoft.Report.StiReport();
        // this.viewer = new Stimulsoft.Viewer.StiViewer(null, 'StiViewer', false);
        // report.dictionary.databases.clear();
        // const dataSetHeader = new Stimulsoft.System.Data.DataSet();
        // const dataSetBody = new Stimulsoft.System.Data.DataSet('UserData');
        // dataSetHeader.readJson(header);
        // dataSetBody.readJson(data.situationDemoDetails);
        // report.regData(dataSetBody, '', dataSetBody);
        // report.regData(dataSetHeader, '', dataSetHeader);
        // this.viewer.renderHtml('viewer');
        // this.viewer.report = report;
      }, 2000);

      const header = TableData[0];
      this.viewer = new Stimulsoft.Viewer.StiViewer(null, 'StiViewer', false);
      report.dictionary.databases.clear();
      const dataSetHeader = new Stimulsoft.System.Data.DataSet('root1');
      const dataSetBody = new Stimulsoft.System.Data.DataSet(
        'root_foyDemoDetails'
      );
      dataSetHeader.readJson(header);
      dataSetBody.readJson(TableData);
      report.regData(dataSetBody, '', dataSetBody);
      report.regData(dataSetHeader, '', dataSetHeader);
      this.viewer.renderHtml('viewer');
      console.log(report);

      this.viewer.report = report;
    }
  }
}
