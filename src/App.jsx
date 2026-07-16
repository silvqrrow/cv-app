import { useState } from 'react';
import GeneralInfo from './components/general-info';


function App() {
  const [generalInfo, setGeneralInfo] = useState(null);

  return (
    <div>
      <GeneralInfo onSubmitInfo={setGeneralInfo} />

      <div>
         {/* General Section */}
        {generalInfo && (
          <>
            <p>{generalInfo.fullName}</p>
            <p>{generalInfo.email}</p>
            <p>{generalInfo.phoneNumber}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App
