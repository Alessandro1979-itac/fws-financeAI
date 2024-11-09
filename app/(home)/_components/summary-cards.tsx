interface SummaryCards {
  month: string;
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const SummaryCards = async ({
  balance,
  depositsTotal,
  expensesTotal,
  investmentsTotal,
}: SummaryCards) => {
  return (
    <div>
      {balance}, {depositsTotal}, {expensesTotal}, {investmentsTotal}{" "}
    </div>
  );
};

export default SummaryCards;
