import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>git에 레파지토리 만들기</p>
      <br/>
      <p>git init</p>
      <p>git add README.md</p>
      <p>git commit -m "first commit"</p>
      <p>git branch -M main</p>
      <p>git remote add origin https://github.com/minzlzl/레파지토리명.git</p>
      <p>git push -u origin main</p>
      <br/>
      <p>settings가서 pages클릭 후 Branch main 선택하고 저장</p>
      <br/>
      <p>터미널창에 npm i gh-pages</p>
      <p>package.json파일 scripts부분에 "predeploy": "npm run build", "deploy": "gh-pages -d build"</p>
      <p>package.json파일 최상단에 "homepage": "https://minzlzl.github.io/레파지토리명"</p>
      <p>npm run predeploy</p>
      <p>npm run deploy</p>
      <br/>
      <p>settings가서 pages클릭 후 Branch gh-pages 선택하고 저장</p>
      <br/>
      <p>*연결 후 파일 추가로 올릴때*</p>
      <p>git add .</p>
      <p>git commit -m "커밋 내용"</p>
      <p>git push -u origin main</p>
    </div>
  );
}

export default App;
