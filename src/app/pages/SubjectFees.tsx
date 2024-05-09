import { useMemo, useState } from "react";
import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import { usePageDataCustom } from "../../_metronic/layout/core";
import { SubjectFee } from "../models/SubjectFee";
import DataTable, { TableColumn } from "react-data-table-component";
import { useSubjectFees } from "../hooks/useSubjectFees";

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
  const { filterText, filteredItems, setFilterText } = useSubjectFees()

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
