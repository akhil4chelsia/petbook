import React, { useState } from "react";

const SearchAppointments = ({
  orderBy,
  orderDir,
  orderByFn,
  orderDirFn,
  handleSearch,
  setSearchTx,
}) => {
  return (
    <div className="search-appointments row justify-content-center my-4">
      <div className="col-md-6">
        <div className="input-group">
          <input
            id="SearchApts"
            type="text"
            className="form-control"
            aria-label="Search Appointments"
            onChange={(e) => setSearchTx(e.target.value)}
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sort by: <span className="caret" />
            </button>

            <div className="sort-menu dropdown-menu dropdown-menu-right">
              <button
                onClick={() => orderByFn("petName")}
                className={
                  "sort-by dropdown-item " +
                  (orderBy === "petName" ? "active" : "")
                }
                href="#"
              >
                Pet Name
              </button>
              <button
                onClick={() => orderByFn("aptDate")}
                className={
                  "sort-by dropdown-item " +
                  (orderBy === "aptDate" ? "active" : "")
                }
                href="#"
              >
                Date
              </button>
              <button
                onClick={() => orderByFn("ownerName")}
                className={
                  "sort-by dropdown-item " +
                  (orderBy === "ownerName" ? "active" : "")
                }
                href="#"
              >
                Owner
              </button>
              <div role="separator" className="dropdown-divider" />
              <button
                onClick={() => orderDirFn(1)}
                className={
                  "sort-by dropdown-item " + (orderDir === 1 ? "active" : "")
                }
                href="#"
              >
                Asc
              </button>
              <button
                onClick={() => orderDirFn(-1)}
                className={
                  "sort-by dropdown-item " + (orderDir === -1 ? "active" : "")
                }
                href="#"
              >
                Desc
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchAppointments;
