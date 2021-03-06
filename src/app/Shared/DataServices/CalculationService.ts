import { Injectable, OnDestroy }                from '@angular/core';
import { Subject, Observable }                  from 'rxjs/RX';
import { IMockData }                            from '../../Model/IMockData.Model';
import { MockData }                             from '../../SeedData/MockData';

@Injectable()
export class CalculationService  implements OnDestroy {
  constructor() { }
  getCalculatedMockData(): Observable<IMockData[]> {
    const subjectMockData = new Subject<IMockData[]>();
    // Add the five second interval
    setTimeout(() => {
                        subjectMockData.next(MockData);
                        subjectMockData.complete();
                     }, 5000);
    return subjectMockData;
  }

  ngOnDestroy() {
    console.log('Service destroy');
  }
}
