import React, { useState, useEffect } from "react";
import "./style.css";

export const Screen = () => {
  const [isVisibleFirst, setIsVisibleFirst] = useState(false);
  const [isVisibleSecond, setIsVisibleSecond] = useState(false);
  const [isVisibleThird, setIsVisibleThird] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const textBlockFirst = document.getElementById("text-animated");
      const textBlockSecond = document.getElementById("text-animated-second");
      const textBlockThird = document.getElementById("text-animated-third");

      if (textBlockFirst) {
        const rect = textBlockFirst.getBoundingClientRect();
        setIsVisibleFirst(rect.top < window.innerHeight && rect.bottom >= 0);
      }

      if (textBlockSecond) {
        const rect = textBlockSecond.getBoundingClientRect();
        setIsVisibleSecond(rect.top < window.innerHeight && rect.bottom >= 0);
      }

      if (textBlockThird) {
        const rect = textBlockThird.getBoundingClientRect();
        setIsVisibleThird(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#210e29] flex flex-row justify-center w-full">
      <div className="bg-[#210e29] w-full h-[5172px] relative">
        <div className="absolute w-full h-[980px] top-0 left-0">
          <img
            className="absolute w-full h-[975px] top-0 left-0 object-cover"
            alt="Element in the upper"
            src="/img/177742-in-the-upper-left-corner-the-edge-of-some-purple-xl-102.png"
          />
          <div className="absolute w-[838px] h-[296px] top-[379px] left-[70px]">
            <div className="absolute w-[686px] h-[48px] top-[248px] left-0">
              <div className="relative w-px h-[48px] left-[486px] border-t [border-top-style:solid] border-l [border-left-style:solid] border-[#30363d]" />
            </div>
            <p className="absolute w-[834px] h-[87px] top-[127px] left-0 [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#8b949e] text-[32px] tracking-[-0.32px] leading-[44px]">
              Свободный доступ к бескрайним возможностям. Пространство для
              обмена творческим потенциалом.
            </p>
            <div className="absolute w-[689px] h-[93px] top-0 left-0 [font-family:'Helvetica-Bold',Helvetica] font-bold text-[#ffffff] text-[96px] tracking-[-0.96px] leading-[100px] whitespace-nowrap">
              Git Learn Swap
            </div>
          </div>
          <div className="absolute w-[475px] h-[56px] top-[623px] left-[67px]">
            <div className="flex w-[468px] items-center justify-center relative top-[4px] left-[3px]">
              <div className="relative w-[295.61px] h-[48px] bg-[#ffffff] rounded-[6px_0px_0px_6px] border border-solid border-[#d0d7de] shadow-[inset_0px_1px_0px_#d0d7de33]">
                <input
                  type="email"
                  className="w-[100%] h-[100%] p-[13px] rounded-[6px_0px_0px_6px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#6e7781] text-[16px] tracking-[0] leading-[normal] border-none outline-none"
                  placeholder="Email address"
                />
              </div>

              <button
                type="button"
                className="relative w-[172px] h-[48px] bg-[#6e40c9] rounded-[0px_6px_6px_0px] border-none outline-none cursor-pointer transition duration-300 ease-in-out hover:bg-purple-700"
              >
                <div className="absolute h-[16px] top-[15px] left-[25px] [font-family:'Helvetica-Bold',Helvetica] font-bold text-[#ffffff] text-[16px] text-center tracking-[0] leading-[16px] whitespace-nowrap">
                  Sign up for GLS
                </div>
              </button>
            </div>
          </div>
          <div className="absolute w-[187px] h-[55px] top-[624px] left-[572px]">
            <div className="h-[48px] gap-[10px] pl-[30px] pr-[24px] py-[16px] relative top-[3px] left-[4px] bg-[#ffffff01] rounded-[6px] overflow-hidden shadow-[inset_0px_0px_0px_1px_#bc8cff] inline-flex items-start cursor-pointer transition-all duration-300 hover:bg-[#6e40c9] ">
              <div className="relative w-[96px] h-[20px] mt-[-1.00px] mb-[-3.00px] [font-family:'Helvetica-Bold',Helvetica] font-bold text-[#ffffff] text-[16px] text-center tracking-[0] leading-[16px] ">
                Log in using
              </div>
              <img
                className="relative w-[20px] h-[20px] mb-[-4.00px]"
                alt="Group"
                src="/img/group-1000001747.svg"
              />
            </div>
          </div>

          <img
            className="absolute w-full h-[168px] top-[812px] left-0 object-cover"
            alt="Group"
            src="/img/group-11-1.png"
          />
        </div>
        <p
          id="text-animated"
          className={`absolute w-[1066px] h-[221px] top-[1080px] left-[70px] ${
            isVisibleFirst ? "fly-in-animation" : ""
          } [font-family:'Helvetica-Regular',Helvetica] font-normal text-transparent text-[48px] tracking-[-1.44px] leading-[52px]`}
        >
          <span className="text-[#7ee787]">
            Ускорьте ваше обучение по практически любой специальности.{" "}
          </span>
          <span className="text-[#ffffff]">
            Наша платформа стимулирует инновации с помощью технологий, которые
            помогут Вам в этом.
          </span>
        </p>
        <div className="grid place-items-center h-screen">
          <div className="absolute w-[1112px] h-[835px] top-[1421px]">
            <div className="absolute w-[1112px] h-[835px]">
              <div className="absolute w-[1080px] h-[610px] top-0 left-0 bg-[#451680b2] rounded-[8px] overflow-hidden border border-solid border-[#30363d] shadow-[0px_2px_2px_#ee2cff0f,0px_4px_4px_#ee2cff14,0px_10px_8px_#ee2cff1a,0px_15px_15px_#ee2cff1f,0px_-17px_30px_#ee2cff24,0px_-12px_65px_#ee2cff2e,0px_0px_0px_1px_#ee2bff80]">
                <div className="relative h-[610px]">
                  <div className="absolute h-[32px] top-[288px] left-[295px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#ffffff] text-[24px] tracking-[0] leading-[32px] whitespace-nowrap">
                    Пример интерфейса готового репозитория
                  </div>
                  <img
                    className="absolute w-[1080px] h-[610px] top-0 left-0 object-cover"
                    alt="Image"
                    src="/img/image-2.png"
                  />
                </div>
              </div>
              <div className="absolute w-[373px] h-[184px] top-[651px] left-[590px] bg-[#361146b2] rounded-[6px] overflow-hidden shadow-[0px_2px_2px_#00000008,0px_4px_4px_#0000000a,0px_10px_8px_#0000000d,0px_15px_15px_#0000000f,0px_30px_30px_#00000012]">
                <div className="relative w-[375px] h-[184px]">
                  <div className="absolute w-[373px] h-[184px] top-0 left-0 bg-[#ffffff01] rounded-[6px] shadow-[inset_0px_1px_1px_#ffffff1a]" />
                  <img
                    className="top-[36px] absolute w-[373px] h-px left-0 object-cover"
                    alt="Line"
                    src="/img/line-2.svg"
                  />
                  <img
                    className="top-[73px] absolute w-[373px] h-px left-0 object-cover"
                    alt="Line"
                    src="/img/line-2.svg"
                  />
                  <img
                    className="top-[110px] absolute w-[373px] h-px left-0 object-cover"
                    alt="Line"
                    src="/img/line-4.svg"
                  />
                  <img
                    className="top-[147px] absolute w-[373px] h-px left-0 object-cover"
                    alt="Line"
                    src="/img/line-4.svg"
                  />
                  <div className="absolute w-[152px] h-[22px] top-[43px] left-[21px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#d2d2d2] text-[16px] tracking-[0] leading-[32px] whitespace-nowrap">
                    Загрузить файл
                  </div>
                  <div className="absolute w-[152px] h-[22px] top-[80px] left-[21px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#d2d2d2] text-[16px] tracking-[0] leading-[32px] whitespace-nowrap">
                    Загрузить папку
                  </div>
                  <div className="absolute w-[152px] h-[22px] top-[115px] left-[21px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#d2d2d2] text-[16px] tracking-[0] leading-[32px] whitespace-nowrap">
                    Ссылка на файл
                  </div>
                  <div className="absolute w-[242px] h-[22px] top-[152px] left-[21px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#d2d2d2] text-[16px] tracking-[0] leading-[32px] whitespace-nowrap">
                    Ссылка на репозиторий GitHub
                  </div>
                  <div className="absolute w-[375px] h-[37px] top-0 left-0 bg-[#451681]" />
                  <div className="absolute w-[120px] h-[22px] top-[7px] left-[21px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#d2d2d2] text-[16px] tracking-[0] leading-[32px] whitespace-nowrap">
                    Новый файл
                  </div>
                </div>
              </div>
              <img
                className="absolute w-[360px] h-[245px] top-[479px] left-[752px]"
                alt="Frame"
                src="/img/frame.png"
              />
            </div>
            <p className="absolute w-[496px] h-[171px] top-[656px] left-0 [font-family:'Helvetica-Regular',Helvetica] font-normal text-transparent text-[24px] tracking-[0] leading-[32px]">
              <span className="text-[#7ee787]">GitLearnSwap</span>
              <span className="text-[#ffffff]">
                {" "}
                позволяет в режиме реального времени создавать базовые проекты
                любой сложности, от обычных текстовых файлов, до программных
                решений.
              </span>
            </p>
          </div>
        </div>

        <p
          id="text-animated-second"
          className={`absolute w-[1075px] h-[325px] top-[2385px] left-[70px] ${
            isVisibleSecond ? "fly-in-animation" : ""
          } [font-family:'Helvetica-Regular',Helvetica] font-normal text-transparent text-[48px] tracking-[-1.44px] leading-[52px]`}
        >
          <span className="text-[#ffa28b]">Ускорьте совместную работу. </span>
          <span className="text-[#ffffff]">
            Мы предоставляем неограниченное количество репозиториев и большое
            сообщество с открытыми для всех проектами, чтобы Вы и Ваша команда
            могла работать более эффективно.
          </span>
        </p>

        <div className="grid place-items-center h-screen">
          <div className="absolute w-[1112px] h-[986px] top-[2830px]">
            <div className="absolute w-[1080px] h-[610px] top-0 left-0 bg-[#451680b2] rounded-[8px] overflow-hidden border border-solid border-[#30363d] shadow-[0px_2px_2px_#ee2cff0f,0px_4px_4px_#ee2cff14,0px_10px_8px_#ee2cff1a,0px_15px_15px_#ee2cff1f,0px_-17px_30px_#ee2cff24,0px_-12px_65px_#ee2cff2e,0px_0px_0px_1px_#ee2bff80]">
              <div className="relative h-[610px]">
                <div className="absolute h-[32px] top-[288px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#ffffff] text-[24px] tracking-[0] leading-[32px] whitespace-nowrap">
                  Пример интерфейса готового репозитория
                </div>
                <img
                  className="absolute w-[1080px] h-[610px] top-0 left-0 object-cover"
                  alt="Image"
                  src="/img/image-3.png"
                />
              </div>
            </div>
            <div className="absolute w-[1185px] h-[376px] top-[610px] left-0">
              <p className="absolute w-[486px] h-[171px] top-[86px] left-0 [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#ffffff] text-[32px] tracking-[0] leading-[32px]">
                Мы предоставляем гибкие инструменты управления проектами,
                которые адаптируются к вашей команде.
              </p>
            </div>
            <div className="flex flex-col w-[478px] h-[422px] items-start gap-[10px] p-[29px] absolute top-[493px] left-[602px] bg-[#210e29] rounded-[13px] overflow-hidden shadow-[0px_2px_2px_#ee2cff0f,0px_4px_4px_#ee2cff14,0px_-2px_8px_#ee2cff1a,0px_2px_15px_#ee2cff1f,0px_2px_30px_#ee2cff24,0px_0px_13.8px_#ee2cff2e,0px_0px_0px_1px_#ee2cff80]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Helvetica-Bold',Helvetica] font-bold text-[#ffffff] text-[24px] text-center tracking-[0] leading-[32px] whitespace-nowrap">
                Название комментария
              </div>
              <div className="relative w-[420px] h-px bg-white opacity-25" />
              <div className="flex w-[420px] h-[281px] items-start justify-between relative">
                <div className="relative w-[50px] h-[50px] bg-[#a06be5] rounded-[25px] border-[3px] border-solid border-[#451681]" />
                <div className="flex flex-col w-[341px] h-[281px] items-start gap-[129px] p-[10px] relative bg-[#371844] rounded-[9px] overflow-hidden">
                  <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-start gap-[20px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Helvetica-Bold',Helvetica] font-bold text-[#ffffff] text-[15px] text-center tracking-[0] leading-[32px] whitespace-nowrap">
                        Логин
                      </div>
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Helvetica-Light',Helvetica] font-light text-[#ffffff] text-[12px] text-center tracking-[0] leading-[32px] whitespace-nowrap">
                        Оставлен 8 минут назад
                      </div>
                    </div>
                    <div className="relative w-[321px] h-px bg-white opacity-25" />
                    <div className="relative w-fit [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#ffffff] text-[14px] text-center tracking-[0] leading-[32px] whitespace-nowrap">
                      Текст комментария
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
                    <div className="relative w-[321px] h-px bg-white opacity-25" />
                    <div className="flex w-[321px] h-[35px] items-center justify-between px-[10px] py-[16px] relative bg-[#521b6a] rounded-[8px]">
                      <div className="relative w-fit mt-[-8.00px] mb-[-6.00px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#ffffff] text-[12px] tracking-[0] leading-[normal]">
                        Ответить
                      </div>
                      <img
                        className="relative w-[17px] h-[14px] mt-[-5.50px] mb-[-5.50px]"
                        alt="Vector"
                        src="/img/vector-2.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-[1303px] h-[421px] top-[3935px] left-[70px]">
          <p
            className={`w-[1190px] h-[88px] top-[94px] ${
              isVisibleThird ? "fly-in-animation-1" : ""
            } leading-[68px] absolute left-0 [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#ffffff] text-[48px] tracking-[-1.92px]`}
          >
            3 тысячи репозиториев на платформе
          </p>
          <p
            className={`w-[1295px] h-[88px] top-[182px] ${
              isVisibleThird ? "fly-in-animation-2" : ""
            } leading-[68px] absolute left-0 [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#ffffff] text-[48px] tracking-[-1.92px]`}
          >
            10 тысяч файлов суммарно в репозиториях
          </p>
          <p
            className={`w-[1295px] h-[151px] top-[270px] ${
              isVisibleThird ? "fly-in-animation-3" : ""
            } leading-[37.5px] absolute left-0 [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#ffffff] text-[48px] tracking-[-1.92px]`}
          >
            <span className="[font-family:'Helvetica-Regular',Helvetica] font-normal text-[#ffffff] text-[48px] tracking-[-1.92px] leading-[37.5px]">
              900 зарегистрированных пользователей
              <br />
            </span>
            <span className="text-[32px]">из них 56 - преподаватели</span>
          </p>
          <div
            id="text-animated-third"
            className={`absolute h-[68px] top-0 left-0 ${
              isVisibleThird ? "fly-in-animation" : ""
            } [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#939aff] text-[48px] tracking-[-1.92px] leading-[68px] whitespace-nowrap`}
          >
            Статистика за все время
          </div>
        </div>

        <div className="grid place-items-center h-screen">
          <div className="absolute w-[1298px] h-[388px] top-[4511px]">
            <p className="absolute w-[636px] h-[46px] top-[332px] left-[328px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#8b949e] text-[20px] text-center tracking-[-0.32px] leading-[19px]">
              Свободный доступ к бескрайним возможностям. Пространство для
              обмена творческим потенциалом.
            </p>
            <p className="absolute w-[818px] h-[277px] -top-px left-[237px] [font-family:'Helvetica-Bold',Helvetica] font-bold text-[#ffffff] text-[55px] text-center tracking-[-1.92px] leading-[68px]">
              GitLearnSwap -<br />
              место, где любой желающий может узнать что-то новое, и поделится
              этим со всеми
            </p>
          </div>
        </div>

        <div className="h-[134px] top-[5038px] absolute w-full left-0">
          <div className="flex flex-wrap items-center justify-between gap-[385px_39px] px-[70px] py-0 top-[43px] absolute w-full left-0">
            <img
              className="relative w-[57px] h-[47px]"
              alt="Source image"
              src="/img/source-image.png"
            />
            <p className="relative w-[311.81px] h-[14.78px] [font-family:'Helvetica-Light',Helvetica] font-light text-white text-[14px] text-center tracking-[0] leading-[14px] whitespace-nowrap">
              © 2023 GLS. Git Learn Swap.
            </p>
            <div className="relative w-[161px] h-[41px]">
              <div className="absolute w-[71px] h-[41px] top-0 left-[90px] rounded-[19.5px] border-[1.5px] border-solid border-white">
                <img
                  className="absolute w-[21px] h-[19px] top-[8px] left-[24px]"
                  alt="Vector"
                  src="/img/vector-1.png"
                />
              </div>
              <div className="absolute w-[71px] h-[41px] top-0 left-0 rounded-[19.5px] border-[1.5px] border-solid border-white">
                <img
                  className="absolute w-[21px] h-[13px] top-[12px] left-[22px]"
                  alt="Vector"
                  src="/img/vector.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-full h-[3px] top-0 left-0 bg-white opacity-25" />
        </div>
      </div>
    </div>
  );
};
