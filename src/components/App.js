import React, { useEffect, useState } from "react";
import "../css/App.css";
import AddAppointments from "./AddAppointment";
import ListAppointments from "./ListAppointments";
import SearchAppointments from "./SearchAppointments";
import { without, findIndex } from "lodash";

function App() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((result) => {
        let apts = result.map((each, i) => {
          each["aptId"] = i;
          return each;
        });
        setAppointments(() => apts);
      });
  }, []);

  const addAppointment = (apt) => {
    setAppointments(() => [...appointments, apt]);
  };

  const deleteAppointment = (item) => {
    setAppointments(() => without(appointments, item));
  };

  const [orderBy, setOrderBy] = useState("petName");
  const [orderDir, setOrderDir] = useState(1);
  const [searchTxt, setSearchTxt] = useState("");

  let filteredAppointments = appointments
    .sort((a, b) => {
      if (a[orderBy].toLowerCase() < b[orderBy].toLowerCase()) {
        return -1 * orderDir;
      } else {
        return 1 * orderDir;
      }
    })
    .filter((item) => {
      return item["petName"].toLowerCase().includes(searchTxt);
    });

  const updateInfo = (name, value, id) => {
    let tempApts = appointments;
    let aptIndex = findIndex(appointments, {
      aptId: id,
    });
    tempApts[aptIndex][name] = value;
    setAppointments(() => tempApts);
  };

  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <SearchAppointments
                orderBy={orderBy}
                orderDir={orderDir}
                orderByFn={setOrderBy}
                orderDirFn={setOrderDir}
                setSearchTx={setSearchTxt}
              />
              <AddAppointments addAppointment={addAppointment} />
              <ListAppointments
                appointments={filteredAppointments}
                deleteAppointment={deleteAppointment}
                updateInfo={updateInfo}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
