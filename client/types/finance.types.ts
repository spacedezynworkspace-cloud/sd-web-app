export interface Finance {
  totalProjectValue: number;
  totalPayments: number;
  totalExpenses: number;
  outstanding: number;
  netCashFlow: number;
}

export interface FinanceLineChart {
  year: number;
  months: string[];
  payments: number[];
  expenses: number[];
}
