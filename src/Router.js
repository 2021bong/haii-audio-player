import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import RecordMain from './pages/record/RecordMain';
import AudioPlayer from './pages/audio/AudioPlayer';
import { ThemeProvider } from 'styled-components';
import * as Theme from './styles/Theme';

const Router = (props) => {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/audio' element={<AudioPlayer />} />
          <Route path='/record' element={<RecordMain />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
