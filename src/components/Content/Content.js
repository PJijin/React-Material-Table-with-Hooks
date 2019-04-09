import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";

export default function Content() {
  const [data, setData] = useState([
    { name: "John", email: "info@dz.com", gender: "Male" }
  ]);

  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/b/5cac473385438b0272f29964")
      .then(res => res.data)
      .then(res => setData(res));
  });

  return (
    <div>
      <MaterialTable
        columns={[
          { title: "Name", field: "first_name" },
          { title: "Email", field: "email" },
          { title: "Gender", field: "gender" }
        ]}
        data={data}
        title="Users Data"
      />
    </div>
  );
}
