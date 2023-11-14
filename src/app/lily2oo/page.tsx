import { css } from "../../../styled-system/css";
import Image from "next/image";
import { flex } from "../../../styled-system/patterns";
import { relative } from "path";

export default function Lily2oo() {
  return (
    <div
      className={css({
        width: "100%",
        minWidth:"",
        height: "100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        margin:{base:"50px auto",sm:"0"},
        _after: {
          content: '""',
          width: "100%",
          height: "50%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          bg: "#0A0F0E",
        },
      })}
    >
      <section
        className={css({
          position: "relative",
          zIndex: 1,
        })}
      >
        <header
          className={css({
            display: "flex",
            justifyContent:"flex-end",
            gap: "10px",
            width:"90%",
            margin:"0 auto 40px"
          })}
        >
          <h2
            className={css({
              color: "#FCFFDE",
              fontFamily: "brandonGrotesque",
              fontWeight: 900,
              fontSize:16,
            })}
          >
            Patch8
          </h2>
          <div
            className={css({
              display: "flex",
              gap: "10px",
            })}
          >
            <Image src="/x.svg" alt="x icon" width={50} height={50} />
            <Image
              src="/instagram.svg"
              alt="instagram icon"
              width={50}
              height={50}
            />
          </div>
        </header>
        <div>
          <div
            className={css({
              position: "relative",
              width: "100vw",
              height:"120vw"
            })}
          >
            <Image
              src="/lily2oo.webp"
              alt="instagram icon"
              fill
            />
            <h1
              className={css({
                fontFamily: "brandonGrotesque",
                fontWeight: 900,
                fontSize: 60,
                color: "#FCFFDE",
                position: "absolute",
                bottom: 0,
                left: "5%",
              })}
            >
              Lily2oo
            </h1>
          </div>
          <div className={css({
            width:"90%",
            margin:"0 auto",
          })}>
            <p
              className={css({
                color: "#0A0F0E",
                fontSize:14,
                margin:"24px 0"
              })}
            >
              デザイン、プログラミング、映像、企画、コピーなど、クリエイティブ全般を学び、分野の枠に囚われずに作品を制作している。
            </p>
            <div
              className={css({
                display: "flex",
                gap: "10px",
              })}
            >
              <Image src="/x.svg" alt="x icon" width={50} height={50} />
              <Image
                src="/instagram.svg"
                alt="instagram icon"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
