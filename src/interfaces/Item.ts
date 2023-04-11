export interface Item {
  id?: string;
  title: string;
  amount: number;
  date: Date;
}

export interface ExpensesInterface {
  expenses: Item[];
}

export interface dataPointInterface{
 label: string;
 value: number; 
}

export interface dataPointsInterface{
  dataPoints: dataPointInterface[]
}


