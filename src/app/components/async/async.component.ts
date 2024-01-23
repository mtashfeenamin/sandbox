import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type ITestType = { name: string, age: number }

@Component({
  selector: 'tash-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.less']
})
export class AsyncComponent {
  public sub$: BehaviorSubject<ITestType[]> = new BehaviorSubject<ITestType[]>([]);

  ngOnInit(): void {
    this.sub$.next([
      {
        name: 'hi',
        age: 2
      },
      {
        name: 'hi',
        age: 2
      },
      {
        name: 'hi',
        age: 2
      },
    ])
  }

  mutate(): void {
    this.sub$.subscribe((changes) => {
      changes.forEach((change) => change.name = change.name + '-testing');
    })
  }

}
