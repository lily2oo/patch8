import { css } from "../../../styled-system/css";
import Image from "next/image";

const member = {
  name: "chaewon",
  link: "/patch8/chaewon.webp",
  desc: "服すきなグラフィックデザインしている人",
  insta: "https://instagram.com/oddbibi_8_?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr",
};

export default function Member() {
  return (
    <div
      className={css({
        width: "100%",
        minWidth: "",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: { base: "50px auto", sm: "0" },
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
            justifyContent: "flex-end",
            gap: "10px",
            width: "90%",
            margin: "0 auto 24px",
          })}
        >
          <h2
            className={css({
              color: "#FCFFDE",
              fontFamily: "brandonGrotesque",
              fontWeight: 900,
              fontSize: 16,
              letterSpacing: "-0.02em",
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
            <a target="_blank" href="https://twitter.com/Patch8_ixd">
              <Image src="/x.svg" alt="x icon" width={50} height={50} />
            </a>
            <a target="_blank" href="https://www.instagram.com/patch8.ixd/">
              <Image
                src="/instagram.svg"
                alt="instagram icon"
                width={50}
                height={50}
              />
            </a>
          </div>
        </header>
        <div>
          <div
            className={css({
              position: "relative",
              width: "100vw",
              height: "120vw",
            })}
          >
            <Image src={member.link} alt="instagram icon" fill />
            <h1
              className={css({
                fontFamily:
                  '"brandonGrotesque","游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", ',
                fontWeight: 900,
                // fontSize: 60,
                fontSize: 42,
                color: "#FCFFDE",
                position: "absolute",
                bottom: 0,
                left: "5%",
                letterSpacing: "-0.01em",
                whiteSpace: "pre-wrap",
              })}
            >
              {member.name}
            </h1>
          </div>
          <div
            className={css({
              width: "90%",
              margin: "0 auto",
            })}
          >
            <div
              className={css({
                display: "flex",
                gap: "10px",
                // marginTop:"16px",
                marginTop: "16px",
              })}
            >
              <a target="_blank" href={member.insta}>
                <Image
                  src="/instagram.svg"
                  alt="instagram icon"
                  width={50}
                  height={50}
                />
              </a>
            </div>
            <p
              className={css({
                color: "#0A0F0E",
                fontSize: 14,
                marginTop: "16px",
                letterSpacing: "-0.02em",
              })}
            >
                {member.desc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
