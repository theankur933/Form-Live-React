import Form_local from "./componant/Form/Form_local";
import Show_data_local from "./componant/Show_data/Show_data_local";

import { useState, useEffect } from "react";

function App() {
  const [show_cmp, setShow_cmp] = useState(false);
  useEffect(() => {
    if (localStorage.length > 0) {
      setShow_cmp(true);
    }
  }, []);

  return (
    <div className="wrapper df">
      {!show_cmp && <Form_local show_cmp={setShow_cmp} />}

      {show_cmp && <Show_data_local show_cmp={setShow_cmp} />}
    </div>
  );
}

export default App;
