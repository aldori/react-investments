import { useEffect, useState } from "react";
import Header from "../components/Header";
import Investiments from "../components/Investments";
import Main from "../components/Main";
import {
  getAllDataInvestments,
  getAllDataReports,
} from "../services/apiService";

export default function Home() {
  const [investments, setInvestments] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    setInvestments(getAllDataInvestments());
    setReports(getAllDataReports());
  }, []);

  function getReportsById(investmentId) {
    const groupReports = reports.filter(
      (investiment) => investmentId === investiment.investmentId
    );
    return groupReports.sort((a, b) => a.month - b.month);
  }

  return (
    <>
      <Header>React Investments v1.0.0</Header>
      <Main>
        {investments.map((investiment) => {
          return (
            <Investiments
              description={investiment.description}
              key={investiment.id}
              reports={getReportsById(investiment.id)}
            />
          );
        })}
      </Main>
    </>
  );
}
