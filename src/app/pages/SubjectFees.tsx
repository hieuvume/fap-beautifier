import { useMemo, useState } from "react";
import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import { usePageDataCustom } from "../../_metronic/layout/core";
import { SubjectFee } from "../models/SubjectFee";
import DataTable, { TableColumn } from "react-data-table-component";

const columns: TableColumn<SubjectFee>[] = [
  {
    name: "Subject Code",
    cell: (row: SubjectFee) => (
      <span className="fw-bold text-primary">{row.subjectCode}</span>
    ),
  },
  {
    name: "Subject Name",
    cell: (row: SubjectFee) => (
      <span className="fw-semibold">{row.subjectName}</span>
    ),
  },
  {
    name: "Number Credits",
    cell: (row: SubjectFee) => (
      <span className="fw-semibold">{row.numberCredits} credits</span>
    ),
  },
  {
    name: "Fee",
    cell: (row: SubjectFee) => <span className="fw-semibold">{row.fee}</span>,
  },
  {
    name: "Fee International",
    cell: (row: SubjectFee) => (
      <span className="fw-semibold">{row.feeInternational}</span>
    ),
  },
];

const SubjectFees = () => {
  const [filterText, setFilterText] = useState("");

  const { fees } = usePageDataCustom({
    fees: (original) => {
      if (!original) return [];
      const table = original?.querySelector(
        "#ctl00_mainContent_gvSubjects"
      ) as HTMLTableElement;
      const rows = table?.querySelectorAll("tr");
      const fees: SubjectFee[] = [];
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const cells = row.querySelectorAll("td");
        fees.push({
          subjectCode: cells[0].textContent?.trim() || "",
          subjectName: cells[1].textContent?.trim() || "",
          numberCredits: cells[2].textContent?.trim() || "",
          fee: cells[3].textContent?.trim() || "",
          feeInternational: cells[4].textContent?.trim() || "",
        });
      }
      return fees;
    },
  });
  const filteredItems = fees.filter(
    (item) =>
      (item.subjectCode &&
        item.subjectCode.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.subjectName &&
        item.subjectName.toLowerCase().includes(filterText.toLowerCase()))
  );

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div className="col-12 col-md-4 col-xl-3">
        <input
          className="form-control"
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Search"
          value={filterText}
        />
      </div>
    );
  }, [filterText]);

  return (
    <>
      <Toolbar title="Tuition fee per course" breadcrum="Subject fees" />
      <div className="app-content flex-column-fluid">
        <div className="app-container container-fluid">
          <div className="card">
            <div className="card-body">
              <DataTable
                columns={columns}
                data={filteredItems}
                defaultSortAsc={false}
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                customStyles={{
                  headCells: {
                    style: {
                      fontSize: "14px",
                      fontWeight: "550",
                    },
                  },
                  subHeader: {
                    style: {
                      paddingLeft: '0px'
                    }
                  }
                }}
                paginationRowsPerPageOptions={[10, 20, 50, 100, 500, 1000]}
                pagination
              ></DataTable>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectFees;
