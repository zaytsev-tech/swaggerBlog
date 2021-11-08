import { BoardPlace } from './components/board';
import { StorProvider } from './components/providers/index';
import { LoginForm } from './components/user/index';
import { GlobalStyle } from './styles/index';

function App() {
  return (
    <div className="App">
      <StorProvider>
        <LoginForm />
        <BoardPlace />
      </StorProvider>
      <GlobalStyle />
    </div>
  );
}
export default App;
