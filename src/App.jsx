// import logo from './logo.svg';
import './App.scss';
import Item from './components/item/Item';
import NewLine from './components/newLine/NewLine';
import Title from './components/title/Title';
import WhatsNext from './components/whatsNext/WhatsNext';

const App = () => {
  return (


    <div className="App">
      <div className="inner">
        <div className="wrapper">

          <div className="nth1">

            {/* заголовок */}
            <Title
              h1Title="Java Script"
              h2Title="Программа  Redev"
            />
          </div>

          {/* первая линия */}
          <Item
            link="https://learn.javascript.ru/variables"
            spanText="старт"
          />
          <Item
            link="https://learn.javascript.ru/variables"
            spanText="1"
            title="переменные"
          />
          <Item
            link="https://learn.javascript.ru/variables"
            spanText="2"
            title="операторы"
          />
          <Item
            link="https://learn.javascript.ru/variables"
            spanText="3"
            title="типы данных"
          />
          <Item
            link="https://learn.javascript.ru/variables"
            spanText="4"
            title="операторы сравнения"
          />
          <Item
            link="https://learn.javascript.ru/variables"
            spanText="5"
            title="условные операторы"
          />

          {/* переход на вторую линию */}
          <div className="nth2">
            <NewLine />
          </div>

          {/* переход на третью литнию */}
          <div className="nth3">
            <NewLine
              style={{ transform: 'scale(-1, 1)' }} />
          </div>

          {/* второая линия //// заполнять в обратном порядке */}
          <Item
            link="https://learn.javascript.ru/variables"
            spanText="13"
            title="Переменные"
            style={{ transform: 'scale(-1, 1)', backgroundColor: '#E8D630' }}
            style1={{ backgroundColor: '#E8D630' }}
          />
          <Item
            link="https://learn.javascript.ru/variables"
            spanText="12"
            title="Переменные"
            style={{ transform: 'scale(-1, 1)' }}
          />
          <Item
            link="https://learn.javascript.ru/variables"
            spanText="11"
            title="Переменные"
            style={{ transform: 'scale(-1, 1)' }}
          />
          <Item
            link="https://learn.javascript.ru/variables"
            spanText="10"
            title="Переменные"
            style={{ transform: 'scale(-1, 1)' }}
          />
          <Item
            link="https://learn.javascript.ru/variables"
            spanText="9"
            title="Переменные"
            style={{ transform: 'scale(-1, 1)' }}
          />
          <Item
            link="https://learn.javascript.ru/variables"
            spanText="8"
            title="Переменные"
            style={{ transform: 'scale(-1, 1)' }}
          />
          <Item
            link="https://learn.javascript.ru/variables"
            spanText="7"
            title="Переменные"
            style={{ transform: 'scale(-1, 1)' }}
          />
          <Item
            link="https://learn.javascript.ru/variables"
            spanText="6"
            title="Переменные"
            style={{ transform: 'scale(-1, 1)' }}
          />
          


          {/* что дальше */}
          <div className="nth4">
            <WhatsNext
            text = "дaлее"
            spanText = "...REACT или NODE.JS или REACT NATIVE"
            />
          </div>









        </div>
      </div>
    </div>
  );
}

export default App;
