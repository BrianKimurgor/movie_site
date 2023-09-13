import { FunctionComponent } from "react";

const HomepageDesktop: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[2845px] overflow-hidden text-left text-xs text-gray-900 font-dm-sans">
      <section className="absolute top-[0px] left-[0px] w-[1440px] h-[600px] text-left text-base text-white font-dm-sans">
        <img
          className="absolute top-[0px] left-[0px] w-[1440px] h-[600px] object-cover"
          alt=""
          src="/undefined.png"
        />
        <div className="absolute top-[0px] left-[0px] w-[1440px] h-20">
          <div className="absolute top-[0px] left-[0px] w-[1440px] h-20" />
          <input
            className="font-dm-sans text-base bg-[transparent] absolute top-[20px] left-[491px] rounded-md box-border w-[529px] flex flex-row py-1.5 px-2.5 items-center justify-between border-[2px] border-solid border-gray-300"
            placeholder="What do you want to watch?"
            type="text"
          />
          <div className="absolute top-[22px] left-[1228px] flex flex-row items-center justify-start gap-[27px]">
            <b className="relative leading-[24px]">Sign in</b>
            <img
              className="relative w-9 h-9 object-cover"
              alt=""
              src="/undefined1.png"
            />
          </div>
          <div className="absolute top-[15px] left-[95px] flex flex-row items-center justify-start gap-[24px] text-5xl">
            <img
              className="relative w-[50px] h-[50px] object-cover"
              alt=""
              src="/undefined2.png"
            />
            <b className="relative leading-[24px]">MovieBox</b>
          </div>
        </div>
        <div className="absolute top-[158px] left-[98px] flex flex-col items-start justify-start gap-[16px] text-[48px]">
          <b className="relative leading-[56px] inline-block w-[404px]">
            John Wick 3 : Parabellum
          </b>
          <div className="relative w-[184px] h-[17px] text-xs">
            <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[10px]">
              <img
                className="relative w-[35px] h-[17px] object-cover"
                alt=""
                src="/undefined3.png"
              />
              <div className="relative leading-[12px]">86.0 / 100</div>
            </div>
            <div className="absolute top-[0px] left-[135px] flex flex-row items-center justify-start gap-[10px]">
              <img
                className="relative w-4 h-[17px] object-cover"
                alt=""
                src="/undefined4.png"
              />
              <div className="relative leading-[12px]">97%</div>
            </div>
          </div>
          <div className="relative text-sm leading-[18px] font-medium inline-block w-[302px]">
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </div>
          <button
            className="cursor-pointer [border:none] py-1.5 px-4 bg-rose-700 rounded-md flex flex-row items-center justify-start gap-[8px]"
            autoFocus={true}
            
          >
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/undefined5.png"
            />
            <b className="relative text-sm leading-[24px] uppercase font-dm-sans text-white text-left">
              Watch trailer
            </b>
          </button>
        </div>
        <div className="absolute top-[245px] left-[1380px] w-9 h-[110px] text-xs text-gray-400">
          <div className="absolute top-[0px] left-[26px] flex flex-col items-center justify-start gap-[10px]">
            <b className="relative leading-[14px]">1</b>
            <b className="relative leading-[14px]">2</b>
            <b className="relative text-base leading-[14px] text-white">3</b>
            <b className="relative leading-[14px]">4</b>
            <b className="relative leading-[14px]">5</b>
          </div>
          <div className="absolute top-[53px] left-[0px] rounded-md bg-white w-5 h-[3px]" />
        </div>
      </section>
      <div className="absolute top-[670px] left-[34px] w-[1308px] h-[604px] text-[36px] text-black">
        <div className="absolute top-[0px] left-[64px] w-[1244px] flex flex-row items-center justify-between">
          <b className="relative">Featured Movie</b>
          <div className="flex flex-row items-center justify-start gap-[8px] text-lg text-rose-700">
            <div className="relative leading-[24px]">See more</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/undefined6.png"
            />
          </div>
        </div>
        <div className="absolute top-[91px] left-[64px] flex flex-row items-start justify-start gap-[80px] text-xs text-gray-900">
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <div className="relative w-[250px] h-[370px]">
              <img
                className="absolute top-[0px] left-[0px] w-[250px] h-[370px] object-cover"
                alt=""
                src="/undefined7.png"
              />
              <div className="absolute top-[15.58px] left-[16px] w-[218px] h-[29.21px]">
                <div className="absolute top-[3.61px] left-[0px] rounded-xl bg-whitesmoke [backdrop-filter:blur(2px)] flex flex-row py-[3px] px-2 items-start justify-start">
                  <b className="relative">TV SERIES</b>
                </div>
                <img
                  className="absolute top-[0px] left-[188px] w-[30px] h-[29.21px] object-cover"
                  alt=""
                  src="/undefined8.png"
                />
              </div>
            </div>
            <b className="relative text-gray-400">USA, 2016 - Current</b>
            <b className="relative text-lg inline-block w-[250px]">
              Stranger Things
            </b>
            <div className="w-[250px] flex flex-row items-start justify-between">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[35px] h-[17px] object-cover"
                  alt=""
                  src="/undefined3.png"
                />
                <div className="relative leading-[12px]">86.0 / 100</div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-4 h-[17px] object-cover"
                  alt=""
                  src="/undefined4.png"
                />
                <div className="relative leading-[12px]">97%</div>
              </div>
            </div>
            <b className="relative text-gray-400">Action, Adventure, Horror</b>
          </div>
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <div className="relative w-[250px] h-[370px]">
              <img
                className="absolute top-[0px] left-[0px] w-[250px] h-[370px] object-cover"
                alt=""
                src="/undefined9.png"
              />
              <div className="absolute top-[15.58px] left-[16px] w-[218px] h-[29.21px]">
                <div className="absolute top-[3.61px] left-[0px] rounded-xl bg-whitesmoke [backdrop-filter:blur(2px)] hidden flex-row py-[3px] px-2 items-start justify-start">
                  <b className="relative">TV SERIES</b>
                </div>
                <img
                  className="absolute top-[0px] left-[188px] w-[30px] h-[29.21px] object-cover"
                  alt=""
                  src="/undefined10.png"
                />
              </div>
            </div>
            <b className="relative text-gray-400">USA, 2005</b>
            <b className="relative text-lg inline-block w-[250px]">
              Batman Begins
            </b>
            <div className="w-[250px] flex flex-row items-start justify-between">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[35px] h-[17px] object-cover"
                  alt=""
                  src="/undefined3.png"
                />
                <div className="relative leading-[12px]">82.0 / 100</div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-4 h-[17px] object-cover"
                  alt=""
                  src="/undefined4.png"
                />
                <div className="relative leading-[12px]">70%</div>
              </div>
            </div>
            <b className="relative text-gray-400">Action, Adventure</b>
          </div>
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <div className="relative w-[250px] h-[370px]">
              <img
                className="absolute top-[0px] left-[0px] w-[250px] h-[370px] object-cover"
                alt=""
                src="/undefined11.png"
              />
              <div className="absolute top-[15.58px] left-[16px] w-[218px] h-[29.21px]">
                <div className="absolute top-[3.61px] left-[0px] rounded-xl bg-whitesmoke [backdrop-filter:blur(2px)] hidden flex-row py-[3px] px-2 items-start justify-start">
                  <b className="relative">TV SERIES</b>
                </div>
                <img
                  className="absolute top-[0px] left-[188px] w-[30px] h-[29.21px] object-cover"
                  alt=""
                  src="/undefined12.png"
                />
              </div>
            </div>
            <b className="relative text-gray-400">USA, 2018</b>
            <b className="relative text-lg inline-block w-[250px]">
              Spider-Man : Into The Spider Verse
            </b>
            <div className="w-[250px] flex flex-row items-start justify-between">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[35px] h-[17px] object-cover"
                  alt=""
                  src="/undefined3.png"
                />
                <div className="relative leading-[12px]">84.0 / 100</div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-4 h-[17px] object-cover"
                  alt=""
                  src="/undefined4.png"
                />
                <div className="relative leading-[12px]">87%</div>
              </div>
            </div>
            <b className="relative text-gray-400">
              Animation, Action, Adventure
            </b>
          </div>
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <div className="relative w-[250px] h-[370px]">
              <img
                className="absolute top-[0px] left-[0px] w-[250px] h-[370px] object-cover"
                alt=""
                src="/undefined13.png"
              />
              <div className="absolute top-[15.58px] left-[16px] w-[218px] h-[29.21px]">
                <div className="absolute top-[3.61px] left-[0px] rounded-xl bg-whitesmoke [backdrop-filter:blur(2px)] hidden flex-row py-[3px] px-2 items-start justify-start">
                  <b className="relative">TV SERIES</b>
                </div>
                <img
                  className="absolute top-[0px] left-[188px] w-[30px] h-[29.21px] object-cover"
                  alt=""
                  src="/undefined14.png"
                />
              </div>
            </div>
            <b className="relative text-gray-400">USA, 2017</b>
            <b className="relative text-lg inline-block w-[250px]">Dunkirk</b>
            <div className="w-[250px] flex flex-row items-start justify-between">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[35px] h-[17px] object-cover"
                  alt=""
                  src="/undefined3.png"
                />
                <div className="relative leading-[12px]">78.0 / 100</div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-4 h-[17px] object-cover"
                  alt=""
                  src="/undefined4.png"
                />
                <div className="relative leading-[12px]">94%</div>
              </div>
            </div>
            <b className="relative text-gray-400">Action, Drama, History</b>
          </div>
        </div>
        <img
          className="absolute top-[252px] left-[0px] w-12 h-12 overflow-hidden object-cover"
          alt=""
          src="/undefined15.png"
        />
      </div>
      <div className="absolute top-[1377px] left-[34px] w-[1306px] h-[513px]">
        <div className="absolute top-[0px] left-[66px] flex flex-row items-start justify-start gap-[80px]">
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <div className="relative w-[250px] h-[370px]">
              <img
                className="absolute top-[0px] left-[0px] w-[250px] h-[370px] object-cover"
                alt=""
                src="/undefined16.png"
              />
              <div className="absolute top-[15.58px] left-[16px] w-[218px] h-[29.21px]">
                <div className="absolute top-[3.61px] left-[0px] rounded-xl bg-whitesmoke [backdrop-filter:blur(2px)] hidden flex-row py-[3px] px-2 items-start justify-start">
                  <b className="relative">TV SERIES</b>
                </div>
                <img
                  className="absolute top-[0px] left-[188px] w-[30px] h-[29.21px] object-cover"
                  alt=""
                  src="/undefined17.png"
                />
              </div>
            </div>
            <b className="relative text-gray-400">USA, 2021</b>
            <b className="relative text-lg inline-block w-[250px]">Dune</b>
            <div className="w-[250px] flex flex-row items-start justify-between">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[35px] h-[17px] object-cover"
                  alt=""
                  src="/undefined3.png"
                />
                <div className="relative leading-[12px]">84.0 / 100</div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-4 h-[17px] object-cover"
                  alt=""
                  src="/undefined4.png"
                />
                <div className="relative leading-[12px]">75%</div>
              </div>
            </div>
            <b className="relative text-gray-400">Action, Adventure, Drama</b>
          </div>
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <div className="relative w-[250px] h-[370px]">
              <img
                className="absolute top-[0px] left-[0px] w-[250px] h-[370px] object-cover"
                alt=""
                src="/undefined18.png"
              />
              <div className="absolute top-[15.58px] left-[16px] w-[218px] h-[29.21px]">
                <div className="absolute top-[3.61px] left-[0px] rounded-xl bg-whitesmoke [backdrop-filter:blur(2px)] hidden flex-row py-[3px] px-2 items-start justify-start">
                  <b className="relative">TV SERIES</b>
                </div>
                <img
                  className="absolute top-[0px] left-[188px] w-[30px] h-[29.21px] object-cover"
                  alt=""
                  src="/undefined19.png"
                />
              </div>
            </div>
            <b className="relative text-gray-400">USA, 2021</b>
            <b className="relative text-lg inline-block w-[250px]">
              No Time To Die
            </b>
            <div className="w-[250px] flex flex-row items-start justify-between">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[35px] h-[17px] object-cover"
                  alt=""
                  src="/undefined3.png"
                />
                <div className="relative leading-[12px]">76.0 / 100</div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-4 h-[17px] object-cover"
                  alt=""
                  src="/undefined4.png"
                />
                <div className="relative leading-[12px]">68%</div>
              </div>
            </div>
            <b className="relative text-gray-400">
              Action, Adventure, Thriller
            </b>
          </div>
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <div className="relative w-[250px] h-[370px]">
              <img
                className="absolute top-[0px] left-[0px] w-[250px] h-[370px] object-cover"
                alt=""
                src="/undefined20.png"
              />
              <div className="absolute top-[15.58px] left-[16px] w-[218px] h-[29.21px]">
                <div className="absolute top-[3.61px] left-[0px] rounded-xl bg-whitesmoke [backdrop-filter:blur(2px)] hidden flex-row py-[3px] px-2 items-start justify-start">
                  <b className="relative">TV SERIES</b>
                </div>
                <img
                  className="absolute top-[0px] left-[188px] w-[30px] h-[29.21px] object-cover"
                  alt=""
                  src="/undefined21.png"
                />
              </div>
            </div>
            <b className="relative text-gray-400">USA, 2021</b>
            <b className="relative text-lg inline-block w-[250px]">
              Shang-Chi and the Legend of the Ten Rings
            </b>
            <div className="w-[250px] flex flex-row items-start justify-between">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[35px] h-[17px] object-cover"
                  alt=""
                  src="/undefined3.png"
                />
                <div className="relative leading-[12px]">79.0 / 100</div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-4 h-[17px] object-cover"
                  alt=""
                  src="/undefined4.png"
                />
                <div className="relative leading-[12px]">71%</div>
              </div>
            </div>
            <b className="relative text-gray-400">Action, Adventure, Fantasy</b>
          </div>
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <div className="relative w-[250px] h-[370px]">
              <img
                className="absolute top-[0px] left-[0px] w-[250px] h-[370px] object-cover"
                alt=""
                src="/undefined22.png"
              />
              <div className="absolute top-[15.58px] left-[16px] w-[218px] h-[29.21px]">
                <div className="absolute top-[3.61px] left-[0px] rounded-xl bg-whitesmoke [backdrop-filter:blur(2px)] hidden flex-row py-[3px] px-2 items-start justify-start">
                  <b className="relative">TV SERIES</b>
                </div>
                <img
                  className="absolute top-[0px] left-[188px] w-[30px] h-[29.21px] object-cover"
                  alt=""
                  src="/undefined23.png"
                />
              </div>
            </div>
            <b className="relative text-gray-400">USA, 2021</b>
            <b className="relative text-lg inline-block w-[250px]">
              Don't Breathe 2
            </b>
            <div className="w-[250px] flex flex-row items-start justify-between">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[35px] h-[17px] object-cover"
                  alt=""
                  src="/undefined3.png"
                />
                <div className="relative leading-[12px]">61.0 / 100</div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-4 h-[17px] object-cover"
                  alt=""
                  src="/undefined4.png"
                />
                <div className="relative leading-[12px]">46%</div>
              </div>
            </div>
            <b className="relative text-gray-400">{`Action, Drama, Horror `}</b>
          </div>
        </div>
        <img
          className="absolute top-[296px] left-[0px] w-12 h-12 overflow-hidden object-cover"
          alt=""
          src="/undefined15.png"
        />
      </div>
      <div className="absolute top-[1562px] left-[34px] w-[1368px] h-[917px]">
        <div className="absolute top-[404px] left-[66px] flex flex-row items-start justify-start gap-[80px]">
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <div className="relative w-[250px] h-[370px]">
              <img
                className="absolute top-[0px] left-[0px] w-[250px] h-[370px] object-cover"
                alt=""
                src="/undefined16.png"
              />
              <div className="absolute top-[15.58px] left-[16px] w-[218px] h-[29.21px]">
                <div className="absolute top-[3.61px] left-[0px] rounded-xl bg-whitesmoke [backdrop-filter:blur(2px)] hidden flex-row py-[3px] px-2 items-start justify-start">
                  <b className="relative">TV SERIES</b>
                </div>
                <img
                  className="absolute top-[0px] left-[188px] w-[30px] h-[29.21px] object-cover"
                  alt=""
                  src="/undefined17.png"
                />
              </div>
            </div>
            <b className="relative text-gray-400">USA, 2021</b>
            <b className="relative text-lg inline-block w-[250px]">Dune</b>
            <div className="w-[250px] flex flex-row items-start justify-between">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[35px] h-[17px] object-cover"
                  alt=""
                  src="/undefined3.png"
                />
                <div className="relative leading-[12px]">84.0 / 100</div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-4 h-[17px] object-cover"
                  alt=""
                  src="/undefined4.png"
                />
                <div className="relative leading-[12px]">75%</div>
              </div>
            </div>
            <b className="relative text-gray-400">Action, Adventure, Drama</b>
          </div>
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <div className="relative w-[250px] h-[370px]">
              <img
                className="absolute top-[0px] left-[0px] w-[250px] h-[370px] object-cover"
                alt=""
                src="/undefined18.png"
              />
              <div className="absolute top-[15.58px] left-[16px] w-[218px] h-[29.21px]">
                <div className="absolute top-[3.61px] left-[0px] rounded-xl bg-whitesmoke [backdrop-filter:blur(2px)] hidden flex-row py-[3px] px-2 items-start justify-start">
                  <b className="relative">TV SERIES</b>
                </div>
                <img
                  className="absolute top-[0px] left-[188px] w-[30px] h-[29.21px] object-cover"
                  alt=""
                  src="/undefined19.png"
                />
              </div>
            </div>
            <b className="relative text-gray-400">USA, 2021</b>
            <b className="relative text-lg inline-block w-[250px]">
              No Time To Die
            </b>
            <div className="w-[250px] flex flex-row items-start justify-between">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[35px] h-[17px] object-cover"
                  alt=""
                  src="/undefined3.png"
                />
                <div className="relative leading-[12px]">76.0 / 100</div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-4 h-[17px] object-cover"
                  alt=""
                  src="/undefined4.png"
                />
                <div className="relative leading-[12px]">68%</div>
              </div>
            </div>
            <b className="relative text-gray-400">
              Action, Adventure, Thriller
            </b>
          </div>
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <div className="relative w-[250px] h-[370px]">
              <img
                className="absolute top-[0px] left-[0px] w-[250px] h-[370px] object-cover"
                alt=""
                src="/undefined20.png"
              />
              <div className="absolute top-[15.58px] left-[16px] w-[218px] h-[29.21px]">
                <div className="absolute top-[3.61px] left-[0px] rounded-xl bg-whitesmoke [backdrop-filter:blur(2px)] hidden flex-row py-[3px] px-2 items-start justify-start">
                  <b className="relative">TV SERIES</b>
                </div>
                <img
                  className="absolute top-[0px] left-[188px] w-[30px] h-[29.21px] object-cover"
                  alt=""
                  src="/undefined21.png"
                />
              </div>
            </div>
            <b className="relative text-gray-400">USA, 2021</b>
            <b className="relative text-lg inline-block w-[250px]">
              Shang-Chi and the Legend of the Ten Rings
            </b>
            <div className="w-[250px] flex flex-row items-start justify-between">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[35px] h-[17px] object-cover"
                  alt=""
                  src="/undefined3.png"
                />
                <div className="relative leading-[12px]">79.0 / 100</div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-4 h-[17px] object-cover"
                  alt=""
                  src="/undefined4.png"
                />
                <div className="relative leading-[12px]">71%</div>
              </div>
            </div>
            <b className="relative text-gray-400">Action, Adventure, Fantasy</b>
          </div>
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <div className="relative w-[250px] h-[370px]">
              <img
                className="absolute top-[0px] left-[0px] w-[250px] h-[370px] object-cover"
                alt=""
                src="/undefined22.png"
              />
              <div className="absolute top-[15.58px] left-[16px] w-[218px] h-[29.21px]">
                <div className="absolute top-[3.61px] left-[0px] rounded-xl bg-whitesmoke [backdrop-filter:blur(2px)] hidden flex-row py-[3px] px-2 items-start justify-start">
                  <b className="relative">TV SERIES</b>
                </div>
                <img
                  className="absolute top-[0px] left-[188px] w-[30px] h-[29.21px] object-cover"
                  alt=""
                  src="/undefined23.png"
                />
              </div>
            </div>
            <b className="relative text-gray-400">USA, 2021</b>
            <b className="relative text-lg inline-block w-[250px]">
              Don't Breathe 2
            </b>
            <div className="w-[250px] flex flex-row items-start justify-between">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[35px] h-[17px] object-cover"
                  alt=""
                  src="/undefined3.png"
                />
                <div className="relative leading-[12px]">61.0 / 100</div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-4 h-[17px] object-cover"
                  alt=""
                  src="/undefined4.png"
                />
                <div className="relative leading-[12px]">46%</div>
              </div>
            </div>
            <b className="relative text-gray-400">{`Action, Drama, Horror `}</b>
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[1320px] w-12 h-12 overflow-hidden object-cover"
          alt=""
          src="/undefined15.png"
        />
        <img
          className="absolute top-[700px] left-[0px] w-12 h-12 overflow-hidden object-cover"
          alt=""
          src="/undefined15.png"
        />
      </div>
      <div className="absolute top-[2626px] left-[467px] flex flex-col items-center justify-start gap-[36px] text-lg">
        <div className="flex flex-row items-center justify-start gap-[48px]">
          <img
            className="relative w-6 h-[27.43px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/undefined24.png"
          />
          <img
            className="relative w-6 h-[27.43px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/undefined25.png"
          />
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/undefined26.png"
          />
          <img
            className="relative w-6 h-[21.33px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/undefined27.png"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[48px]">
          <b className="relative">Conditions of Use</b>
          <b className="relative">{`Privacy & Policy`}</b>
          <b className="relative">Press Room</b>
        </div>
        <b className="relative text-gray-500">{`© 2021 MovieBox by Adriana Eka Prayudha  `}</b>
      </div>
    </div>
  );
};

export default HomepageDesktop;
