import React, { useState } from 'react';
import '../scss/menu.scss';
import '../scss/top.scss';
import '../scss/introduction.scss';
import '../scss/examples.scss';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function HomePage() {
  const [menuState, setMenuState] = useState("");

  return (
    <div>
      <Menu state={menuState} setState={setMenuState}></Menu>
      <Header setMenuState={setMenuState}/>

      <section className="introduction">
        <div className="container">
          <h2 id="start">Sports For Everybody</h2>
          <h3>Спортивний інвентар</h3>
          <h3>Доступний для кожного</h3>
        </div>
      </section>

      <section className="top">
        <div className="img-form"></div>

        <div className="container">
          <h2 id="top-sales">Хіти продажу</h2>

          <div className="top__products">
            <div className="top__card">
              <div className="top__image">
                <a href={require("../assets/top/barbells.jpg")} target="_blank">
                  <img src={require("../assets/top/barbells.jpg")} alt="barbell"></img>
                </a>
              </div>

              <h4>Гантелі розбірні</h4>
              <p>Дві розбірні гантелі вагою по 18.5 кілограм кожна </p>
              <h3 className="top__price">3499₴</h3>
            </div>

            <div className="top__card">
              <div className="top__image">
                <a href={require("../assets/top/bench.png")} target="_blank">
                  <img src={require("../assets/top/bench.png")} alt="bench"></img>
                </a>
              </div>

              <h4>Лавка для жиму</h4>
              <p>Лавка для жиму з можливістю регулювання кута нахилу спинки. Навантаження до 300кг</p>
              <h3 className="top__price">2999₴</h3>
            </div>

            <div className="top__card">
              <div className="top__image">
                <a href={require("../assets/top/sneakers.jpeg")} target="_blank">
                  <img src={require("../assets/top/sneakers.jpeg")} alt="sneakers"></img>
                </a>
              </div>

              <h4>Кросівки спортивні</h4>
              <p>Гнучкі кросівки для занять спортом </p>
              <h3 className="top__price">1499₴</h3>
            </div>

            <div className="top__card">
              <div className="top__image">
                <a href={require("../assets/top/bar.jpg")} target="_blank">
                  <img src={require("../assets/top/bar.jpg")} alt="bar"></img>
                </a>
              </div>

              <h4>Гриф для штанги</h4>
              <p>Прямий гриф для штанги. Довжина - 1.8 метри</p>
              <h3 className="top__price">1700₴</h3>
            </div>

            <div className="top__card">
              <div className="top__image">
                <a href={require("../assets/top/disks.jpeg")} target="_blank">
                  <img src={require("../assets/top/disks.jpeg")} alt="disks"></img>
                </a>
              </div>

              <h4>Диски для штанги</h4>
              <p>Комплект дисків для штанги або гантелі: 2x1.25кг, 2x2.5кг, 2x5кг, 2x10кг, 2x15кг (67.5кг)</p>
              <h3 className="top__price">3149₴</h3>
            </div>

            <div className="top__card">
              <div className="top__image">
                <a href={require("../assets/top/sport-costume.png")} target="_blank">
                  <img src={require("../assets/top/sport-costume.png")} alt="costume"></img>
                </a>
              </div>

              <h4>Спортивний костюм</h4>
              <p>Опис товару. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
              <h3 className="top__price">990₴</h3>
            </div>
          </div>

          <Link to="/shop" className="top__link">
            <button>Більше товарів</button>
          </Link>
        </div>

        <div className="img-form"></div>
      </section>

      <section className="examples examples_1">
        <div className="examples__bg-image">
          <img src={require("../assets/triangle.png")} alt="triangle"></img>
        </div>

        <div className="container">
          <h2 id="images">Для фітнесу</h2>
          
          <div className="examples__images">
            <a href={require("../assets/examples/run.png")} target="_blank"><img src={require("../assets/examples/run.png")} alt="racetrack"></img></a>
            <a href={require("../assets/examples/carpet.png")} target="_blank"><img src={require("../assets/examples/carpet.png")} alt="carpet"></img></a>
            <a href={require("../assets/examples/1.jpg")} target="_blank"><img src={require("../assets/examples/1.jpg")} alt="rubber"></img></a>
            <a href={require("../assets/examples/sneakers.jpeg")} target="_blank"><img src={require("../assets/examples/sneakers.jpeg")} alt="sneakers"></img></a>
          </div>
        </div>   

        <div className="examples__bg-image">
          <img src={require("../assets/triangle.png")} alt="triangle"></img>
        </div>
      </section>

      <section className="examples examples_2">
        <div className="examples__bg-image">
          <img src={require("../assets/triangle.png")} alt="triangle"></img>
        </div>
        
        <div className="container">
          <h2>Для важкої атлетики</h2>
          
          <div className="examples__images">
            <a href={require("../assets/examples/bar.jpg")} target="_blank"><img src={require("../assets/examples/bar.jpg")} alt="bar"></img></a>
            <a href={require("../assets/examples/barbells.jpg")} target="_blank"><img src={require("../assets/examples/barbells.jpg")} alt="barbells"></img></a>
            <a href={require("../assets/examples/disks.png")} target="_blank"><img src={require("../assets/examples/disks.png")} alt="disks"></img></a>
            <a href={require("../assets/examples/bench.png")} target="_blank"><img src={require("../assets/examples/bench.png")} alt="bench"></img></a>
          </div>
        </div>

        <div className="examples__bg-image">
          <img src={require("../assets/triangle.png")} alt="triangle"></img>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default HomePage;